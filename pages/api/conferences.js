const faunadb = require("faunadb"),
  q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.NEXT_PUBLIC_FAUNA_KEY,
});
import { getSession } from "next-auth/client";

export default async (req, res) => {
  const { title, url } = req.body;
  if (req.method === "GET") {
    const conf = await client.query(
      q.Map(
        q.Paginate(q.Match(q.Index("all_meets"))),
        q.Lambda("X", q.Get(q.Var("X")))
      )
    );
    res.status(200).json(conf);
  } else {
    try {
      const session = await getSession({ req });
      const conf = await client.query(
        q.Create(q.Collection("conferences"), {
          data: {
            title: title,
            url: url,
            owner: session.user.email,
          },
        })
      );
      res.status(200).json(conf);
    } catch (error) {
      res.status(400).json(error);
    }
  }
};

const faunadb = require("faunadb"),
  q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.NEXT_PUBLIC_FAUNA_KEY,
});

export default async (req, res) => {
  const books = await client.query(
    q.Map(
      q.Paginate(q.Match(q.Index("all_books"))),
      q.Lambda("X", q.Get(q.Var("X")))
    )
  );

  res.status(200).json(books);
};

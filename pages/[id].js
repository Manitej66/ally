import Iframe from "react-iframe";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default function Gameplay() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <Iframe
        url={`https://www.cbc.ca/kids/games/play/${id}`}
        className="iframe"
      />
    </Layout>
  );
}

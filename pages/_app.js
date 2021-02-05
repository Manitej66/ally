import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import { Provider } from "next-auth/client";
import "nprogress/nprogress.css";
import dynamic from "next/dynamic";

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgessBar");
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <TopProgressBar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

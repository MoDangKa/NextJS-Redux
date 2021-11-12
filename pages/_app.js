// import "../styles/globals.css";
import { wrapper } from "../store";
import "../styles/config.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);

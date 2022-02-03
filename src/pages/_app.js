import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

import styles from "../styles/MyApp.module.css";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </div>
  );
}

export default MyApp;

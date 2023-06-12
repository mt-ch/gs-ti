import "@/assets/styles/index.scss";
import Layout from "@/components/layout";

export default function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <Component {...pageProps} key={router.asPath} />
    </Layout>
  );
}

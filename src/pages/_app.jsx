import { Manrope } from "next/font/google";
import "@/assets/styles/index.scss";
import Layout from "@/components/layout";

const manrope = Manrope({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <main className={manrope.className}>
        <Component {...pageProps} key={router.asPath} />
      </main>
    </Layout>
  );
}

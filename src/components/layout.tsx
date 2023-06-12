import Head from "next/head";
// Components
import Navbar from "@/components/page/shell/navbar";
import Footer from "@/components/page/shell/footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className={"relative bg-white"}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

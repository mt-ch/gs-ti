import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";

const HomePage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirecting to products page for demo purposes
    router.replace("/products");
  }, []);

  return null;
};

export async function getServerSideProps() {
  return {
    props: {}, 
  };
}

export default HomePage;

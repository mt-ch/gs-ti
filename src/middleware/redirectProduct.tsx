import React, { useEffect } from "react";
import { useRouter } from "next/router";

const RedirectMiddleware = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired route
    router.push("/products");
  }, [history]);

  return null;
};

export default RedirectMiddleware;

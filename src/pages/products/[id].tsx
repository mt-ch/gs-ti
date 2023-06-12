import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { getProductById } from "@/utils/api/products/products";
import { ProductDetailPageProps } from "@/utils/pages/products";

// Conponents
import ProductInfomationHeader from "@/components/page/product/detail/infomation/header";
import ProductInfomationDescription from "@/components/page/product/detail/infomation/description";
import ProductDetailMedia from "@/components/page/product/detail/media";
import ProductDetailActions from "@/components/page/product/detail/actions/index";
import ProductDetailRelated from "@/components/page/product/detail/related";
import PromoShipping from "@/components/page/promo/shipping";

const ProductDetailPage: NextPage<ProductDetailPageProps> = ({ product, recommended }) => {
  if (!product) {
    return null;
  }

  return (
    <div className="flex flex-col gap-10 lg:container pb-8 lg:py-8">
      <div className="grid grid-cols-1 lg:auto-rows-min lg:grid-cols-2 gap-y-8 lg:gap-y-0 lg:gap-x-16">
        {/* Image gallery */}
        <div className="lg:order-2">
          <ProductDetailMedia media={product.media} />
        </div>

        {/* Info */}
        <div className="container lg:px-0 lg:mx-0 flex flex-col gap-6">
          <ProductInfomationHeader product={product} />
          {/* Actions */}
          <ProductDetailActions product={product} />
          <ProductInfomationDescription productDesciption={product.description} />
        </div>
      </div>
      <PromoShipping />
      {/* Related products */}
      <div className="container lg:px-0 lg:mx-0">
        <ProductDetailRelated products={recommended} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ProductDetailPageProps> = async ({ params }) => {
  const { id } = params as any;
  const data = await getProductById(Number(id));

  if (!data?.product) {
    return {
      notFound: true,
    };
  }

  return {
    // props: { data.product, data?.recommended },
    props: { product: data.product, recommended: data?.recommended },
  };
};

export default ProductDetailPage;

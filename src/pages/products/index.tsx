import { NextPage } from "next";
// Stores
import { UseProductsStore } from "@/stores/products";
// Utils
import { getAllProducts } from "@/utils/api/products/products";
// Types
import { Product } from "@/types/product";
import { ProductsPageProps } from "@/utils/pages/products";
// Components
import ProductCard from "@/components/page/product/shared";
import PromoShipping from "@/components/page/promo/shipping";
import ProductsHeader from "@/components/page/products/header";
import ProductsFooter from "@/components/page/products/footer";

const ProductsPage: NextPage<ProductsPageProps> = ({ products }) => {
  const { visibleProducts } = UseProductsStore();
  const headerData = {
    heading: "All Products",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facilis assumenda natus at nobis, dolores voluptatem tempora, id a unde voluptatum beatae consequuntur temporibus, labore voluptate error eius repellat non!",
  };
  return (
    <div>
      <div className="bg-white">
        <div className="container py-8 flex flex-col gap-6">
          {/* Page Header */}
          <ProductsHeader heading={headerData.heading} text={headerData.text} numberOfResults={products.length} isLoading={false} />
          {/* Promo */}
          <PromoShipping />
          {/* Products */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4 xl:gap-x-8">
            {products.slice(0, visibleProducts).map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {/* Footer */}
          <ProductsFooter visibleResults={visibleProducts} numberOfResults={products.length} />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const products = await getAllProducts();
  return {
    props: { products },
  };
}

export default ProductsPage;

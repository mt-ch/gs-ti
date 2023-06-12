import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const data = [{ name: "Free UK delivery on orders over £85", icon: ShoppingCartIcon }];

export const PromoShipping: React.FC = () => {
  return (
    <section aria-labelledby="promo-heading">
      <h2 id="promo-heading" className="sr-only">
        Promo
      </h2>

      <dl>
        {data.map((promo) => (
          <div key={promo.name} className=" bg-gray-100 px-6 py-4">
            <dt className="flex gap-4 items-center justify-center">
              <promo.icon className="h-5 w-5 flex-shrink-0 text-gray-900" aria-hidden="true" />
              <span className="text-sm font-medium text-gray-900">{promo.name}</span>
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default PromoShipping;

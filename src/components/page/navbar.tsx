import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
// Utils
import classNames from "@/utils/useClassNames";

const navigation = [{ name: "Clothing", href: "/products/" }];

const Navbar: React.FC = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container">
        <div className="relative flex h-16 items-center justify-between gap-6">
          <div className="flex-shrink-0 text-white">
            <Image src="https://img.logoipsum.com/269.svg" alt="Logo" height={40} width={40} />
          </div>
          <div className="block">
            <div className="flex space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    currentPath === item.href ? "text-gray-700" : "text-gray-400 hover:text-gray-700",
                    "text-sm font-semibold uppercase"
                  )}
                  aria-current={currentPath === item.href ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

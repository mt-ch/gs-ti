import { NextPage } from "next";
import Link from "next/link";

const NotFoundPage: NextPage = () => {
  return (
    <div className="container grid place-items-center bg-white py-24 min-h-[600px] h-[85vh]">
      <div className="flex flex-col gap-6 text-center">
        <div>
          <p className="text-base font-semibold text-primary-400">404</p>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-gray-900 mt-2">Page not found</h1>
          <p className="text-base leading-7 text-gray-600 mt-2">Sorry, we couldn’t find the page you’re looking for.</p>
        </div>
        <div className="inline-block">
          <Link href="/" className="gs-btn -color--primary -variant--solid">
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

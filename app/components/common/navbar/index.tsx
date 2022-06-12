import { useEffect } from "react";
import { Link, useFetcher } from "remix";

export default function Navbar() {
  const fetcher = useFetcher();

  useEffect(() => {
    fetcher.load("/api/user/fetch-details");
  }, []);

  return (
    <div className="h-14 p-1 shadow-xl font-medium flex flex-row justify-between">
      <div className="flex flex-row">
        <img src="/ADR-logo.png" className="p-1" />
        <Link to="/" className="text-md my-auto">
          <nav className="my-auto pl-8 text-gray-300 dark:text-white font-medium hover:underline">
            Home
          </nav>
        </Link>
      </div>
      <div className="flex flex-row mr-5">
        <p className="text-white my-auto font-medium">
          {fetcher.data
            ? fetcher.data.firstName + " " + fetcher.data.lastName
            : null}
        </p>
        <div className="h-8 w-8 rounded-full bg-gray-700 my-auto ml-2"></div>
      </div>
    </div>
  );
}

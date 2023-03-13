import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/20/solid";

interface ICurrentPage {
  currentPage: string;
}

export const BreadCrumb = ({ currentPage }: ICurrentPage) => {
  return (
    <nav className="flex mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link to="/" className="text-gray-400 hover:text-indigo-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <span className="ml-4 text-sm font-medium text-gray-500">
              {currentPage}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

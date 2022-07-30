import Header from "../shared/Header";
import { useQuery, useQueryErrorResetBoundary } from "react-query";
import { ICategory } from "../../api/interfaces/ICategory";
import ScrollToTop from "../../hooks/useScroll";
import * as api from "../../api/queries/categoryQueries";
import { ErrorBoundary } from "react-error-boundary";
import { Button } from "@mui/material";
import FallbackRender from "../shared/FallbackRender";
import {Link} from "react-router-dom"

function DisplayCategories() {
  const { reset } = useQueryErrorResetBoundary();
  const { data} = useQuery("categories", api.getCategories);

  return (
    <>
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <>
            <FallbackRender error="Chyba pri načítavaní kategórií" />
            <Button onClick={() => resetErrorBoundary()}>Try again</Button>
          </>
        )}
      >
        <Header name="Všetky kategórie" />
        <div className="flex justify-center align-top">
          <input
            className="control text-gray-600 mt-4 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
            placeholder="Hľadaj kategóriu"
          />
      </div>

        <div className="w-full mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data &&
            data.map((item: ICategory) => {
              return (
                <>
                  <div className="bg-whiterounded py-5 pl-6 flex items-start shadow">
                    <div className="pl-3 pr-10 mt-1">
                      <h3 className="font-normal leading-4 text-red-800 text-2xl">
                      <Link to={`/category/${item.id}`}>
                        {item.name}
                        </Link>
                      </h3>
                      <h3 className="mt-4 leading-4 text-gray-800 text-lg">
                        <Link to={`/category/${item.id}`}>
                        {item.description}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <ScrollToTop />
      </ErrorBoundary>
    </>
  );
}

export default DisplayCategories;

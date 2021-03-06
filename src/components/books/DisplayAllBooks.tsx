import { useState, ChangeEvent} from "react";
import Header from "../shared/Header";
import {
  useQuery,
  useQueryErrorResetBoundary,
} from "react-query";
import { IBook, SearchVal } from "../../api/interfaces/IBook";
import ScrollToTop from "../../hooks/useScroll";
import * as api from "../../api/queries/bookQueries";
import { style } from "./imageStyleHelper";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Button from '@mui/material/Button';
import FallbackRender from "../shared/FallbackRender";

function DisplayAllBooks() {
  const { reset } = useQueryErrorResetBoundary();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data} = useQuery("books", api.getBooks);


  const valChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <div>
            <FallbackRender error="Chyba pri načítavaní knih " />
            <Button onClick={() => resetErrorBoundary()}>Try again</Button>
          </div>
        )}
      >
        <Header name="Všetky knihy" />
        <div className="flex justify-center align-top">
          <input
            onChange={valChange}
            className="text-gray-600 mt-4 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
            placeholder="Hľadaj knihu"
          />
        </div>
        <div className="grid gap-8 space-x-1 lg:grid-cols-6">
          <>
            {data &&
              data
                // eslint-disable-next-line array-callback-return
                .filter((val: SearchVal) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  } else if (
                    val.author.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((item: IBook) => {
                  return (
                    <>
                      <div key={item.id} className="px-4 py-4 mt-4 bg-white">
                        <span>
                          {item.image === "" ||
                          item.image === null ||
                          item.image === undefined ||
                          item.image === "string" ? (
                            <img
                              style={{ ...style }}
                              alt="Placeholder"
                              className="h-auto w-full"
                              src="https://bitsofco.de/content/images/2018/12/broken-1.png"
                            />
                          ) : (
                            <img
                              style={{ ...style }}
                              alt="Placeholder"
                              className="h-auto w-full"
                              src={item.image}
                            />
                          )}
                        </span>
                        <h3 className="text-2xl text-center text-gray-800">
                          
                          {item.name} - {item.author} 
                        </h3>
                        <div className="text-center mt-4">
                          <Link
                            className="link mt-10 bg-blue-200 p-2 rounded"
                            to={`/book/${item.id}`}
                          >
                            Detail
                          </Link>
                        </div>
                      </div>
                    </>
                  );
                })}
          </>
        </div>
        <ScrollToTop />
      </ErrorBoundary>
    </>
  );
}

export default DisplayAllBooks;

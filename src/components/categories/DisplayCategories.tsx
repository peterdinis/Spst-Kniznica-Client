import Header from '../shared/Header'
import {useQuery, useIsFetching, useQueryErrorResetBoundary} from "react-query";
import {ICategory} from "../../api/interfaces/ICategory";
import ScrollToTop from "../../hooks/useScroll";
import * as api from "../../api/queries/categoryQueries";
import LoadingComponent from "../shared/LoadingComponent";
import WarningComponent from "../shared/WarningComponent";
import { queryClient } from '../../api/queryClient';
import { ErrorBoundary } from 'react-error-boundary'
import { Button } from "@material-ui/core";
import FallbackRender from '../shared/FallbackRender';


function DisplayCategories() {
  const { reset } = useQueryErrorResetBoundary();
  const isFetching = useIsFetching();
    const { data, isLoading, isError } = useQuery(
        "categories",
        api.getCategories,
        {
          retry: 3,
          initialData: () => {
            return queryClient.getQueryData("categories");
          },
        }
      );
    
      if (isLoading) {
        return <LoadingComponent message="Načítavam" />;
      }
    
      if (isError) {
        return <WarningComponent message="Lorem ipsum" />;
      }

      if(isFetching) {
        return <LoadingComponent message="Načítavam dáta" />;
      }
      
      return (
        <>
          <ErrorBoundary   onReset={reset}
       fallbackRender={({ resetErrorBoundary }) => (
         <>
            <FallbackRender error="Chyba pri načítavaní kategórií" />
           <Button onClick={() => resetErrorBoundary()}>Try again</Button>
         </>
       )}>
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
                        <h3 className="font-normal leading-4  texttext-gray-800 text-2xl">
                          {item.name}
                        </h3>
                        <h3 className="font-normal mt-4 leading-4 text-gray-800 text-2xl">
                          {item.description}
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
      )
}

export default DisplayCategories
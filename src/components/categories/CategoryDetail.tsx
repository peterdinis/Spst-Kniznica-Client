import Header from "../shared/Header";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Missing from "../shared/Missing";
import * as api from "../../api/queries/categoryQueries";

function CategoryDetail() {
  const { id } = useParams();
  const { data } = useQuery(["categoryDetail", id], () => api.getOneCategory(id));
  return (
    <>
      <Header name="Detail knihy" />
      {data === undefined || null ? (
        <div>Oprav ma</div>
      ) : (
        <section className="mt-2 text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-12 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                {data.name === null ? (
                  <div className="mt-2">
                    <Missing name="title chýba" />
                  </div>
                ) : (
                  <div>
                    <h1 className="text-gray-900 text-4xl title-font font-medium mb-1">
                      <span className="font-bold">Názov</span>: {data.name}
                    </h1>
                  </div>
                )}
                {data.description === null ? (
                  <div>
                    <Missing name="Popis chýba" />
                  </div>
                ) : (
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                    <span className="font-bold">Krátke info</span>:{" "}
                    {data.description}
                  </p>
                )}
                {/* TODO: Update me */}
                {data.books === null ? (
                  <>
                    <Missing name="Kategória nemá žiadne knihy" />
                  </>
                ): (
                  <>
                    {data.books && data.books.map((i: any) => i.name)}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default CategoryDetail
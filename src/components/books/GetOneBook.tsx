import Header from "../shared/Header";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Missing from "../shared/Missing";
import "./Books.css";
import { Link } from "react-router-dom";
import * as api from "../../api/queries/bookQueries";

function GetOneBook() {
  const { id } = useParams();
  const { data } = useQuery(["bookDetail", id], () => api.getOneBook(id));
  return (
    <>
      <Header name="Detail knihy" />
      {data === undefined || null ? (
        <div>Oprav ma</div>
      ) : (
        <section className="mt-2 text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-12 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              {data.image === null ||
              data.image === undefined ||
              !data.image ||
              data.image === "string" ? (
                <img
                  alt="No Image"
                  className="lg:w-1/2 w-full object-cover object-center rounded-lg border drop-shadow-md"
                  src="https://bitsofco.de/content/images/2018/12/broken-1.png"
                />
              ) : (
                <img
                  alt="ecommerce"
                  className="lg:w-1/2 w-full object-cover object-center rounded-lg border drop-shadow-md"
                  src={data.image}
                />
              )}
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                {data.title === null ? (
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

                {data.author === null ? (
                  <div>
                    <Missing name="Author chýba" />
                  </div>
                ) : (
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                    <span className="font-bold">Author</span>: {data.author}
                  </p>
                )}
                {data.year === null || data.year === "" ? (
                  <div>
                    <Missing name="Rok vydania chýba" />
                  </div>
                ) : (
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                    <span className="font-bold"> Rok</span>: {data.year}
                  </p>
                )}
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
                {data.avaiable === true ? (
                  <div className="mt-6">
                    <button className="bg-blue-200 text-white-500 text-center py-2 px-4 rounded">
                      <Link to="/borrow">Požičaj Knihu</Link>
                    </button>
                  </div>
                ) : (
                  <>
                  <span className="text-red-800 font-bold text-2xl">
                    Pre požičanie knihy musíte byť prihlasení 
                  </span><br />
                   <div className="mt-4 font-bold text-2xl">
                   <Link to="/register">Prihlásenie</Link>
                   </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default GetOneBook;

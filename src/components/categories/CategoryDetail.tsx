import Header from "../shared/Header";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Missing from "../shared/Missing";
import * as api from "../../api/queries/categoryQueries";
import { WarningComponent } from "../shared";


function CategoryDetail() {
  const { id } = useParams();
  const { data } = useQuery(["categoryDetail", id], () => api.getOneCategory(id));
  return (
    <>
      <Header name="Detail Kategórie" />
      {data === undefined || null ? (
        <WarningComponent message="CHYBA" />
      ): (
        <>
          <h1>{data.name}</h1>
        </>
      )}
    </>
  )
}

export default CategoryDetail
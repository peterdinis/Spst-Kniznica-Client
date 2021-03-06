import { useState, FormEvent, ChangeEvent } from "react";
import Checkbox from "@mui/material/Checkbox";
import "./Books.css";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Header from "../shared/Header";
import BaseButton from "../shared/BaseButton";
import { useQuery, useMutation } from "react-query";
import * as api from "../../api/mutations/bookMutations";
import * as catQuery from "../../api/queries/categoryQueries";
import { IBook } from "../../api/interfaces/IBook";
import AvaiableCategories from "./AvaiableCategories";
import { ICategory } from "../../api/interfaces/ICategory";

function CreateNewBook() {
  const [name, setName] = useState("");
  const { data } = useQuery("books", catQuery.getCategories);
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState(0);
  const [pages, setPages] = useState(0);
  const [avaiable, setAvaiable] = useState(true);
  const [categoryId, setCategoryId] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAvaiable(event.target.checked);
  };

  const mutation = useMutation(api.addNewBook);
  const newBookData: IBook = {
    name,
    description,
    author,
    image,
    year,
    pages,
    avaiable,
    categoryId,
  };

  const onCreateBook = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate(newBookData);
    setName("");
    setDescription("");
    setAuthor("");
    setImage("");
    setPages(0);
    setYear(0);
    setCategoryId(categoryId);
    setAvaiable(false);
  };

  return (
    <>
      <Header name="Tvorba novej knihy" />
      <span className="flex justify-center align-top mt-6 text-xl">
        <AvaiableCategories
          modalHeader="Zoznam dostupných kategórií"
          buttonName="Zoznam dostupných kategórií"
        >
          {data && data.map((cat: ICategory) => {
            return (
              <>
                <div className="flex justify-center">
                  <ul className="mt-5 bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                    <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                      {cat.id} - {cat.name} - {cat.description}
                    </li>
                  </ul>
                </div>
              </>
            );
          })}
        </AvaiableCategories>
      </span>
      <div className="formCenter">
        <form onSubmit={onCreateBook}>
          <TextField
            className="bookForm"
            placeholder="Meno Knihy"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <br />
          <TextField
            className="bookForm"
            placeholder="Popis knihy"
            value={description}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDescription(e.target.value)
            }
          />
          <br />
          <TextField
            className="bookForm"
            placeholder="Author"
            value={author}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAuthor(e.target.value)
            }
          />
          <br />
          <TextField
            className="bookForm"
            placeholder="Obrázok url"
            value={image}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setImage(e.target.value)
            }
          />
          <br />
          <TextField
            className="bookForm"
            placeholder="Rok vydania"
            value={year}
            type="number"
            onChange={(e: any) => setYear(e.target.value)}
          />

          <br />

          <TextField
            className="bookForm"
            placeholder="Rok vydania"
            value={pages}
            type="number"
            onChange={(e: any) => setPages(e.target.value)}
          />

          <br />
          <div className="mt-6">
            <Typography>Kniha je: Dostupná / Nedostupná</Typography>
            <Checkbox
              className="bookForm"
              placeholder="Rok vydania"
              value={avaiable}
              onChange={handleChange}
            />

            <br />
          </div>
          <TextField
            className="bookForm"
            placeholder="Číslo kategórie"
            value={categoryId}
            type="number"
            onChange={(e: any) => setCategoryId(e.target.value)}
          />

          <br />
          <BaseButton type="submit" name="Vytvor novú knihu" />
        </form>
      </div>
    </>
  );
}

export default CreateNewBook;

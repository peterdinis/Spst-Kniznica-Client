import { useState, FormEvent, ChangeEvent} from "react";
import Checkbox from '@material-ui/core/Checkbox';
import "./Books.css";
import {TextField, Typography} from "@material-ui/core";
import Header from "../shared/Header";
import BaseButton from "../shared/BaseButton";
import {useMutation} from "react-query";
import * as api from "../../api/mutations/bookMutations";
import {IBook} from "../../api/interfaces/IBook";

function CreateNewBook() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState(0);
  const [pages, setPages] = useState(0);
  const [avaiable, setAvaiable] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAvaiable(event.target.checked);
  };

  const mutation = useMutation(api.addNewBook);
  const data: IBook = {
    name,
    description,
    author,
    image,
    year,
    pages,
    avaiable
  };

  const onCreateBook = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate(data);
    setName("");
    setDescription("");
    setAuthor("");
    setImage("");
    setPages(0);
    setYear(0);
    setAvaiable(false)
  };

  return (
     <div>
      <Header name="Tvorba novej knihy" />
      <div className="formCenter">
        <form onSubmit={onCreateBook}>
          <TextField
            className="bookForm"
            placeholder="Meno Knihy"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
          <br />
          <TextField
            className="bookForm"
            placeholder="Popis knihy"
            value={description}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
          />
          <br />
          <TextField
            className="bookForm"
            placeholder="Author"
            value={author}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)}
          />
          <br />
          <TextField
            className="bookForm"
            placeholder="Obrázok url"
            value={image}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setImage(e.target.value)}
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
          <BaseButton type="submit" name="Vytvor novú knihu" />
        </form>
      </div>
    </div>
  )
}

export default CreateNewBook
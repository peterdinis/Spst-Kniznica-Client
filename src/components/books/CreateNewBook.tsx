/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useState, FormEvent} from "react";
import { toast } from "react-toastify";
import "./Books.css";
import {TextField} from "@material-ui/core";
import Header from "libs/frontend/shared/src/lib/shared/Header";
import BaseButton from "libs/frontend/shared/src/lib/shared/BaseButton";
import {useMutation} from "react-query";
import * as api from "@spst-bj/frontend/api";
import {queryClient} from "@spst-bj/frontend/api";

function CreateNewBook() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState<number>(0);
  const [status, setStatus] = useState("");

  const mutation = useMutation(api.addNewBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("books");
    },

    onError: () => {
      toast.error("Problém pri tvorbe knihy 😔 ");
    },
  });

  const success = () => toast.success("Nová kniha bola pridaná");

  const data = {
    name,
    description,
    author,
    image,
    status,
    year
  };

  const onCreateBook = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate(data);
    success();
    setName("");
    setDescription("");
    setAuthor("");
    setImage("");
    setStatus("");
    setYear(0);
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
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <TextField
            className="bookForm"
            placeholder="Popis knihy"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <TextField
            className="bookForm"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <br />
          <TextField
            className="bookForm"
            placeholder="Obrázok url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <TextField
            className="bookForm"
            placeholder="Status knihy"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
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
          <BaseButton type="submit" name="Vytvor novú knihu" />
        </form>
      </div>
    </div>
  )
}

export default CreateNewBook
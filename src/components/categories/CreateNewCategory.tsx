import { useState } from "react";
import { useMutation } from "react-query";
import * as api from "../../api/mutations/categoryMutations"
import "./Category.css";
import {FormWrapper} from "./Categories.styled";
import {TextField} from "@material-ui/core";
import {queryClient} from "../../api/queryClient";
import {toast} from "react-toastify";
import Header from "../shared/Header";
import BaseButton from "../shared/BaseButton";

function CreateNewCategory() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const mutation = useMutation(api.addNewCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("categories");
    },

    onError: () => {
      toast.error("Problém pri tvorbe kategórie 😔 ");
    },
  });

  const infos = () => toast.success("Kategória bola úspešne vytvorená 👌");

  const data = {
    name,
    description,
  };

  const formHandler = (e: any) => {
    e.preventDefault();
    infos();
    mutation.mutate(data);
    setName("");
    setDescription("");
  };

  if (!localStorage.getItem("admin")) {
    <span className="font-bold text-xl">K tejto akcií nemáte prístup</span>;
  }

  
  return (
    <FormWrapper>
      <Header name="Tvorba novej kategórie" />
      <FormWrapper>
        <form onSubmit={formHandler}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="categoryorm"
            placeholder="Name"
          />
          <br />
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="categoryorm"
            placeholder="Popis kategórie"
          />
          <br />
          <BaseButton type="submit" name="Vytvor novú kategóriu" />
        </form>
      </FormWrapper>
    </FormWrapper>
  );
}

export default CreateNewCategory
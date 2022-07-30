import { useMutation } from "react-query";
import * as api from "../../api/mutations/categoryMutations"
import "./Category.css";
import {FormWrapper} from "./Categories.styled";
import {TextField} from "@mui/material";
import Header from "../shared/Header";
import BaseButton from "../shared/BaseButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


type FormData = {
  name: string,
  description: string,
}

const schema = yup.object({
  name: yup.string().required(),
  description: yup.string().required()

}).required();

function CreateNewCategory() {
  const { register, handleSubmit} = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const mutation = useMutation(api.addNewCategory);

  return (
    <FormWrapper>
      <Header name="Tvorba novej kategórie" />
      <FormWrapper>
        <form onSubmit={handleSubmit((data: FormData) => {
          mutation.mutate(data);
        })}>
          <TextField
            {...register("name", {
              required: true
            })}
            className="categoryorm"
            placeholder="Name"
          />
          <br />
          <TextField
            {...register("description", {
              required: true
            })}
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
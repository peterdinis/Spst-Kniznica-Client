import Header from "../shared/Header"
import {useMutation} from "react-query";
import * as api from "../../api/mutations/authMutations";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

type FormData = {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
}

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),

}).required();

export default function RegisterUser() {
  const { register, handleSubmit} = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate();

  const mutation = useMutation(api.registerUser, {
    onSuccess: () => {
      toast.success("Registrácia bola úspešná");
    },

    onError: () => {
      toast.error("Problém pri regístrácií");
    }
  });
  return (
    <>
     <Header name="Registrácia" />
      <form onSubmit={handleSubmit((data: FormData) => {
          mutation.mutate(data)
          navigate("/student/login")
      })}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="emailInput shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true
              })}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Password
            </label>
            <input
              className="emailInput shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="password"
              type="password"
              placeholder="******************"
              {...register("password", {
                required: true
              })}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Meno
            </label>
            <input
              className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="Meno"
              type="text"
              placeholder="Meno"
              {...register("firstName", {
                required: true
              })}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Priezvisko
            </label>
            <input
              className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="Priezvisko"
              type="text"
              placeholder="Priezvisko"
              {...register("lastName", {
                required: true
              })}
            />
          </div>
          <div>
            <button className="reg registerButton" type="submit">
              Registrácia
            </button>
            <div>
              <a
                className="mt-4 inline-block align-baseline font-bold text-2xl text-blue hover:text-blue-darker"
                href="/student/login"
              >
                Prihlásenie tu
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

import Header from "../shared/Header"
import {useMutation} from "react-query";
import * as api from "../../api/mutations/authMutations";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
}

export default function RegisterUser() {
  const { register, handleSubmit} = useForm<FormData>();

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
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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
              value={firstName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
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
              value={lastName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
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

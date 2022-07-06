import Header from "../shared/Header"
import {useMutation} from "react-query";
import * as api from "../../api/mutations/authMutations";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import { FormEvent, useState, ChangeEvent } from "react";
import {RegisterUserI} from "../../api/interfaces/IAuth";

export default function RegisterUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const mutation = useMutation(api.registerUser, {
    onSuccess: () => {
      toast.success("Registrácia bola úspešná");
      navigate("/login");
    },

    onError: () => {
      toast.error("Problém pri regístrácií");
    }
  });

  const data: RegisterUserI = {
    email,
    password,
    firstName,
    lastName,
  }

  const registerUser = (e: FormEvent) => {
    mutation.mutate(data);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  }

  return (
    <>
     <Header name="Registrácia" />
      <form onSubmit={registerUser}>
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
              placeholder="Password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Heslo
            </label>
            <input
              className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div>
            <button className="reg registerButton" type="submit">
              Registrácia
            </button>
            <div>
              <a
                className="mt-4 inline-block align-baseline font-bold text-2xl text-blue hover:text-blue-darker"
                href="/login"
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

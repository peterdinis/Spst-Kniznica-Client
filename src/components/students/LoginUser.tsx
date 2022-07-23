import { useMutation } from "react-query";
import * as api from "../../api/mutations/authMutations";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormEvent, useState, ChangeEvent } from "react";
import Header from "../shared/Header";
import { LoginUserI } from "../../api/interfaces/IAuth";

function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const mutation = useMutation(api.loginUser, {
    onSuccess: () => {
      toast.success("Prihlásenie  bolo úspešné");
    },

    onError: () => {
      toast.error("Problém pri prihlasení");
    },
  });

  const data: LoginUserI = {
    email,
    password
  }

  const loginUser = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate(data);
    setEmail("");
    setPassword("");
    navigate("/student/profile");
  }

  return (
    <>
      <Header name="Prihlásenie" />
      <form onSubmit={loginUser}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="nameInput shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="name"
              type="text"
              placeholder="Email"
              required
              autoFocus
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
              placeholder="*****************"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className="reg registerButton" type="submit">
              Prihlásenie
            </button>
            <div>
              <a
                className="mt-4 inline-block align-baseline font-bold text-2xl text-blue hover:text-blue-darker"
                href="/student/register"
              >
                Registrácia
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginUser;

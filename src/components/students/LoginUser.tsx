import { useMutation } from "react-query";
import * as api from "../../api/mutations/authMutations";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../shared/Header";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

type FormData = {
  email: string,
  password: string
}

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),

}).required();

function LoginUser() {
  const { register, handleSubmit} = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();

  const mutation = useMutation(api.loginUser, {
    onSuccess: () => {
      toast.success("Prihlásenie  bolo úspešné");
    },

    onError: () => {
      toast.error("Problém pri prihlasení");
    },
  });

  return (
    <>
      <Header name="Prihlásenie" />
      <form onSubmit={handleSubmit((data: FormData) => {
        mutation.mutate(data)
        navigate("/student/profile")
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
              className="nameInput shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="name"
              type="text"
              placeholder="Email"
              required
              autoFocus
              {...register("email", {
                required: true
              })}
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
              {...register("password", {
                required: true
              })}
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

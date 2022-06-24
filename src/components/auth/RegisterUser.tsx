import { useForm } from "react-hook-form";
import Header from "../shared/Header"

export default function RegisterUser() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
     <Header name="Registrácia" />
      <form>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Name
            </label>
            <input
              className="emailInput shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Name"
              required
              /* value={name}
              onChange={(e) => setName(e.target.value)} */
              {...register("name", {
                required: "Name is required"
              })}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="emailInput shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Email"
              required
              {...register("email", {
                required: "Email is required"
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
              placeholder="******************"
              {...register("password", {
                required: "Password is required"
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

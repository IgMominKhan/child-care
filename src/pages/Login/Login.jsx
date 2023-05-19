import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Login = () => {
  const [err, setErr] = useState("");
  const [errorColor, setErrorColor] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErr("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCrediential) => {
        setUser(userCrediential.user);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
        setErr(err.message);
        setErrorColor("failure");
      });
  };
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-900 mt-0">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in
              </h1>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email1"
                      value="Your email"
                    />
                  </div>
                  <TextInput
                    name="email"
                    id="email1"
                    type="email"
                    placeholder="name@flowbite.com"
                    required={true}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="password1"
                      value="Your password"
                    />
                  </div>
                  <TextInput
                    name="password"
                    id="password1"
                    type="password"
                    placeholder="********"
                    required={true}
                    color={errorColor}
                    helperText={err && (
                      <>
                        {err}
                      </>
                    )}
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                      Remember me
                    </Label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-primary-600 hover:underline font-medium"
                  >
                    Forgot password?
                  </a>
                </div>
                <Button type="submit">
                  Submit
                </Button>
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
                <button
                  type="button"
                  class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                >
                  <svg
                    class="w-4 h-4 mr-2 -ml-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    >
                    </path>
                  </svg>
                  Sign in with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

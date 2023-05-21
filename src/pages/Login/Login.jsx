import auth from "../../../configs/Firebase";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Login = () => {
  const { setIsLoading } = useContext(AuthContext);

  const [err, setErr] = useState("");
  const [errorColor, setErrorColor] = useState("");
  const { setUser, googleSignIn, login } = useContext(
    AuthContext,
  );

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    setErr("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCrediential) => {
        setUser(userCrediential.user);
        if (userCrediential.user) {
          Swal.fire("Success", "you are logged in", "success");
          // setIsLoading(false);
          navigate(from);
        }
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

  const googleProvider = new GoogleAuthProvider();

  // handle google signin
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        if (result.user) {
          setUser(result.user);
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Your are signed in",
          });
          navigate(from);
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({ icon: "error", title: "Oops...", text: err.message });
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
                  Sign In
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
                <div className="inline-flex items-center justify-center w-full">
                  <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <span className="absolute px-3 font-light text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                    or
                  </span>
                </div>
                <Button onClick={handleGoogleSignIn}>
                  <FcGoogle className="mr-2 h-5 w-5" />
                  Sign in With Google
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

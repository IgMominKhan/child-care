import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import auth from "../../../configs/Firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [errorColor, setErrorColor] = useState("");
  const [err, setErr] = useState("");

  const { setUser, register } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPasword = form.confirmPassword.value;
    const photo = form.photo.value;

    setErr("");
    setErrorColor("");
    console.log(password, confirmPasword);
    // password validation
    if (!/(?=.{8,})/.test(password)) {
      setErr("Password must be at least 8 character lenght");
      setErrorColor("failure");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setErr("Password must contain minimum one uppercase letter");
      setErrorColor("failure");
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setErr("Password must contain minimum one digit");
      setErrorColor("failure");
      return;
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setErr("Password must contain minimum one special charecter");
      setErrorColor("failure");
      return;
    } else if (password !== confirmPasword) {
      setErr("password doesn't match");
      setErrorColor("failure");
      return;
    } else {
      register(email, password)
        .then((userCrediential) => {
          setUser(userCrediential.user);
          updateProfile(userCrediential.user, {
            displayName: name,
            photoURL: photo,
          });
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "You are logged In",
          });

        

           form.reset();
          navigate('/')
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
    }
  };

  // handle google singin
  const googleProvider = new GoogleAuthProvider();

  // handle google signin
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        if (result.user) {
          setUser(result.user);
          console.log(result.user);
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Your are signed in",
          });
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
        <div className="flex flex-col items-center justify-center px-6 py-8 md:py-32 mx-auto ">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign Up
              </h1>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <div className="mb-2 blmck">
                    <Label
                      htmlFor="name"
                      value="name"
                    />
                  </div>
                  <TextInput
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Enter Your name"
                    required={true}
                  />
                </div>
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
                    placeholder="Enter your email"
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
                    placeholder="Enter your password"
                    required={true}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="confirm-password1"
                      value="Confirm password"
                    />
                  </div>
                  <TextInput
                    name="confirmPassword"
                    id="password2"
                    type="password"
                    placeholder="Confirm Password"
                    required={true}
                    color={errorColor}
                    helperText={err && (
                      <>
                        {err}
                      </>
                    )}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="photo"
                      value="photo"
                    />
                  </div>
                  <TextInput
                    name="photo"
                    id="photo"
                    type="text"
                    placeholder="Your profile picture URL"
                    required={true}
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                      <Link>Accept terms and conditions</Link>
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

export default Register;

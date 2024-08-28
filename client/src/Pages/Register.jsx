import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { baseUrl } from "../helpers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const handleUserRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("please provide the required values");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/auth/sign-up`, {
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
      });
      console.log(response);
      navigate("/shop");
      alert("Register successfully");
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {/* sign in section starts here */}
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="logo.jpg"
            width={60}
            className="mx-auto h-12 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create an account
          </h2>
        </div>
        {/* sign in section ends here */}

        {/* email address section starts here */}

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>

              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>

              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/*email address section ends here  */}

            {/* password section starts here */}

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 placeholder:text-"
                >
                  Password
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* password section starts here */}

            {/* sign up btn section starts here */}
            <div>
              <button
                onClick={(e) => handleUserRegister(e)}
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-stone-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {loading ? "Loading..." : "Sign Up"}
              </button>
            </div>
          </form>
          {/* sign up btn section starts here */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;

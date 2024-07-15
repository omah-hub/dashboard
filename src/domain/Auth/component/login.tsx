import logo from "../../../assets/my logo.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import backgroung from "../../../assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg";
import { useEffect, useState, ChangeEvent } from "react";
import { useLoginMutation } from "../../../apis/login.api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/redux.hooks";
import { setUser } from "../../../features/authSlice";

const initialState = {
  username: "",
  password: "",
};

function Login() {
  const [formValue, setFormValue] = useState(initialState);
  const { username, password } = formValue;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login, { data: loginData, isSuccess: isLoginSuccess }] =
    useLoginMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = async () => {
    if (username && password) {
      await login({ username, password });
    } else {
      toast.error("Please fill all input fields");
    }
  };

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success("User Logged In Successfully");
      dispatch(
        setUser({
          name: loginData.data?.mda?.email,
          token: loginData.data?.token,
        })
      );
      navigate("/dashboard");
    }
  }, [isLoginSuccess]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div className="flex flex-col justify-center px-5 md:px-20 py-10">
          <div className="flex items-center mb-4">
            <img src={logo} alt="logo" className="w-20 h-20" />
            <p className="md:text-2xl text-4xl text-center text-nowrap font-bold text-blue-600">
              Omah's work
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-semibold md:font-extrabold tracking-wide font-Roboto mb-2">
              Login to your Account
            </p>
            <p className="text-sm md:text-base">
              Welcome Back! Select method to login:
            </p>
          </div>
          <div className="flex space-x-4 mt-8 mb-6">
            <div className="flex space-x-3 py-2 border items-center px-8 shadow-lg w-full">
              <FcGoogle className="h-6 w-6" />
              <p>Google</p>
            </div>
            <div className="flex space-x-3 border py-2 px-8 shadow-lg w-full">
              <FaFacebook className="text-blue-500 h-6 w-6" />
              <p>Facebook</p>
            </div>
          </div>
          <p className="text-center mb-4 text-sm md:text-base">
            or continue with email
          </p>
          <form className="w-full md:w-1/2">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FiMail />
                </span>
                <input
                  type="email"
                  name="username"
                  placeholder="Username"
                  className="border pl-10 py-2 pr-2 w-full"
                  value={username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
                <span
                  className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? <GoEye /> : <FaRegEyeSlash />}
                </span>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="border pl-10 py-2 pr-2 w-full"
                  value={password}
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center">
                <input type="checkbox" id="remember-me" className="mr-2" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <p className="text-blue-700 cursor-pointer">Forgot Password?</p>
            </div>
            <button
              type="button"
              className="bg-blue-700 text-white rounded py-2 mt-4 w-full"
              onClick={handleLogin}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="hidden md:block">
          <img
            src={backgroung}
            alt="Background"
            className="h-screen object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Login;

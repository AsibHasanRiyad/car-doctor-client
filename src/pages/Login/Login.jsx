import { BsFacebook, BsGoogle, BsLinkedin } from "react-icons/bs";
import image from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const {logIn} = useContext(AuthContext)
    const handelLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //login
        logIn(email, password)
        .then(data => {
          console.log(data.user)

          //get access token

          const user ={email}
          axios.post('http://localhost:5008/jwt', user,{
            withCredentials:true
          })
          .then(data =>{
            console.log(data.data);
            if (data.data.success) {
              navigate(location?.state? location?.state : '/')
            }
          })
        })
        .then(error => console.log(error))
    }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-4 lg:gap-20">
        <div className=" w-full lg:w-1/2">
          <img src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full lg:w-1/2 max-w-sm border">
          <form onSubmit={handelLogin} className="card-body">
            <h1 className="text-3xl font-bold text-center">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-[#FF3811] border-none text-white hover:bg-slate-800 ">
                Login
              </button>
            </div>
            <div className=" text-center text-[#737373] pt-2">
              <h1 className=" text-sm">Or Sign In with</h1>
              <div className=" flex justify-center gap-3 my-3">
                <button className="btn btn-circle text-3xl">
                  <BsFacebook className=" text-blue-600"></BsFacebook>
                </button>
                <button className="btn btn-circle text-3xl">
                  <BsGoogle className=" text-red-600"></BsGoogle>
                </button>
                <button className="btn btn-circle text-3xl">
                  <BsLinkedin className=" text-blue-500"></BsLinkedin>
                </button>
              </div>
              <h1 className=" text-sm">
                Does not have an account?
                <Link to={'/signup'}><span className=" text-sm text-blue-600"> Sign Up</span></Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

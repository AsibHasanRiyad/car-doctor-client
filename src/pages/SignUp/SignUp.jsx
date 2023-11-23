import { BsFacebook, BsGoogle, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import image from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const SignUp = () => {
  const {createUser} = useContext(AuthContext);

    const handelSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email, password);

        createUser(email, password)
        .then(result =>
          console.log(result.user))
        .then(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-4 lg:gap-20">
          <div className=" w-full">
            <img src={image} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full lg:w-1/2 border">
            <form onSubmit={handelSignUp} className="card-body">
              <h1 className="text-3xl font-bold text-center">Register now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <button className="btn btn-circle text-2xl">
                    <BsFacebook className=" text-blue-600"></BsFacebook>
                  </button>
                  <button className="btn btn-circle text-2xl">
                    <BsGoogle className=" text-red-600"></BsGoogle>
                  </button>
                  <button className="btn btn-circle text-2xl">
                    <BsLinkedin className=" text-blue-500"></BsLinkedin>
                  </button>
                </div>
                <h1 className=" text-sm">
                   Already have an account?
                  <Link to={'/login'}><span className=" text-sm text-blue-600"> Sign In</span></Link>
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;
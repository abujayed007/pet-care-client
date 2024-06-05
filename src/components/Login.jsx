import { useContext, useRef, useState } from "react";
import Google from "./Google";
import { AuthContext } from "../authContext/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";
import Swal from "sweetalert2";


const Login = () => {
    const {signIn} = useContext(AuthContext)
    const [error ,setError] = useState('')
    const emailRef = useRef()
    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from?.pathname || "/";

    const handleSubmit = (e) =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
        .then(data =>{
            console.log(data);
            from.reset('')
            navigate(from, {replace:true})
        }).catch(err =>{
          console.log(err.message);
          setError(err.message)
        })
    }

    const handleResetPassword = () =>{
        const email = emailRef.current.value
        if(!email){
           alert("prease provide a email ");
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            return
        }
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            alert('Check your email')
        }).catch(err =>{
            alert(err.message)
        })
    }

    return (
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col w-10/12">
                    <div className="text-center  mt-16">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" ref={emailRef} name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a onClick={handleResetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {error && <p className="text-red-500 ">{error.split(' ')[2]}</p>}
                            <p>Don't have any account <Link to='/register' className="text-blue-500">Register</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <Google/>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Login;
import { useContext, useRef, useState } from "react";
import Google from "./Google";
import { AuthContext } from "../authContext/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const emailRef = useRef()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const password = form.password.value

        const userInfo = {
            name,
            email
        }

        createUser(email, password)
            .then(data => {
                // console.log(data);
                fetch('https://pet-care-server-wheat.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                navigate(from)
            }).catch(err => {
                setError(err.message)
                console.log(err.message);
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
                <div className="text-center mt-16">
                    <h1 className="text-5xl font-bold ">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a onClick={handleResetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="mt-2">
                            {error && <p className="text-red-500 ">{error.split(` `)[8]}</p>}
                        </div>
                        <p>Already have an account <Link to='/login' className="text-blue-500">Login</Link></p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <Google />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
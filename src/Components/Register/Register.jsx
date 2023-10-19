import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
    const { CreateUserWithEmailAndPassword } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    // const [register, setRegister] = useState('');
    const handelForm = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const imgUrl = form.imgUrl.value;

        if (password.length < 6) {
            Swal.fire('Password must be at least 6 characters');
            return;
        } if (!/[A-Z]/.test(password)) {
            Swal.fire('Password must be a Uppercase letter');
            return;
        }
        if (!/[a-z]/.test(password)) {
            Swal.fire('Password must be a Lowercase letter');
            return;
        }
        if (!/[0-9]/.test(password)) {
            Swal.fire('Password must be a number ')
            return;
        }
        setRegisterError('');
        CreateUserWithEmailAndPassword(name, password, email, imgUrl)
            .then(result => {
                console.log(result.user);
                Swal.fire('Register Successful')
            })
            .catch(error => {
                setRegisterError(error.message);
            });

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full   shadow-2xl bg-base-100">
                        <form onSubmit={handelForm} className="card-body md:w-[400px]  lg:w-[500px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="Name" className="input  input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">imgUrl</span>
                                </label>
                                <input type="text" placeholder="imgUrl" name="imgUrl" className="input  input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input  input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                                <div className="mt-3">
                                    <p> Account <Link to="/login" className="text-yellow-500 text-2xl">login</Link></p>
                                </div>
                                <div className="text-center">
                                    <h1 className="text-red-500 p-4">{registerError}</h1>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;
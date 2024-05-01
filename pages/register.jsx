import { register_user } from '@/services';
import Link from 'next/link';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", role:"user" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const res = await register_user(formData);
        if (res.success) {
            toast.success(res.message);
        } else {
            toast.error(res.message);
        }
    };

    return (
        <>
            <section className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#4b6cb7' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card shadow-lg">
                                <div className="card-body">
                                    <h2 className="card-title text-center mb-4">Create an Account</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Your Name</label>
                                            <input
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="form-control"
                                                placeholder="Enter your full name"
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Your Email</label>
                                            <input
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control"
                                                placeholder="Enter your email id"
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input
                                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                type="password"
                                                name="password"
                                                id="password"
                                                className="form-control"
                                                placeholder="••••••••"
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                                    </form>
                                    <p className="text-center mt-3">
                                        Already have an account? <Link href="/" className="text-primary">Sign In</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
}

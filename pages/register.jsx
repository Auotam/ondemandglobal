import React, { useState, useEffect } from "react";
import { register_user } from "@/services";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    plan: "", // Plan selection state
    role: "user", // Default role for new users
  });
  

  useEffect(() => {
    const { title, price, isYearly } = router.query;
    console.log("URL Parameters:", title, price, isYearly);

    if (title && price && isYearly) {
      const planName = `${title}`;
	//   const price = `${price}`;
	//   const isYearly = `${isYearly === 'true' ? '/year' : '/month'})`;
      setFormData({ ...formData, plan: planName });
      console.log("Form Data Plan:", planName);
    }
  }, [router.query]); // Re-run effect when query parameters change

  const handleSubmit = async (e) => {
	e.preventDefault();
  
	try {
	  const res = await register_user(formData);
	  if (res.success) {
		toast.success(res.message);
		router.push("/login"); // Redirect to login page after successful registration
	  } else {
		toast.error(res.message);
	  }
	} catch (error) {
	  console.error("Error during registration:", error);
	  toast.error("Something went wrong. Please try again.");
	}
  };
  
  const handleInputChange = (e) => {
	setFormData({ ...formData, [e.target.name]: e.target.value });
	console.log(formData)
  };
  

  return (
    <>
      <div id="signup" className="bg--scroll login-section division">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="register-page-wrapper r-16 bg--fixed pt-4">
              <div className="col-md-12 text-center">	
                    <img className='logologin' src="/assets/images/logo-white.png" alt="Logo" />
                     </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="register-page-form">
                      <form
                        name="signupform"
                        className="row sign-up-form"
                        onSubmit={handleSubmit}
                      >
                        <input
                          onChange={handleInputChange}
                          type="text"
                          name="name"
                          className="form-control name"
                          placeholder="Enter your full name"
                          required
                        />
                        <input
                          onChange={handleInputChange}
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter your email id"
                          required
                        />
                        <input
                          onChange={handleInputChange}
                          type="password"
                          name="password"
                          className="form-control password"
                          placeholder="••••••••"
                          required
                        />
                        <div className="form-data">
                          <span>
                            By clicking “Create Account”, you agree to our{" "}
                            <Link href="/terms">
                              <a>Terms</a>
                            </Link>{" "}
                            and that you have read our{" "}
                            <Link href="/privacy">
                              <a>Privacy Policy</a>
                            </Link>
                          </span>
                        </div>
                        <button
                          type="submit"
                          className="btn btn--theme hover--theme submit"
                        >
                          Create Account
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* Right column with additional information */}
                  <div className="col-md-6">
                    {/* Placeholder text or additional content */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Toast notification container */}
      <ToastContainer />
    </>
  );
};

export default Register;

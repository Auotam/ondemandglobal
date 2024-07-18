import React, { useState, useEffect } from "react";
import { register_user } from "@/services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FoundationSection from "@/components/home/foundation-section";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    price: "",
    plan: "",
    role: "user",
  });

  const [planSelected, setPlanSelected] = useState(false);

  useEffect(() => {
    const { title, price, isYearly } = router.query;
    if (title && price && isYearly) {
      const planName = `${title}`;
      setFormData({ ...formData, plan: planName, price });
      setPlanSelected(true);
    }
  }, [router.query]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await register_user(formData);
      if (res.success) {
        toast.success(res.message);
        router.push("/login");
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
  };

  const handlePlanSelect = (planDetails) => {
    setFormData({ ...formData, plan: planDetails.title, price: planDetails.price });
    setPlanSelected(true);
  };

  return (
    <>
      {!planSelected ? (
        <>
          <h1 className="d-flex align-items-center justify-content-center mt-40 text-center">Please Select the plan Before Registration</h1>
          <FoundationSection onPlanSelect={handlePlanSelect} />
        </>
      ) : (
        <div id="signup" className="bg--scroll login-section division">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="register-page-wrapper r-16 bg--fixed pt-4">
                  <div className="col-md-12 text-center">
                    <img className="logologin" src="/assets/images/logo-white.png" alt="Logo" />
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="register-page-form">
                        <form name="signupform" className="row sign-up-form" onSubmit={handleSubmit}>

                          <div className="col-md-12">
                          <p className="p-sm input-header">Full Name</p>
                          <div className="wrap-input">
                      
                          <input
                            onChange={handleInputChange}
                            type="text"
                            name="name"
                            className="form-control name"
                            placeholder="Enter your full name"
                            required
                          />
                          </div>
                          </div>

                          <div className="col-md-12">
                          <p className="p-sm input-header">Enter Email</p>
                          <div className="wrap-input">
                      
                          <input
                            onChange={handleInputChange}
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your email id"
                            required
                          />
                          </div>
                          </div>
                          <div className="col-md-12">
                          <p className="p-sm input-header">Enter Password</p>
                          <div className="wrap-input">
                      
                          <input
                            onChange={handleInputChange}
                            type="password"
                            name="password"
                            className="form-control password"
                            placeholder="••••••••"
                            required
                          />
                          </div></div>
                          <div className="col-md-12 d-none">
                          <p className="p-sm input-header">Plan</p>
                          <div className="wrap-input">
                      
                          <input
                            onChange={handleInputChange}
                            type="text"
                            name="plan"
                            className="form-control plan"
                            placeholder="Plan"
                            value={formData.plan}
                            required
                            readOnly
                          />
                          </div></div>
                          <div className="col-md-12">
                          {/* <p className="p-sm input-header">Full Name</p> */}
                          <div className="wrap-input">
                      
                          <input
                            onChange={handleInputChange}
                            type="text"
                            name="price"
                            className="form-control price"
                            placeholder="Price"
                            value={formData.price}
                            required
                            readOnly hidden
                          />
                          </div></div>
                          <div className="col-md-12">
                          {/* <p className="p-sm input-header">Full Name</p> */}
                          <div className="wrap-input">
                      
                          <input
                            onChange={handleInputChange}
                            type="text"
                            name="role"
                            className="form-control role"
                            placeholder="Role"
                            value="user"
                            required
                            hidden
                          />
                          </div>
                          </div>
                          <button className="btn btn--theme hover--theme submit" type="submit">
                            Register
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <p className="more-options">
                        Have an account? <a href="/login">Login Here</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Register;

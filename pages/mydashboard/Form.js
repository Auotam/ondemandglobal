import React, { useState } from 'react';

const Form = () => {
  // State variables to hold form field values
  const [fullName, setFullName] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create an object with form data to be submitted
    const formData = {
      fullName,
    };

    // Call a function to handle form submission (e.g., submitFormData(formData))
    // Make an API request to submit form data
    // Example: await submitFormData(formData);

    // Reset form fields after submission (if needed)
    setFullName('');
  };

  return (
    <>
      <section className="tab-components">
        <div className="container-fluid">
          <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title">
                  <h2>Form Elements</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="breadcrumb-wrapper">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#0">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#0">Forms</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Form Elements
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="form-elements-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="card-style mb-30">
                  <form onSubmit={handleSubmit}>
                    <h6 className="mb-25">Input Fields</h6>
                    <div className="input-style-1">
                      <label>Full Name</label>
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>
                    {/* Add more input fields here */}

                    <button type="submit" className="btn btn-primary mt-3">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;

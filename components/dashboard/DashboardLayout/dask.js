import React from 'react'
import useUserData from '@/utils/UseUserdata';
import QRCode from 'qrcode.react';
import Qrcode from '@/components/qrpage/qrcode';


const Dask = () => {
  const userData = useUserData()
  console.log("data on desk page", userData)
 if (!userData) {
    return null; 
  }
  return (
    <div className='main-wrapper'>
    <section className="section">
    <div className="container-fluid">
      
      <div className="title-wrapper pt-30 mb-10">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="title">
              <h2>Dashboard</h2>
            </div>
          </div>
          
          <div className="col-md-6 d-flex justify-content-end align-items-end">
            
              <a href='mydashboard/add-details' className='btn btnuserform'>Add Details</a>
            
          </div>
          
        </div>
        
      </div>
      
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-sm-6">
          <div className="icon-card mb-30">
            <div className=" mr-10 rounded">
              <img className='widthimage mr-2' src='/assets/images/team-7.jpg'/>
            </div>
            <div className="content">
              <h6 className="mb-10">Welcome</h6>
              <h3 className="text-bold mb-10">{userData.user.name}</h3>
              <p className="text-sm text-success">
                <i className="lni lni-arrow-up"></i>
                <span className="text-gray">{userData.user.email}</span>
              </p>
            </div>
          </div>
          
        </div>
        
   
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="icon-card mb-30">
            <div className="icon primary">
              <i className="lni lni-credit-cards"></i>
            </div>
            <div className="content">
              <h6 className="mb-10">Your Plan</h6>
              <h3 className="text-bold mb-10">{userData.user.plan}</h3>
              <p className="text-sm text-danger">
                <i className="lni lni-arrow-down"></i> 
                <span className="text-gray">Expire in 7 days</span>
              </p>
            </div>
          </div>
          
        </div>
        
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="icon-card mb-30">
            <div className="icon orange">
              <i className="lni lni-user"></i>
            </div>
            <div className="content">
              <h6 className="mb-10">Price</h6>
              <h3 className="text-bold mb-10">$0</h3>
              <p className="text-sm text-danger">
                <i className="lni lni-arrow-down"></i> 4.99 $
                <a  href="/mydashboard/add-details" className='color--green-500,' ><span className="text-gray ml-10">Pay Now</span></a>
              </p>
            </div>
          </div>
          
        </div>
        


        <Qrcode />
      </div>
      
      
    </div>
    
  </section>
  </div>
  )
}

export default Dask
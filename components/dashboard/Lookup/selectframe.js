import React, { useState, useEffect } from 'react';

import MidSart from '../LookFile/secondfile';
import CusningThikness from '../LookFile/firstJson';
import Preservative from '../LookFile/thirdfile';
import Wrapping from '../LookFile/fouthfile';
import PackingCode from '../LookFile/ninefile';
import Smc from '../LookFile/fiveten';
import CleaningDrying from '../LookFile/cleaningPackage';
import CushningMaterial from '../LookFile/cushningMaterial'
import Unit from '../LookFile/eightfile';
import SpecialMarking from '../LookFile/specialMarking';
import UnitLabel from '../LookFile/unitlavel';
import OptionFeatures from '../LookFile/optionalProcedure';
import ShelfLife from '../LookFile/shelflife';
import StorageCodes from '../LookFile/storagCodes';
import Hazardous from '../LookFile/hazardous';







const Selectframe = () => {
  const [midSartData, setMidSartData] = useState(null);
  const [preservativeData, setPreservativeData] = useState(null);
  const [cushioningThicknessData, setCushioningThicknessData] = useState(null);
  const[wrapping, setWrapping] = useState(null)
  const [cleaningData, setCleaningData] = useState(null);
  const [cusning, setCushning] = useState(null)
  const[ unit, setunittest] = useState(null)
  const [pakingCode , setPackingCode] = useState(null)


  

  
   
   const handleGetData = () => {
    
    console.log('MidSart Data:', midSartData);
    console.log('Preservative Data:', preservativeData);
    console.log('Cushioning Thickness Data:', cushioningThicknessData);
    console.log("cleaningData", cleaningData)
    console.log("wrapping",wrapping)
    console.log("cushning", cusning)
    console.log("unit", unit)
    console.log("paking Code", pakingCode)
    
  };

  return (
    <div className='main-wrapper'>
      <section className='section'>
      <div className="container-fluid">
        <div className="title-wrap                                                                                                                                    per pt-30">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="title">
                <h2>Lookup</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="breadcrumb-wrapper">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#0">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item"><a href="#0">Pages</a></li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Settings
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

      <div className='row '>
    <div className='col-md-12'>
      <div className="form-elements-wrapper">
        <div className="row">
          <div className='col-lg-12'>
            <div className="card-style mb-30">
                <div className='row'>
                <MidSart setData={setMidSartData} />
                <CleaningDrying setData={setCleaningData} />
                        <Preservative setData={setPreservativeData} />
                        <Wrapping setData={setWrapping} />
                        <CushningMaterial setData={setCushning} />
                        <CusningThikness setData={setCushioningThicknessData} />
                        <Unit setData={setunittest} />
                      
                      <PackingCode setData={setPackingCode} />
                      <Smc />
                      <Hazardous />
                      <SpecialMarking />
                      <UnitLabel />
                      <OptionFeatures />
                      <ShelfLife />
                      <StorageCodes />

            

              


              <button className='main-btn active-btn btn-hover w-20 col-md-3 ml-' onClick={handleGetData}>Get the Data</button>

              
              
              </div>
            </div>
          </div>
          </div>

          
        </div>
      </div>
      </div>
      </div>
      </section>
    </div>
  );
}

export default Selectframe;

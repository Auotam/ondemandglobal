// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports

import TextField from '@mui/material/TextField'

import Autocomplete from '@mui/material/Autocomplete';




const path = require('path');


const Preservative = () => {

  const [movieOptions, setMovieOptions] = useState([]);
  



  
  // ** State
  const [openAlert, setOpenAlert] = useState(true)
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

  const onChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
    }
  }

  return (
<div className='col-md-4 col-lg-4 col-sm-12 mb-4'>
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={top100Films} // Pass the array of options here
    getOptionLabel={(option) => option.description} // Get the description field from each option object
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Preservative Materials" />}
  />
  </div>
  )
}

export default Preservative;

const top100Films = [
    {
        "code": "00",
        "description": "No requirement."
      },
      {
        "code": "01",
        "description": "MIL-PRF-16173, grade 1 corrosion preventive, solvent cutback, cold application, hard film."
      },
      {
        "code": "02",
        "description": "MIL-PRF-16173, grade 2 corrosion preventive, solvent cutback, cold application, soft film."
      },
      {
        "code": "03",
        "description": "MIL-PRF-16173, grade 3 corrosion preventive, solvent cutback, cold application, water displacing soft film."
      },
      {
        "code": "06",
        "description": "MIL-C-11796, class 3 light preservative compound, soft film, hot application."
      },
      {
        "code": "07",
        "description": "MIL-PRF-3150, medium preservative oil, cold application."
      },
      {
        "code": "09",
        "description": "MIL-PRF-32033, lubricating oil, general purpose preservative (water displacing, low temperature)"
      },
      {
        "code": "10",
        "description": "MIL-PRF-21260, preservative and break-in lubricating oil, internal combustion engine, Grade 10, 30 or 50"
      },
      {
        "code": "11",
        "description": "MIL-PRF-23827, grease, aircraft & instrument, gear & actuator screw."
      },
      {
        "code": "12",
        "description": "MIL-PRF-81322, grease, aircraft, general purpose."
      },
      {
        "code": "13",
        "description": "MIL-PRF-10924, grease, automotive and artillery."
      },
      {
        "code": "15",
        "description": "MIL-PRF-46170, hydraulic fluid, synthetic, rust inhibited, fire resistant"
      },
      {
        "code": "17",
        "description": "MIL-PRF-6085, lubricating oil, instrument, aircraft, low volatility."
      },
      {
        "code": "18",
        "description": "MIL-STD-2073-1B/2C Code: MIL-P-3420, or MIL-B-22019, VCI treated carrier type."
      },
      {
        "code": "19",
        "description": "MIL-PRF-16173, grade 4, corrosion preventive, solvent cutback, cold application, transparent, nontacky."
      },
      {
        "code": "20",
        "description": "MIL-PRF-46002, preservative oil, contact and volatile corrosion inhibited"
      },
      {
        "code": "21",
        "description": "MIL-PRF-16173, Grade 5, corrosion preventive, solvent cutback, water displacing soft film, low pressure steam removable"
      },
      {
        "code": "26",
        "description": "MIL-STD-2073-1B/2C Code: MIL-C-0083933(MR) corrosion preventive compound, cold application (for motor vehicles), fire retardant."
      },
      {
        "code": "27",
        "description": "MIL-STD-2073-1D Code: MIL-C-16555, type I, fire retardant, aluminum and aluminum gray."
      },
      {
        "code": "28",
        "description": "MIL-STD-2073-1D Code: MIL-C-16555, type II, class 1, fire retardant, olive drab."
      },
      {
        "code": "29",
        "description": "MIL-STD-2073-1D Code: MIL-C-16555, type II, class 2, fire retardant, Marine Corps green."
      },
      {
        "code": "30",
        "description": "MIL-PRF-46010, corrosion inhibiting lubricant, solid film, heat cured"
      },
      {
        "code": "31",
        "description": "MIL-C-6529, Type II, corrosion preventive, ready mixed, for reciprocating aircraft engines"
      },
      {
        "code": "32",
        "description": "MIL-C-6529, Type III, corrosion preventive, ready mixed, for turbojet aircraft engines"
      },
      {
        "code": "33",
        "description": "MIL-PRF-7808, lubricating oil, synthetic base, for aircraft turbine engines"
      },
      {
        "code": "38",
        "description": "MIL-P-149, strippable plastic coating (hot dipping)"
      },
      {
        "code": "43",
        "description": "MIL-STD-2073-1D Code: MIL-G-25537, grease, aircraft, helicopter."
      },
      {
        "code": "49",
        "description": "Vendor's protective grease or oil coating."
      },
      {
        "code": "50",
        "description": "MIL-PRF-7870, lubricating oil, low temperature"
      },
      {
        "code": "51",
        "description": "MIL-PRF-6081, lubricating oil, jet engine, Grade 1010"
      },
      {
        "code": "52",
        "description": "MIL-PRF-8188, corrosion preventive oil, synthetic base, for aircraft gas turbine engines"
      },
      {
        "code": "53",
        "description": "MIL-STD-2073-1D Code: MIL-L-6082, lubricating oil, aircraft, reciprocating (piston) engine (fire retardant)."
      },
      {
        "code": "56",
        "description": "MIL-PRF-23699, lubricating oil, synthetic base, for aircraft turbine engines"
      },
      {
        "code": "57",
        "description": "MIL-PRF-21260, Grade 10, light viscosity preservative and break-in lubricating oil, internal combustion engine"
      },
      {
        "code": "58",
        "description": "MIL-STD-2073-1D Code: MIL-L-21260, lubricating oil, internal combustion engine, preservative, grade 2, medium viscosity oil."
      },
      {
        "code": "59",
        "description": "MIL-STD-2073-1D Code: MIL-L-21260, lubricating oil, internal combustion engine, preservative, grade 3, heavy viscosity oil."
      },
      {
        "code": "65",
        "description": "MIL-PRF-83282, hydraulic fluid, synthetic, fire retardant"
      },
      {
        "code": "71",
        "description": "MIL-STD-2073-1B/2C Code: MIL-P-3420, packaging material, volatile corrosion inhibitor treated."
      },
     
  
   {
        "code": "72",
        "description": "MIL-PRF-2104, lubricating oil, gear, multipurpose, steam turbine and reduction, rust inhibited"
      },
      {
        "code": "76",
        "description": "MIL-STD-2073-1D Code: MIL-L-17672, lubricating oil, steam turbine."
      },
      {
        "code": "77",
        "description": "MIL-PRF-23699, lubricating oil, synthetic base, preservative (internal and external)"
      },
      {
        "code": "78",
        "description": "MIL-PRF-23699, lubricating oil, synthetic base, NATO code O-155 (OD-2010)"
      },
      {
        "code": "80",
        "description": "MIL-PRF-23699, lubricating oil, synthetic base, NATO code O-156 (OD-2020)"
      },
      {
        "code": "85",
        "description": "MIL-PRF-23699, lubricating oil, synthetic base, preservative (internal only)"
      },
      {
        "code": "86",
        "description": "MIL-PRF-23699, lubricating oil, synthetic base, preservative (external only)"
      }
  ]



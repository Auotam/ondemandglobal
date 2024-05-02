// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports

import TextField from '@mui/material/TextField'

import Autocomplete from '@mui/material/Autocomplete';




const path = require('path');


const Wrapping = () => {

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
    <div className='col-md-4 col-lg-4 col-sm-12 -mb-4'>

    <Autocomplete fullWidth
    disablePortal
    id="combo-box-demo"
    options={top100Films} // Pass the array of options here
    getOptionLabel={(option) => option.description} // Get the description field from each option object
    
    renderInput={(params) => <TextField {...params} label="Wrapping Materials" />}
  />
  </div>
  )
}

export default Wrapping;

const top100Films = [
  {
    "code": "00",
    "description": "No requirement."
  },
  {
    "code": "AA",
    "description": "MIL-STD-2073-1B/2C Code: Material used shall be in accordance with the requirements of MIL-P-116."
  },
  {
    "code": "AB",
    "description": "MIL-STD-2073-1B/2C Code: MIL-B-131, type II, barrier, watervaporproof, flexible, heat-sealable, flame resistant."
  },
  {
    "code": "BA",
    "description": "QQ-A-1876, aluminum foil"
  },
  {
    "code": "CA",
    "description": "A-A-203, kraft wrapping paper."
  },
  {
    "code": "CB",
    "description": "MIL-STD-2073-1B/2C Code: UU-P-268, paper, kraft, wrapping, type I, grade B, 30 lb. basis weight."
  },
  {
    "code": "CC",
    "description": "MIL-STD-2073-1B/2C Code: UU-P-268, paper, kraft, wrapping, type I, grade B, 40 lb. basis weight."
  },
  {
    "code": "CD",
    "description": "MIL-STD-2073-1B/2C Code: UU-P-268, paper, kraft, wrapping, type I, grade B, 60 lb. basis weight."
  },
  {
    "code": "CE",
    "description": "MIL-STD-2073-1B/2C Code: UU-P-268, paper, kraft, wrapping, type II, grade C, 60 lb. basis weight, fire retardant."
  },
  {
    "code": "CF",
    "description": "MIL-STD-2073-1B/2C Code: UU-P-268, paper, kraft, wrapping, type II, grade D, 55 lb. basis weight, fire retardant."
  },
  {
    "code": "DA",
    "description": "A-A-1249, paper, tissue."
  },
  {
    "code": "DB",
    "description": "MIL-STD-2073-1B/2C Code: UU-P-553, paper, wrapping, tissue, type I."
  },
  {
    "code": "DC",
    "description": "MIL-STD-2073-1B/2C Code: UU-P-553, paper, wrapping, tissue, type II."
  },
  {
    "code": "EA",
    "description": "MIL-DTL-17667, neutral wrapping paper."
  },
  {
    "code": "EB",
    "description": "MIL-DTL-17667, Type I, neutral wrapping paper, flat."
  },
  {
    "code": "EC",
    "description": "MIL-DTL-17667, Type II, neutral wrapping paper, creped."
  },
  {
    "code": "ED",
    "description": "MIL-STD-2073-1B/2C Code: MIL-P-17667, chemically neutral wrapping paper, type II, class 2."
  },
  {
    "code": "FA",
    "description": "MIL-P-130, laminated and creped wrapping paper."
  },
  {
    "code": "FB",
    "description": "MIL-STD-2073-1B/2C Code: MIL-P-130, laminated and creped wrapping paper, type I, 150 lb basis wt."
  },
  {
    "code": "FC",
    "description": "MIL-STD-2073-1B/2C Code: MIL-P-130, laminated and creped wrapping paper, type II, 125 lb basis wt."
  },
  {
    "code": "FD",
    "description": "MIL-STD-2073-1B/2C Code: MIL-P-130, laminated and creped wrapping paper, type III, 100 lb basis wt."
  },
  {
    "code": "GA",
    "description": "MIL-STD-2073-1B/2C Code: MIL-B-121, greaseproof, waterproof barrier."
  },
  {
    "code": "GB",
    "description": "MIL-PRF-121, greaseproof, waterproof barrier."
  },
  {
    "code": "GC",
    "description": "MIL-PRF-121, Type I, medium duty, greaseproof, waterproof barrier."
  },
  {
    "code": "GD",
    "description": "MIL-PRF-121, Type II, heavy duty, greaseproof, waterproof barrier."
  },
  {
    "code": "GE",
    "description": "MIL-PRF-121, Type III, extra heavy duty, greaseproof, waterproof barrier."
  },
  {
    "code": "HA",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, cellulose wadding."
  },
  {
    "code": "HB",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, cellulose wadding, type I."
  },
  {
    "code": "HC",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, cellulose wadding, type II."
  },
  {
    "code": "HD",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, cellulose wadding, type III."
  },
  {
    "code": "HE",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, cellulose wadding, type IV."
  },
  {
    "code": "HF",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, cellulose wadding, type V."
  },
  {
    "code": "IA",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, paper, cushioning, type I, grade B, 20 lb basis wt."
  },
  {
    "code": "IB",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, paper, cushioning, type I, grade B, 30 lb basis wt."
  },
  {
    "code": "IC",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, paper, cushioning, type I, grade B, 40 lb basis wt."
  },
  {
    "code": "ID",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, paper, cushioning, type I, grade B, 50 lb basis wt."
  },
  {
    "code": "IE",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, paper, cushioning, type I, grade B, 60 lb basis wt."
  },
  {
    "code": "IF",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, paper, cushioning, type I, grade B, 70 lb basis wt."
  },
  {
    "code": "IG",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, paper, cushioning, type I, grade B, 80 lb basis wt."
  },
  {
    "code": "IH",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, paper, cushioning, type I, grade B, 90 lb basis wt."
  },
  {
    "code": "II",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, paper, cushioning, type I, grade B, 100 lb basis wt."
  },
  {
    "code": "JA",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, paper, cushioning, type II, grade B, 30 lb basis wt."
  },
  {
    "code": "JB",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, paper, cushioning, type II, grade B, 40 lb basis wt."
  },
  {
    "code": "JC",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, paper, cushioning, type II, grade B, 50 lb basis wt."
  },
  {
    "code": "JD",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, paper, cushioning, type II, grade B, 60 lb basis wt."
  },
  {
    "code": "JE",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, paper, cushioning, type II, grade B, 70 lb basis wt."
  },
  {
    "code": "JF",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, paper, cushioning, type II, grade B, 80 lb basis wt."
  },
  {
    "code": "JG",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, paper, cushioning, type II, grade B, 90 lb basis wt."
  },
  {
    "code": "JH",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, paper, cushioning, type II, grade B, 100 lb basis wt."
  },
  {
    "code": "KA",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, plastic foam."
  },
  {
    "code": "KB",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, plastic foam, urethane, open cell, MIL-P-26514, type I."
  },
  {
    "code": "KC",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, plastic foam, urethane, open cell, MIL-P-26514, type II."
  },
  {
    "code": "KD",
    "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, plastic foam, urethane, open cell, MIL-P-26514, type III."
  },
  {
    "code": "KE",
   "description": "MIL-STD-2073-1B/2C Code: MIL-C-104, plastic foam, urethane, open cell, MIL-P-26514, type IV."
  }
  ]



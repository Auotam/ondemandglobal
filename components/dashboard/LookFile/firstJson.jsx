// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports

import TextField from '@mui/material/TextField'

import Autocomplete from '@mui/material/Autocomplete';

const CusningThikness = () => {
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



  const top100Films = [
    {
      "code": "0",
      "description": "Not applicable."
    },
    {
      "code": "A",
      "description": "1/4 inch thick."
    },
    {
      "code": "B",
      "description": "1/2 inch thick."
    },
    {
      "code": "C",
      "description": "3/4 inch thick."
    },
    {
      "code": "D",
      "description": "1 inch thick."
    },
    {
      "code": "E",
      "description": "1-1/4 inches thick."
    },
    {
      "code": "F",
      "description": "1-1/2 inches thick."
    },
    {
      "code": "G",
      "description": "1-3/4 inches thick."
    },
    {
      "code": "H",
      "description": "2 inches thick."
    },
    {
      "code": "J",
      "description": "2-1/4 inches thick."
    },
    {
      "code": "K",
      "description": "2-1/2 inches thick."
    },
    {
      "code": "L",
      "description": "2-3/4 inches thick."
    },
    {
      "code": "M",
      "description": "3 inches thick."
    },
    {
      "code": "N",
      "description": "3-1/4 inches thick."
    },
    {
      "code": "P",
      "description": "3-1/2 inches thick."
    },
    {
      "code": "Q",
      "description": "3-3/4 inches thick."
    },
    {
      "code": "R",
      "description": "4 inches thick."
    },
    {
      "code": "S",
      "description": "4-1/4 inches thick."
    },
    {
      "code": "T",
      "description": "4-1/2 inches thick."
    },
    {
      "code": "U",
      "description": "4-3/4 inches thick."
    },
    {
      "code": "V",
      "description": "5 inches thick."
    },
    {
      "code": "W",
      "description": "5-1/4 inches thick."
    },
    {
      "code": "X",
      "description": "MIL-STD-2073-1D Code:As required to protect the item or elements of the package."
    },
    {
      "code": "Y",
      "description": "MIL-STD-2073-1B/2C Code: Packager's option so long as all other contractual requirements are met."
    },
    {
      "code": "Z",
      "description": "Special requirements - see specific instructions or drawings provided."
    },
    {
      "code": "",
      "description": "Not Specified."
    }
  ]

  return (
    <div className='col-md-4 col-lg-4 col-sm-12 mb-4'>
    <Autocomplete
      fullWidth
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => `${option.code} - ${option.description}`}
      renderInput={(params) => <TextField {...params} label="Cushioning Thickness" />}
      filterOptions={(options, state) => {
        if (!state.inputValue) return options; // if input value is empty, return all options
        return options.filter(option => option.code.toLowerCase().includes(state.inputValue.toLowerCase()));
      }}
    />
    </div>
  );
}

export default CusningThikness;



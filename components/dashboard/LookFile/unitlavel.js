// ** React Imports
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const path = require("path");
const UnitLabel = ({ setData }) => {
  const [movieOptions, setMovieOptions] = useState([]);

  
  const handleGetData = () => {
    
    const newData = 'Data from MidSart component';
    
    setData(newData);
  };

  const handleOptionSelected = (option) => {
    
    setData(option);
  };

  // ** State
  const [openAlert, setOpenAlert] = useState(true);
  const [imgSrc, setImgSrc] = useState("/images/avatars/1.png");

  const onChange = (file) => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result);
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <div className='col-md-4 col-lg-4 col-sm-12 mb-4'>
    <Autocomplete
      fullWidth
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => `${option.code} - ${option.description}`}
      renderInput={(params) => <TextField {...params} label="Unit Container Level" />}
      filterOptions={(options, state) => {
        if (!state.inputValue) return options;
        return options.filter(option => option.code.toLowerCase().includes(state.inputValue.toLowerCase()));
      }}
      onChange={(event, value) => handleOptionSelected(value)} 
    />
  </div>
  );
};

export default UnitLabel;

const top100Films = [
  {
    code: "A",
    description: "Unit container provides level A packing protection."
  },
  {
    code: "B",
    description: "Unit container provides level B packing protection."
  },
  {
    code: "C",
    description: "MIL-STD-2073-1B/2C Code: Unit container provides level C packing protection."
  },
  {
    code: "D",
    description: "MIL-STD-2073-1D Code: No container is required."
  },
  {
    code: "M",
    description: "MIL-STD-2073-1D Code: Unit container provides minimal packing protection (see 5.4)."
  },
  {
    code: "O",
    description: "Unit container is not an acceptable shipping container."
  },
  {
    code: "Z",
    description: "Unit container requires special consideration (air only, inside storage only, etc.)"
  },
  {
    code: "Not Specified",
    description: "Not Specified."
  }
]

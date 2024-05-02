// ** React Imports
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const path = require("path");
const OptionFeatures = ({ setData }) => {
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
      renderInput={(params) => <TextField {...params} label="Option Features" />}
      filterOptions={(options, state) => {
        if (!state.inputValue) return options;
        return options.filter(option => option.code.toLowerCase().includes(state.inputValue.toLowerCase()));
      }}
      onChange={(event, value) => handleOptionSelected(value)} 
    />
  </div>
  );
};

export default OptionFeatures;

const top100Films =[
  {
    code: "A",
    description: "Packaging is in accordance with a procedural specification or a SPI. The appropriate specification number will be shown in-the-clear in the supplemental data area."
  },
  {
    code: "E",
    description: "Certain options can be exercised as to specific method of preservation or DoD approved packaging materials, but only as indicated in supplemental data. However, basic preservation method shall be retained and unit package dimensions shall not be increased by more than one inch. Equal or better protection shall be given the item and there shall be no increase in the package cost."
  },
  {
    code: "F",
    description: "For other than SPI items, optional use of flexible polyurethane foam-in-place cushioning is permitted. Cushioning shall conform to MIL-F-83671, Class 2, grade B. If F-I-P requires a larger container than conventional packaging would require, the F-I-P container requirements will be coded in place of the conventional data."
  },
  {
    code: "M",
    description: "All packaging data is mandatory for compliance and no substitutions are permitted. Fast packs should be included in this category."
  },
  {
    code: "O",
    description: "Options can be exercised as to specific method of preservation or DoD approved packaging materials to be used. However, basic preservation method shall be retained, supplemental data shall be complied with, and unit package dimensions shall not be increased by more than one inch. Equal or better protection shall be given the item and there shall be no increase in the package cost."
  },
  {
    code: "P",
    description: "For SPI items, polyurethane foam-in-place is permitted as specified on the SPI only when the SPI pack is not available."
  },
  {
    code: "R",
    description: "For other than SPI items, optional use of rigid polyurethane foam-in-place cushioning is permitted. Cushioning shall conform to MIL-F-83671, Class 1. If F-I-P requires a larger container than conventional packaging would require, the F-I-P container requirements will be coded in place of the conventional data."
  },
  {
    code: "",
    description: "Not Specified."
  }
]

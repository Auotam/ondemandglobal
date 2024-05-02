// ** React Imports
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const path = require("path");
const CleaningDrying = ({ setData }) => {
  const [movieOptions, setMovieOptions] = useState([]);

  // Function to handle data retrieval and update parent component's state
  const handleGetData = () => {
    // Simulated data retrieval (replace with actual data fetching logic)
    const newData = 'Data from MidSart component';
    // Call the setData function passed via props to update parent component's state
    setData(newData);
  };

  const handleOptionSelected = (option) => {
    // Call the setData function from props with the selected option
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
      renderInput={(params) => <TextField {...params} label="Cleaning & Drying" />}
      filterOptions={(options, state) => {
        if (!state.inputValue) return options;
        return options.filter(option => option.code.toLowerCase().includes(state.inputValue.toLowerCase()));
      }}
      onChange={(event, value) => handleOptionSelected(value)} 
    />
  </div>
  );
};

export default CleaningDrying;

const top100Films = [
  {
    code: "0",
    description: "No requirement."
  },
  {
    code: "1",
    description: "Any suitable process that is not injurious to the item."
  },
  {
    code: "3",
    description: "MIL-STD-2073-1B/2C code: Two-step petroleum solvent."
  },
  {
    code: "5",
    description: "MIL-STD-2073-1B/2C code: Petroleum solvent followed by finger print removal."
  },
  {
    code: "6",
    description: "MIL-STD-2073-1B/2C code: Petroleum solvent or vapor degreasing followed by finger print removal."
  },
  {
    code: "7",
    description: "MIL-STD-2073-1B/2C code: Vapor degreasing."
  },
  {
    code: "8",
    description: "MIL-STD-2073-1B/2C code: Finger print removal."
  },
  {
    code: "A",
    description: "MIL-STD-2073-1B/2C code: Vapor degreasing followed by finger print removal."
  },
  {
    code: "B",
    description: "MIL-STD-2073-1B/2C code: Clean lenses and optical equipment in accordance with MIL-O-16898."
  },
  {
    code: "C",
    description: "MIL-STD-2073-1B/2C code: Followed by material conforming to O-M-232."
  },
  {
    code: "D",
    description: "MIL-STD-2073-1B/2C code: Alkaline cleaning."
  },
  {
    code: "E",
    description: "MIL-STD-2073-1B/2C code: Cleaning shall be in accordance with MIL-M-9950."
  },
  {
    code: "F",
    description: "MIL-STD-2073-1B/2C code: Clean for oxygen service in accordance with industry practice. Petroleum and other inflammable solvents shall not be used."
  },
  {
    code: "G",
    description: "MIL-STD-2073-1B/2C code: Electrocleaning."
  },
  {
    code: "H",
    description: "MIL-STD-2073-1B/2C code: Emulsion cleaning."
  },
  {
    code: "K",
    description: "MIL-STD-2073-1B/2C code: Abrasive blast (honing process)."
  },
  {
    code: "L",
    description: "MIL-STD-2073-1B/2C code: Soft grit blast."
  },
  {
    code: "M",
    description: "MIL-STD-2073-1B/2C code: Ultrasonic in accordance with industry practice."
  },
  {
    code: "N",
    description: "MIL-STD-2073-1B/2C code: Cleaning shall be in accordance with MIL-STD-767."
  },
  {
    code: "P",
    description: "MIL-STD-2073-1B/2C code: Blast of prepared dry and clean compressed air."
  },
  {
    code: "Q",
    description: "MIL-STD-2073-1B/2C code: Wipe with clean, dry, lint-free cloths or specially prepared wiping papers."
  },
  {
    code: "R",
    description: "MIL-STD-2073-1B/2C code: Clean for high pressure air service in accordance with industry practice to assure safe equipment. Petroleum and other flammable solvents shall not be used. Attach certification of special cleaning used to each unit."
  },
  {
    code: "X",
    description: "MIL-STD-2073-1D code: See method of preservation code for this requirement."
  },
  {
    code: "Y",
    description: "MIL-STD-2073-1B/2C code: Packager's option so long as all other contractual requirements are met."
  },
  {
    code: "Z",
    description: "Special requirements - see specific instructions or drawings provided."
  },
  {
    code: "Not Specified",
    description: "Not Specified."
  }
]


// ** React Imports
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const path = require("path");
const Hazardous = ({ setData }) => {
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
      renderInput={(params) => <TextField {...params} label="Hazardous Material" />}
      filterOptions={(options, state) => {
        if (!state.inputValue) return options;
        return options.filter(option => option.code.toLowerCase().includes(state.inputValue.toLowerCase()));
      }}
      onChange={(event, value) => handleOptionSelected(value)} 
    />
  </div>
  );
};

export default Hazardous;

const top100Films = [
  {
    code: "0",
    description: "No Doument Found."
  },
]


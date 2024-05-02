// ** React Imports
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const path = require("path");
const SpecialMarking = ({ setData }) => {
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
      renderInput={(params) => <TextField {...params} label="Special Markings" />}
      filterOptions={(options, state) => {
        if (!state.inputValue) return options;
        return options.filter(option => option.code.toLowerCase().includes(state.inputValue.toLowerCase()));
      }}
      onChange={(event, value) => handleOptionSelected(value)} 
    />
  </div>
  );
};

export default SpecialMarking;

const top100Films = [
    {
      code: "00",
      description: "No special marking"
    },
    {
      code: "01",
      description: "Fragile."
    },
    {
      code: "02",
      description: "Arrow up."
    },
    {
      code: "03",
      description: "Method 50."
    },
    {
      code: "04",
      description: "Fragile, Arrow up and Method 50."
    },
    {
      code: "05",
      description: "Delicate instrument."
    },
    {
      code: "06",
      description: "Delicate instrument and Arrow up."
    },
    {
      code: "07",
      description: "Glass - do not drop."
    },
    {
      code: "08",
      description: "MIL-STD-2073-1D Code: Keep dry."
    },
    {
      code: "09",
      description: "MIL-STD-2073-1D Code: Perishable - keep frozen."
    },
    {
      code: "10",
      description: "MIL-STD-2073-1D Code: Keep at 40 degrees F temperature."
    },
    {
      code: "11",
      description: "MIL-STD-2073-1D Code: Sling point."
    },
    {
      code: "12",
      description: "Fragile, Method 50."
    },
    {
      code: "13",
      description: "MIL-STD-2073-1D Code: Open this side."
    },
    {
      code: "14",
      description: "Center of balance."
    },
    {
      code: "15",
      description: "MIL-STD-2073-1D Code: Use no hooks."
    },
    {
      code: "16",
      description: "MIL-STD-2073-1D Code: Top."
    },
    {
      code: "17",
      description: "Reusable container."
    },
    {
      code: "18",
      description: "MIL-STD-2073-1D Code: Remove top first."
    },
    {
      code: "19",
      description: "Method 50 & reusable container."
    },
    {
      code: "20",
      description: "Do not bend."
    },
    {
      code: "21",
      description: "MIL-STD-2073-1D Code: Do not sling."
    },
    {
      code: "23",
      description: "MIL-STD-2073-1D Code: Perishable biologicals, do not freeze."
    },
    {
      code: "24",
      description: "Open for inspection or use only."
    },
    {
      code: "25",
      description: "MIL-STD-2073-1D Code: Box ____ of ____ ."
    },
    {
      code: "26",
      description: "MIL-STD-2073-1D Code: Load bearing area."
    },
    {
      code: "28",
      description: "MIL-STD-2073-1D Code: Do not drop or throw."
    },
    {
      code: "29",
      description: "MIL-STD-2073-1D Code: Do not hump."
    },
    {
      code: "30",
      description: "MIL-STD-2073-1D Code: Top heavy."
    },
    {
      code: "31",
      description: "MIL-STD-2073-1D Code: Center of gravity."
    },
    {
      code: "32",
      description: "Type I shelf life."
    },
    {
      code: "33",
      description: "Type II shelf life."
    },
    {
      code: "34",
      description: "MIL-STD-2073-1D Code: Manufacturer's part number."
    },
    {
      code: "36",
      description: "Fragile, arrow up and glass."
    },
    {
      code: "37",
      description: "Fragile, arrow up."
    },
    {
      code: "39",
      description: "ESD sensitive electronic device, requirements of MIL-STD-129 apply."
    },
    {
      code: "40",
      description: "Markings shall be omitted for sensitive, controlled or pilferable items per MIL-STD-129."
    },
    {
      code: "50",
      description: "MIL-STD-2073-1B/2C Code: Marking shall be accomplished in accordance with the marking requirements in the applicable commodity specification."
    },
    {
      code: "51",
      description: "MIL-STD-2073-1D Code: Marking shall be accomplished in accordance with the marking requirements in the applicable procedural packaging specification."
    },
    {
      code: "52",
      description: "MIL-STD-2073-1D Code: Hardness critical"
    },
    {
      code: "60",
      description: "Asbestos Warning Label"
    },
    {
      code: "99",
      description: "MIL-STD-2073-1B/2C Code: No codes in this table apply; only MIL-STD-129 markings apply."
    },
    {
      code: "ZZ",
      description: "Special requirements."
    },
    {
      code: "",
      description: "Not Specified."
    }
  ]
  
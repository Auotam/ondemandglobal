// ** React Imports
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const path = require("path");
const StorageCodes = ({ setData }) => {
  const [movieOptions, setMovieOptions] = useState([]);

  
  const handleGetData = () => {
    const newData = 'Data from MidSart component';
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

export default StorageCodes;

const top100Films = [
  {
    code: "2",
    description: "Medical Controlled Humidity – Not to Exceed 40% Relative Humidity"
  },
  {
    code: "3",
    description: "Medical Controlled Room Temperature – 68° F to 77° F (20° C to 25° C) Excursions are permitted between 59° and 86° F (15° and 30° C)"
  },
  {
    code: "4",
    description: "Medical Freeze – -13° F to 14° F (-25° C to -10° C)"
  },
  {
    code: "5",
    description: "Medical Refrigerated – 36° F to 46° F (2° C to 8° C) (DO NOT FREEZE)"
  },
  {
    code: "6",
    description: "Medical Refrigerated Vault – 36° F to 46° F (2° C to 8° C) (Includes Schedule II drugs) (DO NOT FREEZE)"
  },
  {
    code: "7",
    description: "Medical Refrigerated Secured (Includes controlled or limited access) – 36° F to 46° F (2° C to 8° C) (Includes Schedule III, IV, and V drugs) (DO NOT FREEZE)"
  },
  {
    code: "8",
    description: "Medical Controlled Room Temperature Vault – 68° F to 77° F (20° C to 25° C) (Includes Schedule II drugs) Excursions are permitted between 59° and 86° F (15° and 30° C)"
  },
  {
    code: "9",
    description: "Medical Controlled Room Temperature Secured (Includes controlled or limited access) – 68° F to 77° F (20° C to 25° C) (Includes Schedule III, IV, and V drugs) Excursions are permitted between 59° and 86° F (15° and 30° C)"
  },
  {
    code: "A",
    description: "Heated General Purpose – Heated 40° F and above"
  },
  {
    code: "B",
    description: "Unheated General Purpose"
  },
  {
    code: "C",
    description: "Controlled Humidity – 40% - 50% Relative Humidity (RH)"
  },
  {
    code: "D",
    description: "Controlled Room Temperature – 60° F to 80° F (16° C to 26° C)"
  },
  {
    code: "E",
    description: "Reserved"
  },
  {
    code: "F",
    description: "Freeze – -4° F to 1° F (-20° C to -18° C)"
  },
  {
    code: "G",
    description: "Freeze – Below 32° F (Below 0° C)"
  },
  {
    code: "H",
    description: "Hazardous Material"
  },
  {
    code: "J",
    description: "Reserved"
  },
  {
    code: "K",
    description: "Reserved"
  },
  {
    code: "L",
    description: "Reserved"
  },
  {
    code: "M",
    description: "Reserved"
  },
  {
    code: "N",
    description: "Hazardous Material/Refrigerated – 36° F to 46° F (2° C to 8° C)"
  },
  {
    code: "P",
    description: "Reserved"
  },
  {
    code: "Q",
    description: "Reserved"
  },
  {
    code: "R",
    description: "Refrigerated (Chill) – 32° F to 50° F (0° C to 10° C)"
  },
  {
    code: "S",
    description: "Shed – Structure without complete sides or end walls"
  },
  {
    code: "T",
    description: "Secured (Includes controlled or limited access)"
  },
  {
    code: "U",
    description: "Uncovered Space (Open Storage)"
  },
  {
    code: "V",
    description: "Secured Vault"
  },
  {
    code: "W",
    description: "Wet Storage (Docks, Piers)"
  },
  {
    code: "X",
    description: "None Assigned by Inventory Control Point (Any type space is acceptable)"
  },
  {
    code: "Y",
    description: "Ammunition (Class V; Igloos and Magazines)"
  },
  {
    code: "Z",
    description: "Special (see the item’s storage serviceability standard or technical manual)"
  },
  {
    code: "",
    description: "Not Specified."
  }
]

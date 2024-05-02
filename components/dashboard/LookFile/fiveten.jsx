// ** React Imports
import { useState, useEffect } from "react";

// ** MUI Imports

import TextField from "@mui/material/TextField";

import Autocomplete from "@mui/material/Autocomplete";

const path = require("path");

const Smc = () => {
  const [movieOptions, setMovieOptions] = useState([]);

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
    <div className="col-md-4 col-lg-4 col-sm-12 mb-4">
      <Autocomplete
        fullWidth
        disablePortal
        id="combo-box-demo"
        options={top100Films} // Pass the array of options here
        getOptionLabel={(option) => option.description} // Get the description field from each option object
        renderInput={(params) => (
          <TextField {...params} label="Special Material Content" />
        )}
      />
    </div>
  );
};

export default Smc;

const top100Films = [
  {
    Code: "A",
    "SMCC Image": "",
    "SMCC Description": "Medical",
  },
  {
    Code: "B",
    "SMCC Image": "",
    "SMCC Description": "Lithium battery, large form",
  },
  {
    Code: "C",
    "SMCC Image": "",
    "SMCC Description": "Corrosive Solids/Corrosive Liquids (other than acid)",
  },
  {
    Code: "D",
    "SMCC Image": "",
    "SMCC Description":
      "Alcohol (ethanol, ethyl alcohol, or grain alcohol only). Storage and custody requirements for medical supplies are provided in NAVMED P-117, Manual of the Medical Department.",
  },
  {
    Code: "E",
    "SMCC Image": "",
    "SMCC Description": "Lithium battery",
  },
  {
    Code: "F",
    "SMCC Image": "",
    "SMCC Description":
      "Flammable Liquid, flash point not more than 60 degrees C (140 degrees F)",
  },
  {
    Code: "G",
    "SMCC Image": "",
    "SMCC Description":
      "Combustible Liquid, flash point 60 degrees C (140 degrees F) to 93 degrees C (200 degrees F)",
  },
  {
    Code: "H",
    "SMCC Image": "",
    "SMCC Description": "Item that is hazardous under typical use or handling",
  },
  {
    Code: "I",
    "SMCC Image": "",
    "SMCC Description":
      "Aerosols. A non-refillable receptacle containing a compressed, liquefied or dissolved gas under pressure, with a self-closing release device. Consult MSDS and Label precautions",
  },
  {
    Code: "J",
    "SMCC Image": "",
    "SMCC Description": "Oxidizing Material",
  },
  {
    Code: "K",
    "SMCC Image": "",
    "SMCC Description": "Organic Peroxides",
  },
  {
    Code: "L",
    "SMCC Image": "",
    "SMCC Description": "Radioactive material",
  },
  {
    Code: "M",
    "SMCC Image": "",
    "SMCC Description": "Magnetic",
  },
  {
    Code: "N",
    "SMCC Image": "",
    "SMCC Description":
      "Asbestos (item capable of emitting asbestos dust/fibers)",
  },
  {
    Code: "O",
    "SMCC Image": "",
    "SMCC Description":
      "Off-Gassing considerations/atmospheric controlled item for submarines",
  },
  {
    Code: "P",
    "SMCC Image": "",
    "SMCC Description":
      "Poison (including Methanol, Wood Alcohol, Denatured Alcohol). Storage & Custody requirements for medical items are found in NAVMED P-117, Manual of the Medical Department.",
  },
  {
    Code: "Q",
    "SMCC Image": "",
    "SMCC Description": "Explosive Non-Ordnance Items",
  },
  {
    Code: "R",
    "SMCC Image": "",
    "SMCC Description": "Radioactive Material",
  },
  {
    Code: "S",
    "SMCC Image": "",
    "SMCC Description": "Oils/Petroleum Products (Not otherwise specified)",
  },
  {
    Code: "T",
    "SMCC Image": "",
    "SMCC Description":
      "Toxic substance. Storage and custody requirements for medical supplies are provided in NAVMED P-117, Manual of the Medical Department.",
  },
  {
    Code: "U",
    "SMCC Image": "",
    "SMCC Description":
      "Mercury (items containing Mercury). Follow established Mercury Control and Abatement programs.",
  },
  {
    Code: "V",
    "SMCC Image": "",
    "SMCC Description": "Acid",
  },
  {
    Code: "W",
    "SMCC Image": "",
    "SMCC Description": "Non-Flammable Compressed Gas",
  },
  {
    Code: "X",
    "SMCC Image": "",
    "SMCC Description": "Radioactive and Magnetic Material",
  },
  {
    Code: "Y",
    "SMCC Image": "",
    "SMCC Description": "Magnetically sensitive",
  },
  {
    Code: "Z",
    "SMCC Image": "",
    "SMCC Description": "Flammable Solids",
  },
  {
    Code: "0",
    "SMCC Image": "",
    "SMCC Description": "(Reserved)",
  },
  {
    Code: "1",
    "SMCC Image": "",
    "SMCC Description":
      "Item that has a hazardous component and is regulated for transportation",
  },
  {
    Code: "2",
    "SMCC Image": "",
    "SMCC Description":
      "Electrostatic discharge (ESD)/electromagnetic (EM) sensitive Item",
  },
  {
    Code: "3",
    "SMCC Image": "",
    "SMCC Description": "Electrostatic discharge sensitive (ESDS) Item",
  },
  {
    Code: "4",
    "SMCC Image": "",
    "SMCC Description":
      "Item or part that contains hazardous material(s) and could require special handling during maintenance or disposal operations",
  },
  {
    Code: "5",
    "SMCC Image": "",
    "SMCC Description":
      "Hazardous Material (non-specific), item's unique formulations may produce different hazard classes. Consult item's Material Safety Data Sheet (MSDS) or container warning label.",
  },
  {
    Code: "6",
    "SMCC Image": "",
    "SMCC Description": "Military munitions",
  },
  {
    Code: "7",
    "SMCC Image": "",
    "SMCC Description": "Dangerous When Wet material",
  },
  {
    Code: "8",
    "SMCC Image": "",
    "SMCC Description": "Spontaneously Combustible Material",
  },
  {
    Code: "9",
    "SMCC Image": "",
    "SMCC Description": "Non-hazardous or non-sensitive",
  },
  {
    Code: "",
    "SMCC Image": "",
    "SMCC Description": "Item not evaluated",
  },
];

// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports

import TextField from '@mui/material/TextField'

import Autocomplete from '@mui/material/Autocomplete';

const CushningMaterial = () => {
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
      "description": "No requirement."
    },
    {
      "code": "00",
      "description": "No requirement."
    },
    {
      "code": "AA",
      "description": "Any material in accordance with MIL-P-116."
    },
    {
      "code": "AB",
      "description": "Treated latex or sponge rubber, cellulosic preforms, rubberized hair or cane fiber inserts."
    },
    {
      "code": "AC",
      "description": "Provide cushioning outside of the transparent unit package when packing within the shipping container."
    },
    {
      "code": "AD",
      "description": "Cushion, anchor, block or brace as required."
    },
    {
      "code": "AE",
      "description": "Cushion, anchor, block or brace in accordance with MIL-STD-1186 using fire retardant materials."
    },
    {
      "code": "AF",
      "description": "Cushioning conforming to MIL-P-116 shall be located between the bag and outer container."
    },
    {
      "code": "AG",
      "description": "MIL-F-87090, class 1, combustion retardant foam"
    },
    {
      "code": "AH",
      "description": "MIL-F-81334, foam, plastic, flexible, open cell, polyester-type, poly-urethane grades 1 and 2"
    },
    {
      "code": "AJ",
      "description": "MIL-F-87090, class 2, combustion retardant foam"
    },
    {
      "code": "BA",
      "description": "PPP-C-843, cellulosic material"
    },
    {
      "code": "BB",
      "description": "PPP-C-843, cellulosic material in PPP-B-566 or PPP-B-676 box"
    },
    {
      "code": "BC",
      "description": "PPP-C-843, cellulosic material in PPP-B-636, domestic box."
    },
    {
      "code": "BD",
      "description": "PPP-C-843, cellulosic material, type I"
    },
    {
      "code": "BE",
      "description": "PPP-C-843, cellulosic material, type I, in PPP-B-566 or PPP-B-676 box."
    },
    {
      "code": "BF",
      "description": "PPP-C-843, cellulosic material, type I, in PPP-B-636 class domestic box."
    },
    {
      "code": "BG",
      "description": "A-A-1898, Grade II, water resistant cellulosic cushioning."
    },
    {
      "code": "BH",
      "description": "PPP-C-843, cellulosic material, type II in PPP-B-566 or PPP-B-676 box."
    },
    {
      "code": "BJ",
      "description": "PPP-C-843, cellulosic material, type II in PPP-B-636 class domestic box."
    },
    {
      "code": "BL",
      "description": "PPP-C-850, cushioning material, polystyrene expanded, resilient, type I (sheet form) and type 2 (roll form), grade SE flame resistant."
    },
    {
      "code": "BN",
      "description": "PPP-C-850, polystyrene  cushioning"
    },
    {
      "code": "DA",
      "description": "A-A-1051, paperboard cushioning"
    },
    {
      "code": "DB",
      "description": "PPP-P-291, paperboard, wrapping and cushioning in PPP-B-566 or PPP-B-676 box."
    },
    {
      "code": "DC",
      "description": "PPP-P-291, paperboard, wrapping & cushioning in PPP-B-636 domestic box."
    },
    {
      "code": "DD",
      "description": "MIL-R-5001, rubber cellular sheet, latex foam, type I and II, grade A (flame resistant)."
    },
    {
      "code": "DF",
      "description": "MIL-R-6130, type I, grade A, oil and flame resistant"
    },
    {
      "code": "DG",
      "description": "MIL-R-6130, type II, grade A, oil and flame resistant"
    },
    {
      "code": "DH",
      "description": "MIL-PRF-20092, latex foam rubber."
    },
    {
      "code": "DJ",
      "description": "MIL-R-0020092, type II, class 5, fire retardant, shipboard."
    },
    {
      "code": "EA",
      "description": "PPP-B-566 or PPP-B-676 box."
    },
    {
      "code": "EB",
      "description": "Vendor's setup or folding box."
    },
    {
      "code": "EC",
      "description": "PPP-B-636 class domestic box."
    },
    {
      "code": "ED",
      "description": "Vendor's fiberboard box."
    },
    {
      "code": "EG",
      "description": "PPP-T-495 mailing tube."
    },
    {
      "code": "EM",
      "description": "PPP-C-1120, cushioning material, uncompressed bound fiber, class B."
    },
    {
      "code": "EN",
      "description": "PPP-C-1120, type I (soft density), class B."
    },
    {
      "code": "EQ",
      "description": "PPP-C-1120, type I, class B, in PPP-B-636 class domestic box."
    },
    {
      "code": "ER",
      "description": "PPP-C-1120, type II (medium soft density), class B."
    },
    {
      "code": "ET",
      "description": "PPP-C-1120, type II, class B, in PPP-B-636 class domestic box."
    },
    {
      "code": "EU",
      "description": "PPP-C-1120, type III (medium firm density), class B."
    },
    {
      "code": "EW",
      "description": "PPP-C-1120, type III, class B in PPP-B-636 class domestic box."
    },
    {
      "code": "EX",
      "description": "PPP-C-1120, type IV (firm density), class B."
    },
    {
      "code": "EZ",
      "description": "PPP-C-1120, type IV, class B in PPP-B-636 class domestic box."
    },
    {
      "code": "FA",
      "description": "PPP-C-1120, Class A, water resistant bound fiber."
    },
    {
      "code": "FB",
      "description": "PPP"
    },
    
      {
          "code": "GV",
          "description": "MIL-STD-2073-1B/2C Code: PPP-C-1797, cushioning material, resilient, low density, unicellular, polypropylene foam, 1/8 inch."
      },
      {
          "code": "GW",
          "description": "MIL-STD-2073-1B/2C Code: PPP-C-1797, cushioning material, resilient, low density, unicellular, polypropylene foam, 1/4 inch."
      },
      {
          "code": "GY",
          "description": "MIL-STD-2073-1B/2C Code: PPP-C-1797, cushioning material, resilient, low density, unicellular, polypropylene foam, 3/16 inch."
      },
      {
          "code": "GZ",
          "description": "MIL-STD-2073-1B/2C Code: MIL-P-19644, polystyrene foam, expanded bead, type II, fire retardant."
      },
      {
          "code": "HA",
          "description": "A-A-1507, chipboard sheet used as a stiffener on one side of item."
      },
      {
          "code": "HB",
          "description": "A-A-1507, chipboard sheet used as a stiffener on both sides of item."
      },
      {
          "code": "HC",
          "description": "MIL-STD-2073-1B/2C Code: UU-C-282, chipboard sheet used as pads on all surfaces."
      },
      {
          "code": "HD",
          "description": "A-A-1507, chipboard sheet used as pads, cells, die cuts or sleeves."
      },
      {
          "code": "HE",
          "description": "MIL-STD-2073-1B/2C Code: UU-C-282, chipboard sheet used as stiffener on one side of item in PPP-B-566 or PPP-B-676 box."
      },
      {
          "code": "HF",
          "description": "MIL-STD-2073-1B/2C Code: UU-C-282, chipboard sheet used as stiffener on both sides of item in PPP-B-566 or PPP-B-676 box."
      },
      {
          "code": "HG",
          "description": "MIL-STD-2073-1B/2C Code: UU-C-282, chipboard sheet used as pads on all surfaces of item in PPP-B-566 or PPP-B-676 box."
      },
      {
          "code": "HH",
          "description": "MIL-STD-2073-1B/2C Code: UU-C-282, chipboard sheet used as pads, cells, sleeves or die-cuts in PPP-B-566 or PPP-B-676 box."
      },
      {
          "code": "HJ",
          "description": "MIL-STD-2073-1B/2C Code: UU-C-282, chipboard sheet used as stiffener on one side of item in PPP-B-636 domestic box."
      },
      {
          "code": "HK",
          "description": "MIL-STD-2073-1B/2C Code: UU-C-282, chipboard sheet used as stiffener on both sides of item in PPP-B-636 domestic box."
      },
      {
          "code": "HL",
          "description": "MIL-STD-2073-1B/2C Code: UU-C-282, chipboard sheet used as pads on all surfaces in PPP-B-636 box."
      },
      {
          "code": "HM",
          "description": "MIL-STD-2073-1B/2C Code: UU-C-282, chipboard sheet used as pads, cells, sleeves or die-cuts in PPP-B-636 domestic box."
      },
      {
          "code": "HN",
          "description": "MIL-STD-2073-1B/2C Code: PPP-C-1752, type VII, class 1, 1/32."
      },
      {
          "code": "JA",
          "description": "ASTM D4727/D4727M, domestic fiberboard used as a stiffener on one side of item"
      },
      {
          "code": "JB",
          "description": "ASTM D4727/D4727M, domestic fiberboard used as a stiffener on both sides of item"
      },
      {
          "code": "JC",
          "description": "ASTM D4727/D4727M, domestic fiberboard used as pads, cells, die cuts or sleeves"
      },
      {
          "code": "JD",
          "description": "MIL-STD-2073-1B/2C Code: PPP-B-636 domestic, fiberboard."
      },
      {
          "code": "JG",
          "description": "ASTM D4727/D4727M, weather-resistant fiberboard."
      },
      {
          "code": "JH",
          "description": "MIL-STD-2073-1B/2C Code: PPP-B-566, fiberboard."
      },
      {
          "code": "JJ",
          "description": "MIL-STD-2073-1B/2C Code: PPP-B-676, fiberboard."
      },
      {
          "code": "JK",
          "description": "MIL-STD-2073-1B/2C Code: PPP-B-676."
      },
      {
          "code": "JL",
          "description": "MIL-STD-2073-1B/2C Code: PPP-B-566."
      },
      {
          "code": "JM",
          "description": "MIL-STD-2073-1B/2C Code: PPP-B-566, fiberboard, weather-resistant."
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
      renderInput={(params) => <TextField {...params} label="Cushioning Material" />}
      filterOptions={(options, state) => {
        if (!state.inputValue) return options; // if input value is empty, return all options
        return options.filter(option => option.code.toLowerCase().includes(state.inputValue.toLowerCase()));
      }}
    />
    </div>
  );
}

export default CushningMaterial;



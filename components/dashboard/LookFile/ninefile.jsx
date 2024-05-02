// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports

import TextField from '@mui/material/TextField'

import Autocomplete from '@mui/material/Autocomplete';




const path = require('path');


const PackingCode = () => {

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
    getOptionLabel={(option) => `${option.code} - ${option.description}`} // Get the description field from each option object

    renderInput={(params) => <TextField {...params} label="	Packing Code" />}
  />
  </div>
  )
}

export default PackingCode;

const top100Films = [
  {
      code: "0",
      description: "MIL-STD-2073-1D Code: Packing not authorized."
  },
  {
      code: "2",
      description: "Packing shall be accomplished using cleated-plywood boxes, overseas type, conforming to ASTM-D6251, Type III, Class 2, or nailed wood boxes conforming to ASTM-D6880, Class 2, heavy duty."
  },
  {
      code: "3",
      description: "MIL-STD-2073-1B/2C Code: Overpacking shall be accomplished using PPP-B-601, overseas type, or PPP-B-621, class 2, style 4 boxes."
  },
  {
      code: "4",
      description: "MIL-STD-2073-1D Code: See method of preservation."
  },
  {
      code: "5",
      description: "MIL-STD-2073-1D Code: Overpacking shall be accomplished using cleated-plywood boxes, domestic type, conforming to PPP-B-601 or nailed wood boxes conforming to PPP-B-621, Class 1, Style 4."
  },
  {
      code: "6",
      description: "Packing shall be accomplished to meet the performance test requirements of ASTM-D4169, Distribution Cycle 18, Assurance Level 3."
  },
  {
      code: "7",
      description: "Packing shall be accomplished using cleated-plywood boxes conforming to ASTM-D6251, Type III, Class 1 (domestic), or nailed wood boxes conforming to PPP-B-621, Class 1, or wirebound boxes conforming to PPP-B-585, Class 1."
  },
  {
      code: "8",
      description: "Packing shall be accomplished in accordance with the Level A packing requirements as specified for the item."
  },
  {
      code: "9",
      description: "Packing shall be accomplished in accordance with the Level B packing requirements as specified for the item."
  },
  {
      code: "A",
      description: "Packing shall be accomplished using fiberboard boxes, weather resistant class, fabricated in accordance with ASTM-D5118, or triplewall fiberboard boxes conforming to ASTM-D5168, class weather resistant."
  },
  {
      code: "B",
      description: "Packing shall be accomplished using ASTM-D6251, Type III, Class 2, overseas cleated plywood boxes or wirebound wood boxes conforming to PPP-B-585, Class 3 (military overseas)."
  },
  {
      code: "C",
      description: "Packing shall be accomplished using cleated-plywood wood boxes conforming to ASTM-D6251, Type III, Class 2 or nailed wood boxes conforming to ASTM-D6880, Class 2, heavy duty, or covered wood crates conforming to ASTM-D6039, Type V, Style B, or lumber and plywood sheathed wood crates conforming to MIL-C-104, or load-bearing base skidded wood-cleated boxes conforming to ASTM-D6256, Type II (overseas), or steel or aluminum slotted angle crates conforming to MIL-C-9897, Type I, or open wood crates conforming to MIL-C-3774."
  },
  {
      code: "D",
      description: "MIL-STD-2073-1D Code: Overpacking shall be accomplished using open wood crates conforming to MIL-C-3774, or open wood crates conforming to ASTM-D6039."
  },
  {
      code: "E",
      description: "Packing shall be accomplished to meet the performance test requirements of ASTM-D4169, Distribution Cycle 18, Assurance Level 1."
  },
  {
      code: "F",
      description: "Packing is not required: the unit container shall also serve as the shipping container. Closure, sealing and reinforcement shall be in accordance with applicable specification for shipping container."
  },
  {
      code: "G",
      description: "MIL-STD-2073-1B/2C Code: Overpacking shall be accomplished in accordance with requirements in the applicable commodity/procedural packaging/packing specification as specified for level A."
  },
  {
      code: "H",
      description: "Packing shall be accomplished using boxes fabricated in accordance with ASTM-D5118, class weather-resistant."
  },
  {
      code: "K",
      description: "MIL-STD-2073-1B/2C Code: Overpacking shall be accomplished using fiberboard boxes conforming to PPP-B-636, class domestic or weather resistant."
  },
  {
      code: "L",
      description: "Packing shall be accomplished using fiberboard boxes fabricated in accordance with ASTM-D5118, Class Domestic or ASTM-D5168, Class 1 non-weather resistant."
  },
  {
      code: "M",
      description: "MIL-STD-2073-1D Code: Overpacking shall be accomplished using Class 1, domestic wood cleated panelboard boxes conforming to ASTM-D6251 or wirebound wood boxes conforming to PPP-B-585, Class 1, or loadbearing base, skidded, wood-cleated boxes conforming to MIL-B-26195, Type I."
  },
  {
      code: "N",
      description: "MIL-STD-2073-1D Code: Overpacking shall be accomplished using cleated plywood wood boxes, domestic type, conforming to PPP-B-601, or nailed and lockcorner wood boxes conforming to PPP-B-621, Class 1, or covered wood crates, domestic class, conforming to ASTM-D6039, Style B."
  },
  {
      code: "P",
      description: "Packing shall be accomplished using open wood crates conforming to ASTM-D6039, Type V, Style B, or open wood crates conforming to MIL-C-3774, or open steel or aluminum slotted angle crates conforming to MIL-C-9897, Type I."
  },
  {
      code: "Q",
      description: "Packing shall be accomplished in accordance with table C-II for the packing level specified. Closure sealing and reinforcement shall be in accordance with the appropriate shipping container specification."
  },
  {
      code: "R",
      description: "Packing shall be accomplished to meet the performance test requirements of ASTM-D4169, Distribution Cycle 18, Assurance Level 2."
  },
  {
      code: "S",
      description: "MIL-STD-2073-1B/2C Code: Overpacking shall be accomplished using PPP-B-636, class domestic, special requirements. When size and weight limitations are exceeded, a suitable container shall be selected from MIL-STD-2073-1, appendix A, table VII."
  },
  {
      code: "T",
      description: "Packing shall be accomplished by use of fiberboard containers fabricated in accordance with ASTM-D5118, weather-resistant class, or triple wall fiberboard boxes conforming to ASTM-D5168, class weather resistant; or whenever practicable, by means of shrink-film conforming to A-A-3174."
  },
  {
      code: "U",
      description: "Items or packages that require packing for acceptance by the carrier shall be packed in exterior type shipping containers in a manner that will ensure safe transportation at the lowest rate to the point of delivery and shall meet, as a minimum, the requirements of the following rules and regulations, as applicable to the mode(s) of transportation to be utilized: (a) Postal Regulations (b) Department of Transportation Regulations (c) Civil Air Regulations (d) Uniform Freight Classification Rules (e) National Motor Freight Classification Rules (f) American Truckers' Association Rules (g) Other applicable carriers' rules (h) Military Air Regulations for dangerous materials. Dangerous goods shall be prepared for shipment according to applicable Department of Transportation (DOT) regulations and international regulations in effect at time of shipment. Shipments by parcel post must comply with Postal Regulations."
  },
  {
      code: "X",
      description: "MIL-STD-2073-1B/2C Code: Overpacking shall be accomplished in accordance with ASTM D 3951."
  },
  {
      code: "Y",
      description: "MIL-STD-2073-1B/2C Code: Packager's option so long as all other contractual requirements are met."
  },
  {
      code: "Z",
      description: "Special requirement. See specific instructions or drawings provided."
  },
  {
      code: "",
      description: "Not Specified."
  }
]




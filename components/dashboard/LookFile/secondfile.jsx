// ** React Imports
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const path = require("path");
const MidSart = ({ setData }) => {
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
      renderInput={(params) => <TextField {...params} label="Method of Preservation" />}
      filterOptions={(options, state) => {
        if (!state.inputValue) return options;
        return options.filter(option => option.code.toLowerCase().includes(state.inputValue.toLowerCase()));
      }}
      onChange={(event, value) => handleOptionSelected(value)} 
    />
  </div>
  );
};

export default MidSart;

const top100Films = [
  {
    code: "11",
    description:
      "MIL-STD-2073-1B/2C Code: Method 20 (formerly Method I) - Must have preservative coating (greaseproof wrap, MIL-B-121,as required.",
  },
  {
    code: "15",
    description:
      "MIL-STD-2073-1B/2C Code: Package aluminum and magnesium in accordance with ASTM B660.",
  },
  {
    code: "17",
    description:
      "MIL-STD-2073-1B/2C Code: Package batteries in accordance with MIL-B-208.",
  },
  {
    code: "18",
    description:
      "MIL-STD-2073-1B/2C Code: Package dry batteries in accordance with MIL-B-55521.",
  },
  {
    code: "19",
    description:
      "MIL-STD-2073-1B/2C Code: Package aircraft storage batteries in accordance with MIL-P-6063.",
  },
  {
    code: "20",
    description:
      "Preservative coating. Items shall be treated with appropriate preservatives in accordance with the procedures of 5.2.2.2 or 5.2.2.3. Contact preservative coated items shall be wrapped in material conforming to MIL-PRF-121 or QQ-A-1876. Flexible wraps shall snugly enclose the coated part or item and be secured to prevent unintentional unwrapping. Parts or items coated with hard film preservatives conforming to MIL-PRF-16173, Grade 1 or 4, may, when dried, be exempted from wrapping. Projections, sharp edges, or other features of the item, that may damage the wrap, shall be cushioned as required in accordance with 5.2.3. The type of cushioning and wrapping material used shall be commensurate with the size, weight and configuration of the preserved part or item. Method 20 unit packs shall pass the applicable inspection requirements of table G-I. When it has been determined to protect items with VCI, they shall be preserved in accordance with 5.2.4.9.",
  },
  {
    code: "21",
    description:
      "MIL-STD-2073-1B/2C Code: Package antifriction bearings in accordance with MIL-B-197.",
  },
  {
    code: "22",
    description:
      "MIL-STD-2073-1B/2C Code: Package electric cable, cord and wire in accordance with MIL-C-12000.",
  },
  {
    code: "23",
    description:
      "MIL-STD-2073-1B/2C Code: Package chemicals, liquid, dry and paste in accordance with PPP-C-2020.",
  },
  {
    code: "25",
    description:
      "MIL-STD-2073-1B/2C Code: Package cordage in accordance with MIL-C-3131.",
  },
  {
    code: "26",
    description:
      "MIL-STD-2073-1B/2C Code: Package capstans, winches, etc. in accordance with MIL-M-3184.",
  },
  {
    code: "27",
    description:
      "MIL-STD-2073-1B/2C Code: Package cable and cord assemblies in accordance with MIL-C-55442.",
  },
  {
    code: "28",
    description:
      "MIL-STD-2073-1B/2C Code: Package copper in accordance with MIL-C-3993.",
  },
  {
    code: "29",
    description:
      "MIL-STD-2073-1B/2C Code: Package electric machines in accordance with MIL-E-16298.",
  },
  {
    code: "2A",
    description:
      "MIL-STD-2073-1B/2C Code: Method 33 (formerly Submethod IC-1) - Greaseproof-waterproof bag, sealed, MIL-B-121.",
  },
  {
    code: "2B",
    description:
      "MIL-STD-2073-1B/2C Code: Package submethod IC-9, Skin pack, greaseproof, waterproof, vacuum, formed, MIL-B-121.",
  },
  {
    code: "2C",
    description:
      "MIL-STD-2073-1B/2C Code: Package submethod IC-10, Skin pack, waterproof, vacuum formed.",
  },
  {
    code: "2D",
    description:
      "MIL-STD-2073-1B/2C Code: Method 31 (formerly Submethod IC-3) - Waterproof bag, sealed, MIL-B-121.",
  },
  {
    code: "2E",
    description:
      "MIL-STD-2073-1B/2C Code: Method 33 (formerly Submethod IC-1) - Greaseproof-waterproof bag, sealed, MIL-B-121.",
  },
  {
    code: "2M",
    description:
      "MIL-STD-2073-1B/2C Code: Method 32 (formerly Submethod IC-2) - Container, waterproof bag, sealed,  MIL-B-121.",
  },

  {
    code: "2S",
    description:
      "MIL-STD-2073-1B/2C Code: Package submethod IC-4, Rigid waterproof container other than all metal, sealed.",
  },
  {
    code: "2Y",
    description:
      "MIL-STD-2073-1B/2C Code: Method 30 (formerly Method IC) - Waterproof or waterproof-greaseproof protection (MIL-B-121).",
  },
  {
    code: "30",
    description:
      "Waterproof or waterproof-greaseproof protection with preservative as required. Items protected in accordance with Method 30 shall be heat sealed within a waterproof or waterproof-greaseproof bag. Projections, sharp edges or other physical characteristics of the item that may damage the waterproof or waterproof-greaseproof barrier or container shall be cushioned in accordance with 5.2.3. The item shall also be cushioned as required to mitigate shock and vibration, thereby preventing physical and functional damage to the item. For all Methods of Preservation where the bag is the unit container and the outer/shipping container is a wood box, see 5.2.3(l). Unless otherwise specified, preservative coating requirements shall be determined in accordance with 5.2.2.1. All unit packs prepared in accordance with any method of this basic group shall pass the applicable quality assurance tests specified in tables G-I and G-II.",
  },
  {
    code: "31",
    description:
      "Waterproof bag, heat sealed. The item, preserved, wrapped and cushioned as required in 5.2.3.5, shall be enclosed in a heat-sealed bag conforming to MIL-DTL- 117, Type III, Class B, Style 2. (Note: When specified in the contract or order, a carton or box shall be required to effect the unit container, and the primary cushioning shall be placed between the outside of the bag and the inside of the carton or box.) When it has been determined to protect items with VCI, they shall be preserved in accordance with 5.2.4.9.",
  },
  {
    code: "32",
    description:
      "Container, waterproof bag, heat sealed. The item, preserved, wrapped and cushioned as required in 5.2.3.5, shall be enclosed in a close fitting container (box) selected from table C-I, which in turn shall be enclosed in a heat-sealed waterproof bag conforming to MIL-DTL-117, Type III, Class B, Style 2.",
  },
  {
    code: "33",
    description:
      "Greaseproof-waterproof bag, heat sealed. The item, preserved, wrapped and cushioned as required in 5.2.3.5, shall be enclosed in a close fitting heat-sealed bag conforming to MIL-DTL-117, Type II, Class C, Style 1, 2 or 3. (Note: When specified in the contract or order, a carton or box shall be required to effect the unit container, and the primary cushioning specified in the contract or order shall be placed between the outside of the bag and the inside of the carton or box.) When it has been determined to protect items with VCI, they shall be preserved in accordance with 5.2.4.9.",
  },
  {
    code: "34",
    description:
      "MIL-STD-2073-1B/2C Code: Package engine repair parts in accordance with MIL-S-196.",
  },
  {
    code: "35",
    description:
      "MIL-STD-2073-1B/2C Code: Package gas turbine engines in accordance with MIL-E-5607.",
  },
  {
    code: "36",
    description:
      "MIL-STD-2073-1B/2C Code: Package reciprocating aircraft engines in accordance with MIL-E-6058.",
  },
  {
    code: "37",
    description:
      "MIL-STD-2073-1B/2C Code: Package engines other than aircraft in accordance with MIL-E-10062.",
  },
  {
    code: "3G",
    description:
      "MIL-STD-2073-1B/2C Code: Method 41 (formerly Submethod IA-8) - Watervaporproof bag, sealed, MIL-B-131.",
  },
  {
    code: "3H",
    description:
      "MIL-STD-2073-1B/2C Code: Method 43 (formerly Submethod IA-16) - Floating watervaporproof bag, sealed, MIL-B-131.",
  },
  {
    code: "3P",
    description:
      "MIL-STD-2073-1B/2C Code: Package submethod IA-15, Container, watervaporproof bag, sealed, MIL-B-131.",
  },
  {
    code: "3Q",
    description:
      "MIL-STD-2073-1B/2C Code: Method 42 (formerly Submethod IA-14) - Container, watervaporproof bag, sealed, MIL-B-131, container.",
  },
  {
    code: "3T",
    description:
      "MIL-STD-2073-1B/2C Code: Method 44 (formerly Submethod IA-13) - Rigid container (other than metal), sealed.",
  },
  {
    code: "3V",
    description:
      "MIL-STD-2073-1B/2C Code: Method 45 (formerly Submethod IA-5) - Rigid metal container, sealed.",
  },
  {
    code: "3W",
    description:
      "MIL-STD-2073-1B/2C Code: Package submethod IA-6, Rigid container (items immersed in oil-type preservative) sealed.",
  },
  {
    code: "3Y",
    description:
      "MIL-STD-2073-1B/2C Code: Method 40 (formerly Method IA) - Watervaporproof protection (MIL-B-131).",
  },
  {
    code: "40",
    description:
      "Watervaporproof protection with preservative as required. Items protected in accordance with Method 40 shall be heat sealed within a watervaporproof enclosure. Projections, sharp edges or other physical characteristics of the item, which may damage the watervaporproof enclosure, shall be cushioned as required in accordance with 5.2.3. The item shall also be cushioned as required to mitigate shock and vibration, thereby preventing physical and functional damage to the item. For all Methods of Preservation where the bag is the unit container and the outer/shipping container is a wood box, see 5.2.3(l). Unless otherwise specified, preservative coating requirements shall be determined in accordance with 5.2.2.1. All unit packs prepared in accordance with any method of this basic group shall pass the applicable quality assurance tests specified in tables G-I and G-II.",
  },
  {
    code: "41",
    description:
      "Watervaporproof bag, heat sealed. The item, preserved, wrapped and cushioned as required in 5.2.3.6, shall be enclosed in a close fitting heat-sealed bag conforming to one of the following: \n   a. MIL-DTL-117, Type I, Class E, Style 1, 2 or 3 (see notes 2/, 4/). \n   b. MIL-DTL-117, Type I, Class F, Style 1, use intended for ESD sensitive items only (see note 1/). \n   c. MIL-DTL-117, Type II, Class E, Style 1 (see notes 2/, 3/). \n   d. MIL-DTL-117, Type IV, Class E, Style 1 (see notes 2/, 4/).\n \n   1/ For electrostatic protection refer to 5.2.4.1. \n   2/ When specified in the contract or order, a carton or box shall be required to complete the unit container and the primary cushioning shall be placed between the outside of the bag and the inside of the carton or box. \n   3/ When MIL-DTL-117, Type II, Class E, Style 1 bags are selected, they shall be limited to the restrictions detailed in MIL-PRF-131 for Class 2 material. \n   4/ When it has been determined to protect items with VCI, they shall be preserved in accordance with 5.2.4.9.",
  },
  {
    code: "42",
    description:
      "Container, watervaporproof bag, heat sealed, container. The item, preserved, wrapped and cushioned as required in 5.2.3.6, shall be enclosed in a close fitting inner container (box), selected from table C-I, and enclosed in a heat-sealed bag conforming to MIL-DTL-117, Type I, Class E, Style 1; or Type II, Class E, Style 1. Bags in accordance with MIL-DTL-6060 shall be used when the construction limitations of MIL-DTL-117 are exceeded. The sealed bag shall then be enclosed within an appropriate outer container (box), selected from table C-II. When wood, wood cleated plywood, or wood cleated panelboard is specified as the outer container of this method, see 5.2.3(l). (Note: When the outer container serves as the shipping container, selected from table C-II, it shall be marked as a shipping container in accordance with MIL-STD-129; the bag shall be marked as a unit pack in accordance with MIL-STD-129.)",
  },
  {
    code: "43",
    description:
      "Floating watervaporproof bag, heat sealed. The item, preserved, wrapped and cushioned as required in 5.2.3.6 and anchored or shock mounted as necessary, shall be enclosed in a heat-sealed bag conforming to MIL-DTL-6060. (Note: When the outer container serves as the shipping container, selected from table C-II, it shall be marked as a shipping container in accordance with MIL-STD-129; the bag shall be marked as a unit pack in accordance with MIL-STD-129.)",
  },
  {
    code: "44",
    description:
      "Rigid container (other than metal), sealed. The item, preserved, wrapped, and cushioned as required in 5.2.3.6, shall be enclosed in a sealed, snug fitting, rigid container other than all metal. Any sealed rigid container other than all metal may be used if the sealed container provides a watervapor transmission rate (WVTR) not exceeding 0.075 grams per 100 square inches per 24 hours when tested in accordance with ASTM-D4279.",
  },
  {
    code: "45",
    description:
      "Rigid metal container, sealed. The item, preserved, wrapped and cushioned as required in 5.2.3.6, shall be snugly enclosed in a sealed, rigid metal container. Any selected type of rigid metal container with machine seamed or reusable gasketed closure may be used. When specified in the contract or purchase order or when dictated by the requirements of the item, the metal container may be vacuum sealed.",
  },
  {
    code: "47",
    description:
      "MIL-STD-2073-1B/2C Code: Package hose in accordance with MIL-H-775.",
  },
  {
    code: "48",
    description:
      "MIL-STD-2073-1B/2C Code: Package optical elements in accordance with MIL-O-16898.",
  },
  {
    code: "49",
    description:
      "MIL-STD-2073-1B/2C Code: Package metal and wood working machinery in accordance with MIL-M-18058.",
  },
  {
    code: "4G",
    description:
      "MIL-STD-2073-1B/2C Code: Method 51 (formerly Submethod IIc) - Watervaporproof bag, sealed, MIL-B-131 with desiccant.",
  },
  {
    code: "4H",
    description:
      "MIL-STD-2073-1B/2C Code: Method 53 (formerly Submethod IIa) - Floating watervaporproof bag, sealed, MIL-B-131 with desiccant.",
  },
  {
    code: "4P",
    description:
      "MIL-STD-2073-1B/2C Code: Package submethod IIe, Container, watervaporproof bag, sealed, MIL-B-131, with desiccant.",
  },
  {
    code: "4Q",
    description:
      "MIL-STD-2073-1B/2C Code: Method 52 (formerly Submethod IIb) - Container, watervaporproof bag, sealed, MIL-B-131 with desiccant.",
  },

  {
    code: "4T",
    description:
      "MIL-STD-2073-1B/2C Code: Method 54 (formerly Submethod IIf) - Rigid container (other than metal), sealed with desiccant.",
  },
  {
    code: "4V",
    description:
      "MIL-STD-2073-1B/2C Code: Method 55 (formerly Submethod IId) - Rigid metal container, sealed with desiccant.",
  },
  {
    code: "4Y",
    description:
      "MIL-STD-2073-1B/2C Code: Method 50 (formerly Method II) - Watervaporproof protection (MIL-B-131) with desiccant.",
  },
  {
    code: "50",
    description:
      'Watervaporproof protection with desiccant. Items protected in accordance with Method 50 shall be heat sealed in a watervaporproof enclosure with activated desiccant. Unit packs of all of these methods shall also include a humidity indicator. Projections, sharp edges, or other physical characteristics of the item that may damage the watervaporproof bag or container shall be cushioned as required in accordance with 5.2.3. The item shall also be cushioned as required to mitigate shock and vibration, thereby preventing physical and functional damage to the item. Preservative coating requirements shall be determined in accordance with 5.2.2.1. For all Methods of Preservation where the bag is the unit container and the outer/shipping container is a wood box, see 5.2.3(l). When bags are used, the bag size shall be of sufficient surface area to permit two subsequent resealing after item inspection. Unless prohibited in the contract or order, carrying cases or housings, which function as a sealed container, may also be used as the watervaporproof enclosure within which the desiccant and humidity indicator will be placed. Precautions shall be prominently noted on the item cases or housings that the desiccant and indicator cards shall be removed prior to placing the item into use. Requirements for desiccant and humidity indicators are as follows: \n\na. Desiccant (activated) - The bagged, activated desiccant shall conform to MIL-D- 3464. Type I shall be used unless Type II or III is specified or required because of special characteristics of the item. Desiccant shall be in standard unit sized bags. The desiccant shall be strategically located in the pack so as not to be load bearing. Optimally, it is to be placed in voids of the item or pack interior. Desiccant shall be adequately secured to prevent its shifting or movement or placed in specially designed desiccant baskets affixed to the container interior. Under no circumstances shall desiccant be permitted to come in direct contact with critical surfaces of the enclosed item. The desiccant shall not be unnecessarily exposed to the ambient environment when removed from the sealed desiccant storage container. Removal of the desiccant and its insertion into the unit pack shall be the last action prior to final sealing of the bag or container. \n\nb. Quantity of desiccant - The minimum quantity of desiccant to be used per unit pack shall be computed in accordance with either Formula I or II as applicable. The various values of "X" take into consideration the quality and types of dunnage. The inner container (when applicable) shall be considered in the dunnage calculations. \nFormula I - To find units of desiccant for use within a sealed container other than rigid all metal: \nU = CA + X1D + X2D + X3D + X4D \nFormula II - To find units of desiccant for use within a sealed rigid metal container: \nU = KV + X1D + X2D + X3D + X4D \nSymbols used above are defined as follows: \nU = The number of units of desiccant to be used. \nC = 0.011 when the area of the barrier material is stated in square inches. \nC = 1.6 when the area of the barrier material is stated in square feet. \nA = Area of container (barrier) stated in square inches or square feet. \nK = 0.0007 when volume is stated in cubic inches. \nK = 1.2 when volume is stated in cubic feet. \nV = Volume within rigid metal container in cubic inches or cubic feet. \nX1 = 8.0 for cellulosic material, including wood and any other material not noted below. \nX2 = 3.6 for bound fibers (synthetic or vegetable fibers bound with rubber). \nX3 = 2.0 for glass fibers (fiberglass). \nX4 = 0.5 for synthetic foams and rubber. \nD = Pounds of dunnage within the container. \n\nNote: Formula II may also be used to determine the units of desiccant required for sealed rigid containers other than all metal, when the sealed enclosure provides a WVTR not exceeding 0.001 gram per 24 hours per 100 square inches, tested in accordance with ASTM D4279 using the constant atmosphere method.\n \nc. Humidity indicators. Humidity indicators shall conform to MS20003. The humidity indicator shall be firmly secured directly behind the inspection window or immediately within the closure seal of the container. When specified, externally mounted humidity indicating elements or devices shall be installed in the barrier or rigid container used to effect the unit pack. Externally mounted color change humidity indicating devices shall conform to SAE AS26860. \n\nAll unit packs prepared in accordance with any method of this basic group shall pass the applicable quality assurance tests of tables G-I and G-II.',
  },
  {
    code: "51",
    description:
      "Watervaporproof bag with desiccant, heat sealed. The item, preserved, wrapped, cushioned and desiccated with humidity indicator as required in 5.2.3.7, shall be enclosed within a heat sealed bag conforming to one of the following: \n\n   a. MIL-DTL-117, Type I, Class E, Style 1, 2 or 3 (1/, 2/). \n   b. MIL-DTL-117, Type II, Class E, Style 1 or Type IV, Class E, Style 1 (2/). \n\n   1/ When specified in the contract or order, a carton or box shall be required to complete the unit container and the primary cushioning shall be placed between the outside of the bag and the inside of the carton or box. \n   2/ When MIL-DTL-117, Type II, Class E, Style 1 bags are selected, they shall be limited to the restrictions detailed in MIL-PRF-131 for Class 2 material.",
  },
  {
    code: "52",
    description:
      "Container, watervaporproof bag with desiccant, heat sealed, container. The item, preserved, wrapped, cushioned and desiccated with humidity indicator as required in accordance with 5.2.3.7, shall be enclosed in a close fitting inner container (box) selected from table C-I. The item and container shall then be enclosed in a heat-sealed bag conforming to MIL-DTL-117, Type I, Class E, Style 1; or Type II, Class E, Style 1; or Type IV, Class E, Style 1. Bags in accordance with MIL-DTL-6060 shall be used when the construction limitations of MIL-DTL-117 are exceeded. The sealed bag shall then be enclosed within an appropriate outer container (box) selected from table C-II. When wood, wood cleated plywood or wood cleated panelboard boxes are specified as the outer container, see 5.2.3(l).",
  },
  {
    code: "53",
    description:
      "Floating watervaporproof bag with desiccant, heat sealed. The item, preserved, wrapped, cushioned, and desiccated with humidity indicator as required in 5.2.3.7 and anchored or shock mounted as necessary, shall be enclosed in a sealed bag conforming to MIL-DTL-6060. When specified in the contract or order, a window of material conforming to MIL-PRF-22191, Type I shall be provided in the bag in accordance with MILDTL- 6060 procedures for packs 15 cubic feet or larger. When specified, externally mounted plug type humidity indicators conforming to SAE-AS26860 shall be used. When an exterior container is to be placed over the floating bag, a removable inspection port shall be provided in the exterior container body, so situated as to coincide with the location of the inspection window of the bag or the mounted humidity plug.",
  },
  {
    code: "54",
    description:
      "Rigid container (other than metal) with desiccant, sealed. The item, preserved, wrapped, cushioned and desiccated with humidity indicator as required in 5.2.3.7, shall be enclosed in a sealed, close fitting, rigid container other than all metal. Any sealed, rigid container other than all metal may be used if the sealed container provides a WVTR not exceeding 0.075 grams per 100 square inches per 24 hours when tested in accordance with ASTM-D4279 using the constant atmosphere method.",
  },
  {
    code: "55",
    description:
      "Rigid metal container with desiccant, sealed. The item, preserved, wrapped, cushioned and desiccated with humidity indicator as required in 5.2.3.7, shall be enclosed in a sealed, close fitting, metal container. Any selected type of rigid metal container with a machine seamed or welded closure or reusable container with a gasketed or threaded closure shall be used.",
  },
  {
    code: "56",
    description:
      "MIL-STD-2073-1B/2C Code: Package parachutes in accordance with MIL-P-5610.",
  },
  {
    code: "66",
    description:
      "MIL-STD-2073-1B/2C Code: Package propellers in accordance with MIL-P-6074.",
  },
  {
    code: "67",
    description:
      "MIL-STD-2073-1B/2C Code: Package pumps in accordance with MIL-P-10603.",
  },
  {
    code: "70",
    description:
      "MIL-STD-2073-1B/2C Code: Package rubber & nylon fuel, oil, water & alcohol cells in accordance with MIL-P-25621.",
  },
  {
    code: "71",
    description:
      "MIL-STD-2073-1B/2C Code: Package steel mill products in accordance with MIL-STD-163.",
  },
  {
    code: "73",
    description:
      "MIL-STD-2073-1B/2C Code: Package tires and tubes in accordance with MIL-T-4.",
  },
  {
    code: "74",
    description:
      "MIL-STD-2073-1B/2C Code: Package tools in accordance with PPP-P-40.",
  },
  {
    code: "75",
    description:
      "MIL-STD-2073-1B/2C Code: Package electron tubes in accordance with MIL-E-75.",
  },
  {
    code: "76",
    description:
      "MIL-STD-2073-1B/2C Code: Package valves, fittings and flanges in accordance with MIL-V-3.",
  },
  {
    code: "78",
    description:
      "MIL-STD-2073-1B/2C Code: Package welding rods in accordance with MIL-W-10430.",
  },
  {
    code: "81",
    description:
      "MIL-STD-2073-1B/2C Code: Package abrasives and abrasive products in accordance with MIL-A-3816.",
  },
  {
    code: "89",
    description:
      "MIL-STD-2073-1B/2C Code: Package non-ferrous products in accordance with MIL-N-3944.",
  },
  {
    code: "94",
    description:
      "MIL-STD-2073-1B/2C Code: Package compressors in accordance with MIL-C-3600.",
  },
  {
    code: "96",
    description:
      "MIL-STD-2073-1B/2C Code: Package semiconductor devices in accordance with MIL-S-19491.",
  },
  {
    code: "97",
    description:
      "MIL-STD-2073-1B/2C Code: Package synchros, resolvers and servo motors in accordance with MIL-S-12134.",
  },
  {
    code: "A1",
    description:
      "MIL-STD-2073-1B/2C Code: Package work tables and benches in accordance with MIL-B-45977.",
  },
  {
    code: "A2",
    description:
      "MIL-STD-2073-1B/2C Code: Package time measuring instruments in accordance with PPP-T-360.",
  },
  {
    code: "A3",
    description:
      "MIL-STD-2073-1B/2C Code: Package tool sets, shop sets and kits in accordance with MIL-T-45542.",
  },
  {
    code: "A5",
    description:
      "MIL-STD-2073-1B/2C Code: Package boilers and related equipment for field use in accordance with MIL-B-3180.",
  },
  {
    code: "A8",
    description:
      "MIL-STD-2073-1B/2C Code: Package automobiles, trucks, truck-tractors, trailers and trailer dollies in accordance with MIL-STD-281.",
  },
  {
    code: "A9",
    description:
      "MIL-STD-2073-1B/2C Code: Package capacitors in accordance with MIL-C-39028.",
  },

  {
    code: "AA",
    description: "MIL-STD-2073-1B/2C Code: Commercial packaging.",
  },
  {
    code: "AB",
    description:
      "MIL-STD-2073-1B/2C Code: Package in accordance with the commodity specification or standard.",
  },
  {
    code: "AC",
    description:
      "MIL-STD-2073-1B/2C Code: Package method III as follows: clean, wrap in nonabrasive tissue, and overwrap with 1/4 cushioning material (more if needed to prevent breakage or damage) in accordance with PPP-C-843, type II.",
  },
  {
    code: "AD",
    description:
      "MIL-STD-2073-1B/2C Code: Coil on reels or spools or best commercial practice.",
  },
  {
    code: "AE",
    description: "Seal or plug all openings and preserve by Method 10.",
  },
  {
    code: "AF",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve Method III as follows: Place in fold of neutral paper conforming to MIL-B-121material, and fasten with pressure sensitive tape to a rectangle of rigid corrugated fiberboard of minimum practicable size.",
  },
  {
    code: "AG",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve method III as follows: Mark or label each piece with NSN and quantity and place the number of individually marked pieces, as indicated in supplemental data, in a paperboard or fiberboard carton of minimum practicable size.",
  },
  {
    code: "AH",
    description:
      "Preserve Method 20 as follows: Fog spray or flush internally with preservative indicated by preservation code. All openings shall then be plugged or sealed to prevent entrance of dirt and moisture. Exterior unpainted ferrous metal surfaces shall be coated with a suitable paint or enamel, or coated with cold application, nontacky, corrosion preventative compound conforming to MIL_PRF-16173, Grade 4.",
  },
  {
    code: "AJ",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve method I as follows: Place item in fold of MIL-B-121 material, and fasten with pressure sensitive tape to a rectangle of rigid corrugated fiberboard of minimum practicable dimension.",
  },
  {
    code: "AK",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve method I as follows:Flush or fog spray internal water passages with MIL-C-16173,Grade 3 preservative. Flush/fog spray internal oil passages with MIL-L-3150,VV-L-800 or MIL-L-21260. Internal surfaces must be thoroughly covered with preservative.",
  },
  {
    code: "AL",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve method I as follows: Unit container shall conform to PPP-B-636 type CF, class weather-resistant. Seal all seams and joints with PPP-T-76 tape, not less than 2 inches wide.",
  },
  {
    code: "AM",
    description:
      "MIL-STD-2073-1B/2C Code: Pack in manufacturer's standard metal container sealed with PPP-T-60 waterproof tape.",
  },
  {
    code: "AN",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve method IA: Clean each item with chemically neutral detergent,wrap in nonabrasive,chemically inert tissue & overwrap with PPP-C-843 cushioning material,or alternatively,nonabrasive PPP-C-843,to a minimum of twice the thickness of the item.",
  },
  {
    code: "AP",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve submethod IA-8 using MIL-B-131 material. Place each packaged item in an individual corrugated carton, folder or sleeve meeting weight limitations of PPP-B-636.",
  },
  {
    code: "AQ",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve by submethod IIa, IIb or IId. If IIa is selected, place item in a nailed wood box per PPP-B-621, table III or IV, after sealing bag, conforming to MIL-B-131.",
  },
  {
    code: "AR",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve method II (submethod optional) except items inherently fungus-proof or completely treated with fungus-resistant compound or varnish (such as MIL-V-173) shall be preserved method III.",
  },
  {
    code: "AT",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-P-23199, level A. The need for purging shall be determined by criteria specified in MIL-P-23199 for level A.",
  },
  {
    code: "AU",
    description:
      "Preservative compounds shall not be applied to windings, commutators or peripheries of armatures or rotors. Shafts shall be coated with MIL-PRF-16173, Grade 2 preservative and wrapped with MIL-PRF-121 material, secured in place with ASTMD5486 tape. Commutators shall be wrapped with MIL-PRF-121 material, held in place with ASTM-D5486 tape. Exposed surfaces of steel collector rings shall be coated with MIL-PRF-16173, Grade 2 preservative. No preservative is required for bronze, brass or corrosion resisting metals. All collector rings shall be wrapped with MIL-PRF-121 material, secured in place with ASTM-D5486 tape. Corrodible surfaces, except shafts, commutators, and collector rings, may be preserved by the use of insulating varnish applied during the manufacturing process. In addition to the foregoing requirements, armatures and rotors shall be wrapped with MIL-PRF-121 material, secured with ASTM-D5486 tape.",
  },
  {
    code: "AW",
    description:
      "Preserve in accordance with any of the following alternate methods (used for gaskets and similar items): a. Seal in bags conforming to Class B, C or E of MIL-DTL-117, using stiffening material internally if needed to maintain rigidity. b. Preservation method 42 or 44. c. Place between sheet of, or in fold of, corrugated fiberboard of sufficient stiffness to resist bending, overwrap with waterproof wrapping paper conforming to PPPB-1055 and seal with pressure sensitive tape conforming to ASTM-D5486 or adhesive conforming to MMM-A-260. Authorization to use other waterproof barrier materials may be granted upon request.",
  },
  {
    code: "AY",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve submethod IA-8, IA-14, IA-15, or IA-16 using bags conforming to MIL-B-131.",
  },
  {
    code: "B1",
    description:
      "MIL-STD-2073-1B/2C Code: Package wire and manila rope block in accordance with MIL-B-3865.",
  },
  {
    code: "B3",
    description:
      "MIL-STD-2073-1B/2C Code: Package pumps, prime movers and associated repair parts in accordance with MIL-P-16789.",
  },
  {
    code: "B4",
    description:
      "MIL-STD-2073-1B/2C Code: Package refrigerators and related equipment in accordance with MIL-R-12323.",
  },
  {
    code: "B5",
    description:
      "MIL-STD-2073-1B/2C Code: Package main propulsion shafting, bearings and ship and boat propellers in accordance with MIL-P-2845.",
  },
  {
    code: "B6",
    description:
      "MIL-STD-2073-1B/2C Code: Package woolen, worsted and wool blend fabrics (synthetic fiber, cotton) in accordance with PPP-P-1132.",
  },
  {
    code: "B7",
    description:
      "MIL-STD-2073-1B/2C Code: Package synthetic fiber fabrics in accordance with PPP-P-1133.",
  },
  {
    code: "B8",
    description:
      "MIL-STD-2073-1B/2C Code: Package cotton and cotton-synthetic fiber blend fabrics (excluding duck fabrics) in accordance with PPP-P-1134.",
  },
  {
    code: "B9",
    description:
      "MIL-STD-2073-1B/2C Code: Package duck fabrics (cotton, synthetic fiber, cotton synthetic fiber blends) in accordance with PPP-P-1135.",
  },
  {
    code: "BA",
    description:
      "MIL-STD-2073-1B/2C Code: Assemble nonferrous accessories on shaft. Fasten nonferrous key in keyways with noncorrosive PPP-T-60 tape. Preserve ferrous parts and accessories using MIL-PRF-16173 preservative and fasten them to shaft with PPP-T-60 tape.",
  },
  {
    code: "BC",
    description:
      "Preserve by Method 20 as follows: Coat all pieces of set with preservative compound conforming to MIL-PRF-16173, Grade 4. Wrap or bag each preserved piece individually in MIL-PRF-121 material. Cushion or segregate individually wrapped or bagged pieces in the storage container to prevent movement and possible physical damage. (Segregated identical pieces, such as buckets and seal strips, are to be kept as close together in the container as possible to facilitate ease of counting.) Individually preserved, wrapped or bagged pieces need not be identified since container markings are in accordance with MIL-STD-129. Itemized packing lists for inclusion within or attachment to the outside of the container shall be furnished in accordance with MIL-STD-129. The lists shall show quantity and nomenclature of all items included in the set. (Used for turbine blade sets and similar items.)",
  },

  {
    code: "BD",
    description:
      'Remove parts made of rubber, fiber, or nonmetallic materials adversely affected by preservative compounds and package by Method 41 without a preservative. Preserve metal parts of assembly to conform to the requirements of Method 40. Mark the bag containing nonmetallic parts "Parts for Assembly" and include it within, or securely attached to, the pack containing metal parts in a manner which will assure its being found when the pack is opened. (Use for couplings and similar items.)',
  },
  {
    code: "BG",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve submethod IC-1 using L-P-378 heat sealable polyethylene barrier in lieu of MIL-B-121. Minimum film thickness shall be 4 mils.",
  },
  {
    code: "BJ",
    description:
      "MIL-STD-2073-1B/2C Code: Sandwich part between two rectangular pieces of fiberboard and seal the perimeter with PPP-T-60 or PPP-T-45, type II tape.",
  },
  {
    code: "BL",
    description: "Plug or seal all openings and preserve using Method 20.",
  },
  {
    code: "C1",
    description:
      "MIL-STD-2073-1B/2C Code: Package coated (plastic rubber) fabrics in accordance with PPP-P-1136.",
  },
  {
    code: "C2",
    description:
      "MIL-STD-2073-1B/2C Code: Package resistors in accordance with MIL-R-39032.",
  },
  {
    code: "C3",
    description:
      "MIL-STD-2073-1B/2C Code: Package sonobuoys in accordance with MIL-S-23665.",
  },
  {
    code: "C4",
    description:
      "MIL-STD-2073-1B/2C Code: Package microcircuits in accordance with MIL-M-55565.",
  },
  {
    code: "C5",
    description:
      "MIL-STD-2073-1B/2C Code: Package DOD materiel in accordance with MIL-STD-2073-1.",
  },
  {
    code: "C6",
    description:
      "MIL-STD-2073-1B/2C Code: Package gyroscopic assemblies in accordance with MIL-G-81559.",
  },
  {
    code: "C7",
    description:
      "MIL-STD-2073-1B/2C Code: Package connectors in accordance with MIL-C-55330.",
  },
  {
    code: "C8",
    description:
      "MIL-STD-2073-1B/2C Code: Package switches in accordance with MIL-S-28786.",
  },
  {
    code: "C9",
    description:
      "MIL-STD-2073-1B/2C Code: Package kits in accordance with MIL-STD-2073-1, appendix E.",
  },
  {
    code: "CE",
    description:
      "MIL-STD-2073-1B/2C Code: Package submethod IC-1 using MIL-B-121 material. Place each item in a PPP-B-566 or PPP-B-676 folding paperboard or setup box.",
  },
  {
    code: "CG",
    description:
      "MIL-STD-2073-1B/2C Code: Package submethod IA-8 using MIL-B-131 material.",
  },
  {
    code: "CH",
    description:
      "MIL-STD-2073-1B/2C Code: Package submethod IA-14 using a PPP-B-636, type CF, class weather resistant outer container.",
  },
  {
    code: "CJ",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve submethod IA-15 with kraft paper overwrap, secured.",
  },
  {
    code: "CM",
    description:
      "MIL-STD-2073-1B/2C Code: Package submethod IIb using a PPP-B-636, type CF, class weather resistant outer container.",
  },
  {
    code: "CP",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve submethod IIe with kraft paper overwrap, secured.",
  },
  {
    code: "CQ",
    description:
      "MIL-STD-2073-1B/2C Code: Package method III in bags, boxes or cylindrical containers of minimum practical size. Bags shall be in accordance with MIL-B-121.",
  },
  {
    code: "D6",
    description:
      "MIL-STD-2073-1B/2C Code: Package single-leg wire rope assemblies in accordance with MIL-W-3903.",
  },
  {
    code: "D7",
    description:
      "MIL-STD-2073-1B/2C Code: Package welded, weldless and roller chains and attachments in accordance with RR-C-271.",
  },
  {
    code: "DA",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve method III as follows: wrap in a tight, conforming wrap of m. The wrap shall be fastened, but not sealed, with pressure sensitive tape.",
  },
  {
    code: "DB",
    description:
      "Preserve by Method 10 modified as follows: Preserve in transparent barrier bag made of A-A-3174 or Type III MIL-PRF-22191 material. A-A-3174 or MILPRF-22191, Type III material, A-A-3129 or PPP-C-795 cushioning shall be used to cushion sharp edges and protrusions of the preserved items. Bag closure shall be made by any suitable means, except that staples shall not be used. When use of a bag is not practicable, the item shall be completely wrapped in the above barrier or cushioning material and secured with pressure sensitive tape. Also, the use of shaped or molded packs utilizing MIL-PRF-22191 or A-A-3174 materials in conjunction with plastic coated board is acceptable provided the pack's cube is not increased and the pack meets the tests specified in Appendix G. Strip or block form of multiple packages shall incorporate provisions for separating unit quantities.",
  },
  {
    code: "DC",
    description:
      "Preserve by Method 20 modified as follows: Preserve in a transparent barrier wrap made of Type II, MIL-PRF-22191 barrier material, or bag conforming to Type II, Class C, Style 2 of MIL-DTL-117. MIL-PRF-22191, Type II barrier material shall be used to cushion sharp edges and protrusions of item to prevent bag puncture. AA-3129 or PPP-C-795 may also be used to cushion sharp edges and protrusions if item is first wrapped in MIL-PRF-22191, Type II barrier material. The bag closure shall be made by any suitable means, except that staples shall not be used. Also, the use of shaped, preformed or molded packages utilizing MIL-PRF-22191 or A-A-3174 materials in conjunction with plastic coated board is acceptable, provided that the package cube is not increased and materials are compatible with preservative specified. However, these packages shall be capable of meeting the tests specified in Appendix G. Strip or block form of multiple packages shall incorporate provisions for separating unit quantities.",
  },
  {
    code: "DD",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve IC-1 or IA-8 modified using MIL-B-131 bag. Caps and Plugs Required.",
  },
  {
    code: "DG",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve submethod IIc in a MIL-B-131 bag.",
  },
  {
    code: "DH",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve method I using the preservative indicated in digit positions 4 and 5 of the packaging code on critical surfaces.",
  },
  {
    code: "DN",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve method I using the preservative indicated in digit positions 4 and 5 of the packaging code on exterior surfaces and open interior passages.",
  },
  {
    code: "DP",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve method IC using the preservative indicated in digit positions 4 and 5 of the packaging code on exterior surfaces and open interior passages.",
  },
  {
    code: "DQ",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve method IA using the preservative indicated in digit positions 4 and 5 of the packaging code on exterior surfaces and open interior passages.",
  },
  {
    code: "DR",
    description:
      "Preserve by Method 30 as follows: Each unit shall have all internal fluid-carrying passages, which are not prelubricated, filled with the specified preservative, allowing space for internal thermal expansion. If filling is not practical, the unit shall be internally fog-sprayed or flushed, then drained to the drip point. All ports, fittings, openings, etc., shall be capped or plugged with noncorrosive (non-interacting) metal caps or plugs conforming to NAS 847 or equivalent. All hydraulic preservative operating fluid used shall be filtered through a 3 micron absolute filter prior to being used as specified above. Exterior bare metal surfaces, subject to corrosion, shall be coated with compound conforming to MIL-PRF-16173, Grade 2 or MIL-C-11796, Class 3. Unit shall be wrapped with a greaseproof wrap conforming to MIL-PRF-121 or equivalent; seal seams with ASTM D5486 tape to effect a measure of waterproofness and prevent unwrapping. The unit must be adequately cushioned with material specified and placed in a grade V3c container fabricated in accordance with ASTM D5118/D5118M (as a minimum), Style FOL or CSSC. All seams, corners, and manufacturer's joint shall be tape-sealed with two inch tape conforming to ASTM D5486, Type III or IV.",
  },

  {
    code: "DS",
    description:
      "MIL-STD-2073-1B/2C Code: Wrap and cushion cable assembly connector end(s) in accordance with MIL-P-116 requirements. Seal connector ends in MIL-B-131 material. Coil if possible to minimum cube & secure with dry common cord.",
  },
  {
    code: "DV",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve submethod IIa using MIL-B-22191, type I, transparent film in lieu of MIL-B-131 material.",
  },
  {
    code: "DW",
    description:
      "Preserve by Method 52 as follows: Item shall be cleaned, wrapped, blocked and braced, with desiccant in an interior fiberboard box fabricated in accordance with ASTM D5118/D5118M, Class domestic. Desiccant shall be placed inside the fiberboard box. A humidity indicator shall be placed on the outside of the fiberboard box. MIL-PRF-131 barrier material, sealed as required, shall be utilized around the first container. The cushioning, to be specified under the cushioning code and in the thickness required to adequately protect the item, shall be placed between the barrier and the outer container.",
  },
  {
    code: "DX",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve submethod IA-8 using a MIL-B-131 material. Place each preserved item in a PPP-B-566 or PPP-B-676 folding paperboard or set-up box.",
  },
  {
    code: "DY",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-STD-2073-1, except that packaging shall be converted to the minimum cube methods in accordance with MIL-STD-758 when nonrepairable items do not exceed 40 pounds and repairable items do not exceed 100 pounds.",
  },
  {
    code: "E1",
    description:
      "MIL-STD-2073-1B/2C Code: Package supplies and equipment that can be packaged commercially in accordance with ASTM D 3951.",
  },
  {
    code: "E3",
    description:
      "MIL-STD-2073-1B/2C Code: Package vulcanizing equipment in accordance with MIL-V-45554.",
  },
  {
    code: "E4",
    description:
      "MIL-STD-2073-1B/2C Code: Package wheeled vehicles in accordance with MIL-V-62038.",
  },
  {
    code: "E5",
    description:
      "MIL-STD-2073-1B/2C Code: Package in accordance with minimum guidelines for level C, preservation, packing and marking per MIL-STD-1190.",
  },
  {
    code: "EA",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve submethod IIc using a MIL-B-131 material. Place each preserved item in a PPP-B-566 or PPP-B-676 folding paperboard or set-up box. Use sufficient cushioning within the box to pass the free fall drop test of MIL-P-116.",
  },
  {
    code: "EB",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve submethod IC-3 using a MIL-B-121 material. Place each preserved item in a PPP-B-566 or PPP-B-676 folding paperboard or set-up box. Use sufficient cushioning within the box to pass the free fall drop test of MIL-P-116.",
  },
  {
    code: "EK",
    description:
      "Preserve by Method 10 as follows: Each bolt shall have the shank and threads protected by means of a sleeve extending over the full length of the shank and thread. The sleeve shall be manufactured from paperboard, asphalt impregnated chipboard, or spiral wrap of kraft paper over chipboard, lined with material conforming to MIL-PRF-121. Plastic sleeve coverings may also be used.",
  },
  {
    code: "EL",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve submethod IC-1 using a MIL-B-121 material. Place each preserved item in a fiberboard box meeting the weight limitations of PPP-B-636.",
  },
  {
    code: "FA",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-B-197, method symbol A.",
  },
  {
    code: "FB",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-B-197, method symbol B.",
  },

  {
    code: "FC",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-B-197, method symbol C.",
  },
  {
    code: "FF",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-B-197, method symbol F.",
  },
  {
    code: "FG",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-B-197, method symbol G.",
  },
  {
    code: "FH",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-B-197, method symbol H.",
  },
  {
    code: "FJ",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-B-197, method symbol J.",
  },
  {
    code: "FK",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-B-197, method symbol K.",
  },
  {
    code: "FL",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-B-197, method symbol L.",
  },
  {
    code: "FM",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-B-197, method symbols A (only bearings with O.D. > 4.68), C, G (only for bearings 10 lbs or less), or L as applicable.",
  },
  {
    code: "FN",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-B-197, method symbol L for open bearings and method symbol C or L for closed bearings.",
  },
  {
    code: "FP",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-B-197, method symbols A or L.",
  },
  {
    code: "FQ",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-E-75, packaging group 1.",
  },
  {
    code: "FS",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-E-75, packaging group 4.",
  },
  {
    code: "FT",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-E-75, packaging group 9. Appropriate magnetic cautionary markings shall be determined in accordance with MIL-S-4473.",
  },
  {
    code: "FU",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-E-75, packaging group 23.",
  },
  {
    code: "FV",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-E-75, packaging group 24.",
  },
  {
    code: "FX",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-4 (method I).",
  },
  {
    code: "FY",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-5 (method III).",
  },
  {
    code: "GA",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-6 (for EMF/ESD-sensitive items, submethod IA-8).",
  },
  {
    code: "GB",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-7 (for EMF/ESD-sensitive items, submethod IIc).",
  },
  {
    code: "GC",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-8 (deleted from MS90363K, use MS90363-6).",
  },
  {
    code: "GP",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-3 (submethod IC-1).",
  },
  {
    code: "GQ",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-2 (submethod ID-3).",
  },
  {
    code: "GR",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-1 (submethod IIID).",
  },
  {
    code: "GS",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-1 (submethod IIID).",
  },
  {
    code: "GU",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-9 (submethod IA-8).",
  },
  {
    code: "GV",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-9 (submethod IA-8).",
  },
  {
    code: "GW",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-9 (submethod IA-8).",
  },
  {
    code: "GX",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-10 (submethod IA-6).",
  },
  {
    code: "GY",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-10 (submethod IA-6).",
  },
  {
    code: "HA",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-11 (submethod IIIB).",
  },
  {
    code: "HB",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-12 (submethod IA-7).",
  },
  {
    code: "HC",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-12 (submethod IA-7).",
  },
  {
    code: "HD",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-12 (submethod IA-7).",
  },
  {
    code: "HE",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-12 (submethod IA-7).",
  },
  {
    code: "HF",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-12 (submethod IA-7).",
  },
  {
    code: "HG",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-12 (submethod IA-7).",
  },
  {
    code: "HH",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-12 (submethod IA-7).",
  },
  {
    code: "HJ",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-13 (submethod IC-2).",
  },
  {
    code: "HK",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-13 (submethod IC-2).",
  },
  {
    code: "HL",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-13 (submethod IC-2).",
  },
  {
    code: "HM",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-13 (submethod IC-2).",
  },
  {
    code: "HN",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-13 (submethod IC-2).",
  },
  {
    code: "HP",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-13 (submethod IC-2).",
  },
  {
    code: "HQ",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-14 (submethod IC-3).",
  },
  {
    code: "HR",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-14 (submethod IC-3).",
  },
  {
    code: "HS",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-14 (submethod IC-3).",
  },
  {
    code: "HT",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-15 (submethod IIIE).",
  },
  {
    code: "HU",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-15 (submethod IIIE).",
  },
  {
    code: "HV",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-15 (submethod IIIE).",
  },
  {
    code: "HW",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-15 (submethod IIIE).",
  },
  {
    code: "HX",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-16 (submethod IIIF).",
  },
  {
    code: "HY",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-16 (submethod IIIF).",
  },
  {
    code: "JA",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-17 (submethod IA-2).",
  },
  {
    code: "JB",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-17 (submethod IA-2).",
  },
  {
    code: "JC",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-17 (submethod IA-2).",
  },
  {
    code: "JD",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-17 (submethod IA-2).",
  },
  {
    code: "JE",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-17 (submethod IA-2).",
  },
  {
    code: "JF",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-17 (submethod IA-2).",
  },
  {
    code: "JG",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-17 (submethod IA-2).",
  },
  {
    code: "JH",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-17 (submethod IA-2).",
  },
  {
    code: "JJ",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-17 (submethod IA-2).",
  },
  {
    code: "JK",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MS90363-18 (submethod IB-4).",
  },
  {
    code: "JL",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve submethod IC-3 using MIL-B-22191, type III film. Sharp edges & protrusions shall be sufficiently cushioned with transparent material to protect the item and barrier.",
  },
  {
    code: "JM",
    description:
      "MIL-STD-2073-1D Code: Preserve Method 10 as follows: Unit container shall consist of one piece of 3/8-inch plywood and one piece of double wall fiberboard meeting the requirements of ASTM-D4727, each 4 inches longer and wider than the item dimensions.",
  },
  {
    code: "JN",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve in accordance with MIL-P-23199, level B.",
  },
  {
    code: "JR",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve method III. Package technical literature submethod IC-1 and place on top of contents prior to closure of unit container.",
  },
  {
    code: "JS",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve submethod IA-14. Package technical literature submethod IC-1 and place on top of contents prior to closure of unit container.",
  },
  {
    code: "JT",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve submethod IIb. Package technical literature submethod IC-1 and place on top of contents prior to closure of unit container.",
  },
  {
    code: "JU",
    description:
      "MIL-STD-2073-1B/2C Code: Cable assemblies-Wrap & cushion connector end in accordance with procedure specified in MIL-P-116.Seal connector ends in MIL-B-131. Coil where possible to minimum cube & secure with dry common cord.Secure items weighing over 10 lbs.",
  },
  {
    code: "JV",
    description:
      "MIL-STD-2073-1B/2C Code: Cable assemblies-Wrap & cushion connector end in accordance with procedure specified in MIL-P-116.Seal connector ends in MIL-B-131.Coil where possible to minimum cube & secure with dry common cord.",
  },
  {
    code: "JW",
    description:
      "MIL-STD-2073-1B/2C Code: Cushion the item with antistatic material conforming to PPP-C-795, Class 2.",
  },
  {
    code: "JX",
    description:
      "MIL-STD-2073-1B/2C Code: Package in accordance with MIL-STD-1169 using a watervaporproof enclosure with desiccant (method II of MIL-P-116).",
  },
  {
    code: "JY",
    description:
      "MIL-STD-2073-1B/2C Code: Package in accordance with MIL-STD-1169 using a watervaporproof enclosure (method IA of MIL-P-116).",
  },
  {
    code: "JZ",
    description:
      "MIL-STD-2073-1B/2C Code: Package in accordance with MIL-STD-1169 using a waterproof or waterproof, greaseproof enclosure (method IC of MIL-P-116).",
  },
  {
    code: "KA",
    description:
      "MIL-STD-2073-1B/2C Code: Package in accordance with MIL-STD-1169 providing physical and mechanical protection (method III of MIL-P-116).",
  },
  {
    code: "KB",
    description:
      "MIL-STD-2073-1B/2C Code: Place the item in an antistatic pouch conforming to MIL-P-81997, Type I or II bag constructed from MIL-B-81705, Type II material, with or without a zipper closure and seal the pouch. Place the bagged item into an antistatic cushioned container.",
  },
  {
    code: "KC",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve submethod IC-1. Apply VV-L-800 preservative. Place item in a bag conforming to MIL-B-121.",
  },
  {
    code: "KD",
    description:
      "MIL-STD-2073-1B/2C Code: Preserve Method 31. Apply VV-L-800 preservative. Place item in a bag conforming to MIL-B-22020 and place bagged item into a weather resistant fiberboard box fabricated in accordance with ASTM-D5118.",
  },
  {
    code: "KE",
    description:
      "MIL-STD-2073-1B/2C Code: Wrap the item with barrier material conforming to MIL-B-81705, Type II. Place the wrapped or cushioned item in a bag conforming to MIL-B131.",
  },
  {
    code: "KF",
    description:
      "Clean each item in accordance with any applicable process. Use non-corrosive material to plug any crevices, holes or cavities. Preserve by directly applying strippable, plastic coating compound (hot dipping) conforming to MIL-P-149 or equivalent to the clean dry metal surface of the item. Apply the compound in such a way that upon removal, no compound will be retained in the voids. The compound shall be a Type II, transparent, cellulose acetate butyrate variety. Apply as many layers of the plastic coating compound as necessary to protect the item from contact damage and to seal it from moisture. Wrap the individually coated items in MIL-PRF-121 greaseproof, waterproof, barrier material. (Use on labyrinth rings and similar items in sets.)",
  },
  {
    code: "KG",
    description:
      "MIL-STD-2073-1D Code: Each fully buttoned shirt shall be neatly folded, secured with stainless steel (AISI Type 304 or 316) pins, aluminum clips or plastic fasteners, and inserted into a snug-fitting, clear plastic bag.",
  },
  {
    code: "KH",
    description:
      "MIL-STD-2073-1D Code: Each pair of shoes or boots shall be individually wrapped prior to being placed in a shoe box. Each pair of individually wrapped shoes or boots shall be packaged in a set-up style shoe box or a mailer type box.",
  },
  {
    code: "ZZ",
    description:
      "Method of preservation shall be in accordance with with specific instructions or drawings provided.",
  },
  {
    code: "Not Specified",
    description: "Method of preservation not specified.",
  },
];

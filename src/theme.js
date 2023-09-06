"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A62973",
      mainone: "#672376",
      secbg: "#FCD3D1",
      thirdsec: "#EE5064",
      purp: "#672376",
      pinkcol: "#DAB0E3",
      dropdown: "#DCBDE3",
      accord: "#E5BED5",
      drophire: "#DCA9C7",
      droppart: "#F3C3C9",
      pinktwo: "#EBC8DD",
      redpink: "#FFCCC9",
      redpinktwo: "#FFE3E3",
      redpinkthree: "#EDD8F2",
    },
    // You can also customize other palette colors here if needed
    typography: {
      fontFamily: '"Bebas",Urbanist',
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            border: "none",
          },
        },
      },
    },
  },
  // Other theme configurations...
});

export default theme;

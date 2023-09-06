"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Internsec from "../components/internsec";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import data from "../utilities/intern.js";
import dropdata from "../utilities/dropdown.js";
import "../styles/dropdown.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import arrow from "../../public/images/dropdown-arrow.svg";
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Test() {
  const [age, setAge] = React.useState("1");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    setAge(selectedValue);
  };

  const selectedDropdownData = dropdata.find((itemlist) => itemlist.id === age);
  const selectedMainData = data.find((item) => item.id === age);

  const fontz = {
    fontSize: "clamp(25px,2vw,36px)",
  };
  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            border: "none",
          },
        },
      },
    },
  });

  const CustomIcon = () => {
    // Replace this with your custom icon component
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31.293"
        height="28.886"
        viewBox="0 0 31.293 28.886"
      >
        <g id="dropdown-arrow" transform="translate(-1478 -4573)">
          <path
            id="Path_1"
            data-name="Path 1"
            d="M3328.454,4522.351l10.329,11.327,9.9-11.327"
            transform="translate(-1844.923 60.03)"
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
          <rect
            id="Rectangle_60"
            data-name="Rectangle 60"
            width="31.293"
            height="28.886"
            transform="translate(1478 4573)"
            fill="none"
          />
        </g>
      </svg>
    );
  };

  return (
    <Box>
      <Box
        sx={{
          minWidth: 120,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          p: "80px 0",
        }}
      >
        <ThemeProvider theme={theme}>
          <FormControl
            sx={{
              borderRadius: "100px",
              boxShadow: "4px 14px 11px 0px #00000012",
              width: "clamp(500px,38.5vw,690px)",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Select
              IconComponent={CustomIcon}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              displayEmpty
              MenuProps={{
                PaperProps: {
                  style: {
                    padding: "20px",
                    borderRadius: "30px",
                  },
                },
              }}
            >
              {dropdata &&
                dropdata.map((itemlist) => (
                  <MenuItem key={itemlist.id} value={itemlist.id}>
                    <Typography
                      sx={{
                        fontFamily: "Urbanist",
                        fontWeight: "700",
                        fontSize: { xs: "20px", lg: "clamp(25px,2vw,36px)" },
                      }}
                    >
                      {itemlist.title}
                    </Typography>
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </ThemeProvider>
      </Box>
      <Internsec contchange={selectedMainData} />
    </Box>
  );
}

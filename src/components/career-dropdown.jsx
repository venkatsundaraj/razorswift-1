import React from "react";
import { Box, fontFamily } from "@mui/system";
import { Typography } from "@mui/material";
import Image from "next/image";
import dropdown from "../../public/images/dropdown-arrow.svg";
const Cardropdown = () => {
  const dropimage = {
    marginLeft: "20px",
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "5% 0" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid none",
          borderRadius: "100px",
          padding: "10px 35px",
          boxShadow: "5px 12px 14px 0px #00000061",
        }}
      >
        <Typography
          sx={{ fontSize: "44px", fontFamily: "urbanist", fontWeight: "600" }}
        >
          <Box
            component="span"
            sx={{
              color: "primary.mainone",
              borderRadius: "100px",
            }}
          >
            Aspiring
          </Box>{" "}
          for a dream career ?
        </Typography>
        <Image style={dropimage} src={dropdown} />
      </Box>
    </Box>
  );
};

export default Cardropdown;

import React from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import aspiratvect from "../../public/images/aspirants-vector.svg";
import internmain from "../../public/images/placeholder-image.png";
import internone from "../../public/images/icon-1.svg";
import Whattoexp from "./whattoexp";
import data from "../utilities/intern.js";
import { Container } from "@mui/material";

const internsec = ({ contchange }) => {
  console.log(contchange.id);
  const imgs = {
    width: "500px",
    height: "initial",
  };

  return (
    <Box
      sx={{
        backgroundColor: `${
          contchange.id == 1
            ? "primary.pinkcol"
            : "" || contchange.id == 2
            ? "primary.drophire"
            : "" || contchange.id == 3
            ? "primary.droppart"
            : ""
        }`,
        pt: "5%",
        pb: "5%",
        pl: "60px",
        pr: "60px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Image src={aspiratvect} />
          <Typography
            sx={{
              fontSize: "clamp(45px,3.5vw,55px)",
              fontFamily: "urbanist",
              fontWeight: "500",
            }}
          >
            {contchange.firstsec.toptitleone}
          </Typography>
          <Typography
            sx={{
              fontSize: "clamp(65px,5vw,77px)",
              lineHeight: "1.0",
              fontFamily: "urbanist",
              fontWeight: "600",
              mb: "3%",
            }}
          >
            {contchange.firstsec.toptitletwo}
          </Typography>
          <Typography
            sx={{ fontSize: "22px", fontFamily: "urbanist", mb: "5%" }}
          >
            {contchange.firstsec.toppara}
          </Typography>
          <Box
            sx={{
              backgroundColor: "common.white",
              width: "fit-content",
              borderRadius: "200px",
              pt: "5px",
              pb: "5px",
              pl: "20px",
              pr: "20px",
              cursor: "pointer",
            }}
          >
            <Link
              underline="none"
              sx={{
                fontSize: "20px",
                color: "primary.purp",
                fontFamily: "urbanist",
              }}
            >
              {contchange.firstsec.button}
            </Link>
          </Box>
        </Box>

        <Box>
          <Image style={imgs} src={internmain} />
        </Box>
      </Box>
      {/* second */}
      <Whattoexp contchangeone={contchange} />
    </Box>
  );
};

export default internsec;

import React from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import aspiratvect from "../../../public/images/aspirants-vector.svg";
import internmain from "../../public/images/placeholder-image.png";
import internone from "../../public/images/icon-1.svg";
import Whattoexp from "./whattoexp";
import data from "../utilities/intern.js";
import { Container } from "@mui/material";

const DropdownBody = ({ contchange }) => {
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
        pl: { xs: "15px", lg: "64px" },
        pr: { xs: "15px", lg: "64px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
          <Box
            sx={{
              display: { xs: "flex" },
              flexDirection: { xs: "row-reverse", lg: "column" },
              width: { xs: "100vw", lg: "900px" },
              alignItems: { xs: "center", lg: "flex-start" },
            }}
          >
            <Box sx={{ width: { xs: "60vw" } }}>
              <Image src={aspiratvect} />
            </Box>
            <Box sx={{ width: { xs: "40vw" } }}>
              <Typography
                sx={{
                  fontSize: { xs: "25px", lg: "clamp(45px,3.5vw,55px)" },
                  fontFamily: "urbanist",
                  fontWeight: "500",
                }}
              >
                {contchange.firstsec.toptitleone}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "30px", lg: "clamp(65px,5vw,77px)" },
                  lineHeight: "1.0",
                  fontFamily: "urbanist",
                  fontWeight: "600",
                  mb: "3%",
                }}
              >
                {contchange.firstsec.toptitletwo}
              </Typography>
            </Box>
          </Box>
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

        <Box sx={{ display: { xs: "none", lg: "block" } }}>
          <Image style={imgs} src={internmain} />
        </Box>
      </Box>
      {/* second */}
      <Whattoexp contchangeone={contchange} />
    </Box>
  );
};

export default DropdownBody;

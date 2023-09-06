import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Image from "next/image";
import fivemen from "../../public/images/ready-to.svg";
const getstart = () => {
  const fonts = {
    fontSize: "clamp(40px, 3vw, 100px)",
  };
  const fontstwo = {
    fontSize: "clamp(20px, 1.5vw, 28px)",
  };
  const lastimg = {
    width: "40vw",
    height: "clamp(430px, 33.1vw, 700px)",
  };
  return (
    <Box
      sx={{
        lineHeight: "1.0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        // border: "1px solid",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          style={fonts}
          sx={{
            fontFamily: "Bebas Neue",
            color: "primary.purp",
            lineHeight: "1.0",
          }}
        >
          READY TO GET STARTED?
        </Typography>
        <Typography
          style={fontstwo}
          sx={{ fontFamily: "urbanist", margin: "20px 0" }}
        >
          Hire at scale with the click of a button.
        </Typography>
        <Box sx={{ display: "flex", gap: 5 }}>
          {/* <Box
            sx={{
              backgroundColor: "primary.main",
              borderRadius: "200px",
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link
              underline="none"
              sx={{
                fontSize: "15px",
                fontFamily: "urbanist",

                color: "common.white",
              }}
            >
              Build Your Profile
            </Link>
          </Box> */}
          <Box
            sx={{
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: "200px",
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link
              underline="none"
              sx={{
                fontSize: "15px",
                fontFamily: "urbanist",
                color: "primary.main",
              }}
            >
              Get a Demo
            </Link>
          </Box>
        </Box>
        <Image style={lastimg} src={fivemen} />
      </Box>
    </Box>
  );
};

export default getstart;

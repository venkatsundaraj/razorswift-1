import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import Image from "next/image";
import footerlogo from "../../public/images/footer-logo-white.png";
import twitt from "../../public/images/twitter-logo.svg";
import fb from "../../public/images/facebook-logo.svg";
import linkedin from "../../public/images/linkedin-logo.svg";
import insta from "../../public/images/instagram-logo.svg";
const footer = () => {
  const fontstyle = {
    color: "white",
    fontSize: "24px",
  };
  const footerimg = {
    width: "20%",
  };
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 10,
        pb: 5,
        pl: { xs: "15px", lg: "15%" },
        pr: { xs: "15px", lg: "15%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "common.white",
            fontSize: "64px",
            fontFamily: "urbanist",
            fontWeight: "600",
            textAlign: "center",
            lineHeight: "1.2",
            mb: 5,
            fontSize: { xs: "25px", lg: "clamp(40px,3.1vw,64px)" },
          }}
        >
          New Age Marketplace for
          <br /> Talent Acquisition
        </Typography>
        <Typography
          sx={{
            color: "common.white",

            fontFamily: "urbanist",
            mb: 5,
            fontSize: { xs: "17px", lg: "28px" },
          }}
        >
          Grow your expertise and business with us!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "150px",
          mb: 8,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <Image src={footerlogo} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDireaction: "row",
              justifyContent: "space-between",
            }}
          >
            <Image style={footerimg} src={twitt} />
            <Image style={footerimg} src={fb} />
            <Image style={footerimg} src={linkedin} />
            <Image style={footerimg} src={insta} />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", mt: "3%" }}>
          <Link
            underline="none"
            style={fontstyle}
            sx={{
              fontFamily: "urbanist",
              cursor: "pointer",
              fontWeight: "600",
              lineHeight: 2,
            }}
          >
            Solutions
          </Link>
          <Link
            underline="none"
            style={fontstyle}
            sx={{
              fontFamily: "urbanist",
              cursor: "pointer",
              fontWeight: "300",
              lineHeight: 2,
            }}
          >
            Aspirants
          </Link>
          <Link
            underline="none"
            style={fontstyle}
            sx={{
              fontFamily: "urbanist",
              cursor: "pointer",
              fontWeight: "300",
              lineHeight: 2,
            }}
          >
            Businesses
          </Link>
          <Link
            underline="none"
            style={fontstyle}
            sx={{
              fontFamily: "urbanist",
              cursor: "pointer",
              fontWeight: "300",
              lineHeight: 2,
            }}
          >
            Partners
          </Link>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", mt: "3%" }}>
          <Link
            underline="none"
            style={fontstyle}
            sx={{
              fontFamily: "urbanist",
              cursor: "pointer",
              fontWeight: "600",
              lineHeight: 2,
            }}
          >
            Courses
          </Link>
          <Link
            underline="none"
            style={fontstyle}
            sx={{
              fontFamily: "urbanist",
              cursor: "pointer",
              fontWeight: "600",
              lineHeight: 2,
            }}
          >
            About
          </Link>
          <Link
            underline="none"
            style={fontstyle}
            sx={{
              fontFamily: "urbanist",
              cursor: "pointer",
              fontWeight: "600",
              lineHeight: 2,
            }}
          >
            Contact Us
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "160px",
          borderTop: "1px solid",
          borderColor: "common.white",
          width: "100%",
          pt: "3%",
        }}
      >
        <Typography sx={{ color: "common.white", fontFamily: "urbanist" }}>
          2023 Razorswift. All rights reserved.
        </Typography>
        <Box sx={{ display: "flex", gap: "50px" }}>
          <Typography sx={{ color: "common.white", fontFamily: "urbanist" }}>
            Terms of Services
          </Typography>
          <Typography sx={{ color: "common.white", fontFamily: "urbanist" }}>
            Privacy Policy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default footer;

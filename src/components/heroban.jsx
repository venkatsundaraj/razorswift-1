"use client";
import React from "react";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import bannerimg from "../../public/images/banner-img-2.svg";
import Image from "next/image";
import { Container } from "@mui/material";
import Secsec from "../components/updateseccont";
import { motion } from "framer-motion";
import data from "../utilities/herosec.js";
const hero = () => {
  // const fonts = {
  //   fontSize: "clamp(65px, 5.5vw, 132px)",
  // };
  const parag = {
    fontSize: "clamp(22px, 1.8vw, 28px)",
  };
  const banimg = {
    width: "65vw",
    height: "auto",
  };
  const firstsec = {
    offscreen: {
      rotate: 0,
      x: -800,
    },
    onscreen: {
      rotate: [0, 20, -20, 20, 0],
      x: 0,
      transition: {
        type: "spring",
        duration: 2,
        ease: "easeInOut",
        damping: 9.8,
        stiffness: 100,
      },
    },
  };

  const parades = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };

  const parabutton = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
        ease: "easeInOut",
        delay: 2,
      },
    },
  };

  const secsecanime = {
    offscreen: {
      opacity: 0,
      y: 100,
    },
  };

  console.log(data);
  return (
    <Stack
      sx={{
        height: "100vh",
        justifyContent: "space-between",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Stack sx={{ zIndex: "1", marginTop: "120px", marginLeft: "30px" }}>
        <Stack sx={{ mb: 2 }}>
          <motion.div transition={{ staggerChildren: 1.9 }}>
            <motion.div
              variants={firstsec}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  color: "primary.mainone",
                  lineHeight: "1.0",
                  fontFamily: "Bebas Neue",
                  fontSize: {
                    xs: "clamp(30px, 2.4vw, 40px)",
                    sm: "clamp(40px, 3.1vw, 50px)",
                    lg: "clamp(65px, 5.5vw, 132px)",
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: "primary.main",
                    pr: 3,
                  }}
                >
                  EMPOWERING
                </Box>
                TALENT.
              </Typography>
            </motion.div>
            <motion.div
              variants={firstsec}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  color: "primary.mainone",
                  lineHeight: "1.0",
                  fontFamily: "Bebas Neue",
                  fontSize: {
                    xs: "clamp(30px, 2.4vw, 40px)",
                    sm: "clamp(40px, 3.1vw, 50px)",
                    lg: "clamp(65px, 5.5vw, 132px)",
                  },
                }}
              >
                <Box component="span" sx={{ color: "primary.main", pr: 3 }}>
                  ENABLINGING
                </Box>
                GROWTH.
              </Typography>
            </motion.div>
          </motion.div>
        </Stack>
        <motion.div
          viewport={{ once: true }}
          transition={{ staggerChildren: 1.9 }}
        >
          <motion.div
            variants={parades}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                mb: 2,
                fontFamily: "Urbanist",
              }}
            >
              <Box style={parag} component="span" sx={{ lineHeight: 1.0 }}>
                {data[0].title}
              </Box>
              <Box style={parag} component="span" sx={{ lineHeight: 1.0 }}>
                {data[0].titletwo}
              </Box>
            </Typography>
          </motion.div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          transition={{ staggerChildren: 1.9 }}
        >
          <motion.div
            variants={parabutton}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 3,
                fontFamily: "Urbanist",
              }}
            >
              <Link
                sx={{
                  fontSize: { xs: "16px", lg: "20px" },
                  textDecoration: "none",
                  border: "1px solid",
                  borderColor: "primary.light",
                  borderRadius: 50,
                  backgroundColor: "primary.main",
                  color: "common.white",
                  pt: 0.8,
                  pb: 0.8,
                  pl: 2,
                  pr: 2,
                  alignSelf: "center",
                }}
              >
                Build Your Profile
              </Link>
              <Link
                sx={{
                  fontSize: { xs: "16px", lg: "20px" },
                  textDecoration: "none",
                  border: "1px solid",
                  borderColor: "primary.light",
                  borderRadius: 50,
                  pt: 0.8,
                  pb: 0.8,
                  pl: 2,
                  pr: 2,
                  alignSelf: "center",
                }}
              >
                Get a Demo
              </Link>
            </Stack>
          </motion.div>
        </motion.div>
      </Stack>
      <Stack sx={{ position: "absolute", bottom: "50px", right: "0" }}>
        <Box component="span">
          <Image style={banimg} src={bannerimg} />
        </Box>
      </Stack>
      <motion.div transition={{ staggerChildren: 1.9 }}>
        <motion.div
          variants={secsecanime}
          initial={"offscreen"}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 2,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Secsec />
        </motion.div>
      </motion.div>
    </Stack>
  );
};

export default hero;

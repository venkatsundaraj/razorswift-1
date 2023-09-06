"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import data from "../utilities/pathway.js";
import datatwo from "../utilities/pathwaytwo.js";
import pathwayacc from "../../public/images/pathway-img.svg";
import Image from "next/image";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,
  "&:not(:last-child)": {
    borderBottom: "1px solid",
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ display: "none" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "#DCBDE3",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const fonthead = {
  fontSize: "clamp(45px, 3.5vw, 64px)",
};

const fonttitle = {
  fontSize: "clamp(25px, 2vw, 36px)",
  fontFamily: "Urbanist",
  fontWeight: "bold",
};

const fontdes = {
  fontSize: "clamp(15px, 1.2vw, 20px)",
  fontFamily: "Urbanist",
  fontWeight: "500",
  height: "clamp(75px, 5.5vw, 110px)",
};

const fontaspi = {
  fontSize: "clamp(34px, 2.5vw, 44px)",
  fontFamily: "Urbanist",
  fontWeight: "500",
};

const fontaspitwo = {
  fontSize: "clamp(20px, 1.5vw, 28px)",
  fontFamily: "Urbanist",
  fontWeight: "500",
};

const fontaspithree = {
  fontSize: "clamp(15px, 1.2vw, 20px)",
  fontFamily: "Urbanist",
  fontWeight: "500",
};

const accordimg = {
  width: "clamp(185px, 14.3vw, 300px)",
  // height: "clamp(180px, 13.3vw, 280px)",
  height: "clamp(145px, 11.2vw, 255px)",
};

export default function pathways() {
  const [expanded, setExpanded] = React.useState("panel0"); // Change initial value to null
  const [expandedone, setExpandedone] = React.useState("panelone0");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : null); // Update to null when collapsed
  };
  const handleChangeone = (panelone) => (eventone, newExpandedone) => {
    setExpandedone(newExpandedone ? panelone : null); // Update to null when collapsed
  };

  return (
    <Box sx={{ backgroundColor: "primary.main", padding: "0 50px 20px" }}>
      <Typography
        style={fonthead}
        sx={{ color: "common.white", fontFamily: "Bebas Neue" }}
      >
        RAZORSWIFT PATHWAYS
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {/* first sec*/}
        <Box sx={{ width: "35vw" }}>
          <Typography style={fontaspi} sx={{ color: "common.white" }}>
            Aspirants
          </Typography>
          <Typography style={fontaspitwo} sx={{ color: "common.white" }}>
            Be a niche specialist to achieve your potential
          </Typography>
          <Typography
            style={fontaspithree}
            sx={{
              color: "common.white",
              backgroundColor: "primary.purp",
              width: "fit-content",
              padding: "5px 15px",
              borderRadius: "50px",
              margin: "15px 0 15px 0",
              cursor: "pointer",
            }}
          >
            Choose your pathway now
          </Typography>
          {data.map(
            (
              item,
              index // Add index parameter to map
            ) => (
              <Accordion
                key={index} // Add a unique key for each accordion
                sx={{
                  backgroundColor: "primary.dropdown",
                  borderRadius:
                    index === 0
                      ? "40px 40px 0 0"
                      : index === data.length - 1
                      ? "0px 0px 40px 40px"
                      : "0",
                }}
                expanded={expanded === `panel${index}`} // Use index to identify each accordion
                onChange={handleChange(`panel${index}`)} // Use index to identify each accordion
              >
                <AccordionSummary
                  sx={{
                    borderRadius:
                      index === 0
                        ? "30px 30px 0 0"
                        : index === data.length - 1
                        ? "0px 0px 40px 40px"
                        : "0",
                  }}
                  aria-controls={`panel${index}d-content`} // Use index to identify each accordion
                  id={`panel${index}d-header`} // Use index to identify each accordion
                >
                  <Typography style={fonttitle}>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ border: "none", height: "40vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography sx={{ marginLeft: "10px" }} style={fontdes}>
                      {item.description}
                    </Typography>
                    <Image style={accordimg} src={pathwayacc} />
                  </Box>
                </AccordionDetails>
              </Accordion>
            )
          )}
        </Box>
        {/* second sec*/}
        <Box sx={{ width: "35vw" }}>
          <Typography style={fontaspi} sx={{ color: "common.white" }}>
            Businesses
          </Typography>
          <Typography style={fontaspitwo} sx={{ color: "common.white" }}>
            Standardise assessments and training.
          </Typography>
          <Typography
            style={fontaspithree}
            sx={{
              color: "common.white",
              backgroundColor: "primary.purp",
              width: "fit-content",
              padding: "5px 15px",
              borderRadius: "50px",
              margin: "15px 0 15px 0",
              cursor: "pointer",
            }}
          >
            Craft your pathway now
          </Typography>
          {datatwo.map(
            (
              item,
              index // Add index parameter to map
            ) => (
              <Accordion
                key={index} // Add a unique key for each accordion
                sx={{
                  backgroundColor: "primary.accord",
                  borderRadius:
                    index === 0
                      ? "40px 40px 0 0"
                      : index === datatwo.length - 1
                      ? "0px 0px 40px 40px"
                      : "0",
                }}
                expanded={expandedone === `panelone${index}`} // Use index to identify each accordion
                onChange={handleChangeone(`panelone${index}`)} // Use index to identify each accordion
              >
                <AccordionSummary
                  sx={{
                    borderRadius:
                      index === 0
                        ? "30px 30px 0 0"
                        : index === datatwo.length - 1
                        ? "0px 0px 40px 40px"
                        : "0",
                    backgroundColor: "primary.accord",
                  }}
                  aria-controls={`panelone${index}d-content`} // Use index to identify each accordion
                  id={`panelone${index}d-header`} // Use index to identify each accordion
                >
                  <Typography style={fonttitle}>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ border: "none", height: "40vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography sx={{ marginLeft: "10px" }} style={fontdes}>
                      {item.description}
                    </Typography>
                    <Image style={accordimg} src={pathwayacc} />
                  </Box>
                </AccordionDetails>
              </Accordion>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
}

import React from "react";
// import data from "@/utilities/what-to-expect";
import Image from "next/image";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
const Whattoexp = ({ contchangeone }) => {
  const dropdata = contchangeone.secondec;
  const imgsize = {
    width: "15%",
    marginRight: "3%",
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mt: "5%",
        }}
      >
        <Box
          sx={{
            width: "50%",
            borderRight: "1px solid",
            pt: "3%",
            pb: "3%",
            borderColor: "primary.mainone",
          }}
        >
          <Typography sx={{ fontFamily: "urbanist", fontSize: "28px" }}>
            What to expect ?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "end",
          }}
        >
          {dropdata.map((item) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                borderRadius: "20px",
                backgroundColor: "common.white",
                width: "45%",
                p: "15px",
                alignItems: "center",
                ml: "1%",
                mb: "1%",
              }}
            >
              <Image style={imgsize} src={item.image} />
              <Box>
                <Typography
                  sx={{
                    fontFamily: "urbanist",
                    fontSize: "clamp(22px,1.7vw,28px)",
                    fontWeight: "500",
                    lineHeight: 1.0,
                    mb: "5%",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "urbanist",
                    fontSize: "clamp(17px,1.2vw,20px)",
                    lineHeight: 1.0,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Whattoexp;

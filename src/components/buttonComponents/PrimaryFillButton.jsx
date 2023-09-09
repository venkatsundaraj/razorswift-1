import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const FillButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.pinkPalette.dark,
  color: theme.palette.primaryPalette.white,
  borderRadius: theme.spacing(3),
  padding: theme.spacing(1, 3),
  textTransform: "inherit",
  "&:hover": {
    backgroundColor: theme.palette.pinkPalette.dark,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "20px",
  },
}));

function PrimaryFillButton({ children, ...props }) {
  return <FillButton {...props}>{children}</FillButton>;
}

export default PrimaryFillButton;

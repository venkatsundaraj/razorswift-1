"use client";

import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const Heading = styled(Typography)(({ theme }) => ({}));

function PrimaryHeading({ children }) {
  return <Heading>{children}</Heading>;
}

export default PrimaryHeading;

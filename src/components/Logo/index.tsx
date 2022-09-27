import styled from "@emotion/styled";
import React from "react";

interface LogoProps {
  variant: "black" | "white";
}

const LogoImage = styled.img<{ h?: string }>`
  height: ${({ h }) => h || "48px"};
`;

const Logo = ({ variant = "black", size = "normal" }) => {
  const logoUrl = variant === "black" ? "/logo-black.png" : "/logo.png";
  const height = size === "small" ? "48px" : "50px";
  return <LogoImage h={height} src={logoUrl} />;
};

export default Logo;

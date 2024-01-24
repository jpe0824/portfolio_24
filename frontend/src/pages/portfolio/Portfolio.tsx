import { Box, Typography, useMediaQuery } from "@mui/material";
import { DownArrowButton, UpArrowButton } from "../../components/Buttons";
import styles from "../../styles/styles";
import React from "react";
import VerticalTabs from "../../components/VerticalTabs";
import UampsTab from "./portfolioTabs/UampsTab";
import OpenTextTab from "./portfolioTabs/OpentextTab";
import MamaBearTab from "./portfolioTabs/MamaBearTab";
import ReunionTab from "./portfolioTabs/ReunionTab";
import PortfolioTab from "./portfolioTabs/PortfolioTab";
import OtherTab from "./portfolioTabs/OtherTab";
import HorizontalTabs from "../../components/HorizantalTabs";

function Portfolio() {
  const tabs = [
    { label: "UAMPS", component: <UampsTab /> },
    { label: "OpenText", component: <OpenTextTab /> },
    { label: "Mama Bear's", component: <MamaBearTab /> },
    { label: "ReunionRSVP", component: <ReunionTab /> },
    { label: "Portfolios", component: <PortfolioTab /> },
    { label: "Other...", component: <OtherTab /> },
  ];

  const isLargeScreen = useMediaQuery("(min-width:800px)");

  return (
    <Box>
      <UpArrowButton page="/skills" direction="up" />
      <Typography variant="h2" style={styles.title}>
        Portfolio
      </Typography>
      {isLargeScreen ? (
        <VerticalTabs tabs={tabs} />
      ) : (
        <HorizontalTabs tabs={tabs} />
      )}

      <DownArrowButton page="/contact" direction="down" />
    </Box>
  );
}

export default Portfolio;

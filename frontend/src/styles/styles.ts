const styles = {
  paper: {
    display: "flex" as const,
    flexDirection: "column" as const,
    justifyContent: "center" as const,
    paddingLeft: 25, // You can adjust the padding as needed
    textAlign: "left" as const, // Centers the text inside the Paper
    minHeight: "160px" as const,
  },
  bottomPaper: {
    display: "flex" as const,
    flexDirection: "column" as const,
    justifyContent: "center" as const,
    paddingLeft: 25, // You can adjust the padding as needed
    textAlign: "left" as const, // Centers the text inside the Paper
    minHeight: "325px" as const,
    maxHeight: "325px" as const,
    overflow: "auto" as const,
  },
  title: {
    flexDirection: "column" as const, // Use camelCase for CSS property names
    marginLeft: "5vw", // Use camelCase for CSS property names
    marginTop: "7vh",
  },
};

export default styles;

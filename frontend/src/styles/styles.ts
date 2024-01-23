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
  pageContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "5vw", // Centers the Box itself
    marginRight: "5vw", // Centers the Box itself
    marginTop: "5vh", // Centers the Box itself
    marginBottom: "5vh", // Centers the Box itself
    width: "auto", // Adjust as needed
  },
  bodyContainer: {
    flexGrow: 1,
    height: "90vh",
    width: "100vw",
    overflow: "auto",
  },
};

export default styles;

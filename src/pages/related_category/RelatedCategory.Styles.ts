const relatedCategoryStyles = {
  mainCont: {
    height: "100vh",
    width: "100%",
  },

  topNavbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "70px",
    background: "#f5bf45",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1,
    "& > h2": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: "24px",
      textAlign: "center",
      color: "#18161B",
    },
  },

  bodyCont: {
    width: "100%",
    mt: "80px",
    height: "calc(100vh - 80px)",
    display: "flex",
    alignItems: "center",
    // border: "8px solid black",
    background: "#fafafa",
    justifyContent: "center",
    position: "fixed",
    bottom: "1px"
  },

  categoryProductsCont: {
    height: "100%",
    overflowY: "scroll",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(146px, 1fr))",
    gap: {xs: 5, sm: 4, md: 5, lg: 5, xl: 10},
    mt: 6,
    // alignItems: "center",
    justifyItems: "center",
    width: { xs: "95%", sm: "90%", md: "80%", lg: "70%", xl: "60%" },
    pr: { xs: 0, sm: 2 },
    // border: "3px solid orange",
    "&::-webkit-scrollbar": {
      width: "4px",
      borderRadius: "20px",
      display: "none"
    },
    "&::-webkit-scrollbar-track": {
      background: "#F5BF45",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#C4C4C4",
      borderRadius: "20px",
    },
  },
};

export default relatedCategoryStyles;

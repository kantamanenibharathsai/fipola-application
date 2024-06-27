const topNavbarStyles = {
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
    "& img": {
      width: "24px",
      height: "20px",
      cursor: "pointer",
    },
    "& > h2": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 800,
      fontSize: "29px",
      textAlign: "center",
      color: "#18161B",
    },
  },

  topNavbarChild: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "inherit",
    // border: "1px solid black",
    width: "90%",
    "& > h2": {
      flexGrow: 1,
      // border: "1px solid black",
      textAlign: "center",
    },
    "& > img:nth-of-type(2)": {
      width: "40px",
      height: "40px",
      cursor: "pointer",
    },
  },
};

export default topNavbarStyles;

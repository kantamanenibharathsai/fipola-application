const categoryStyles = {
  bodyCont: {
    width: "100%",
    mt: "82px",
    height: "calc(100vh - 82px - 65px)",
    display: "flex",
    flexDirection: "column",
    gap: 2,
    // border: "2px solid black",
    pb: 1,
  },

  topNavbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "82px",
    background: "#f5bf45",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1,
    "& h2": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: "24px",
      textAlign: "center",
      color: "#18161B",
    },
  },

  textFieldCont: {
    boxShadow: "0 0.9px 0.9px -1px black",
    height: "55px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    background: "#fff",
    px: "12px",
    // border: "1px solid red",
    "& img": {
      width: "20px",
      height: "20px",
    },
    "& input": {
      outline: "none",
      border: "none",
      flexGrow: 1,
      width: "calc(68% - 24px - 20px)",
      fontFamily: "Montserrat Alternates",
      fontWeight: 500,
      fontSize: "15px",
      color: "#A4A1A1",
      height: "50px",
      pl: "10px",
      // border: "2px solid green",
    },
  },

  cardsCont: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: 2,
    overflowY: "auto",
    // border: "2px solid green",
    height: "auto",
    width: { xs: "98%", sm: "88%", md: "75%", lg: "70%", xl: "55%" },
    alignSelf: "center",
    transformStyle: "preserve-3d",
    transform: "perspective(1000px)",
    // "& div:has(+ *:hover) img": {
    //   filter: "brightness(1)",
    //   transform: "scale(1.9)",
    // },
  },

  centerCont: {
    width: { xs: "98%", sm: "88%", md: "75%", lg: "70%", xl: "55%" },
    display: "grid",
    placeItems: "center",
    flexGrow: 1,
    // border: "2px solid green",
    alignSelf: "center",
  },

  spinner: {
    "&:before": {
      content: '""',
      boxSizing: "border-box",
      position: "absolute",
      left: { xs: "47%", lg: "50%" },
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      border: "2px solid #000",
      borderTopColor: "#0e0",
      borderRightColor: "#0dd",
      borderBottomColor: "#f90",
      animation: "spinnerAnim .6s linear infinite",
      mt: "-25px",
    },
    "@keyframes spinnerAnim": {
      to: {
        transform: "rotate(360deg)",
      },
    },
  },
};

export default categoryStyles;

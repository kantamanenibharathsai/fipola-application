const loginBoardingScreenStyles = {
  container: {
    width: { xs: "100%", sm: "90%", md: "70%", lg: "80%", xl: "55%" },
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    justifyContent: { xs: "center", lg: "center" },
    alignItems: { xs: "strech", lg: "center" },
    // border: "3px solid black",
    height: { lg: "75%", xl: "70%" },
  },

  bottomCont: {
    background: "#f5bf45",
    "& h2": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: { xs: "22px", lg: "28px" },
      textAlign: "center",
      color: "#18161B",
    },
  },

  textFieldCont: {
    display: "flex",
    alignItems: "center",
    borderRadius: "36px",
    width: "100%",
    height: "55px",
    background: "#fff",
    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
    px: "18px",
    "& svg": {
      width: "20px",
      height: "20px",
      color: "#18161B",
    },
    "& input": {
      outline: "none",
      border: "none",
      flexGrow: 1,
      fontFamily: "Montserrat Alternates",
      fontWeight: 300,
      fontSize: "18px",
      color: "#18161B",
      height: "50px",
      borderRadius: "14px",
      pl: "15px",
      "&::-webkit-outer-spin-button": {
        "WebkitAppearance": "none",
      },
      "&::-webkit-inner-spin-button": {
        "WebkitAppearance": "none",
      },
    },
  },
};

export default loginBoardingScreenStyles;

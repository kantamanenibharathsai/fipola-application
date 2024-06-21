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
        WebkitAppearance: "none",
      },
      "&::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
      },
    },
  },

  dontHaveAccount: {
    fontFamily: "Montserrat Alternates",
    fontWeight: 600,
    fontSize: "15px",
    // textAlign: "center",
    color: "#18161B",
    mt: "-20px",
    "& span": {
      color: "red",
      cursor: "pointer",
    },
  },

  spinnerContainerStyle: {
    maxWidth: "390px",
    background: "#f62b29",
    color: "#fff",
    fontWeight: "600",
    width: "91%",
    textTransform: "none",
    fontSize: "1rem",
    py: 1.2,
    height: "44px",
    alignSelf: "strech",
    borderRadius: "13px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  spinner: {
    "&:before": {
      content: '""',
      boxSizing: "border-box",
      position: "absolute",
      left: "46%",
      width: "25px",
      height: "25px",
      borderRadius: "50%",
      border: "2px solid #fff",
      borderTopColor: "#0e0",
      borderRightColor: "#0dd",
      borderBottomColor: "#f90",
      animation: "spinnerAnim .6s linear infinite",
      mt: "-12px",
    },
    "@keyframes spinnerAnim": {
      to: {
        transform: "rotate(360deg)",
      },
    },
  },

  positiveResponse: {
    fontFamily: "Montserrat Alternates",
    fontWeight: 600,
    fontSize: "14px",
    mt: "-20px",
    color: "green",
    // border: "2px solid red"
    "& span": {
      fontSize: "18px",
      color: "black",
      mx: 1
    }
  },

  negativeResponse: {
    fontFamily: "Montserrat Alternates",
    fontWeight: 600,
    fontSize: "14px",
    mt: "-20px",
    color: "red",
  },
};

export default loginBoardingScreenStyles;

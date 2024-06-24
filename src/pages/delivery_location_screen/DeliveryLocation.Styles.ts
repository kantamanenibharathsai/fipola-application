const delivLocStyles = {
  container: {
    height: "100vh",
    width: { xs: "100%", sm: "70%", md: "75%", lg: "55%", xl: "40%" },
    background: "#f5bf45",
    py: "35px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
  },

  childCont: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    // border: "3px solid green",
    flexGrow: 1,
  },

  flexCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    // border: "2px solid yellow",
    width: "100%",
    "& img": {
      width: "120px",
      height: "120px",
    },
    "& h2": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: "24px",
      textAlign: "center",
      color: "#18161B",
    },
    "& h2 + p": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 500,
      fontSize: "17px",
      textAlign: "center",
      color: "#18161B",
      "& + p": {
        fontFamily: "Montserrat Alternates",
        fontWeight: 600,
        fontSize: "20px",
        textAlign: "center",
        color: "#18161B",
        mt: "-20px",
      },
    },
    "& #resend": {
      color: "#f62b2a",
      borderBottom: "1px solid #f62b2a",
      cursor: "pointer",
    },
  },

  otpCont: {
    display: "flex",
    columnGap: "10px",
    "& input": {
      height: "60px",
      width: "60px",
      borderRadius: "50%",
      outline: "none",
      textAlign: "center",
      border: "none",
      fontFamily: "Montserrat Alternates",
      fontWeight: 300,
      fontSize: "25px",
      color: "#000",
      "&::-webkit-outer-spin-button": {
        WebkitAppearance: "none",
        display: "none",
      },
      "&::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
        display: "none",
      },
    },
  },

  spinnerContainerStyle: {
    background: "#f62b2a",
    color: "#fff",
    fontWeight: "600",
    textTransform: "none",
    fontSize: "1rem",
    alignSelf: "strech",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "30px",
    width: "100%",
    height: "55px",
    fontFamily: "Montserrat Alternates",
    textAlign: "center",
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
      mx: 1,
    },
  },

  negativeResponse: {
    fontFamily: "Montserrat Alternates",
    fontWeight: 600,
    fontSize: "14px",
    mt: "-20px",
    color: "red",
  },
};

export default delivLocStyles;

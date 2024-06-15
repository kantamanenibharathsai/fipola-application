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
        "-webkit-appearance": "none",
        display: "none",
      },
      "&::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        display: "none",
      },
    },
  },
};

export default delivLocStyles;

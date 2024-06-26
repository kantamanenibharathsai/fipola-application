const profilePageStyles = {
  mainCont: {
    // height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
  },

  topCont: {
    background: "#f5bf45",
    position: "relative",
    height: "25vh",
    boxSizing: "border-box",
    px: 1.5,
    pt: 2,
    "& > div": {
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    "& > div > img": {
      width: "24px",
      height: "24px",
    },
    "& > div > img + h2": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 500,
      fontSize: "21px",
      flexGrow: 1,
      textAlign: "center",
      color: "#18161B",
      // border: "1px solid red"
    },
  },

  imageUploadCont: {
    position: "relative",
    // top: { xs: "145px", xl: "180px" },
    top: { xs: "37%", xl: "51%" },
    background: "#fff",
    padding: "8px",
    zIndex: 1,
    margin: "auto",
    // border: "1px solid red",
    height: "150px",
    maxWidth: "150px",
    borderRadius: "50%",
    "& > label": {
      width: "46px",
      height: "46px",
      background: "#f62b2a",
      position: "absolute",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      right: "-4px",
      top: "15px",
      zIndex: 3,
      cursor: "pointer",
      "& > img": {
        width: "24px",
        height: "24px",
      },
    },
    "& > div": {
      borderRadius: "50%",
      height: "140px",
      width: "140px",
    },
    "& > div > img": {
      objectFit: "cover",
      borderRadius: "50%",
      height: "100%",
      width: "100%",
      mt: 0.3,
    },
  },

  bottomCont: {
    boxSizing: "border-box",
    height: { xs: "74vh", xl: "75vh" },
    position: "relative",
    display: "flex",
    flexDirection: "column",
    "& form": {
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      width: "93%",
      maxWidth: "440px",
      height: "inherit",
      justifyContent: "space-between",
      // border: "2px solid red",
      pt: { xs: 12, xl: 15 },
      pb: 6,
      alignSelf: "center",
      "& > div:nth-of-type(1)": {
        display: "flex",
        flexDirection: "column",
        gap: {xs:3.5, xl: 4.5},
        // border: "2px solid green",
      },
    },
  },

  textfieldLabel: {
    color: "#000",
    fontWeight: 600,
  },

  textfield: {
    width: "100%",
    borderRadius: "25px",
    color: "#A9A9A9",
    "& .MuiInputBase-input": {
      height: "20px",
      borderRadius: "25px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "2px solid #000",
        borderRadius: "35px",
      },
      "&.Mui-focused fieldset": {
        border: "2px solid #000",
      },
      "&:hover fieldset": {
        borderColor: "#000",
        color: "#000",
      },
    },
    "& .MuiInputBase-input-MuiOutlinedInput-input": {
      color: "#A9A9A9",
    },
  },
  btnBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  btn: {
    background: "#f62b29",
    color: "#fff",
    borderRadius: "25px",
    fontWeight: "600",
    width: "100%",
    textTransform: "none",
    fontSize: "1rem",
    py: 1.2,
    "&:hover": {
      background: "#f62b29",
    },
  },

  alreadyHaveAccount: {
    fontFamily: "Montserrat Alternates",
    fontWeight: 600,
    fontSize: "14px",
    color: "#18161B",
    mt: 1,
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
    mt: 1,
    color: "green",
  },

  negativeResponse: {
    fontFamily: "Montserrat Alternates",
    fontWeight: 600,
    fontSize: "14px",
    mt: 1,
    color: "red",
  },
};

export default profilePageStyles;

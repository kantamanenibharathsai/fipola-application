const addNewAddressStyles = {
  mainCont: {
    height: "100vh",
    width: "100%",
    // background: "#f3f3f3",
  },

  emptyBox: {
    width: "100%",
    height: "70px",
  },

  bodyCont: {
    width: { xs: "100%", sm: "90%", md: "75%", lg: "60%", xl: "50%" },
    margin: "auto",
    height: "calc(100vh - 70px)",
    // border: "3px solid black",
  },

  bodyTopCont: {
    height: "50%",
    width: "100%",
  },

  bodyBottomCont: {
    height: "50%",
    width: "100%",
    // border: "3px solid black",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  },

  formCont: {
    width: "90%",
    margin: "auto",
    // maxWidth: "551px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    py: 5,
    // border: "3px solid black",
  },

  textfieldLabel: {
    color: "#000",
    fontWeight: 600,
  },

  textfield: {
    width: "100%",
    borderRadius: "25px",
    "& .MuiInputBase-input": {
      height: "20px",
      borderRadius: "25px",
      color: "#A9A9A9",
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: "16px",
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
      },
    },
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
  },

  redBtn: {
    background: "#f62b2a",
    borderRadius: "30px",
    height: "55px",
    fontFamily: "Montserrat Alternates",
    fontWeight: 600,
    fontSize: "16px",
    textAlign: "center",
    color: "#fff",
    alignSelf: "strech",
    textTransform: "capitalize",
    "&: hover": {
      background: "#f62b2a",
    },
  },
};

export default addNewAddressStyles;

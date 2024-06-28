const cardDetailsInputsStyles = {
  mainCont: {
    height: "100vh",
    width: "100%",
  },

  yellowCont: {
    height: "152px",
    background: "#F5BF45",
    width: "100%",
  },

  bottomCont: {
    height: "calc(100vh - 152px)",
    background: "#fff",
  },

  formCont: {
    width: "90%",
    margin: "auto",
    maxWidth: "551px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "inherit",
  },

  cardCont: {
    borderRadius: "15px",
    boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
    py: 6,
    px: 1.5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "401px",
    position: "relative",
    top: "-21vh",
    margin: "auto",
    zIndex: 99,
    background: "#fff",
    width: "100%",
    maxWidth: "550px"
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
    mb: 3.5,
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

export default cardDetailsInputsStyles;

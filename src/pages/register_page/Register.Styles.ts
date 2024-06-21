const styles = {
  headerBox: { flexGrow: 1 },
  appbar: { background: "#f5bf45", color: "#000", textAlign: "center" },
  registerText: { flexGrow: 1, fontWeight: 600 },
  textfieldLabel: {
    color: "#000",
    fontWeight: 600,
  },
  textfield: {
    mt: 3,
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
  continueBtnBox: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  continueBtn: {
    maxWidth: "390px",
    background: "#f62b29",
    color: "#fff",
    borderRadius: "25px",
    fontWeight: "600",
    width: "91%",
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

export default styles;

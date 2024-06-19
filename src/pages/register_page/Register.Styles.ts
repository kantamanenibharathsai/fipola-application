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
  },
  continueBtnBox: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
};

export default styles;

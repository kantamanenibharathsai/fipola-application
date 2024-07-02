const paymentMethodStyles = {
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
    width: "100%",
    height: "calc(100vh - 70px)",
    // background: "#f3f3f3",
    py: 2,
    // border: "3px solid black",
  },

  bodyChildCont: {
    width: { xs: "90%", sm: "90%", md: "80%", lg: "70%", xl: "40%" },
    maxWidth: "360px",
    margin: "auto",
    height: "100%",
    // background: "#f3f3f3",
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  cardsCont: {
    display: "flex",
    flexDirection: "column",
    gap: 1.8,
    width: "100%",
    height: "70%",
    mt: 1.5,
    // border: "1px solid grey",
  },

  cardCont: {
    width: "100%",
    borderRadius: "8px",
    // height: "136px",
    px: 2.5,
    py: 2.5,
    display: "flex",
    flexDirection: "column",
    // alignItems: "flex-start",
    cursor: "pointer",
    gap: 1.5,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "& img": {
      height: "29px",
      width: "260px",
    },
  },

  inputRadioTextCont: {
    // border: "1px solid black",
    // mt: 0.2,
    "& > input": {},
    display: "flex",
    alignItems: "center",
    gap: 1.9,
    "& .css-19x3w69-MuiButtonBase-root-MuiRadio-root": {
      padding: "0px",
    },
    "& .css-19x3w69-MuiButtonBase-root-MuiRadio-root.Mui-checked": {
      // color: "yellow"
    },
    "& > p": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: "16px",
      color: "#18161B",
    },
  },

  redBtn: {
    mt: 1.5,
    background: "#f62b2a",
    borderRadius: "30px",
    width: "100%",
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

  radioOuterCircle: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "2px solid #bab9bb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  radioInnerCircle: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#bab9bb",
    cursor: "pointer",
  },

  ActiveRadioInnerCircle: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#F5BF45",
    cursor: "pointer",
  },
};

export default paymentMethodStyles;

const selectAddressStyles = {
  mainCont: {
    height: "100vh",
    width: "100%",
  },

  emptyBox: {
    width: "100%",
    height: "70px",
  },

  bodyCont: {
    width: "100%",
    height: "calc(100vh - 70px)",
    background: "#f3f3f3",
    py: 2,
    border: "3px solid black",
  },

  bodyChildCont: {
    width: { xs: "90%", sm: "90%", md: "80%", lg: "70%", xl: "40%" },
    maxWidth: "360px",
    margin: "auto",
    height: "100%",
    background: "#fff",
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  cardsCont: {
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    gap: 1.8,
    width: "100%",
    height: "70%",
    // border: "1px solid grey",
    "&::-webkit-scrollbar": {
      width: "4px",
      borderRadius: "20px",
      display: "none",
    },
    "&::-webkit-scrollbar-track": {
      background: "#F5BF45",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#C4C4C4",
      borderRadius: "20px",
    },
  },

  cardCont: {
    width: "100%",
    borderRadius: "8px",
    height: "136px",
    px: 2.5,
    py: 2.5,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 2.5,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },

  inputRadioCont: {
    border: "1px solid black",
    "& > input": {
    
    },
    "& .css-19x3w69-MuiButtonBase-root-MuiRadio-root": {
        padding: "0px"
    },
    "& .css-19x3w69-MuiButtonBase-root-MuiRadio-root.Mui-checked":{
        // color: "yellow"
    }
  },

  addressCont: {
    flexGrow: 1,
    display: "flex",
    // alignItems: "flex-start",
    // border: "1px solid black",
    "& > svg": {
      width: "18px",
      height: "18px",
    },
  },

  contentCont: {
    display: "flex",
    flexGrow: 1,
    // border: "1px solid black",
    flexDirection: "column",
    gap: 1,
    "&:has(h2) > h2": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: "16px",
      color: "#18161B",
    },
    "& > p": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: "14px",
      color: "#BAB9BB",
    },
  },
};

export default selectAddressStyles;

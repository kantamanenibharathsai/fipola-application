const singleHistoryStyles = {
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
    display: "flex",
    // alignItems: "center",
    flexDirection: "column",
    gap: 1.5,
    background: "#f3f3f3",
    // justifyContent: "center",
    // border: "5px solid black",
  },

  bodyTopCont: {
    height: "20%",
    width: "100%",
    // padding: 2,
    // border: "1px solid red",
    alignContent: "center",
    background: "#fff",
  },

  centerChildCont: {
    width: { xs: "90%", sm: "80%", md: "70%", lg: "50%", xl: "45%" },
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    // border: "1px solid red",
    gap: 0.4,
    height: "auto",
    "& > h2": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: "18px",
      color: "#18161B",
    },
  },

  cardCont: {
    width: "146px",
    // justifyContent: "center",
  },

  itemImg: { width: "100%", height: "95px", borderRadius: "6px" },

  itemName: {
    fontWeight: 600,
    fontSize: "14px",
    fontFamily: "Montserrat Alternates",
  },

  price: {
    fontFamily: "Montserrat Alternates",
    color: "#F62B2A",
    fontSize: "15px",
    fontWeight: 600,
  },

  originalPrice: {
    color: "#BAB9BB",
    ml: 1,
    textDecoration: "line-through",
    fontFamily: "Montserrat Alternates",
    fontSize: "15px",
    fontWeight: 600,
  },

  time: {
    textDecoration: "none",
  },

  calenWatchImg: {
    width: "15px",
    height: "15px",
  },

  bodyCenterCont: {
    height: "50%",
    width: "100%",
    // padding: 2,
    // border: "1px solid red",
    alignContent: "center",
    background: "#fff",
  },

  orderedProductsCont: {
    height: { xs: "300px", xl: "390px" },
    overflowY: "scroll",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(146px, 1fr))",
    gap: { xs: 2, lg: 2 },
    mt: { xs: 1.5, xl: 3 },
    // alignItems: "center",
    justifyItems: "space-between",
    justifyContent: "",
    // width: { xs: "95%", sm: "90%", md: "80%", lg: "70%", xl: "60%" },
    pr: { xs: 0, sm: 2 },
    // border: "3px solid orange",
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

  bodyBottomCont: {
    height: "28%",
    width: "100%",
    // padding: 2,
    // border: "1px solid red",
    alignContent: "center",
    background: "#fff",
  },

  bottomTotalPriceCont: {
    display: "flex",
    flexDirection: "column",
    // border: "2px solid black",
    width: "100%",
    alignSelf: "strech",
    justifyContent: { xs: "flex-end", md: "center" },
    height: "40%",
    "& > div": {
      py: 1.3,
      px: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid #C4C4C4",
    },
    "& > div:last-of-type": {
      borderBottom: "none",
    },
    "& p:nth-of-type(1)": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: "14px",
      color: "#BAB9BB",
    },
    "& p:nth-of-type(1) + p": {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: "14px",
      color: "#000",
    },
    "& > div:nth-of-type(1) + * + * > p:nth-of-type(2)": {
      color: "#F62B2A",
    },
  },
};

export default singleHistoryStyles;

const singleProductScreenStyles = {
  mainCont: {
    width: "100%",
    height: "100vh",
  },

  bodyCont: {
    height: "100vh",
    width: { xs: "100%", sm: "75%", md: "50%", lg: "100%", xl: "100%" },
    // border: "1px solid #C4C4C4",
    margin: "auto",
    "& > div:nth-of-type(2)": {
      position: { lg: "absolute" },
      right: { lg: "20vh" },
      top: { lg: "35vh" },
      zIndex: { lg: 99 },
      width: { lg: "auto" },
      height: { lg: "auto" },
    },
  },

  cont: {
    height: { xs: "50%", lg: "100%" },
    // border: "1px solid red",
  },

  cardCont: {
    // mt: "-60px",
    height: "400px",
    position: "relative",
    top: "-60px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "15px",
    width: "90%",
    margin: "auto",
    py: 5,
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 1.5,
    // border: "2px solid green",
    "& > h2": {
      color: "#18161B",
      fontFamily: "Montserrat Alternates",
      fontSize: "18px",
      fontWeight: 600,
      textAlign: "center",
    },
    "& > h2 ~ p:nth-of-type(2)": {
      color: "#BAB9BB",
      fontFamily: "Poppins",
      fontSize: "15px",
      fontWeight: 500,
      textAlign: "center",
    },
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

  countsCont: {
    height: "100px",
    width: "240px",
    "& > div:nth-of-type(2)": {
      borderBottom: 0,
    },
  },

  countCont: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    height: "50px",
    borderBottom: "1px solid #C4C4C4",
    "& > span": {
      color: "#18161B",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: 600,
    },
  },

  addRemoveBox: {
    background: "#F5BF45",
    color: "#fff",
    width: "266px",
    // height: "70px",
    alignSelf: "strech",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: "60px",
    py: 1.7,
    mt: 1,
    "& #icon": {
      cursor: "pointer",
    },
  },

  quantity: { color: "#000" },
};

export default singleProductScreenStyles;

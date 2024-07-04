const cartStyles = {
  mainCont: {
    // height: "100vh",
    width: "100%",
  },

  topNavbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "82px",
    background: "#f5bf45",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1,
    "& > h2": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: "24px",
      textAlign: "center",
      color: "#18161B",
    },
  },

  bodyCont: {
    width: "100%",
    mt: "82px",
    height: { xs: "calc(100vh - 146px)", lg: "calc(100vh - 83px)" },
    display: "flex",
    alignItems: "center",
    gap: { xs: 2, md: 8, lg: 12, xl: 16 },
    border: "2px solid black",
    py: 2.5,
    background: "#fafafa",
    position: "fixed",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: { md: "center" },
  },

  notFoundBodyCont: {
    width: "100%",
    mt: "82px",
    height: { xs: "calc(100vh - 146px)", lg: "calc(100vh - 83px)" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // border: "2px solid red",
    // position: "fixed"
  },

  cartEmptyContainer: {
    // flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    // border: "2px solid red",
  },

  cartEmptyImage: {
    width: { xs: "280px", sm: "320px", md: "450px", lg: "500px" },
    height: { xs: "280px", sm: "320px", md: "450px", lg: "500px" },
  },

  cartProductsCont: {
    height: "60%",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
    width: { xs: "95%", sm: "auto" },
    pr: { xs: 0, sm: 2 },
    "&::-webkit-scrollbar": {
      width: "4px",
      borderRadius: "20px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#F5BF45",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#C4C4C4",
      borderRadius: "20px",
      //   border: "3px solid orange",
    },
  },

  bottomTotalPriceCont: {
    display: "flex",
    flexDirection: "column",
    // gap: 1.5,
    // border: "2px solid black",
    alignSelf: "strech",
    justifyContent: { xs: "flex-end", md: "center" },
    height: "40%",
    width: { xs: "95%", sm: "300px" },
    "& > div": {
      //   height: "60px",
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
      fontSize: "16px",
      color: "#BAB9BB",
    },
    "& p:nth-of-type(1) + p": {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: "17px",
      color: "#000",
    },
    "& > div:nth-of-type(1) + * + * > p:nth-of-type(2)": {
      color: "#F62B2A",
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
    cursor: "pointer",
    "&: hover": {
      background: "#f62b2a",
    },
  },
};

export default cartStyles;

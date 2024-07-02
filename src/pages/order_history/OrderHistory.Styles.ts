const orderHistoryStyles = {
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
    maxheight: "calc(100vh - 70px)",
    display: "flex",
    // flexDirection: "column",
    // gap: 1.5,
    justifyContent: "center",
    background: "#C4C4C4",
    // border: "1px solid black",
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
    overflowY: "scroll",
  },

  bodyFlexCont: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    gap: 2,
    height: "100%",
    overflowY: "scroll",
    // width: "auto",
    width: "700px",
    // background: "#f9f9f9",
    // border: "2px solid black",
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

  bodyDateCardCont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 1.5,
    py: 2,
    background: "#ededed",
    width: { xs: "100%" },
    // maxWidth: "500px",
    height: "48%",
    // border: "2px solid orange",
    "& > h2": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: "15px",
      color: "#18161B",
      width: "90%",
      textAlign: "center",
    },
  },

  stackCont: {
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    gap: 1.5,
    width: "90%",
    height: "260px",
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
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    height: "112px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    py: "20px",
    px: "14px",
    justifyContent: "space-between",
    cursor: "pointer",
  },

  contentCont: {
    display: "flex",
    flexDirection: "column",
    // border: "1px solid red",
    gap: 0,
    justifyContent: "space-between",
    height: "auto",
    "& > h2": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: "15px",
      color: "#18161B",
    },
  },

  originalPrice: {
    color: "#BAB9BB",
    ml: 1,
    textDecoration: "line-through",
    fontFamily: "Montserrat Alternates",
    fontSize: "13px",
    fontWeight: 600,
  },

  time: {
    textDecoration: "none",
  },

  calenWatchImg: {
    width: "15px",
    height: "15px",
  },

  price: {
    fontFamily: "Montserrat Alternates",
    color: "#F62B2A",
    fontSize: "15px",
    fontWeight: 600,
  },

  imagesCont: {
    display: "flex",
    flexDirection: "row",
    gap: 0,
    // width: "107px",
    // border: "1px solid red",
    alignSelf: "flex-end",
  },

  imageCont: {
    width: "48px",
    height: "47px",
    borderRadius: "50%",
    border: "4px solid #fff",
    "&:not(:nth-of-type(1))": {
      ml: -3,
    },
  },

  image: {
    objectFit: "cover",
    borderRadius: "50%",
    height: "100%",
    width: "100%",
  },
};

export default orderHistoryStyles;

const cartProductCardStyles = {
  cardCont: {
    width: "296px",
    height: "127px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    borderRadius: "10px",
    padding: 1.5,
    // border: "2px solid green",
    alignSelf: "center",
    "& > div": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 2,
      //   border: "2px solid green",
    },
    "& img:last-child": {
      width: "25px",
      height: "25px",
      cursor: "pointer",
    },
    "& img + * > div": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 1,
      //   border: "2px solid green",
      mt: 1,
    },
  },

  itemImg: { width: "98px", height: "95px", borderRadius: "5px" },

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

  addRemoveBox: {
    background: "#F5BF45",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: "20px",
    py: 0.7,
    width: "125px",
    height: "32px",
    "& #icon": {
      cursor: "pointer",
    },
  },

  quantity: { color: "#000" },
};

export default cartProductCardStyles;

const bestSellersCardStyles = {
  cardCont: {
    width: "146px",
  },

  itemImg: { width: "100%", height: "95px" },

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
  addToCartBtn: {
    background: "#F5BF45",
    color: "#fff",
    width: "100%",
    fontWeight: 600,
    borderRadius: "20px",
    mt: 1,
    textTransform: "none",
    "&:hover": {
      background: "#F5BF45",
    },
  },
  addRemoveBox: {
    background: "#F5BF45",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: "20px",
    py: 0.7,
    mt: 1,
    "& #icon": {
      cursor: "pointer",
    },
  },

  quantity: { color: "#000" },
};

export default bestSellersCardStyles;

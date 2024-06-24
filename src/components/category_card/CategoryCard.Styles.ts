const categoryCardStyles = {
  cardCont: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    // border: "1px solid red",
    justifyContent: "center",
    alignItems: "center",
    "& > img": {
      width: "126px",
      height: "126px",
      borderRadius: "50%",
    },
    "& p": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: "16px",
      color: "#18161B",
      //   lineHeight: "40px",
      //   border: "1px solid green",
    },
  },
};

export default categoryCardStyles;

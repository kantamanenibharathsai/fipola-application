const categoryCardStyles = {
  cardCont: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    // border: "1px solid red",
    justifyContent: "center",
    alignItems: "center",
    transformStyle: "preserve-3d",
    transform: "perspective(1000px)",
    transition: "2s ease",
    "& > div": {
      width: "126px",
      height: "126px",
      borderRadius: "50%",
      overflow: "hidden",
      position: "relative",
      transition: "2s ease",
      "&:hover": {
        "& img": {
        transform: "scale(1.1)",
        filter: "brightness(1)",
        }
      },
    },
    "& img": {
      transition: "1s ease all",
      cursor: "pointer",
      objectFit: "cover",
      filter: "brightness(0.5)",
      // "&:hover": {
      //   transform: "translateZ(200px) scale(1.1)",
      //   filter: "brightness(1)",
      // },
    },
    "& p": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: "16px",
      color: "#18161B",
      //   lineHeight: "40px",
      //   border: "1px solid green",
    },
    // "& img:has(:hover)": {
    //   filter: "brightness(0)",
    //   transform: "translateZ(200px) scale(1.9)",
    // },
  } ,
};

export default categoryCardStyles;

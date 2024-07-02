import backgroundImg from "../../assets/order_successfully/backgroundImage.png";

const orderSuccessStyles = {
  mainCont: {
    height: "100vh",
    backgroundColor: "#F5BF45",
    width: "100%",
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "grid",
    placeItems: "center",
  },

  cardCont: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    width: "90%",
    maxWidth: "400px",
    // px: 2,
    height: "350px",
    py: 6,
    position: "relative",
    // zIndex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > :first-of-type": {
      width: "120px",
      height: "120px",
    },
    "& > p:first-of-type": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 700,
      fontSize: "24px",
      color: "#18161B",
      lineHeight: "28px",
      textAlign: "center",
      width: "100%",
      height: "auto",
      mt: 3,
      //   border: "2px solid green",
      //   alignSelf: "strech",
    },
    "& > p:nth-of-type(2)": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: "17px",
      color: "#A9A9A9",
      lineHeight: "26px",
      textAlign: "center",
      mt: 1,
      width: "100%",
      height: "auto",
      //   border: "2px solid green",
      //   alignSelf: "strech",
    },
    "& > img:last-of-type": {
      width: "70px",
      height: "70px",
      position: "absolute",
      bottom: "-35px",
      cursor: "pointer",
    },
  },
};

export default orderSuccessStyles;

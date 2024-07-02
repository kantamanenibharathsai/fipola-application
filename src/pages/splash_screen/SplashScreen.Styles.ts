import landingBackgroundImg from "../../assets/splash_screen/bgtexure.png";

const splashScreenStyles = {
  container: {
    height: "100vh",
    width: "100%",
    background: "#f5c559",
    backgroundImage: `url(${landingBackgroundImg})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > div": {
      width: { xs: "100%", sm: "90%", md: "70%", lg: "50%", xl: "45%" },
      //   border: "2px solid red",
      height: "100%",
    },
    "& img": {
      width: { xs: "100%", sm: "400px", xl: "500px" },
    },
    "& img:nth-of-type(2)": {
      width: { xs: "50%", sm: "220px", xl: "290px" },
      cursor: "pointer",
    },
  },
};

export default splashScreenStyles;

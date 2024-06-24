import leftArrow from "../../assets/receipes/leftArrow.png";
import rightArrow from "../../assets/receipes/rightArrow.png";

const homePageStyles = {
  container: {
    height: "calc(100% - 83px - 65px)",
    width: "100%",
    mt: "83px",
    // border: "3px solid red",
    overflowY: "auto",
    mb: "65px",
  },

  navContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "82px",
    background: "#f5bf45",
    // position: "fixed",
    // top: 0,
  },

  navChildCont: {
    height: "inherit",
    display: { xs: "flex", lg: "none" },
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },

  hamburgerLogo: {
    width: "24px",
    height: "16px",
    color: "#fff",
  },

  fipolaLogo: {
    width: { xs: "120px", lg: "100px", xl: "120px" },
    height: { xs: "40px", lg: "30px", xl: "40px" },
  },

  manLogo: {
    width: "48px",
    height: "48px",
  },

  navChildContDesk: {
    display: { xs: "none", lg: "flex" },
    alignItems: "center",
    justifyContent: "space-between",
    height: "82px",
    background: "#f5bf45",
    width: { lg: "98%", xl: "90%" },
    // border: "3px solid red",
  },

  logoTextStack: {
    cursor: "pointer",
    // border: "2px solid green",
    gap: "20px",
  },

  logo: {
    width: "17px",
    height: "17px",
    color: "#A9A9A9",
  },

  logoText: {
    fontFamily: "Montserrat Alternates",
    fontWeight: 600,
    fontSize: "14px",
    color: "#A9A9A9",
    textWrap: "nowrap",
    transition: "0.8s ease all",
    // border: "2px solid red",
  },

  blackWhiteBackgroundCont: {
    width: "0px",
    height: "100%",
    position: "absolute",
    left: 0,
    // top: 0,
    // bottom: 0,
    top: 0,
    zIndex: 99,
    transition: "0.5s ease all",
    // border: "3px solid red"
  },

  sidebarCont: {
    width: "0px",
    height: "100%",
    position: "absolute",
    left: 0,
    // top: 0,
    // bottom: 0,
    top: 0,
    // zIndex: 99,
    display: "flex",
    flexDirection: "column",
    // border: "3px solid red",
    boxShadow: "1px 0 3px -1px #b3b3b3",
    transition: "0.8s ease all",
    overflow: "hidden",
    background: "#fff",
  },

  logoCont: {
    height: "15%",
    background: "#f5bf45",
    display: "flex",
    alignItems: "center",
    px: 1,
  },

  ulStackCont: {
    flexGrow: 1,
    listStyle: "none",
    p: 0,
    m: 0,
    px: "10px",
    display: "flex",
    flexDirection: "column",
    transition: "0.8s ease all",
    "& li": {
      py: "20px",
      borderBottom: "1px solid #b3b3b3",
      transition: "0.8s ease all",
      wightSpace: "nowrap",
    },
    "& li:nth-last-child(1)": {
      borderBottom: "0px",
    },
    "& span": {
      pt: 0.7,
    },
  },

  signOutBtnCont: {
    height: "15%",
    // border: "1px solid red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: 1,
    transition: "0.8s ease all",
  },

  signOutBtn: {
    background: "#f5bf45",
    borderRadius: "30px",
    width: "100%",
    height: "55px",
    fontFamily: "Montserrat Alternates",
    fontWeight: 600,
    fontSize: "18px",
    textAlign: "center",
    color: "#fff",
    alignSelf: "strech",
    textTransform: "capitalize",
    transition: "0.8s ease all",
    whiteSpace: "nowrap",
    "&: hover": {
      background: "#f5bf45",
      borderRadius: "30px",
      width: "100%",
      height: "55px",
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: "20px",
      textAlign: "center",
      color: "#fff",
      textTransform: "capitalize",
    },
  },

  searchPincodeCont: {
    width: "100%",
    // border: "1px solid green",
    boxShadow: "0 0.9px 0.9px -1px black",
    height: "55px",
    display: "flex",
    "& div:nth-of-type(2)": {
      borderLeft: "1px solid #A4A1A1",
    },
  },

  textFieldCont: {
    display: "flex",
    alignItems: "center",
    width: "68%",
    height: "inherit",
    background: "#fff",
    px: "12px",
    // border: "1px solid red",
    "& img": {
      width: "20px",
      height: "20px",
    },
    "& input": {
      outline: "none",
      border: "none",
      flexGrow: 1,
      width: "calc(68% - 24px - 20px)",
      fontFamily: "Montserrat Alternates",
      fontWeight: 500,
      fontSize: "15px",
      color: "#A4A1A1",
      height: "50px",
      pl: "10px",
      // border: "2px solid green",
    },
    "& input:nth-of-type(1)": {
      cursor: "pointer",
    },
  },

  bestSellerCont: {
    pl: { xs: "20px" },
    mt: 3,
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    // border: "2px solid green",
  },

  bestSellersText: {
    fontFamily: "Montserrat Alternates",
    fontWeight: 600,
    fontSize: "20px",
    color: "#18161B",
    width: { xs: "100%", sm: "75%", md: "800px" },
    // border: "2px solid green",
    margin: "auto",
  },

  receipesCont: {
    position: "relative",
    // border: "2px solid green",
    mt: "30px",
    width: "100%",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    pl: { xs: "5%", sm: 0 },
    pt: "20px",
    pb: "20px",
    "& #receipeChildCont": {
      width: "auto",
      position: "relative",
      // border: "2px solid pink",
      maxWidth: { xs: "100%", sm: "90%", md: "80%", lg: "70%", xl: "50%" },
      margin: { sm: "auto" },
    },
    "& h2": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: "20px",
      color: "#18161B",
      width: { xs: "100%", sm: "80%", md: "70%", lg: "60%" },
      mb: 2,
      // border: "1px solid red",
    },
    "& .react-multi-carousel-list": {
      position: "static",
    },
    "& .react-multiple-carousel__arrow--left": {
      left: "inherit",
      top: "-2%",
      right: { xs: "12%", sm: "7%", md: "5%", lg: "4%", xl: "4%" },
      background: "rgba(0, 0, 0, 0)",
    },
    "& .react-multiple-carousel__arrow--left::before": {
      content: `url(${leftArrow})`,
    },
    "& .react-multiple-carousel__arrow--right": {
      top: "-2%",
      right: "-1%",
      background: "rgba(0, 0, 0, 0)",
      left: "inherit",
    },
    "& .react-multiple-carousel__arrow--right::before": {
      content: `url(${rightArrow})`,
      zIndex: "1 !important",
    },
    "& .react-multi-carousel-track": {
      gap: { xs: "15px", sm: "20px", md: "25px", lg: "30px" },
      // transform: "translate3d(-1862px, 0px, 0px) !important",
    },
    "& .react-multi-carousel-item": {
      width: "auto !important",
    },
    "& .react-multiple-carousel__arrow": {
      zIndex: 0,
    },
  },

  pressCornerCont: {
    backgroundColor: "#fff",
    width: "100%",
    height: "auto",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    // mb: 4,
    mt: "20px",
    py: "20px",
    pb: "30px",
  },

  pressCornerChildCont: {
    // width: "90%",
    background: "#fff",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    width: { xs: "90%", sm: "319px" },
    height: "auto",
    gap: "15px",
    // border: "1px solid red",
    "& h2": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: "20px",
      color: "#18161B",
      // border: "1px solid red",
    },
  },

  cardCont: {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "5px",
    position: "relative",
    "& img": {
      width: "100%",
      objectFit: "cover",
      height: "149px",
      borderRadius: "5px 5px 0px 0px",
      // border: "1px solid red",
    },
    "& > div": {
      // height: "calc(280px - 149px)",
      py: "15px",
      "& > div": {
        width: "90%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      },
      "& p:nth-of-type(1)": {
        fontFamily: "Montserrat Alternates",
        fontWeight: 600,
        fontSize: "16px",
        color: "#18161B",
        lineHeight: "24px",
      },
      "& p:nth-of-type(2)": {
        fontFamily: "Montserrat Alternates",
        fontWeight: 600,
        fontSize: "14px",
        color: "#F62B2A",
      },
    },
  },

  headsetImgCont: {
    borderRadius: "50%",
    background: "#F62B2A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    position: "absolute",
    bottom: "-20px",
    right: "-20px",
    "& > img": {
      width: "24px",
      height: "24px",
      objectFit: "cover",
    },
  },

  pincodeCont: {
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    width: "100%",
    // height: "400px",
    // opacity: 0,
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // height: "0px",
    // transition: "1.5s",
    position: "fixed",
    bottom: "-300px",
    left: 0,
    zIndex: 99,
    gap: 2,
    py: 7,
    px: 1,
    "& > img": {
      position: "absolute",
      right: "20px",
      top: "20px",
      width: "28px",
      height: "28px",
      cursor: "pointer",
    },
    "& p:nth-of-type(1)": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: "20px",
      textAlign: "center",
      color: "#18161B",
    },
    "& p:nth-of-type(2)": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: "14px",
      textAlign: "center",
      color: "#BAB9BB",
    },
    "& p": {
      "&:not(:nth-of-type(1)):not(:nth-of-type(1) + p)": {
        fontFamily: "Montserrat Alternates",
        fontWeight: 600,
        fontSize: "14px",
        textAlign: "center",
        color: "#BAB9BB",
        // border: "2px solid red",
        mt: "-16px",
      },
    },
  },

  displayBottomPopup: {
    animation: "displayBottomPopup 1.3s ease 0s",
    bottom: 0,
    "@keyframes displayBottomPopup": {
      from: {
        bottom: "-300px",
        opacity: 0.5,
      },
      to: {
        bottom: "0px",
        opacity: 1,
      },
    },
  },

  closeBottomPopup: {
    animation: "closeBottomPopup 1.3s ease 0s",
    "@keyframes closeBottomPopup": {
      from: {
        bottom: "0px",
        opacity: 1,
      },
      to: {
        bottom: "-300px",
        opacity: 0,
      },
    },
  },

  pinCodeInputCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "36px",
    width: "100%",
    background: "#fff",
    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
    pl: "18px",
    pr: "5px",
    "& svg": {
      width: "20px",
      height: "20px",
      color: "#18161B",
    },
    "& input": {
      outline: "none",
      // border: "2px solid red",
      // flexGrow: 1,
      fontFamily: "Montserrat Alternates",
      fontWeight: 300,
      fontSize: "18px",
      color: "#18161B",
      height: "50px",
      borderRadius: "14px",
      border: "none",
      px: "8px",
      // maxWidth: "calc(100% - 50px -50px)",
      width: "200px",
      flexGrow: 1,
      "&::placeholder": {
        fontSize: "15px",
        color: "#000",
      },
      "&::-webkit-outer-spin-button": {
        WebkitAppearance: "none",
      },
      "&::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
      },
    },
    "& > div": {
      width: "50px",
      height: "50px",
      display: "flex",
      flexDirecton: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      background: "#f62b2a",
      borderRadius: "50%",
      "& > img": {
        color: "#fff",
        width: "25px",
        height: "25px",
      },
    },
  },
};

export default homePageStyles;

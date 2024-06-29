import zIndex from "@mui/material/styles/zIndex";

const topNavbarStyles = {
  navContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "82px",
    background: "#f5bf45",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1,
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
    cursor: "pointer",
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
    width: 0,
    height: "100%",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 999,
    transition: "0.9s",
    display: { lg: "none" },
    // border: "3px solid red",
    overflowX: "hidden",
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
    overflowX: "hidden",
    background: "#fff",
    zIndex: 999
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
};

export default topNavbarStyles;

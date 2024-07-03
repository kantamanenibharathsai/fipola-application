const respSidebarLargeStyles = {
  sidebarCont: {
    width: "85px",
    position: "fixed",
    left: 0,
    background: "#161a2d",
    top: "82px",
    bottom: 0,
    overflowX: "hidden",
    padding: "0 20px",
    transition: "all 1s ease",
    "& > div:nth-of-type(1) > svg:nth-of-type(1)": {
      transition: "0.5s ease",
    },
  },

  sidebarOpenCont: {
    width: "285px",
    position: "fixed",
    left: 0,
    background: "#161a2d",
    top: "82px",
    bottom: 0,
    padding: "0 20px",
    transition: "all 1s ease",
    "& > div:nth-of-type(1) > svg:nth-of-type(1)": {
      transition: "0.5s ease",
      transform: "rotateZ(180deg)",
    },
  },

  arrowIconCont: {
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    background: "yellow",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    position: "absolute",
    top: "60px",
    right: "-7px",
    zIndex: 999,
  },

  ulCont: {
    listStyle: "none",
    mt: "200px",
    display: "flex",
    flexDirection: "column",
    gap: 4,
    // border: "2px solid green",
    transition: "1s ease",
    height: "60%",
    overflowY: "auto",
    scrollbarWidth: "none",
  },

  ulOpenCont: {
    listStyle: "none",
    mt: "200px",
    display: "flex",
    flexDirection: "column",
    gap: 4,
    // border: "2px solid green",
    transition: "1s ease",
    height: "60%",
    overflowY: "auto",
    scrollbarWidth: "none",
  },

  liCont: {
    display: "flex",
    alignItems: "center",
    gap: "0 20px",
    color: "#fff",
    fontWeight: 500,
    whiteSpace: "nowrap",
    padding: "15px 10px",
    transition: "0.8s ease",
    "& > img": {
      color: "#fff",
    },
    "&:hover": {
      color: "#161a2d",
      background: "#fff",
      borderRadius: "4px",
    },
  },

  cartCont: {
    position: "relative",
    display: "inline-block",
    // border: "1px solid red",
    pt: 0.9,
    pr: 0.4,
    "& div": {
      width: "17px",
      height: "17px",
      borderRadius: "50%",
      background: "red",
      position: "absolute",
      top: 0,
      right: 0,
      font: "600 12px Poppins",
      color: "#fff",
      display: "grid",
      placeItems: "center",
    },
    "& svg": {
      width: "26px",
      height: "26px",
      cursor: "pointer",
      color: "#fff",
    },
  },
};

export default respSidebarLargeStyles;

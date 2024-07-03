const bottomNavbarStyles = {
  bottomNavContainer: {
    position: "fixed",
    width: "100%",
    bottom: 0,
    left: 0,
    right: 0,
    display: { xs: "flex", lg: "none" },
    alignItems: "center",
    justifyContent: "center",
    height: "65px",
    zIndex: 0,
    background: "#f5bf45",
    "& img": {
      width: "26px",
      height: "26px",
      cursor: "pointer",
    },
  },

  navChildCont: {
    height: "inherit",
    display: { xs: "flex", lg: "none" },
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
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
      color: "#000",
    },
  },
};

export default bottomNavbarStyles;

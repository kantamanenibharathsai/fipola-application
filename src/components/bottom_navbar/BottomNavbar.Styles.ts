const bottomNavbarStyles = {
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

  bottomNavContainer: {
    position: "fixed",
    width: "100%",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "82px",
    background: "#f5bf45",
    "& img": {
      width: "26px",
      height: "26px",
    },
  },
};

export default bottomNavbarStyles;

const bottomNavbarStyles = {
  bottomNavContainer: {
    position: "fixed",
    width: "100%",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
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
};

export default bottomNavbarStyles;

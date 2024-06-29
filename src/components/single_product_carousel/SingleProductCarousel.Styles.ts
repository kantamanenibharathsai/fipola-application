const singleProductCarouselStyles = {
  sliderContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    // border: "2px solid red",
  },

  sliderListContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    display: "flex",
    width: "100%",
    transition: "1.4s ease",
    "& img": {
      // width: "100%",
      width: "inherit",
      height: "100%",
      objectFit: "cover",
    },
  },

  BtnsContainer: {
    position: "absolute",
    top: "45%",
    left: { xs: "2%", sm: "5%" },
    width: { xs: "96%", sm: "90%" },
    display: "flex",
    // border: "2px solid red",
    justifyContent: "space-between",
    "& button": {
      width: { xs: "35px", md: "50px" },
      height: { xs: "35px", md: "50px" },
      minWidth: { xs: "0px", sm: "auto" },
      borderRadius: "50%",
      backgroundColor: "#fff5",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#fff5",
      },
    },
  },

  sliderDotsContainer: {
    position: "absolute",
    bottom: "70px",
    left: 0,
    color: "#fff",
    width: "100%",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    // border: "2px solid green"
    // "& li:nth-child(1)": {
    //   width: "30px",
    // },
  },

  sliderDot: {
    listStyle: "none",
    width: { xs: "4px", sm: "10px" },
    height: { xs: "4px", sm: "10px" },
    borderRadius: { xs: "10px", sm: "20px" },
    backgroundColor: "#fff",
    margin: { xs: "8px", sm: "10px" },
    transition: `1.2s ease`,
    cursor: "pointer",
  },

  activeDot: {
    width: { xs: "20px", sm: "30px" },
  },
};

export default singleProductCarouselStyles;

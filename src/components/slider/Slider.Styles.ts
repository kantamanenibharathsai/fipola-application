const sliderStyles = {
  sliderContainer: {
    width: { xs: "300px", sm: "290px", md: "300px", lg: "400px" },
    height: { xs: "90%", sm: "95%", md: "90%", lg: "100%" },
    margin: "auto",
    position: "relative",
    overflow: "hidden",
    // border: "6px solid red",
    boxShadow: { xs: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`, lg: 0 },
    // padding: "0px 5px",
    borderRadius: "15px",
  },

  sliderListContainer: {
    position: "absolute",
    top: 0,
    //left: '50%',
    // transform: 'translate(-50%, -50%)',
    height: "100%",
    display: "flex",
    transition: "1.4s ease",
    gap: { xs: "100px", md: "100px", lg: "100px" },
    // border: "2px solid pink",
    justifyContent: "center",
    alignItems: "center",
    listStyle: "none",
    "& li": {
      // border: "3px solid green",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      gap: { xs: "14px", md: "16px", lg: "20px", xl: "30px" },
      margin: "auto",
    },
    "& img": {
      width: { xs: "290px", sm: "280px", md: "290px", lg: "390px" },
      height: { xs: "290px", sm: "280px", md: "290px", lg: "390px" },
      borderRadius: "50%",
      border: "13px solid #FDF2DA",
      mt: 1,
    },
    "& h2": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: { xs: "20px", sm: "21px", md: "22px", lg: "28px" },
      textAlign: "center",
      color: "#18161B",
    },
    "& p": {
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      fontSize: { xs: "14px", sm: "15px", md: "14px", lg: "19px" },
      textAlign: "center",
      color: "#BAB9BB",
      padding: "0px 4px",
    },
  },

  BtnsContainer: {
    position: "absolute",
    top: "45%",
    left: { xs: "2%", sm: "5%" },
    width: { xs: "96%", sm: "90%" },
    display: "flex",
    border: "2px solid red",
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
    bottom: { xs: "10px", md: 0, lg: "10px" },
    left: 0,
    color: "#dcdcdd",
    width: "100%",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    // border: "2px solid green",
    // "& li:nth-child(1)": {
    //   width: "30px",
    // },
  },

  sliderDot: {
    listStyle: "none",
    width: { xs: "4px", sm: "10px" },
    height: { xs: "4px", sm: "10px" },
    borderRadius: { xs: "10px", sm: "20px" },
    backgroundColor: "#dcdcdd",
    margin: { xs: "8px", sm: "10px" },
    transition: `1.2s ease`,
    cursor: "pointer",
  },

  activeDot: {
    width: { xs: "20px", sm: "30px" },
  },
};

export default sliderStyles;

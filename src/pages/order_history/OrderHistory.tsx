import { Box, Stack, Typography } from "@mui/material";
import { Component } from "react";
import watchLaterImg from "../../assets/single_history/watchLater.png";
import TopNavbarArrow from "../../components/top_navbar_arrow_icon/TopNavbarArrow";
import withRouter from "../../hoc/withRouter";
import orderHistoryStyles from "./OrderHistory.Styles";


interface OrderHistoryCardProps {
    navigate: (path: string) => void;
}

class OrderHistoryCard extends Component<MyProps, {}> {
    render() {
        return (
            <Box sx={orderHistoryStyles.cardCont} onClick={() => this.props.navigate('/singleHistory')}>
                <Box sx={orderHistoryStyles.contentCont}>
                    <Typography component={"h2"}>Order# ORD00003</Typography>
                    <Typography sx={orderHistoryStyles.price}>₹389.00</Typography>
                    <Stack direction={"row"} alignItems={"center"}>
                        <Box
                            component={"img"}
                            src={watchLaterImg}
                            alt="watch-later-img"
                            sx={orderHistoryStyles.calenWatchImg}
                        />
                        <Typography sx={{ ...orderHistoryStyles.originalPrice, ...orderHistoryStyles.time, }}>03:25 PM</Typography>
                    </Stack>
                </Box>
                <Box sx={orderHistoryStyles.imagesCont}>
                    <Box sx={orderHistoryStyles.imageCont}>
                        <Box sx={orderHistoryStyles.image} alt="img1" component={"img"} src={"https://s3-alpha-sig.figma.com/img/33fb/1e2a/26dc41b376319a44406a8a8ae22d1047?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=alFbSixGYPHzqv~q2UAHBfVNkzkaorq~~ZB7UJvrTNzFiLPoAiogWNZvEn-03raNuABPc14ldpyw2j2K2ETAr26JG9NzrAaz056iP0JNlMqmwNOy48xBlpxQeTBY78FpzzrydHDIM870rmM0tmN954Zi8xtHwa2xOhJNFM0fsDTrvV~utVoQk3-d~f4Nqvt~gyKi-sQ12EpMj0WeBO0fjhdWzZ~dm9YqvQBUDvYEA8hRINbkk2u~KoHDJGs7RGC1QYPCfQOoVi~-E7K524qQp4qNMS4px2ZW5NKohZTnM5SyrFOo5hTSZqAydb~wliMPhWhV7HhyhFOiXlMgYl-sXw__"} />
                    </Box>
                    <Box sx={orderHistoryStyles.imageCont}>
                        <Box sx={orderHistoryStyles.image} alt="img1" component={"img"} src={"https://s3-alpha-sig.figma.com/img/33fb/1e2a/26dc41b376319a44406a8a8ae22d1047?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=alFbSixGYPHzqv~q2UAHBfVNkzkaorq~~ZB7UJvrTNzFiLPoAiogWNZvEn-03raNuABPc14ldpyw2j2K2ETAr26JG9NzrAaz056iP0JNlMqmwNOy48xBlpxQeTBY78FpzzrydHDIM870rmM0tmN954Zi8xtHwa2xOhJNFM0fsDTrvV~utVoQk3-d~f4Nqvt~gyKi-sQ12EpMj0WeBO0fjhdWzZ~dm9YqvQBUDvYEA8hRINbkk2u~KoHDJGs7RGC1QYPCfQOoVi~-E7K524qQp4qNMS4px2ZW5NKohZTnM5SyrFOo5hTSZqAydb~wliMPhWhV7HhyhFOiXlMgYl-sXw__"} />
                    </Box>
                    <Box sx={orderHistoryStyles.imageCont}>
                        <Box sx={orderHistoryStyles.image} alt="img1" component={"img"} src={"https://s3-alpha-sig.figma.com/img/33fb/1e2a/26dc41b376319a44406a8a8ae22d1047?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=alFbSixGYPHzqv~q2UAHBfVNkzkaorq~~ZB7UJvrTNzFiLPoAiogWNZvEn-03raNuABPc14ldpyw2j2K2ETAr26JG9NzrAaz056iP0JNlMqmwNOy48xBlpxQeTBY78FpzzrydHDIM870rmM0tmN954Zi8xtHwa2xOhJNFM0fsDTrvV~utVoQk3-d~f4Nqvt~gyKi-sQ12EpMj0WeBO0fjhdWzZ~dm9YqvQBUDvYEA8hRINbkk2u~KoHDJGs7RGC1QYPCfQOoVi~-E7K524qQp4qNMS4px2ZW5NKohZTnM5SyrFOo5hTSZqAydb~wliMPhWhV7HhyhFOiXlMgYl-sXw__"} />
                    </Box>
                </Box>
            </Box>
        )
    }
}


interface MyProps {
    navigate: (path: string) => void;
}
class OrderHistory extends Component<MyProps, {}> {

    orderHistoryCardHandler = (path: string) => {
        this.props.navigate(path)
    }

    render() {
        return (
            <Box sx={orderHistoryStyles.mainCont}>
                <TopNavbarArrow childrenContent="Order History" navigateHandler={this.orderHistoryCardHandler} />
                <Box sx={orderHistoryStyles.emptyBox}></Box>
                <Box sx={orderHistoryStyles.bodyCont}>
                    <Box sx={orderHistoryStyles.bodyFlexCont}>
                        {[1, 2, 3, 4, 5, 6, 7].map(each => (<Box key={each} sx={orderHistoryStyles.bodyDateCardCont}>
                            <Typography component="h2">Sunday , 3 April 2022</Typography>
                            <Stack sx={orderHistoryStyles.stackCont}>
                                {[1, 2, 3, 4, 5].map(each => <OrderHistoryCard key={each} navigate={this.props.navigate} />)}
                            </Stack>
                        </Box>))}
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default withRouter(OrderHistory);

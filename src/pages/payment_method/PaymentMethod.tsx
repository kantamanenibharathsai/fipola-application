import { Box, Button, Typography } from "@mui/material";
import React, { Component } from "react";
import TopNavbarArrow from "../../components/top_navbar_arrow_icon/TopNavbarArrow";
import withRouter from "../../hoc/withRouter";
import paymentMethodStyles from "./PaymentMethod.Styles";

interface PaymentMethodCardProps {
    id: number;
    handleCurrentRadioBtnClick: (btnId: number) => void;
    currentRadioBtnId: number | null;
    eachCardDetailsObj: { id: number, text: string };
    navigateHandler: (path: string) => void;
}

class PaymentMethodCard extends Component<PaymentMethodCardProps> {
    private popupRef: React.RefObject<HTMLDivElement>;

    constructor(props: PaymentMethodCardProps) {
        super(props);
        this.popupRef = React.createRef();
    }

    cardHandler = () => {
        if (this.props.eachCardDetailsObj.text === "UPI")
            this.props.navigateHandler("/upiPage");
    }

    render() {
        const { id, currentRadioBtnId, handleCurrentRadioBtnClick, eachCardDetailsObj } = this.props;


        return (
            <Box sx={paymentMethodStyles.cardCont} onClick={this.cardHandler}>
                <Box sx={paymentMethodStyles.inputRadioTextCont}>
                    <Box onClick={() => handleCurrentRadioBtnClick(id)} sx={paymentMethodStyles.radioOuterCircle}>
                        <Box sx={{ ...paymentMethodStyles.radioInnerCircle, ...(currentRadioBtnId === id && paymentMethodStyles.ActiveRadioInnerCircle) }}>

                        </Box>
                    </Box>
                    <Typography component="p">{eachCardDetailsObj.text}</Typography>
                </Box>
                {eachCardDetailsObj.text === "Debit / Credit / ATM" && (
                    <Box>
                        <Box component="img" src="https://s3-alpha-sig.figma.com/img/78a1/7ebd/65f1ca0e7160f8242281f79b2677470b?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R8EKy4ZoUMF4qZRrrneuiIt~NG0cV0Zg5bDhp6Jl4GnM-9wpgNBoP8WeZ72zX9TRmDjngU3YH33f1sCK5xQaaf62KAxT2zpJ1A7Qc3vtquRlGcSD7sh9SIgMYNOzCB1bafoBYY9~3tGJh-QA7xm6uPITFq0IRPWDmW7~R7GMEKrIhPKHUSv-YubJIFqTViBnJShfUICLVZQuWQvkPMd866cMWWFHrzXFO3PuiLsXof-o3J2Pk-YWtkC03okWg--32GAUoEZOnsdzhj00eizgwUe52534YBcXL8HspzKumZgqodbR2VImIZMLGYzZvERRiX-1Hu~XIny2~a2pcULGFg__" alt="sprite-map-img" />
                    </Box>
                )}
            </Box>
        );
    }
}

interface PaymentMethodState {
    currentRadioBtnId: null | number;
}

interface MyProps {
    navigate?: (path: string) => void;
}

class PaymentMethod extends Component<MyProps, PaymentMethodState> {
    state: PaymentMethodState = {
        currentRadioBtnId: null,
    };

    handleCurrentRadioBtnClick = (btnId: number) => {
        this.setState({ currentRadioBtnId: btnId })
    }

    navigateHandler = (path: string) => {
        this.props.navigate!(path);
    }

    render() {
        return (
            <Box sx={paymentMethodStyles.mainCont}>
                <TopNavbarArrow childrenContent="Payment Method" navigateHandler={this.navigateHandler} pathName="/selectAddress" />
                <Box sx={paymentMethodStyles.emptyBox}></Box>
                <Box sx={paymentMethodStyles.bodyCont}>
                    <Box sx={paymentMethodStyles.bodyChildCont}>
                        <Box sx={paymentMethodStyles.cardsCont}>
                            {[{ id: 1, text: "Debit / Credit / ATM" }, { id: 2, text: "Net Banking" }, { id: 3, text: "UPI" }].map(each => (
                                <PaymentMethodCard
                                    key={each.id}
                                    id={each.id}
                                    currentRadioBtnId={this.state.currentRadioBtnId}
                                    handleCurrentRadioBtnClick={this.handleCurrentRadioBtnClick}
                                    eachCardDetailsObj={each}
                                    navigateHandler={this.navigateHandler}
                                />
                            ))}
                        </Box>
                        <Button sx={paymentMethodStyles.redBtn} onClick={() => this.props.navigate!("/cardDetails")}>Continue</Button>
                    </Box>
                </Box>
            </Box>
        );
    }
}

export default withRouter(PaymentMethod);


import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, Typography } from "@mui/material";
import React, { Component } from "react";
import TopNavbarArrow from "../../components/top_navbar_arrow_icon/TopNavbarArrow";
import withRouter from '../../hoc/withRouter';
import selectAddressStyles from "./SelectAddress.Styles";

interface SelectAddressCardProps {
    id: number;
    openPopupId: number | null;
    handlePopupToggle: (id: number) => void;
    handlePopupClose: () => void;
    handleCurrentRadioBtnClick: (btnId: number) => void;
    currentRadioBtnId: number | null;
    isCurrentPopUpOpen: boolean;
}

class SelectAddressCard extends Component<SelectAddressCardProps> {
    private popupRef: React.RefObject<HTMLDivElement>;

    constructor(props: SelectAddressCardProps) {
        super(props);
        this.popupRef = React.createRef();
    }

    handleClickOutside = (event: MouseEvent) => {
        if (this.popupRef.current && !this.popupRef.current.contains(event.target as Node)) {
            this.props.handlePopupClose();
        }
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    render() {
        const { id, openPopupId, handlePopupToggle, currentRadioBtnId, handleCurrentRadioBtnClick, isCurrentPopUpOpen } = this.props;
        const isPopupOpen = (openPopupId === id && isCurrentPopUpOpen);
        // console.log(isPopupOpen, openPopupId, id);

        return (
            <Box sx={selectAddressStyles.cardCont}>
                <Box sx={selectAddressStyles.inputRadioCont}>
                    <Box onClick={() => handleCurrentRadioBtnClick(id)} sx={selectAddressStyles.radioOuterCircle}>
                        <Box sx={{ ...selectAddressStyles.radioInnerCircle, ...(currentRadioBtnId === id && selectAddressStyles.ActiveRadioInnerCircle) }}>

                        </Box>
                    </Box>
                </Box>
                <Box sx={selectAddressStyles.addressCont}>
                    <Box sx={selectAddressStyles.contentCont}>
                        <Typography component="h2">Rajesh Singh</Typography>
                        <Typography component="p">Sarjapur Outer Ring Road,
                            Kadabeesanahalli, Bengaluru
                            -500049</Typography>
                    </Box>
                    <Box sx={selectAddressStyles.iconPopupCont} ref={this.popupRef}>
                        <MoreVertIcon onClick={() => handlePopupToggle(id)} />
                        {isPopupOpen && (
                            <Box component="ul" sx={selectAddressStyles.popupCont}>
                                <Box component={"li"} onClick={this.props.handlePopupClose}>Edit</Box>
                                <Box component={"li"} onClick={this.props.handlePopupClose}>Delete</Box>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
        );
    }
}

interface SelectAddressState {
    openPopupId: number | null;
    currentRadioBtnId: null | number;
    isCurrentPopUpOpen: boolean;
}

interface MyProps {
    navigate: (path: string) => void;
}

class SelectAddress extends Component<MyProps, SelectAddressState> {
    state: SelectAddressState = {
        openPopupId: null,
        currentRadioBtnId: null,
        isCurrentPopUpOpen: false
    };

    handlePopupToggle = (id: number) => {
        console.log("currentpopupid", id);
        this.setState(prevState => ({ isCurrentPopUpOpen: !this.state.isCurrentPopUpOpen, openPopupId: id }));
    }

    handlePopupClose = () => {
        this.setState(prevState => ({ isCurrentPopUpOpen: !this.state.isCurrentPopUpOpen, openPopupId: null }));
    }

    handleCurrentRadioBtnClick = (btnId: number) => {
        this.setState({ currentRadioBtnId: btnId })
    }

    listItemsClickHandler = (path: string) => {
        this.props.navigate(path)
    }

    render() {
        return (
            <Box sx={selectAddressStyles.mainCont}>
                <TopNavbarArrow childrenContent='Delivery Address' navigateHandler={this.listItemsClickHandler} pathName='/cart'/>
                <Box sx={selectAddressStyles.emptyBox}></Box>
                <Box sx={selectAddressStyles.bodyCont}>
                    <Box sx={selectAddressStyles.bodyChildCont}>
                        <Box sx={selectAddressStyles.cardsCont}>
                            {[1, 2, 3, 4, 5, 6, 7].map(each => (
                                <SelectAddressCard
                                    key={each}
                                    id={each}
                                    openPopupId={this.state.openPopupId}
                                    handlePopupToggle={this.handlePopupToggle}
                                    handlePopupClose={this.handlePopupClose}
                                    currentRadioBtnId={this.state.currentRadioBtnId}
                                    handleCurrentRadioBtnClick={this.handleCurrentRadioBtnClick}
                                    isCurrentPopUpOpen={this.state.isCurrentPopUpOpen}

                                />
                            ))}
                        </Box>
                        <Button onClick={() => this.props.navigate("/paymentMethod")} sx={selectAddressStyles.redBtn}>continue</Button>
                    </Box>
                </Box>
            </Box>
        );
    }
}

export default withRouter(SelectAddress);

import { Button } from "@mui/material";
import { forwardRef } from "react";
import redBtnStyles from "./RedButton.Styles";

interface MyProps {
    children: React.ReactNode;
    isBtnDisabled: boolean;
    handleSendOtp?: () => void;
}

const RedButton = forwardRef<HTMLButtonElement, MyProps>(({ children, isBtnDisabled, handleSendOtp }, ref) => (
    <Button
        disableElevation
        disableFocusRipple
        disableRipple
        disableTouchRipple
        sx={redBtnStyles.redBtn}
        ref={ref}
        disabled={isBtnDisabled}
        onClick={handleSendOtp}
    >
        {children}
    </Button>
));

export default RedButton;

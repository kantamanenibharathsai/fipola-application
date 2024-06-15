import { Button } from "@mui/material";
import { forwardRef } from "react";
import redBtnStyles from "./RedButton.Styles";

interface MyProps {
    children: React.ReactNode;
    isBtnDisabled: boolean;
}

const RedButton = forwardRef<HTMLButtonElement, MyProps>(({ children, isBtnDisabled }, ref) => (
    <Button
        disableElevation
        disableFocusRipple
        disableRipple
        disableTouchRipple
        sx={redBtnStyles.redBtn}
        ref={ref}
        disabled={isBtnDisabled}
    >
        {children}
    </Button>
));

export default RedButton;

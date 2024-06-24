import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../../config";




export interface IState {
    userDetails: {
        fname: string;
        lname: string;
        email: string;
        password: string;
        mobileNumber: string;
    };
    status: "Idle" | "Loading" | "Success" | "Failed";
    registeredData: null | {
        data: {
            id: string;
            type: string;
            attributes: {
                created_at: string;
                first_name: string;
                last_name: string;
                email: string;
                mobile_number: string;
                updated_at: string;
            };
        };
    };
    registerErrMsg: string;
    mobileErrMsg: string;
    otpErrMsg: string;
    otpData: null | {
        data: {
            created_at: string;
            id: number;
            mobile_number: string;
            otp: string;
            status: boolean;
            updated_at: string;
            valid_time: string;
        },
        message: string,
        status: number
    };
    token: string;
}

const initialState: IState = {
    userDetails: {
        fname: "",
        lname: "",
        email: "",
        password: "",
        mobileNumber: "",
    },
    status: "Idle",
    registeredData: null,
    registerErrMsg: "",
    mobileErrMsg: "",
    otpErrMsg: "",
    otpData: null,
    token: "",
};


export const registerUserDetails = createAsyncThunk(
    "registerUserDetails",
    async (userRegisterData: IState["userDetails"]) => {
        try {
            const data = JSON.stringify({
                user: {
                    first_name: userRegisterData.fname,
                    last_name: userRegisterData.lname,
                    email: userRegisterData.email,
                    password: userRegisterData.password,
                    mobile_number: userRegisterData.mobileNumber,
                },
            });

            const response = await fetch(`${baseURL}/user_block/users`, {
                method: "POST",
                headers: {
                    Accept: "*/*",
                    token:
                        "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNzE3ODMxMzM3fQ.kWPFEDBzJ1ftgE27o_I4aPHZ9dV-q9JDV7iYmKJd4j4",
                    "Content-Type": "application/json",
                },
                body: data,
            });
            console.log(response);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const result = await response.json();
            if (result.errors) return result.errors;
            else {
                localStorage.setItem("userRegisteredData", JSON.stringify(result.data));
                return result.data;
            }
        } catch (errors) { return errors };
    }
);

export const loginWithMobileNumber = createAsyncThunk(
    "loginWithMobileNumber",
    async (mobileNumber: string) => {
        console.log("login mobile")
        try {
            const data = JSON.stringify({
                mobile_number: `+91${mobileNumber}`,
            });
            const response = await fetch(
                `${baseURL}/login_block/logins/login_with_number`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: data,
                }
            );
            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            const result = await response.json();
            console.log("result", result)
            // console.log(result.data);
            if (result.status === 422) return result.message;
            else return result;
        } catch (errors) { return errors };
    }
);

export const loginWithOTP = createAsyncThunk(
    "loginWithOTP",
    async ({ mobile_number, otp }: { mobile_number: string; otp: string }) => {
        try {
            const response = await fetch(
                `${baseURL}/user_block/otps/validate_otp?mobile_number=${mobile_number.slice(
                    1
                )}&otp=${otp}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            const result = await response.json();
            if (!result.token) {
                alert("Invalid OTP");
            } else {
                console.log(result);
                localStorage.setItem("token", result.token);
                return result;
            }
        } catch (error) {
            console.log("Bad Verification Code");
            console.log(error);
            alert("Invalid Token");
        }
    }
);


export const loginRegisterSlice = createSlice({
    name: "loginRegister",
    initialState,
    reducers: {
        saveUserRegisterDetails: (state, action: PayloadAction) => { },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUserDetails.pending, (state) => {
            state.status = "Loading";
        });
        builder.addCase(registerUserDetails.fulfilled, (state, action) => {
            state.status = "Success";
            console.log("action.payload", action.payload);
            if (action.payload.data) {
                state.registeredData = action.payload;
                state.registerErrMsg = "";
            } else {
                state.registerErrMsg = action.payload[0];
                state.registeredData = null;
            };

        });
        builder.addCase(registerUserDetails.rejected, (state) => {
            state.status = "Failed";
        });

        builder.addCase(loginWithMobileNumber.pending, (state) => {
            state.status = "Loading";
        });
        builder.addCase(loginWithMobileNumber.fulfilled, (state, action) => {
            state.status = "Success";
            if (action.payload.data) {
                state.otpData = action.payload;
                state.mobileErrMsg = "";
            } else {
                state.mobileErrMsg = action.payload;
                state.otpData = null;
            };
        });
        builder.addCase(loginWithMobileNumber.rejected, (state) => {
            state.status = "Failed";
        });

        builder.addCase(loginWithOTP.pending, (state) => {
            state.status = "Loading";
        });
        builder.addCase(loginWithOTP.fulfilled, (state, action) => {
            state.status = "Success";
            if (action.payload.token) {
                state.token = action.payload.token;
            }
        });
        builder.addCase(loginWithOTP.rejected, (state) => {
            state.status = "Failed";
        });
    },
});

export const { saveUserRegisterDetails } = loginRegisterSlice.actions;

export default loginRegisterSlice.reducer;
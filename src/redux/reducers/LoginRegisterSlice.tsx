import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../../config";

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
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            console.log(result.data);
            if (!result.data) {
                alert("Mobile Number already taken");
            } else {
                alert("Registration successful");
                localStorage.setItem("userRegisteredData", JSON.stringify(result.data));
                return result.data;
            }
        } catch (error) {
            console.log("Error", error);
        }
    }
);

export const loginWithMobileNumber = createAsyncThunk(
    "loginWithMobileNumber",
    async (mobileNumber: string) => {
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
            console.log(result.data);
            if (!result.data) {
                alert("Mobile Number not registered");
            } else {
                return result.data;
            }
        } catch (error) {
            console.log(error);
        }
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

export interface IState {
    userDetails: {
        fname: string;
        lname: string;
        email: string;
        password: string;
        mobileNumber: string;
    };
    status: "Idle" | "Loading" | "Success" | "Failed";
    registeredData: {
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
    otpData: {
        created_at: string;
        id: number;
        mobile_number: string;
        otp: string;
        status: string;
        updated_at: string;
        valid_time: string;
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
    registeredData: {
        data: {
            id: "",
            type: "",
            attributes: {
                created_at: "",
                first_name: "",
                last_name: "",
                email: "",
                mobile_number: "",
                updated_at: "",
            },
        },
    },
    otpData: {
        created_at: "",
        id: 0,
        mobile_number: "",
        otp: "",
        status: "",
        updated_at: "",
        valid_time: "",
    },
    token: "",
};

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
            state.registeredData = action.payload;
        });
        builder.addCase(registerUserDetails.rejected, (state) => {
            state.status = "Failed";
        });

        builder.addCase(loginWithMobileNumber.pending, (state) => {
            state.status = "Loading";
        });
        builder.addCase(loginWithMobileNumber.fulfilled, (state, action) => {
            state.status = "Success";
            state.otpData = action.payload;
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
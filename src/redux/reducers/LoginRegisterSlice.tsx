

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../../../config";


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
                // actions.resetForm();
                alert("Registration successful");
                // this.props.navigate("/");
                localStorage.setItem("userRegisteredData", JSON.stringify(result.data));
                return result.data;
            }
        } catch (error) {
            console.log("Error", error);
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
    },
});

export const { saveUserRegisterDetails } = loginRegisterSlice.actions;

export default loginRegisterSlice.reducer;
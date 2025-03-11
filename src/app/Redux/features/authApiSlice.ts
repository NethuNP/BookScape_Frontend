import { apiSlice } from "@/app/Redux/apiSlice";
import type { AuthResponse, User, UserLogin } from "@/types/types";

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<AuthResponse, User>({
            query: (user) => ({
                url: "users/register",
                method: "POST",
                body: user,
            }),
        }),
        login: builder.mutation<AuthResponse, UserLogin>({
            query: (user) => ({
                url: "users/login",
                method: "POST",
                body: user,
            }),
        }),
        verifyOtp: builder.mutation({
            query: ({ email, otp }) => ({
              url: 'users/verify-otp',
              method: 'POST',
              body: { email, otp },
            }),
          }),
    }),
});

export const { useRegisterMutation, useLoginMutation, useVerifyOtpMutation} = authApiSlice;
export default authApiSlice;

import { signInWithPopup } from "firebase/auth";
import { auth, fetchRegisteredUser, provider } from "../firebase";
import { authActions } from "./auth-slice";

export const signInWithGoogleAccount = () => {
    return async (dispatch) => {
        try {
            const result = await signInWithPopup(auth, provider);
            const loggedInRegisteredUser = await fetchRegisteredUser(result.user);
            dispatch(authActions.login(loggedInRegisteredUser));
        } catch (err) {
            alert(err);
        }
    }
}
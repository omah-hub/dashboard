import { fetchToken } from "./token"

const AuthorizationHeader = () => {
    const access_token = localStorage.getItem("accessToken");

    return access_token !== null
    ? {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${fetchToken("accessToken")}`
    }
    : {
        Accept: "application/json",
        "Content-Type": "application/json",
    };
}
export default AuthorizationHeader;
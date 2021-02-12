import React from "react";
import GoogleLogin from "react-google-login";

export const HomePage: React.FC = () => {
    const responseGoogle = (response: any) => {
        console.log(response);
    };

    return (
        <div>
            <GoogleLogin
                clientId='555619313308-juuatvesksqts69pvp719lnmjhs453ck.apps.googleusercontent.com'
                buttonText='Login'
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
            />
        </div>
    );
};

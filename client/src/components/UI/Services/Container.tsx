import React, { Fragment, useContext } from "react";
import { AuthContext } from "../../providers/Auth";
import { LockOpen } from "@material-ui/icons";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { authServices, userServices } from "./const";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { Service } from "./Service";
import { CLIENTID } from "../../../constants";

export function ServicesContainer() {
  const { currentUser, googleLogin } = useContext(AuthContext);

  if (currentUser) {
    return (
      <Fragment>
        {userServices.map((service, index) => (
          <Grid item xs={3} key={service.title}>
            <Service service={service} />
          </Grid>
        ))}
      </Fragment>
    );
  }
  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    googleLogin(response);
  };
  return (
    <Fragment>
      {authServices.map((service, index) => (
        <Grid item xs={3} key={service.title}>
          <Service service={service} />
        </Grid>
      ))}
      <Grid item xs={3}>
        <Box display='flex' justifyContent='start' alignItems='center'>
          <LockOpen />
          <Typography variant='h5'>Inicia sesion</Typography>
        </Box>

        <Typography paragraph>
          Si eres parte del itd inicia sesion para poder acceder a mas servicios
        </Typography>
        <GoogleLogin
          clientId={CLIENTID}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          render={(props) => (
            <Button {...props} color='primary' variant='contained'>
              Iniciar sesion
            </Button>
          )}
        />
      </Grid>
    </Fragment>
  );
}

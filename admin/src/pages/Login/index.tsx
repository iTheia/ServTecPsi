import React from "react";
import "./styles.css";
import { Person, Lock } from "@material-ui/icons";

export const LoginPage: React.FC = () => {
    return (
        <div className='loginpage container'>
            <div className='signin-signup'>
                <form autoComplete='off' action='#' className='sign-in-form'>
                    <h2 className='title'>Sign in</h2>
                    <div className='input-field'>
                        <Person />
                        <input type='text' placeholder='Username' />
                    </div>
                    <div className='input-field'>
                        <Lock />
                        <input type='password' placeholder='Password' />
                    </div>
                    <input
                        type='submit'
                        value='Iniciar sesion'
                        className='btn solid'
                    />
                </form>
            </div>
        </div>
    );
};

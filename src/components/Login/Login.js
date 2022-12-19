import React from 'react';
import './Login.css';
import styled from "styled-components";
import { loginUrl } from '../Spotify/Spotify';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

export default function Login() {
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>

            <a href={loginUrl} id="signInButton"><Button>Sign-in with Spotify</Button></a>
        </div>
    )
}

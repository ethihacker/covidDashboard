import React, { useEffect } from 'react';

const LoginPage = (props) =>{

    const CLIENT_ID = "5ce7e083eb0e46dd877697a29c640e56";
    const SPOTIFY_AUTHORIZATION_ENDPOINT = "https://accounts.spotify.com/authorize"
    const REDIRECT_URL = "http://localhost:3000/profile";
    const SPACE_DELIMETER = "%20"
    const SCOPES = ["user-read-currently-playing","user-read-playback-state"];
    const SCOPE_URL_PARAM= SCOPES.join(SPACE_DELIMETER);
    
    const getReturnedParamsFromSpotifyAuth = (hash)=>{
        const stringAfterHashtag = hash.substring(1);
        const paramsInUrl = stringAfterHashtag.split("&");
        const paramsSplitUp = paramsInUrl.reduce((accumalator, currentValue)=>{
          
             const [key,value] = currentValue.split("=");
             accumalator[key] = value;
             return accumalator;

        },{});
        return paramsSplitUp;
    }
    const loginHandler = ()=>{
      window.location=`${SPOTIFY_AUTHORIZATION_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope${SCOPE_URL_PARAM}&response_type=token&show_dialog=true`
    };
    useEffect(()=>{
       if(window.location.hash){

           const object = getReturnedParamsFromSpotifyAuth(window.location.hash);
           console.log(object);
           localStorage.setItem("accessToken",object.access_token);
           localStorage.setItem("expiresIn",object.expires_in);
           localStorage.setItem("tokenType",object.token_type);
       }

    })
  return(
    <>
        <h1>Login</h1>
        <button onClick={loginHandler}>Spotify Login</button>
     </>
  );
}

export default LoginPage;
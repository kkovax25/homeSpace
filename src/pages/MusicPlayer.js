import React from 'react';
const REACT_APP_CLIENT_ID = '162bf02ed4ca4c37bb3ddc373e3da45e';
const REACT_APP_AUTHORIZE_URL = 'https://accounts.spotify.com/authorize';
const REACT_APP_REDIRECT_URL = 'http://localhost:3000/musicPlayer';
const MusicPlayer = () => {
  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };
  return (
    <div>
      <button onClick={handleLogin}>SPOTIFY</button>
    </div>
  );
};

export default MusicPlayer;

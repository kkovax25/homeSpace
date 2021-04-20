import { Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import HomeCenter from '../pages/HomeCenter';
import HomePage from '../pages/HomePage';
import MusicPlayer from '../pages/MusicPlayer';
import Applications from '../pages/Applications';
import Settings from '../pages/Settings';
const Protected = () => {
  return (
    <Navigation>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/homeCenter'>
          <HomeCenter />
        </Route>
        <Route exact path='/musicPlayer'>
          <MusicPlayer />
        </Route>
        <Route exact path='/applications'>
          <Applications />
        </Route>
        <Route exact path='/settings'>
          <Settings />
        </Route>
      </Switch>
    </Navigation>
  );
};

export default Protected;

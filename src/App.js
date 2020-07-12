/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import HomeR from './routes/HomeR';
import AlbumR from './routes/AlbumR';
import TopBar from './components/TopBar';
import SongR from './routes/SongR';
import mq from './components/MediaQuery';
import ArtistR from './routes/ArtistR';

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <div
          css={{
            margin: '1rem',
            [mq[1]]: {
              margin: '2rem 15rem',
            },
          }}
        >
          <Switch>
            <Route exact path='/' render={(props) => <HomeR {...props} />} />
            <Route
              exact
              path='/song/:id'
              render={(props) => <SongR {...props} />}
            />
            <Route
              exact
              path='/album/:id'
              render={(props) => <AlbumR {...props} />}
            />
            <Route
              exact
              path='/artist/:id'
              render={(props) => <ArtistR {...props} />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

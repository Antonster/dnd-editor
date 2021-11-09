import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'src/components/header/header';
import Content from 'src/components/content/content';
import Navigation from 'src/components/navigation/navigation';
import Home from 'src/components/home/home';
import Editor from 'src/components/editor/editor';

const App = () => (
  <>
    <Header />
    <Content>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/editor" component={Editor} />
      </Switch>
    </Content>
  </>
);

export default App;

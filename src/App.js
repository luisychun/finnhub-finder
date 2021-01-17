import './App.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import News from './components/pages/News'
import Menu from './components/layout/Menu'
import SymbolProfile from './components/symbols/SymbolProfile'
import NotFound from './components/pages/NotFound'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Fragment } from 'react'
import NewsState from './context/news/NewsState'
import SymbolsState from './context/symbols/SymbolsState'

const App = () => {
  const title = 'Market News Finder'
  return (
    <SymbolsState>
      <NewsState>
        <Router>
          <Fragment>
            <Menu title={title} />
            <Container>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/symbol/:symbol' render={props => 
                (<SymbolProfile {...props} />)} />
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/news' component={News}></Route>

              <Route path='/' component={NotFound} />
            </Switch>
            </Container>
          </Fragment>
        </Router>
      </NewsState>
    </SymbolsState>
  );
}

export default App;

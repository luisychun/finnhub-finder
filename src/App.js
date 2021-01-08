import './App.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import News from './components/pages/News'
import Menu from './components/layout/Menu'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Fragment } from 'react'
import NewsState from './context/news/NewsState'
import SymbolsState from './context/symbols/SymbolsState'

const App = () => {
  const title = 'Stock Finder'
  return (
    <SymbolsState>
      <NewsState>
        <Router>
          <Fragment>
            <Menu title={title} />
            <Container>
            <Switch>
              <Route exac path='/about' component={About}></Route>
              <Route exac path='/news' component={News}></Route>
              <Route exac path='/' component={Home}></Route>
            </Switch>
            </Container>
          </Fragment>
        </Router>
      </NewsState>
    </SymbolsState>
  );
}

export default App;

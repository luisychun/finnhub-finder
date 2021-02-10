import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Fragment } from 'react'
import Home from './components/pages/Home'
import News from './components/pages/News'
import Menu from './components/layout/Menu'
import NotFound from './components/pages/NotFound'
import SymbolProfile from './components/symbols/SymbolProfile'
import SymbolsState from './context/symbol/SymbolState'

const App = () => {
  const appTitle = {
    name: 'FinnHub Finder',
    logo: 'fas fa-cloud',
  }
  return (
    <SymbolsState>
      <Router>
        <Fragment>
          <Menu title={appTitle} />
          <Container>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route
                exact
                path="/symbol/:symbol"
                render={(props) => <SymbolProfile {...props} />}
              />
              <Route exact path="/news" component={News}></Route>
              <Route path="/" component={NotFound} />
            </Switch>
          </Container>
        </Fragment>
      </Router>
    </SymbolsState>
  )
}

export default App

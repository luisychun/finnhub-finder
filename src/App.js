import './App.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import News from './components/pages/News'
import Menu from './components/layout/Menu'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Fragment } from 'react'
import NewsState from './context/news/NewsState'

const App = () => {
  const title = 'Stock Finder'
  return (
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
  );
}

export default App;

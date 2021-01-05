import './App.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Menu from './components/layout/Menu'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import {Fragment} from 'react'

const App = () => {
  const title = 'Stock Finder'
  return (
    <Router>
      <Fragment>
        <Menu title={title}/>
        <Container>
        <Switch>
          <Route exac path='/about' component={About}></Route>          
        </Switch>
        </Container>
      </Fragment>
    </Router>
  );
}

export default App;

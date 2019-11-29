import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const App = () => {


        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/projects" component={Projects} />
                    </Switch>
                </Router>
            </div>
        )
    
}
export default App;


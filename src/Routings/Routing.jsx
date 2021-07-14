import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Components/Home'
import NavBar from '../Components/NavBar'
import Porfolio from './../Components/Porfolio';
import Projects from './../Components/Projects';
import Contact from './../Components/Contact';
import Resume from './../Components/Resume';

const Routing = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/portfolio" component={Porfolio} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    )
}

export default Routing

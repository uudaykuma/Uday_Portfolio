import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Components/Home'
import NavBar from '../Components/NavBar'
import Porfolio from '../Components/Skills';
import Projects from './../Components/Projects';
import Contact from './../Components/Contact';

const Routing = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/skills" component={Porfolio} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    )
}

export default Routing

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { App, Whoops404 } from './components'
import SkiDayCount from './components/containers/SkiDayCount'
import AddDayForm from './components/containers/AddDayForm'
import SkiDayList from './components/containers/SkiDayList'

const routes = (
    <Router >
        
        
        <App>
        <Switch>
            <Route exact path="/"  component={SkiDayCount}/>            
            <Route path="/add-day"  component={AddDayForm}/>
            <Route exact path="/list-days" component={SkiDayList} />
            <Route path="/list-days/:filter" component={SkiDayList}/>
            <Route component={Whoops404}/>
        </Switch>
        
        </App>
        
    </Router>
)

export default routes;
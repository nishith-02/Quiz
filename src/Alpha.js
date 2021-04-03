import React from 'react';
import App from './App'
import Score from './Score'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Questions from './Questions';
function Alpha(){
    return(
        <div>
        <Router>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/questions" component={Questions}/>
                <Route path="/score" component={Score}/>
            </Switch>
        </Router>
        </div>
    )
}
export default Alpha;

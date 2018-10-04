import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* AppContainer component, this is our root element */
import AppContainer from './components/AppContainer.jsx'
import LandingPage from './views/landing/LandingPage.jsx'
import InsightPage from './views/insight/InsightPage.jsx'
import DesignPage from './views/design/DesignPage.jsx'
import InnovationPage from './views/innovation/InnovationPage.jsx'

import Error404 from './views/error404/Error404.jsx'

/* construct routes */
export default () => {
    return (
        <Router>
            <AppContainer>
                <Switch>
                    {/* Base Component */}
                    <Route path='/' exact component={LandingPage} />

                    {/* Views Routes */}
                    <Route path='/insight' exact component={InsightPage} />
                    <Route path='/design' exact component={DesignPage} />
                    <Route path='/innovation' exact component={InnovationPage} />

                    {/* No Matching Routes */}
                    <Route component={Error404} />
                </Switch>
            </AppContainer>
        </Router>
    )
}

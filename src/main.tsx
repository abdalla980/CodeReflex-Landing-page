import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {Route, Switch} from "wouter"
import TermsAndConditions from './components/pages/TermsAndConditions'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import CookiePolicy from './components/pages/CookiePolicy'
import RefundPolicy from './components/pages/RefundPolicy'

    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <Switch>
                <Route path="/" component={App} />
                <Route path="/TermsAndConditions" component={TermsAndConditions} />
                <Route path="/PrivPolicy" component={PrivacyPolicy} />
                <Route path="/CookiePolicy" component={CookiePolicy} />
                <Route path="/refundPolicy" component={RefundPolicy} />
            </Switch>
        </StrictMode>,
    )

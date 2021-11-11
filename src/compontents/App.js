import React from "react"
import Signup from "./signup/signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./clientDashboard/dashboard"
import Login from "./login/login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./forgotPassword/forgotPassword"
import UpdateProfile from "./updateProfile/updateProfile"

function App() {
  return (
    <div>
      <div className="w-100">
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  )
}

export default App
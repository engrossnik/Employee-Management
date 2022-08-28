import React from "react"
import { Redirect } from "react-router-dom"
// Authentication related pages
import Register from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
// Dashboard
import Dashboard from "../pages/Dashboard/index"

const userRoutes = [
    { path: "/dashboard", component: Dashboard },
    // this route should be at the end of all other routes
    { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  ]
  const authRoutes = [
    { path: "/login", component: Register },
  
  ]
  export { userRoutes, authRoutes }
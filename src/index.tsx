import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom'
import { noAuthRoutes } from './router'
import { RouterItem } from './types'

ReactDOM.render(
  <Router>
    <Switch>
      <Route 
      path='/admin'
      component={App} />
      {noAuthRoutes.map((route: RouterItem, index: number) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props: RouteComponentProps) => {
              document.title = route.title
              return <route.component {...props} />
            }}
          />
        )
      })}
      <Redirect  from='/' to='/admin/home' />
      <Redirect to='/err' />
    </Switch>
  </Router>,
  document.getElementById('root')
)

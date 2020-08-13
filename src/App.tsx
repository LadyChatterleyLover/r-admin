import React, { FC } from 'react'
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom'
import { authRoutes } from './router'
import { RouterItem } from './types'
import Base from './page/base/base'

const App: FC = () => {
  return (
    <Base>
      <Switch>
        {authRoutes.map((route: RouterItem, index: number) => {
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
        <Redirect to='/err'/>
      </Switch>
    </Base>
  )
}

export default App

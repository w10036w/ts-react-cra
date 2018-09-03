import * as React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
  } from 'react-router-dom';
import About from './screens/About';
import AntScreen from './screens/AntScreen';
import ApolloScreen from './screens/ApolloScreen';
import FormScreen from './screens/FormScreen';
import Home from './screens/Home';
import Pagination from './screens/Pagination';
import Static from './screens/Static';
import UserScreen, { UserDetails } from './screens/UserScreen';
// import ErrorScreen from './Error'

import asyncHoc from '~comp/hoc/asyncHoc'
import AppFooter from '~comp/common/AppFooter'
import AppHeader from '~comp/common/AppHeader'

const AsyncApolloQuery = asyncHoc(() => import('./screens/ApolloScreen/ApolloQuery'))

const routes = [
  {
    key: 'home page',
    path: '/',
    exact: true,
    component: Home,
  },
  { key: 'about page', path: '/about', component: About },
  { key: 'ant design root page', path: '/ant', exact: true, component: AntScreen },
  { key: 'apollo demo root page', path: '/apollo', exact: true, component: ApolloScreen },
  {
    key: 'async apollo query demo page',
    path: '/apollo/query',
    component: AsyncApolloQuery,
  },
  { key: 'static page', path: '/static', component: Static },
  { key: 'virtualize list demo page', path: '/pagination', component: Pagination },
  { key: 'form demo page', path: '/form', component: FormScreen },
  { key: 'user list', path: '/users', component: UserScreen },
  { key: 'user details', path: '/user/:username', component: UserDetails },
  // { path: '/error', component: ErrorScreen },
  { key: '404 not found', path: '*', render: () => <Redirect to="/" /> }, // keep this the last
]

export default class Routes extends React.PureComponent {
  public render() {
    return (
      <BrowserRouter>
        <>
          <AppHeader />
          <Switch>{routes.map(e => <Route key={e.key} {...e} />)}</Switch>
          <AppFooter />
        </>
      </BrowserRouter>
    )
  }
}

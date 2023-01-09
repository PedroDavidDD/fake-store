import { Route, Routes } from 'react-router-dom'
import {FakeStoreRoutes} from '../fakeStore/routers/FakeStoreRoutes'
import {Login} from '../auth/pages/Login'
import { PrivateRoute, PublicRoute} from './'

export const AppRouter = () => {
  return (
    <>        
      <Routes>
        {/*  <PublicRoute> */}
        <Route path="login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } /> 

        {/*  <PrivateRoute> */}
        <Route element={ <PrivateRoute /> } >
          <Route path="/*" element={<FakeStoreRoutes />} />
        </Route>
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
      </Routes>
    </>
  )
}

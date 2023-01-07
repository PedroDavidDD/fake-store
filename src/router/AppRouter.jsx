import { Route, Routes } from 'react-router-dom'
import {FakeStoreRoutes} from '../fakeStore/routers/FakeStoreRoutes'
import {Login} from '../auth/pages/Login'

export const AppRouter = () => {
  return (
    <>        
      <Routes>
        {/*  <PublicRoute> */}
        <Route path="login" element={<Login />} />

        {/*  <PrivateRoute> */}
        <Route path="/*" element={<FakeStoreRoutes />} />

        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
      </Routes>
    </>
  )
}

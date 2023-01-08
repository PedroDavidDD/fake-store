import { AuthProvider } from "./auth/context/AuthProvider";
import { AppRouter } from "./router/AppRouter";

export const FakeStoreApp = () => {

  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

import { AuthProvider } from "./modules/auth";
import { AppRouter } from "./router/AppRouter";

export const HerosApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

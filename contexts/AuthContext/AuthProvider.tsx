import { createContext, ReactNode } from 'react';

interface AuthContextState {
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextState | unknown>({});

function AuthProvider({ children }: { children: ReactNode }) {
  // missing complete logic
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
export { AuthContext };
export type { AuthContextState };

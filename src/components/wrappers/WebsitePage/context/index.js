// /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createContext, useMemo, useState } from 'react';

export const WebsitePageContext = createContext();

export const WrapperProvider = ({ children }) => {
  const [signIn, setSignIn] = useState(false);

  const providerValue = useMemo(() => ({ signIn, setSignIn }), [signIn]);

  return (
    // <AuthProvider>
    <WebsitePageContext.Provider value={providerValue}>
      {children}
    </WebsitePageContext.Provider>
    // </AuthProvider>
  );
};

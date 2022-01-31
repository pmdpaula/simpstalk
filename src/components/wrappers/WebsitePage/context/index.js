// /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useTheme } from 'next-themes';
import { createContext, useMemo, useState } from 'react';

// import themeDark from '../../../../theme/themeDark';
import themeLight from '../../../../theme/themeLight';

// import { AuthProvider } from './AuthContext';

export const WebsitePageContext = createContext();

export const WrapperProvider = ({ children }) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(themeLight);

  const providerValue = useMemo(
    () => ({ resolvedTheme, currentTheme, setCurrentTheme }),
    [currentTheme, resolvedTheme],
  );

  return (
    <WebsitePageContext.Provider value={providerValue}>
      {children}
    </WebsitePageContext.Provider>
  );
};

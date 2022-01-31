import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { ReactNode, useEffect, useState } from 'react';

import { ThemeProps } from '../../../theme/themeLight';
import SEO from '../../foundation/SEO';

interface WebsitePageWrapperProps {
  themeProps: {
    isDark: boolean;
  };
  seoProps?: { headTitle: string };
  menuProps?: {
    display: boolean;
  };
  footerProps?: {
    content?: ReactNode;
  };
  children: ReactNode;
  themeMode?: string;
}

const WebsitePageWrapper = ({
  children,
  seoProps,
}: WebsitePageWrapperProps): JSX.Element => {
  const theme = useTheme<ThemeProps>(); // useTheme from MUI
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line operator-linebreak

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <SEO {...seoProps} />;

  return (
    <>
      <SEO {...seoProps} />
      <Container
        sx={{
          display: 'flex',
          // alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          padding: { xs: '1.5rem', md: '3rem' },
          backgroundColor: theme.palette.primary.main,
          // backgroundImage:
          //   'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c1965e5-1928-4430-85a0-d361e3bd11e8/dj0jzj-07fa1839-5ce9-4984-ad07-3e0ffed1167c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjMTk2NWU1LTE5MjgtNDQzMC04NWEwLWQzNjFlM2JkMTFlOFwvZGowanpqLTA3ZmExODM5LTVjZTktNDk4NC1hZDA3LTNlMGZmZWQxMTY3Yy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Oif2dOOV8pD1Yvj-LkPv05raO1UZIhjRCLn8GQuJ48Y)',
          backgroundImage:
            'url(https://c4.wallpaperflare.com/wallpaper/290/406/331/the-simpsons-bart-simpson-wallpaper-preview.jpg)',
          // backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundBlendMode: 'multiply',
        }}
      >
        {children}
      </Container>
    </>
  );
};

export default WebsitePageWrapper;

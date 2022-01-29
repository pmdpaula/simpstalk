import { Box } from '@skynexui/components';
import { useEffect, useState } from 'react';

import appConfig from '../../../config/config.json';
import SEO from '../../foundation/SEO';

const WebsitePageWrapper = ({ children, seoProps }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <SEO {...seoProps} />;

  return (
    <>
      <SEO {...seoProps} />
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage:
            'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c1965e5-1928-4430-85a0-d361e3bd11e8/dj0jzj-07fa1839-5ce9-4984-ad07-3e0ffed1167c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjMTk2NWU1LTE5MjgtNDQzMC04NWEwLWQzNjFlM2JkMTFlOFwvZGowanpqLTA3ZmExODM5LTVjZTktNDk4NC1hZDA3LTNlMGZmZWQxMTY3Yy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Oif2dOOV8pD1Yvj-LkPv05raO1UZIhjRCLn8GQuJ48Y)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default WebsitePageWrapper;

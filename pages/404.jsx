import { Box, Image, Text } from '@skynexui/components';

import appConfig from '../src/config/config.json';

// eslint-disable-next-line prettier/prettier
const imageSrc = '/simpsons_404b.png';

const page404 = () => (
  <Box
    styleSheet={{
      padding: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: appConfig.theme.colors.primary[500],
      // backgroundImage: `url(${imageSrc})`,
      backgroundImage:
        'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c1965e5-1928-4430-85a0-d361e3bd11e8/dj0jzj-07fa1839-5ce9-4984-ad07-3e0ffed1167c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjMTk2NWU1LTE5MjgtNDQzMC04NWEwLWQzNjFlM2JkMTFlOFwvZGowanpqLTA3ZmExODM5LTVjZTktNDk4NC1hZDA3LTNlMGZmZWQxMTY3Yy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Oif2dOOV8pD1Yvj-LkPv05raO1UZIhjRCLn8GQuJ48Y)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundBlendMode: 'multiply',
    }}
  >
    <Box
      styleSheet={{
        padding: '1em',
        alignItems: 'center',
        justifyContent: 'center',
        border: `2px solid ${appConfig.theme.colors.simpsons.red}`,
        borderRadius: '12px',
        background: 'rgba(239, 90, 48, 0.7)',
        color: 'white',
      }}
    >
      <Image
        src={imageSrc}
        styleSheet={{
          // border: `3px solid ${appConfig.theme.colors.simpsons.blue}`,
          borderRadius: '4px',
        }}
      />
    </Box>
  </Box>
);

export default page404;

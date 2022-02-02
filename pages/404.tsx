import { useTheme } from '@mui/material';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import { ThemeProps } from '../src/theme/themeLight';

const Page404 = (): JSX.Element => {
  const theme = useTheme<ThemeProps>(); // useTheme from MUI

  return (
    <Paper
      elevation={4}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '4rem',
        padding: '1rem',
        border: `5px solid ${theme.palette.simpsons.red}`,
        borderRadius: '12px',
        background: 'rgba(239, 90, 48, 0.7)',
      }}
    >
      <Image
        src="/simpsons_404b.png"
        layout="intrinsic"
        width={500}
        height={300}
      />
    </Paper>
  );
};

export default websitePageHOC(Page404, {
  pageWrapperProps: {
    seoProps: {
      headTitle: '404',
    },
  },
});

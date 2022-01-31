import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { ReactNode } from 'react';

import { ThemeProps } from '../../../theme/themeLight';

type PageSquareProps = {
  children: ReactNode;
  chat?: boolean | undefined;
};

// type PageSquareProps = PageSquareOwnProps & React.ComponentType<BoxProps>;

const PageSquare = ({ children, chat }: PageSquareProps): JSX.Element => {
  const theme = useTheme<ThemeProps>(); // useTheme from MUI
  const flexDirectionSm = chat ? 'column' : 'row';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: { xs: 'flex-start', md: 'space-around' },
        flexDirection: { xs: 'column', sm: flexDirectionSm },
        width: '100%',
        maxWidth: '700px',
        borderRadius: '8px',
        py: { xs: '1rem', md: '2rem' },
        px: { xs: '.5rem', sm: '1rem', md: '1.5rem' },
        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
        backgroundColor: theme.palette.gradient.primary.main,
        border: '5px solid',
        borderColor: theme.palette.gradient.primary[700],
      }}
    >
      {children}
    </Box>
  );
};

export default PageSquare;

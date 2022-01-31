import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { ReactNode } from 'react';

import { ThemeProps } from '../../../theme/themeLight';

interface SimpsButtonProps {
  // type: string;
  // label: string;
  children: ReactNode;
  disabled: boolean;
}

const SimpsButton = ({ children, disabled }: SimpsButtonProps) => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme<ThemeProps>(); // useTheme from MUI

  return (
    <Button color="primary" variant="contained" disabled={disabled} fullWidth>
      {children}
    </Button>
  );
};

export default SimpsButton;

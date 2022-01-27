// import { Button } from '@skynexui/components';
import { Button } from '@skynexui/components';

import appConfig from '../../../config/config.json';

const SimpsButton = ({ type, label, children, disabled }) => (
  <Button
    // eslint-disable-next-line react/button-has-type
    type={type}
    label={label}
    disabled={disabled}
    // variant='secondary'
    buttonColors={{
      contrastColor: appConfig.theme.colors.neutrals['999'],
      mainColor: appConfig.theme.colors.primary[500],
      mainColorLight: appConfig.theme.colors.primary[400],
      mainColorStrong: appConfig.theme.colors.primary[600],
    }}
    styleSheet={{
      color: appConfig.theme.colors.neutrals['999'],
      fontWeight: 'bold',
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid',
    }}
  >
    {children}
  </Button>
);

export default SimpsButton;

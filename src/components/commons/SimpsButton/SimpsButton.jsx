// import { Button } from '@skynexui/components';
import appConfig from '../../../config/config.json';

function SimpsButton({ type, children }) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      style={{
        color: appConfig.theme.colors.neutrals['999'],
        // mainColor: appConfig.theme.colors.primary[500],
        // mainColorLight: appConfig.theme.colors.primary[400],
        // mainColorStrong: appConfig.theme.colors.primary[600],
        fontWeight: 'bold',
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid',
        borderColor: appConfig.theme.colors.primary[500],
        backgroundImage: `linear-gradient(45deg, ${appConfig.theme.colors.simpsons.yellow} 40%, ${appConfig.theme.colors.simpsons.blue} 60%)`,
        // hover: {
        //   backgroundPosition: '90deg',
        // },
      }}
    >
      {children}
    </button>
  );
}

export default SimpsButton;

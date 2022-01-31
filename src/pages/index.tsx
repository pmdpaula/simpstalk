import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Image as ImageSkynex } from '@skynexui/components';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
// import { useTheme as useThemeNT } from 'next-themes';
import { useEffect, useState } from 'react';

import PageSquare from '../components/commons/PageSquare/PageSquare';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc';
import appConfig from '../config/config.json';
import { ThemeProps } from '../theme/themeLight';

const Home: NextPage = () => {
  // const { resolvedTheme } = useThemeNT(); // useTheme from next-themes
  const [username, setUsername] = useState('');
  const [isFormEnabled, setIsFormEnabled] = useState(false);

  const theme = useTheme<ThemeProps>(); // useTheme from MUI
  const roteamento = useRouter();

  function validForm() {
    setIsFormEnabled(username.length > 2);
  }

  useEffect(() => {
    validForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <PageSquare>
      <Box
        component="form"
        // eslint-disable-next-line react/jsx-no-bind
        onSubmit={(event: React.FormEvent<HTMLInputElement>): void => {
          event.preventDefault();
          if (isFormEnabled) {
            roteamento.push(`/chat/?username=${username}`);
          }
        }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: { xs: '100%', sm: '50%' },
          textAlign: 'center',
          marginBottom: '32px',
        }}
      >
        <Typography component="h1" variant="h4" align="center">
          Boas vindas de volta!
        </Typography>
        <Typography
          sx={{
            marginBottom: '1rem',
            color: theme.palette.primary.contrastText,
          }}
        >
          {appConfig.name}
        </Typography>

        <TextField
          label="Usuário"
          variant="outlined"
          fullWidth
          size="small"
          // eslint-disable-next-line react/jsx-no-bind
          onChange={(event): void => {
            setUsername(event.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 1,
          }}
        />
        <Button
          // eslint-disable-next-line react/button-has-type
          // variant=""
          // label={label}
          color="primary"
          variant="contained"
          disabled={!isFormEnabled}
          fullWidth
        >
          {isFormEnabled ? 'Entrar' : 'Entre com o nome do usuário'}
        </Button>
      </Box>
      {/* Formulário */}

      {/* Photo Area */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '200px',
          minWidth: '150px',
          maxHeight: '260px',
          padding: '16px',
          backgroundColor: theme.palette.tertiary.main,
          border: '1px solid',
          borderColor: theme.palette.gradient.neutrals[999],
          borderRadius: '10px',
          flex: 1,
          minHeight: '240px',
        }}
      >
        <ImageSkynex
          styleSheet={{
            borderRadius: '50%',
            marginBottom: '16px',
          }}
          src={
            isFormEnabled
              ? `https://github.com/${username}.png`
              : '/simpsons_interrogation.png'
          }
        />
        <Typography
          variant="subtitle2"
          sx={{
            color: theme.palette.gradient.neutrals[200],
            backgroundColor: theme.palette.gradient.neutrals[900],
            padding: '3px 10px',
            borderRadius: '1000px',
          }}
        >
          {isFormEnabled ? username : 'Entre com usuário'}
        </Typography>
      </Box>
      {/* Photo Area */}
    </PageSquare>
  );
};

export default websitePageHOC(Home, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
  },
});

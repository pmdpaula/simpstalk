import { Box, Image, Text, TextField } from '@skynexui/components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import SimpsButton from '../src/components/commons/SimpsButton/SimpsButton';
import Titulo from '../src/components/commons/Titulo/Titulo';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import appConfig from '../src/config/config.json';

const HomePage = () => {
  const roteamento = useRouter();

  const [username, setUsername] = useState('');
  const [isFormEnabled, setIsFormEnabled] = useState(false);

  function validForm() {
    setIsFormEnabled(username.length > 2);
  }

  useEffect(() => {
    validForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <Box
      styleSheet={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        width: '100%',
        maxWidth: '700px',
        borderRadius: '5px',
        padding: '32px',
        margin: '16px',
        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
        backgroundColor: appConfig.theme.colors.neutrals[900],
        border: '1px solid',
        borderColor: appConfig.theme.colors.primary[700],
      }}
    >
      {/* Formulário */}
      <Box
        as="form"
        onSubmit={(event) => {
          event.preventDefault();
          if (isFormEnabled) {
            roteamento.push(`/chat/?username=${username}`);
          }
        }}
        styleSheet={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: { xs: '100%', sm: '50%' },
          textAlign: 'center',
          marginBottom: '32px',
        }}
      >
        <Titulo tag="h2">Boas vindas de volta!</Titulo>
        <Text
          variant="body3"
          styleSheet={{
            marginBottom: '32px',
            color: appConfig.theme.colors.neutrals[300],
          }}
        >
          {appConfig.name}
        </Text>

        <TextField
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          fullWidth
          textFieldColors={{
            neutral: {
              textColor: appConfig.theme.colors.neutrals[800],
              mainColor: appConfig.theme.colors.neutrals[900],
              mainColorHighlight: appConfig.theme.colors.primary[500],
              backgroundColor: appConfig.theme.colors.neutrals[100],
            },
          }}
        />
        <SimpsButton label="Entrar" type="submit" disabled={!isFormEnabled}>
          Entrar
        </SimpsButton>
      </Box>
      {/* Formulário */}

      {/* Photo Area */}
      <Box
        styleSheet={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '200px',
          padding: '16px',
          backgroundColor: appConfig.theme.colors.primary[700],
          border: '1px solid',
          borderColor: appConfig.theme.colors.neutrals[999],
          borderRadius: '10px',
          flex: 1,
          minHeight: '240px',
        }}
      >
        <Image
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
        <Text
          variant="body4"
          styleSheet={{
            color: appConfig.theme.colors.neutrals[200],
            backgroundColor: appConfig.theme.colors.neutrals[900],
            padding: '3px 10px',
            borderRadius: '1000px',
          }}
        >
          {isFormEnabled ? username : 'Entre com usuário'}
        </Text>
      </Box>
      {/* Photo Area */}
    </Box>
  );
};

// export default HomePage;

export default websitePageHOC(HomePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'SimpsTalk',
    },
  },
});

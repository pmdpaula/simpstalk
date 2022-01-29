import { Box, Icon, Image, Text } from '@skynexui/components';

import appConfig from '../../../config/config.json';

const MessageList = ({
  mensagens,
  username,
  deleteMessageById,
  setListaDeMensagens,
}) => (
  <Box
    tag="ul"
    styleSheet={{
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column-reverse',
      flex: 1,
      color: appConfig.theme.colors.neutrals['000'],
      marginBottom: '16px',
      backgroundColor: appConfig.theme.colors.neutrals['800'],
      padding: '.4rem',
      borderRadius: '5px',
    }}
  >
    {mensagens.map((mensagem) => (
      <Box
        key={mensagem.id}
        styleSheet={{
          display: 'flex',
          justifyContent: 'space-between',
          borderRadius: '5px',
          padding: '.3em',
          marginBottom: '.3em',
          hover: {
            backgroundColor: appConfig.theme.colors.primary[700],
          },
        }}
      >
        <Text tag="li" styleSheet={{}}>
          <Box
            styleSheet={{
              marginBottom: '0.1em',
            }}
          >
            <Image
              styleSheet={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: '8px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text tag="strong">{mensagem.de}</Text>
            <Text
              styleSheet={{
                fontSize: '10px',
                marginLeft: '8px',
                color: appConfig.theme.colors.neutrals[400],
              }}
              tag="span"
            >
              {mensagem.data}
            </Text>
          </Box>
          <Box
            styleSheet={{
              marginBottom: '0.1em',
            }}
          />
          {mensagem.texto}
        </Text>
        <Box
          tag="div"
          styleSheet={{
            opacity: '.2',
          }}
          onClick={() => {
            const novaListaDemensagens = deleteMessageById(
              mensagens,
              mensagem.id,
            );
            setListaDeMensagens(novaListaDemensagens);
          }}
          // onClick={setListaDeMensagens(
          //   deleteMessageById(mensagens, mensagem.id),
          // )}
        >
          <Icon name="FaEraser" />
        </Box>
      </Box>
    ))}
  </Box>
);

export default MessageList;

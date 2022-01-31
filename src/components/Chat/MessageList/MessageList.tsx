import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Image as ImageSkynex } from '@skynexui/components';

import { ThemeProps } from '../../../theme/themeLight';
// eslint-disable-next-line import/no-unresolved
import { MessageProps } from './message';

interface MessageListProps {
  mensagens: MessageProps[];
  username: any;
  deleteMessageById: any;
}

const MessageList = ({
  mensagens,
  username,
  deleteMessageById,
}: MessageListProps) => {
  const theme = useTheme<ThemeProps>(); // useTheme from MUI

  return (
    <Box
      // component="ul"
      sx={{
        position: 'relative',
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        // height: '100%',
        // color: theme.palette.gradient.primary.main,
        marginBottom: '16px',
        backgroundColor: theme.palette.gradient.primary.main,
        padding: '.4rem',
        borderRadius: '5px',
      }}
    >
      {mensagens.map((mensagem: MessageProps) => (
        <Box
          key={mensagem.id}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: '5px',
            padding: '.3em',
            marginBottom: '.3em',
            '&:hover': {
              backgroundColor: theme.palette.tertiary.main,
            },
          }}
        >
          <Box component="li" sx={{ listStyleType: 'none' }}>
            <Box
              sx={{
                marginBottom: '0.1em',
              }}
            >
              <ImageSkynex
                styleSheet={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '8px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Typography component="strong">{mensagem.from}</Typography>
              <Typography
                sx={{
                  fontSize: '10px',
                  marginLeft: '8px',
                  color: theme.palette.gradient.neutrals[400],
                }}
                component="span"
              >
                {mensagem.created_at}
              </Typography>
            </Box>
            <Box
              sx={{
                marginBottom: '0.1em',
              }}
            />
            {mensagem.msg_text}
          </Box>
          <Box
            component="div"
            sx={{
              opacity: '.2',
            }}
            // eslint-disable-next-line react/jsx-no-bind
            onClick={() => {
              deleteMessageById(mensagem.id);
            }}
          >
            <HighlightOffSharpIcon color="action" sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default MessageList;

// ${new Date().toLocaleDateString('pt-BR', {
//   year: 'numeric',
//   month: 'short',
//   day: 'numeric',
// })} ${new Date().toLocaleTimeString('pt-BR')}

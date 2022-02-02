import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Image as ImageSkynex } from '@skynexui/components';
import { useContext } from 'react';

import { ThemeProps } from '../../../theme/themeLight';
import LoadingDonut from '../../LoadingDonut/LoadingDonut';
import { WebsitePageContext } from '../../wrappers/WebsitePage/context/index';
// eslint-disable-next-line import/no-unresolved
import { MessageProps } from './message';

interface MessageListProps {
  mensagens: MessageProps[];
  // username: any;
  deleteMessageById: any;
  isLoadingMessages: boolean;
}

const MessageList = ({
  mensagens,
  // username,
  deleteMessageById,
  isLoadingMessages,
}: MessageListProps) => {
  const theme = useTheme<ThemeProps>(); // useTheme from MUI
  const websitePageContext = useContext(WebsitePageContext);

  return (
    <Box
      // component="ul"
      sx={{
        position: 'relative',
        overflowY: 'scroll',
        flexWrap: 'wrap',
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
      {isLoadingMessages && <LoadingDonut />}

      {/* eslint-disable-next-line prettier/prettier */}
      {!isLoadingMessages && mensagens.map((mensagem: MessageProps) => {
          const createdAt = new Date(mensagem.created_at);
          // console.log(mensagem.msg_text);

          return (
            // eslint-disable-next-line react/jsx-indent
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
                    src={`https://github.com/${mensagem.from}.png`}
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
                    {`${createdAt.toLocaleDateString('pt-BR', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })} ${createdAt.toLocaleTimeString('pt-BR')}`}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginBottom: '0.1em',
                  }}
                />
                {mensagem.msg_text.startsWith(':sticker:') ? (
                  <ImageSkynex
                    src={mensagem.msg_text.replace(':sticker:', '')}
                    styleSheet={{ maxWidth: '160px' }}
                  />
                ) : (
                  mensagem.msg_text
                )}
                {/* {mensagem.msg_text} */}
              </Box>
              <Tooltip
                title="Apagar mensagem"
                placement="left-start"
                arrow
                leaveDelay={200}
              >
                <Box
                  component="div"
                  sx={{
                    opacity: '.2',
                  }}
                  // eslint-disable-next-line react/jsx-no-bind
                  onClick={() => {
                    deleteMessageById(mensagem.id);
                    websitePageContext.messageIdToDelete = mensagem.id;
                  }}
                >
                  <HighlightOffSharpIcon color="action" sx={{ fontSize: 14 }} />
                </Box>
              </Tooltip>
            </Box>
          );
        })}
    </Box>
  );
};

export default MessageList;

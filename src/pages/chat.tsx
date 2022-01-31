import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import supabaseClient from '../api/supbaseClient';
import ChatHeader from '../components/Chat/ChatHeader/ChatHeader';
// eslint-disable-next-line import/no-unresolved
import { MessageProps } from '../components/Chat/MessageList/message';
import MessageList from '../components/Chat/MessageList/MessageList';
import PageSquare from '../components/commons/PageSquare/PageSquare';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc';
import { ThemeProps } from '../theme/themeLight';

const ChatPage = () => {
  const [mensagem, setMensagem] = useState<string>('');
  // eslint-disable-next-line prettier/prettier
  const [listaDeMensagens, setListaDeMensagens] = useState<MessageProps[]>([]);

  const router = useRouter();
  const { username } = router.query;

  const theme = useTheme<ThemeProps>(); // useTheme from MUI

  async function fetchMessages() {
    const { data } = await supabaseClient
      .from<MessageProps>('messages')
      .select('*')
      .order('id', { ascending: false });

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setListaDeMensagens(data!);
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  function handleNovaMensagem(novaMensagem: string) {
    // eslint-disable-next-line no-shadow
    const mensagem = {
      from: username,
      msg_text: novaMensagem,
    };

    supabaseClient
      .from<MessageProps>('messages')
      .insert([
        // tem que ser um objeto com os MESMOS CAMPOS que vc escreveu no supbase
        mensagem,
      ])
      .then(({ data, error }) => {
        if (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        setListaDeMensagens([data![0], ...listaDeMensagens]);
      });
    setMensagem('');
  }

  // async function deleteMessageById(id: number) {
  // eslint-disable-next-line consistent-return
  async function deleteMessageById(id: number) {
    // eslint-disable-next-line no-unused-vars
    const { data, error } = await supabaseClient
      .from<MessageProps>('messages')
      .delete()
      .match({ id });

    if (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return null;
    }

    fetchMessages();
  }

  return (
    <PageSquare chat>
      <ChatHeader />
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          width: { xs: '100%', md: '80%' },
          backgroundColor: theme.palette.gradient.primary[600],
          borderRadius: '5px',
          padding: '.5rem',
        }}
      >
        {/* <Box
          styleSheet={{
            position: 'absolute',
            right: '2rem',
            marginTop: '.4rem',
            // top: '-.5rem',
            zIndex: '1',
            pointerEvents: 'none',
          }}
        >
          <Image src="/bart_spray_left.svg" height={110} width={110} />
        </Box> */}
        <MessageList
          mensagens={listaDeMensagens}
          username={username}
          deleteMessageById={deleteMessageById}
          // setListaDeMensagens={setListaDeMensagens}
        />

        {/* Formulário de entrada */}
        <Box
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TextField
            value={mensagem}
            autoFocus
            // size="small"
            // eslint-disable-next-line react/jsx-no-bind
            onChange={(event) => {
              setMensagem(event.target.value);
            }}
            // eslint-disable-next-line react/jsx-no-bind
            onKeyPress={(event) => {
              // console.log(event);
              if (event.key === 'Enter') {
                event.preventDefault();
                handleNovaMensagem(mensagem);
              }
            }}
            placeholder="Insira sua mensagem aqui"
            // type="text"
            multiline
            fullWidth
            // margin="dense"
            color="primary"
            sx={{
              // width: '100%',
              // height: '100%',
              // border: '0',
              // resize: 'none',
              // borderRadius: '5px',
              // padding: '6px 8px',
              // backgroundColor: theme.palette.gradient.primary[900],
              marginRight: '.4rem',
              // color: theme.palette.gradient.neutrals[200],
            }}
          />
          <IconButton
            // eslint-disable-next-line react/jsx-no-bind
            onClick={(event: any) => {
              event.preventDefault();
              handleNovaMensagem(mensagem);
            }}
            color="success"
            size="large"
            aria-label="Enviar"
          >
            <SendIcon />
          </IconButton>
          {/* <ImageButton
            // eslint-disable-next-line react/jsx-no-bind
            onClick={(event: any) => {
              event.preventDefault();
              handleNovaMensagem(mensagem);
            }}
            url="/donut_simpsons.svg"
            width={40}
            title="Enviar"
          /> */}
          {/* <Button
            // eslint-disable-next-line react/jsx-no-bind
            onClick={(event) => {
              event.preventDefault();
              handleNovaMensagem(mensagem);
            }}
            variant="text"
            sx={{
              top: '-4px',
              height: '90%',
              border: '0',
              padding: '6px',
            }}
          /> */}
          {/* Formulário de entrada */}
        </Box>
      </Box>
    </PageSquare>
  );
};

export default websitePageHOC(ChatPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Chat',
    },
  },
});

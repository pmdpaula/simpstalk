import { Box, Button, TextField } from '@skynexui/components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import ChatHeader from '../src/components/Chat/ChatHeader/ChatHeader';
import MessageList from '../src/components/Chat/MessageList/MessageList';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import appConfig from '../src/config/config.json';

const ChatPage = () => {
  const [mensagem, setMensagem] = useState('');
  const [listaDeMensagens, setListaDeMensagens] = useState([]);
  const [counter, setCounter] = useState(0);

  const router = useRouter();
  const { username } = router.query;
  /*
    * Usuário
    - Usuário digita no campo textarea
    - Aperta ENTER para enviar
    - Tem que adicionar o texto na listagem

    * Dev
    - [x] Campo Criado
    - [x] Vamos usar o onChange e o useState (ter if para caso seja ENTER para limpar a variável)
    - [x] Lista de mensagens

    TODO
    * Desafios
    - [x] botão para enviar mensagem
    - [x] botão para apagar mensagem

    */
  function handleNovaMensagem(novaMensagem) {
    const msg = {
      id: counter,
      de: username,
      texto: novaMensagem,
      data: `${new Date().toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })} ${new Date().toLocaleTimeString('pt-BR')}`,
    };
    // TODO: chamado do backend
    setListaDeMensagens([msg, ...listaDeMensagens]);
    setMensagem('');
    setCounter(counter + 1);
  }

  function deleteMessageById(mensagens, id) {
    return mensagens.filter((msg) => msg.id !== id);
  }

  return (
    <Box
      styleSheet={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
        borderRadius: '5px',
        backgroundColor: appConfig.theme.colors.primary[700],
        height: '100%',
        maxWidth: '95%',
        maxHeight: '95vh',
        padding: '32px',
      }}
    >
      <ChatHeader />
      <Box
        styleSheet={{
          position: 'relative',
          display: 'flex',
          flex: 1,
          // top: '-3rem',
          height: '80%',
          backgroundColor: appConfig.theme.colors.primary[600],
          flexDirection: 'column',
          borderRadius: '5px',
          padding: '16px',
        }}
      >
        <Box
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
        </Box>
        <MessageList
          mensagens={listaDeMensagens}
          username={username}
          deleteMessageById={deleteMessageById}
          setListaDeMensagens={setListaDeMensagens}
        />

        {/* Formulário de entrada */}
        <Box
          as="form"
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TextField
            value={mensagem}
            autoFocus
            size="md"
            onChange={(event) => {
              setMensagem(event.target.value);
            }}
            onKeyPress={(event) => {
              // console.log(event);
              if (event.key === 'Enter' && event.ctrlKey) {
                // event.preventDefault();
                handleNovaMensagem(mensagem);
              }
            }}
            placeholder="Insira sua mensagem aqui..."
            type="textarea"
            styleSheet={{
              width: '100%',
              height: '100%',
              border: '0',
              resize: 'none',
              borderRadius: '5px',
              padding: '6px 8px',
              backgroundColor: appConfig.theme.colors.primary[900],
              marginRight: '.4rem',
              color: appConfig.theme.colors.neutrals[200],
            }}
          />
          <Button
            onClick={(event) => {
              event.preventDefault();
              handleNovaMensagem(mensagem);
            }}
            variant="secondary"
            buttonColors={{
              contrastColor: '#FFFFFF',
              mainColor: appConfig.theme.colors.primary[500],
              mainColorLight: appConfig.theme.colors.primary[200],
              mainColorStrong: appConfig.theme.colors.primary[700],
            }}
            label={<Image src="/donut_simpsons.svg" height={50} width={50} />}
            styleSheet={{
              top: '-4px',
              height: '90%',
              border: '0',
              padding: '6px',
            }}
          />
          {/* Formulário de entrada */}
        </Box>
      </Box>
    </Box>
  );
};

export default websitePageHOC(ChatPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Chat',
    },
  },
});

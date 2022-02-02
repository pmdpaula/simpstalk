import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import supabaseClient from '../src/api/supbaseClient';
import ChatHeader from '../src/components/Chat/ChatHeader/ChatHeader';
// eslint-disable-next-line import/no-unresolved
import { MessageProps } from '../src/components/Chat/MessageList/message';
import MessageList from '../src/components/Chat/MessageList/MessageList';
import PageSquare from '../src/components/commons/PageSquare/PageSquare';
import FormSendMessage from '../src/components/patterns/FormSendMessage/FormSendMessage';
// import { WebsitePageContext } from '../src/components/wrappers/WebsitePage/context/index';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import { ThemeProps } from '../src/theme/themeLight';

function escutaMensagensEmTempoReal(adicionaMensagem: any, deleteMessage: any) {
  return supabaseClient
    .from('messages')
    .on('INSERT', (respostaLive) => {
      adicionaMensagem(respostaLive.new);
    })
    .on('DELETE', (respostaLive) => {
      // console.log(respostaLive);
      deleteMessage(respostaLive.old.id);
    })
    .subscribe();
}

const ChatPage = () => {
  // const [mensagem, setMensagem] = useState<string>('');
  // eslint-disable-next-line prettier/prettier
  const [listaDeMensagens, setListaDeMensagens] = useState<MessageProps[]>([]);
  const [isLoadingMessages, setIsLoadingMessages] = useState<boolean>(true);
  // const { messageIdToDelete } = useContext();
  // const websitePageContext = useContext(WebsitePageContext);

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
    setTimeout(() => {
      setIsLoadingMessages(false);
    }, 1500);
  }

  useEffect(() => {
    fetchMessages();

    const subscription = escutaMensagensEmTempoReal(
      (novaMensagem: MessageProps) => {
        // Quero reusar um valor de referencia (objeto/array)
        // Passar uma função pro setState
        setListaDeMensagens((valorAtualDaLista) => [
          novaMensagem,
          ...valorAtualDaLista,
        ]);
      },
      () => {
        fetchMessages();
      },
    );

    return () => {
      subscription.unsubscribe();
    };
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
      // eslint-disable-next-line no-unused-vars
      .then(({ data, error }) => {
        if (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        // setListaDeMensagens([data![0], ...listaDeMensagens]);
      });

    // fetchMessages();
    // setMensagem('');
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
        <MessageList
          mensagens={listaDeMensagens}
          // username={username}
          deleteMessageById={deleteMessageById}
          isLoadingMessages={isLoadingMessages}
        />

        <FormSendMessage handleNovaMensagem={handleNovaMensagem} />
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

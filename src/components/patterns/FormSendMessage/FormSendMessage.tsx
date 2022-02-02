import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
// import { useTheme } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';
import { useState } from 'react';

import ButtonSendSticker from '../../ButtonSendSticker/ButtonSendSticker';

type FormSendMessageProps = {
  // mensagem: string;
  // eslint-disable-next-line no-unused-vars
  // setMensagem: (arg0: string) => void;
  // eslint-disable-next-line no-unused-vars
  handleNovaMensagem: (arg0: string) => void;
};

const FormSendMessage = ({
  // mensagem,
  // setMensagem,
  handleNovaMensagem,
}: FormSendMessageProps) => {
  const [mensagem, setMensagem] = useState<string>('');

  function handleMessage(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) {
    setMensagem(event.target.value);
  }

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-adornment-message">
          Escreva aqui sua mensagem
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-message"
          type="text"
          value={mensagem}
          // eslint-disable-next-line react/jsx-no-bind
          onChange={handleMessage}
          // onChange={(
          //   event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
          // ) => {
          //   setMensagem(event.target.value);
          // }}
          // eslint-disable-next-line react/jsx-no-bind
          onKeyPress={(event) => {
            // console.log(event);
            if (event.key === 'Enter') {
              event.preventDefault();
              handleNovaMensagem(mensagem);
              setMensagem('');
            }
          }}
          // eslint-disable-next-line prettier/prettier
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="Enviar"
                // eslint-disable-next-line react/jsx-no-bind
                onClick={(event: any) => {
                  event.preventDefault();
                  handleNovaMensagem(mensagem);
                  setMensagem('');
                }}
                edge="end"
              >
                <ReadMoreIcon />
              </IconButton>
            </InputAdornment>
            // eslint-disable-next-line prettier/prettier
          )}
          label="Messagem"
        />
      </FormControl>

      <ButtonSendSticker
        // eslint-disable-next-line react/jsx-no-bind
        onStickerClick={(sticker: string) => {
          // console.log(
          //   '[USANDO O COMPONENTE] Salva esse sticker no banco',
          //   sticker,
          // );
          handleNovaMensagem(`:sticker: ${sticker}`);
        }}
      />
      {/* <TextField
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
    </IconButton> */}
    </Box>
  );
};

export default FormSendMessage;

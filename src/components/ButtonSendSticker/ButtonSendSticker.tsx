// import { Box, Button, Image, Text } from '@skynexui/components';
import FlutterDashTwoToneIcon from '@mui/icons-material/FlutterDashTwoTone';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Image } from '@skynexui/components';
import { useState } from 'react';

import appConfig from '../../config/config.json';
import { ThemeProps } from '../../theme/themeLight';

type ButtonSendStickerProps = {
  onStickerClick: any;
};

const ButtonSendSticker = ({ onStickerClick }: ButtonSendStickerProps) => {
  const [isOpen, setOpenState] = useState<boolean>(false);
  const theme = useTheme<ThemeProps>(); // useTheme from MUI

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <IconButton
        aria-label="fingerprint"
        color="secondary"
        // eslint-disable-next-line react/jsx-no-bind
        onClick={() => setOpenState(!isOpen)}
      >
        <FlutterDashTwoToneIcon />
      </IconButton>
      {isOpen && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '5px',
            position: 'absolute',
            backgroundColor: theme.palette.gradient.neutrals[800],
            width: {
              xs: '200px',
              sm: '290px',
            },
            height: '300px',
            right: '30px',
            bottom: '30px',
            padding: '16px',
            boxShadow:
              'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px',
          }}
          // eslint-disable-next-line react/jsx-no-bind
          onClick={() => setOpenState(false)}
        >
          <Typography
            sx={{
              color: theme.palette.gradient.neutrals['050'],
              fontWeight: 'bold',
            }}
          >
            Stickers
          </Typography>
          <Box
            component="ul"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              flex: 1,
              paddingTop: '16px',
              overflow: 'scroll',
              listStyleType: 'none',
            }}
          >
            {appConfig.stickers.map((sticker) => (
              <Box
                // eslint-disable-next-line react/jsx-no-bind
                onClick={() => {
                  // console.log(
                  //   '[DENTRO DO COMPONENTE] Clicou no sticker:',
                  //   sticker,
                  // );
                  // eslint-disable-next-line react/destructuring-assignment
                  if (onStickerClick) {
                    // eslint-disable-next-line react/destructuring-assignment
                    onStickerClick(sticker);
                  }
                }}
                component="li"
                key={sticker}
                sx={{
                  width: '50%',
                  borderRadius: '5px',
                  padding: '10px',
                  focus: {
                    backgroundColor: theme.palette.gradient.neutrals[600],
                  },
                  hover: {
                    backgroundColor: theme.palette.gradient.neutrals[600],
                  },
                }}
              >
                <Image src={sticker} />
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ButtonSendSticker;

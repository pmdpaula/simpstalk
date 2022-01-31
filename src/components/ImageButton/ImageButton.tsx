import Box from '@mui/material/Box';
import { Image as ImageSkynex } from '@skynexui/components';

interface ImageButtonProps {
  width?: number;
  url: string;
}

const ImageButton = ({ width, url }: ImageButtonProps): JSX.Element => (
  <Box
    component="span"
    // focusRipple
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      backgroundColor: 'transparent',
      padding: '2px',
      hover: {
        opacity: 0,
      },
    }}
    style={{
      width,
    }}
  >
    <ImageSkynex src={url} />
  </Box>
);

export default ImageButton;

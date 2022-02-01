import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Lottie from 'react-lottie';

import dohNut from '../../lotties/doh-nut.json';

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: dohNut,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const LoadingDonut = () => (
  <Stack
    spacing={2}
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
    <Lottie options={lottieOptions} height={150} width={150} />
    <Typography sx={{ top: '-5px' }}>Lendo mensagens</Typography>
  </Stack>
);

export default LoadingDonut;

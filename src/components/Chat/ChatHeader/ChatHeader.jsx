import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const ChatHeader = () => (
  <Box sx={{ width: { xs: '100%', md: '80%' }, mb: 2 }}>
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Chat
        </Typography>
        <Button color="secondary" variant="outlined">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default ChatHeader;

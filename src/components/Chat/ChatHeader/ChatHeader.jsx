import { Box, Button, Text } from '@skynexui/components';

const ChatHeader = () => (
  <Box
    styleSheet={{
      width: '100%',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <Text variant="heading5">Chat</Text>
    <Button variant="primary" colorVariant="negative" label="Logout" href="/" />
  </Box>
);

export default ChatHeader;

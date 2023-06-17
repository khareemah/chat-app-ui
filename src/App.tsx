import { Flex, useDisclosure, Box } from '@chakra-ui/react';
import Nav from './components/Nav';
import ChatHistory from './components/ChatHistory/Index';
import Chat from './components/Chat/Index';
import ChatFilesSidebar from './components/ChatFiles/Index';
import ChatHistoryDrawer from './components/ChatHistory/ChatHistoryDrawer';
import ChatFilesDrawer from './components/ChatFiles/ChatFilesDrawer';

function App() {
  const {
    isOpen: isChatHistoryOpen,
    onOpen: onChatHistoryOpen,
    onClose: onChatHistoryClose,
  } = useDisclosure();
  const {
    isOpen: isChatFilesOpen,
    onOpen: onChatFilesOpen,
    onClose: onChatFilesClose,
  } = useDisclosure();
  return (
    <>
      <Flex h='100vh'>
        <Nav />
        <Box
          maxW={{ base: 'xs', xl: 'sm' }}
          display={{ base: 'none', lg: 'flex' }}
        >
          <ChatHistory />
        </Box>
        <Chat
          onChatHistoryOpen={onChatHistoryOpen}
          onChatFilesOpen={onChatFilesOpen}
        />
        <Box
          maxW={{ base: 'xs', xl: 'sm' }}
          display={{ base: 'none', lg: 'flex' }}
        >
          <ChatFilesSidebar />
        </Box>
        <ChatHistoryDrawer
          isOpen={isChatHistoryOpen}
          onClose={onChatHistoryClose}
        />
        <ChatFilesDrawer isOpen={isChatFilesOpen} onClose={onChatFilesClose} />
      </Flex>
    </>
  );
}

export default App;

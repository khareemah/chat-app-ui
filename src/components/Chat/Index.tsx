import {
  HStack,
  Flex,
  Input,
  Stat,
  StatLabel,
  StatNumber,
  IconButton,
  Avatar,
  VStack,
} from '@chakra-ui/react';
import { IoSend, IoDocuments } from 'react-icons/io5';
import { HiChat } from 'react-icons/hi';

import ChatBubble from './ChatBubble';

const messages = [
  {
    message: 'Hey Travis! Would you like to go out for a coffee?',
    from: 'others',
    dateSent: '20:21',
  },
  {
    message: 'Sure! At 11:00 am?',
    from: 'me',
    dateSent: '20:22',
  },
  {
    message: "That's too early! How about at noon?",
    from: 'others',
    dateSent: '20:22',
  },
  {
    message: 'That sounds good as well. Where should we meet?',
    from: 'me',
    dateSent: '20:23',
  },
  {
    message: 'Meet me at the hardware store on 21 Duck Street.',
    from: 'others',
    dateSent: '20:23',
  },
  {
    message: "Sounds good. I'll bring my friend with me as well!",
    from: 'me',
    dateSent: '20:24',
  },
  {
    message: 'Which one? The developer or the designer?',
    from: 'others',
    dateSent: '20:24',
  },
  {
    message: 'The developer. You remember Tony, right?',
    from: 'me',
    dateSent: '20:24',
  },
  {
    message: "Yeah! Tony's a great guy!",
    from: 'others',
    dateSent: '20:25',
  },
  {
    message: 'Indeed he is! Alright, see you later 👋!',
    from: 'me',
    dateSent: '20:25',
  },
];

type Props = {
  onChatHistoryOpen: () => void;
  onChatFilesOpen: () => void;
};
const Index = ({ onChatHistoryOpen, onChatFilesOpen }: Props) => {
  return (
    <Flex
      as='main'
      h='full'
      flex={1}
      borderRightColor='grey.100'
      borderRightWidth={1}
      direction='column'
    >
      <HStack borderBottomColor='grey.100' borderBottomWidth={1} px={4} py={4}>
        <IconButton
          onClick={onChatHistoryOpen}
          display={{ base: 'inherit', lg: 'none' }}
          icon={<HiChat />}
          aria-label='Toggle Chat History Drawer'
        />
        <Input
          type='text'
          variant='filled'
          rounded='full'
          placeholder='Search for friends'
        />
        <IconButton
          onClick={onChatFilesOpen}
          display={{ base: 'inherit', lg: 'none' }}
          icon={<IoDocuments />}
          aria-label='Toggle Chat Files Drawer'
        />
      </HStack>
      <VStack alignItems='flex-start'>
        <Stat m={6}>
          <StatLabel color='grey.500'>Chatting with</StatLabel>
          <StatNumber>Dina Harrison</StatNumber>
        </Stat>
      </VStack>
      <Flex w='full' h='full' direction='column' flex={1} overflowY='auto'>
        {messages.map(({ message, from, dateSent }, index) => {
          return (
            <ChatBubble
              message={message}
              key={index}
              from={from}
              dateSent={dateSent}
            />
          );
        })}
      </Flex>
      {/* input field */}
      <Flex
        pl={4}
        pr={2}
        py={2}
        borderTopColor='gray.200'
        borderTopWidth={1}
        alignItems='center'
        w='full'
      >
        <Avatar size='xs' src='https://bit.ly/dan-abramov'></Avatar>
        <Input variant='unstyled' placeholder='Type your message' ml={4} />
        <IconButton
          colorScheme='blue'
          aria-label='Send message'
          variant='ghost'
          icon={<IoSend />}
        />
      </Flex>
    </Flex>
  );
};

export default Index;

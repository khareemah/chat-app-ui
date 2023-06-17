import { VStack, Box, Text } from '@chakra-ui/react';
type Props = {
  message: string;
  dateSent: string;
  // from: 'me' | 'others';
  from: string;
};
const ChatBubble = ({ message, from, dateSent }: Props) => {
  const isMe = from === 'me';
  const alignment = isMe ? 'flex-start' : 'flex-end';
  const bottomRightRadius = isMe ? 0 : 32;
  const bottomLeftRadius = isMe ? 32 : 0;
  const bgColor = isMe ? 'blue.100' : 'gray.100';

  return (
    <VStack m={4} alignItems={alignment} alignSelf={alignment}>
      <Box
        bg={bgColor}
        px={6}
        py={4}
        maxW={80}
        borderTopLeftRadius={32}
        borderTopRightRadius={32}
        borderBottomLeftRadius={bottomLeftRadius}
        borderBottomRightRadius={bottomRightRadius}
      >
        {message}
      </Box>
      <Text color='gray' size='xs'>
        {dateSent}
      </Text>
    </VStack>
  );
};

export default ChatBubble;

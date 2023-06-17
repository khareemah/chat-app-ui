import { Avatar, Flex, VStack, Heading, Text } from '@chakra-ui/react';

type Props = {
  name: string;
  message: string;
};
const ChatRow = ({ name, message }: Props) => {
  return (
    <Flex
      py={4}
      px={8}
      w='full'
      alignItems='center'
      borderBottomColor='grey.100'
      borderBottomWidth={1}
      style={{ transition: 'background 300ms' }}
      _hover={{ bg: 'gray.200', cursor: 'pointer' }}
    >
      <Avatar size='sm'></Avatar>
      <VStack
        overflow='hidden'
        flex={1}
        ml={3}
        spacing={0}
        alignItems='flex-start'
      >
        <Heading fontSize={12} w='full'>
          {name}
        </Heading>
        <Text
          overflow='hidden'
          textOverflow='ellipsis'
          whiteSpace='nowrap'
          w='full'
          fontSize='xs'
          color='gray.500'
        >
          {message}
        </Text>
      </VStack>
      <Text ml={3} fontSize='xs' color='gray.500'>
        8:30
      </Text>
    </Flex>
  );
};

export default ChatRow;

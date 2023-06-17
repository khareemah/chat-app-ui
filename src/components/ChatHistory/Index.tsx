import {
  VStack,
  Flex,
  Avatar,
  AvatarBadge,
  Heading,
  HStack,
  IconButton,
  Box,
  Divider,
  Text,
  Input,
} from '@chakra-ui/react';

import { RiDribbbleLine, RiInstagramLine, RiTwitterFill } from 'react-icons/ri';
import UserAvatar from './UserAvatar';
import ChatRow from './ChatRow';

const ChatHistorySidebar = () => {
  const onlineFriends = [
    { name: 'shola', src: 'https://bit.ly/kent-c-dodds' },
    { name: 'lape', src: 'https://bit.ly/ryan-florence' },
    { name: 'kemi', src: 'https://bit.ly/prosper-baba' },
    { name: 'peju', src: 'https://bit.ly/code-beast' },
    { name: 'shola', src: 'https://bit.ly/sage-adebayo' },
    { name: 'lape', src: 'https://bit.ly/prosper-baba' },
    { name: 'kemi', src: 'https://bit.ly/ryan-florence' },
    { name: 'peju', src: 'https://bit.ly/code-beast' },
  ];

  const chatList = [
    { name: 'Prosper Otemuyiwa', message: 'Hey Man!! How are you doing' },
    { name: 'Prosper Otemuyiwa', message: 'Hey Man!! How are you doing' },
    { name: 'Prosper Otemuyiwa', message: 'Hey Man!! How are you doing' },
    { name: 'Prosper Otemuyiwa', message: 'Hey Man!! How are you doing' },
    { name: 'Prosper Otemuyiwa', message: 'Hey Man!! How are you doing' },
    { name: 'Prosper Otemuyiwa', message: 'Hey Man!! How are you doing' },
    { name: 'Prosper Otemuyiwa', message: 'Hey Man!! How are you doing' },
  ];
  return (
    <>
      <Flex
        as='aside'
        h='full'
        w='full'
        borderRightColor='grey.100'
        borderRightWidth={1}
        pt={8}
      >
        <VStack w='full' h='full' alignItems='center' spacing={6}>
          <Flex
            w='full'
            direction='column'
            alignItems='center'
            justifyContent='flex-start'
          >
            <Avatar
              size='2xl'
              name='Dan Abramov'
              src='https://bit.ly/dan-abramov'
              position='relative'
              bg='teal'
            >
              <AvatarBadge
                boxSize={8}
                bg='green.400'
                borderWidth={4}
                position='absolute'
                bottom='10px'
                right='10px'
              />
            </Avatar>
            <VStack>
              <Heading size='md' mt={{ base: 0, lg: 3 }}>
                Dan Abramov
              </Heading>
              <HStack justifyContent='center' px={8} spacing={3} mt={6}>
                <IconButton
                  icon={<RiDribbbleLine />}
                  variant='ghost'
                  rounded='full'
                  h={10}
                  color='grey.500'
                  aria-label='Dribble Account'
                />

                <IconButton
                  icon={<RiInstagramLine />}
                  variant='ghost'
                  rounded='full'
                  h={10}
                  color='grey.500'
                  aria-label='Instagram Account'
                />

                <IconButton
                  icon={<RiTwitterFill />}
                  variant='ghost'
                  rounded='full'
                  h={10}
                  color='grey.500'
                  aria-label='Twitter Account'
                />
              </HStack>
            </VStack>
          </Flex>
          <Box px={8} w='full'>
            <Divider color='grey.100' />
          </Box>
          <HStack px={8} w='full' justify='space-between'>
            <Heading size='xs'>Friends Online</Heading>
            <Text fontSize='sm' fontWeight='semibold' color='grey.500'>
              23
            </Text>
          </HStack>
          <HStack
            overflowX='auto'
            minH={24}
            px={8}
            w='full'
            justifyContent='flex-start'
            spacing={3}
          >
            {onlineFriends.map((friend, index) => {
              return (
                <UserAvatar name={friend.name} key={index} src={friend.src} />
              );
            })}
          </HStack>
          <Box px={8} w='full'>
            <Divider color='grey.100' />
          </Box>
          <Box w='full' px={8}>
            <Heading size='xs'>Chats</Heading>
            <Input
              variant='filled'
              type='text'
              rounded='full'
              mt={2}
              minH={10}
              placeholder='Search Chat'
            />
          </Box>
          <Box w='full' overflowY='auto'>
            <VStack as='ul' w='full' spacing={0} direction='row'>
              {chatList.map((item, index) => {
                return (
                  <ChatRow
                    key={index}
                    message={item.message}
                    name={item.name}
                  ></ChatRow>
                );
              })}
            </VStack>
          </Box>
        </VStack>
      </Flex>
    </>
  );
};

export default ChatHistorySidebar;

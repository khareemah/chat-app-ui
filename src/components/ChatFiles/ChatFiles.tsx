import {
  Flex,
  HStack,
  Text,
  IconButton,
  VStack,
  Avatar,
  AvatarBadge,
  Heading,
  Box,
  Divider,
  Button,
} from '@chakra-ui/react';
import { FaBell } from 'react-icons/fa';
import { RiDribbbleLine, RiInstagramLine, RiTwitterFill } from 'react-icons/ri';
import ChatFile from './ChatFile';
import ChatLink from './ChatLink';

const ChatFiles = () => {
  const chatFiles = [{}, {}, {}, {}, {}, {}];

  return (
    // flex container
    <Flex
      h='full'
      flexDirection='column'
      alignItems='space-between'
      w='full'
      pt={8}
    >
      {/* first section */}
      <Flex justifyContent='space-between' alignItems='center' px={8} mb={8}>
        <Text color='gray.500'>20 March 2021</Text>
        <IconButton
          rounded='full'
          color='gray.500'
          aria-label='Call Segun'
          size='md'
          icon={<FaBell />}
          variant='ghost'
        />
      </Flex>
      <Flex direction='column' alignItems='center'>
        <Avatar size='2xl' name='Dina Harrison' bg='teal' position='relative'>
          <AvatarBadge
            boxSize={8}
            borderWidth={4}
            bg='green.400'
            position='absolute'
            bottom='10px'
            right='10px'
          />
        </Avatar>
        <Heading size='md' mt={3}>
          Dina Harrison
        </Heading>
        <HStack>
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
        {/* end of first section */}

        {/* second section */}
        <Box px={8} w='full'>
          <Divider color='grey.100' />
        </Box>
      </Flex>
      <Flex>
        <HStack
          w='full'
          justifyContent='space-between'
          align-item='flex-end'
          px={8}
          py={4}
        >
          <Heading size='md'>Shared Files</Heading>
          <Button fontWeight='normal' variant='text' size='xs' color='blue'>
            see all
          </Button>
        </HStack>
      </Flex>
      <Flex w='full' overflowY='auto'>
        <VStack as='ul' w='full' spacing={0} direction='row'>
          {chatFiles.map((_, index) => {
            return <ChatFile key={index} />;
          })}
        </VStack>
        <Box px={8} w='full'>
          <Divider color='grey.100' />
        </Box>
      </Flex>

      <VStack>
        <HStack
          w='full'
          justifyContent='space-between'
          align-item='flex-end'
          px={8}
          py={4}
        >
          <Heading size='md'>Shared Links</Heading>
          <Button fontWeight='normal' variant='text' size='xs' color='blue'>
            see all
          </Button>
        </HStack>
        <ChatLink />
      </VStack>
    </Flex>
  );
};

export default ChatFiles;

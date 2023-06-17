import { VStack, Flex, IconButton, Tooltip } from '@chakra-ui/react';
import { MdDashboard, MdMail, MdSettings } from 'react-icons/md';
import { HiLightningBolt, HiTag, HiBell, HiSearch } from 'react-icons/hi';
import ChakraLogo from '../svg/ChakraLogo';

const Nav = () => {
  return (
    <Flex
      as='nav'
      height='full'
      maxW={16}
      width='full'
      bg='gray.100'
      justifyContent='space-between'
      direction='column'
    >
      <VStack>
        <Tooltip label='Logo' placement='right'>
          <IconButton
            color='gray.500'
            icon={<ChakraLogo />}
            aria-label='Dashboard'
            m={8}
          />
        </Tooltip>

        <Tooltip label='Dashboard' placement='right'>
          <IconButton
            color='gray.500'
            icon={<MdDashboard />}
            aria-label='Dashboard'
          />
        </Tooltip>

        <Tooltip label='Actions' placement='right'>
          <IconButton
            color='gray.500'
            icon={<HiLightningBolt />}
            aria-label='Actions'
          />
        </Tooltip>

        <Tooltip label='Mail' placement='right'>
          <IconButton color='gray.500' icon={<MdMail />} aria-label='Mail' />
        </Tooltip>

        <Tooltip label='Search' placement='right'>
          <IconButton
            color='gray.500'
            icon={<HiSearch />}
            aria-label='Search'
          />
        </Tooltip>

        <Tooltip label='Notifications' placement='right'>
          <IconButton
            color='gray.500'
            icon={<HiBell />}
            aria-label='Notifications'
          />
        </Tooltip>

        <Tooltip label='Tags' placement='right'>
          <IconButton color='gray.500' icon={<HiTag />} aria-label='Tags' />
        </Tooltip>
      </VStack>

      <VStack>
        <Tooltip label='Settings' placement='right'>
          <IconButton
            color='gray.500'
            icon={<MdSettings />}
            aria-label='Settings'
          />
        </Tooltip>
      </VStack>
    </Flex>
  );
};

export default Nav;

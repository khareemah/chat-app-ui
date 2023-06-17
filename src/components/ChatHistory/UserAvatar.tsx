import { Tooltip, Avatar, AvatarBadge } from '@chakra-ui/react';
type FreindProps = {
  name: string;
  src: string;
};
const UserAvatar = ({ name, src }: FreindProps) => {
  return (
    <Tooltip label={name}>
      <Avatar name={name} src={src}>
        <AvatarBadge boxSize={4} bg='green.500' />
      </Avatar>
    </Tooltip>
  );
};

export default UserAvatar;

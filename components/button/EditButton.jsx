import Link from 'next/link';
import { IconButton } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

export const EditButton = ({ id }) => {
  return (
    <Link href={`edittodo/${id}`}>
      <IconButton
        size={"sm"}
        colorScheme={"gray"}
        icon={<EditIcon />}
      />
    </Link>
  );
};

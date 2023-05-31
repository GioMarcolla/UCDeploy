import { Avatar, Box } from "@chakra-ui/react";
import React, { FC } from "react";

type Props = {};

const ProfileAvatar: FC<Props> = (props: Props) => {
  return (
    <Box>
      <Avatar name="Select Profile Name" src="/logo512.png" />
    </Box>
  );
};

export default ProfileAvatar;

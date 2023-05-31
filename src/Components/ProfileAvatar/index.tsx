import { Avatar, Box } from "@chakra-ui/react";
import React, { FC } from "react";

type Props = {};

const ProfileAvatar: FC<Props> = (props: Props) => {
  return (
    <Box>
      <Avatar name="Select Profile Name" src="https://picsum.photos/300/300" />
    </Box>
  );
};

export default ProfileAvatar;

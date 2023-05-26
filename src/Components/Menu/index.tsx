import React, { FC } from "react";
import MenuItem from "./MenuItem";
import { Button, Flex, Icon } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass as solidCompass,
  faComment as solidComment,
  faPlus as solidPlus,
  faAddressBook as solidAddressBook,
  faUser as solidUser,
} from "@fortawesome/free-solid-svg-icons";

import {
  faCompass as regularCompass,
  faComment as regularComment,
  faAddressBook as regularAddressBook,
  faUser as regularUser,
} from "@fortawesome/free-regular-svg-icons";

type Props = {};
const Menu: FC<Props> = ({}: Props) => {
  const currPath = useLocation().pathname.split("/")[1];
  const ExploreIcon = (
    <Icon
      as={FontAwesomeIcon}
      icon={currPath === "map" ? solidCompass : regularCompass}
      boxSize={"1.3rem"}
      color={currPath === "map" ? "green.UC" : "purple.UC"}
    />
  );
  const ChatsIcon = (
    <Icon
      as={FontAwesomeIcon}
      icon={currPath === "chats" ? solidComment : regularComment}
      boxSize={"1.3rem"}
      color={currPath === "chats" ? "green.UC" : "purple.UC"}
    />
  );
  const PlusIcon = (
    <Icon
      as={FontAwesomeIcon}
      icon={solidPlus}
      boxSize={"2.5rem"}
      borderRadius={"100%"}
      bg="green.UC"
      color="white.UC"
      p={"0.75rem"}
      boxShadow={"0 0 10px #000D"}
      marginTop={"calc(-1*(100% - 0.75rem))"}
    />
  );
  const ContactsIcon = (
    <Icon
      as={FontAwesomeIcon}
      icon={currPath === "contacts" ? solidAddressBook : regularAddressBook}
      boxSize={"1.3rem"}
      color={currPath === "contacts" ? "green.UC" : "purple.UC"}
    />
  );
  const ProfileIcon = (
    <Icon
      as={FontAwesomeIcon}
      icon={currPath === "profile" ? solidUser : regularUser}
      boxSize={"1.3rem"}
      color={currPath === "profile" ? "green.UC" : "purple.UC"}
    />
  );

  return (
    <Flex
      flexDir={"row"}
      justifyContent={"space-evenly"}
      w={"100%"}
      pos={"fixed"}
      bottom={"0"}
      borderTop={"2px var(--chakra-colors-black-light) solid"}
      paddingX={"0.75rem"}
      paddingTop={"0.75rem"}
      paddingBottom={"0.5rem"}
    >
      <MenuItem name="Explore" path="/map" icon={ExploreIcon} />
      <MenuItem name="Chats" path="/chats" icon={ChatsIcon} />

      <Button variant={"link"}>{PlusIcon}</Button>

      <MenuItem name="Contacts" path="/contacts" icon={ContactsIcon} />
      <MenuItem name="Profile" path="/profile" icon={ProfileIcon} />
    </Flex>
  );
};

export default Menu;

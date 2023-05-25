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
      boxSize={"2rem"}
      color={currPath === "map" ? "green.UC" : "purple.UC"}
    />
  );
  const ChatsIcon = (
    <Icon
      as={FontAwesomeIcon}
      icon={currPath === "chats" ? solidComment : regularComment}
      boxSize={"2rem"}
      color={currPath === "chats" ? "green.UC" : "purple.UC"}
    />
  );
  const PlusIcon = <Icon as={FontAwesomeIcon} icon={solidPlus} boxSize={"2rem"} />;
  const ContactsIcon = (
    <Icon
      as={FontAwesomeIcon}
      icon={currPath === "contacts" ? solidAddressBook : regularAddressBook}
      boxSize={"2rem"}
      color={currPath === "contacts" ? "green.UC" : "purple.UC"}
    />
  );
  const ProfileIcon = (
    <Icon
      as={FontAwesomeIcon}
      icon={currPath === "profile" ? solidUser : regularUser}
      boxSize={"2rem"}
      color={currPath === "profile" ? "green.UC" : "purple.UC"}
    />
  );

  return (
    <Flex flexDir={"row"} justifyContent={"space-evenly"} w={"100%"}>
      <MenuItem name="Explore" path="/map" icon={ExploreIcon} />
      <MenuItem name="Chats" path="/chats" icon={ChatsIcon} />

      <Button variant={"link"}>{PlusIcon}</Button>

      <MenuItem name="Contacts" path="/contacts" icon={ContactsIcon} />
      <MenuItem name="Profile" path="/profile" icon={ProfileIcon} />
    </Flex>
  );
};

export default Menu;

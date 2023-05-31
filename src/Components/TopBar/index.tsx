import React, { FC } from "react";
import { Avatar, Box, Flex, Icon, Text } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import Status from "../Status";

let TopBar: FC = () => {
    return (
        <Flex
            w={"100%"}
            // h={"3rem"}
            justifyContent={"space-between"}
            alignItems={"center"}
            p={"1rem 1.5rem"}
            borderBottom={"1px solid #CDCDCD"}
        >
            <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Box>
                    <Avatar
                        size='lg'
                        name='night_owl'
                        src='https://picsum.photos/id/65/200/200'></Avatar>
                </Box>
                <Box
                    p={"0 1rem"}
                >
                    <Text
                        variant={"soft"}
                        fontSize={"lg"}>
                        Night Owl
                    </Text>
                    <Flex>
                        <Status currStatus={"Signed_in"}></Status>
                        <Text
                            variant={"soft"}
                            fontSize={"15px"}
                            color={"purple.light"}
                            >
                            Signed-in at SCH
                        </Text>
                    </Flex>
                </Box>
            </Flex>
            <Box>
                <Icon
                    onClick={() => console.log("clicked")}
                    as={Search2Icon}
                    boxSize={"1.5rem"}
                    color={"black.UC"} />
            </Box>
        </Flex>)
};

export default TopBar;
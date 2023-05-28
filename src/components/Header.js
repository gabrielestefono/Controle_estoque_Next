import { Avatar, Flex, HStack,Icon, IconButton,Text, useBreakpointValue } from "@chakra-ui/react"
import React from "react";
import { useSidebarContext } from "@/contexts/SidebarContext";
import { fiMenu } from "react-icons/fi";

const Header = () =>{
    const isMobile = useBreakpointValue({
        base: true,
        lg: false
    })

    const {onOpen} = useSidebarContext();

    return(
        <Flex as="Header" w="100%" maxW={1120} h="20" mx="auto" px="2" py="2" align="center" boxShadow="0 1px 0 #ccc" color="gray.500" fontWeight="bold">
            {isMobile && (
                <IconButton icon={<Icon as="fiMenu"/>} onClick={onOpen} variant="unstyled" fontSize="20" mr="2"></IconButton>
            )}
            <Text>Logo</Text>
            <Flex ml="auto">
                <HStack>
                    <Text>Gabriel Estéfono</Text>
                    <Avatar size="md" name="Gabriel Estéfono"/>
                </HStack>
            </Flex>
        </Flex>
    )
}

export default Header;
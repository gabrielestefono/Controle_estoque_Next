import {Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue} from "@chakra-ui/react";
import React from "react";
import { useSidebarContext } from "@/contexts/SidebarContext";
import SidebarNav from "./SidebarNav";

const Sidebar = () => {
    return (
        <Box as="aside" w="64" mr="8">
            <SidebarNav/>
        </Box>
    );
};

export default Sidebar;
import React from "react";
import { Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const sidebarNav = ()=>{
    const { asPath } = useRouter();

    return (
    <Stack spacing="6">
        <Stack>
            <Text fontSize="xs" fontWeight="bold" color="gray.400">
                Cadastro
            </Text>
            <Stack>
                <ChakraLink _hover={{bg: "gray.100"}} px="4" py="2" borderRadius={5} bg={assPath === "/" ? "gray.200" : ""}>
                    <Link href="/">
                        <Text fontSize="md" fontWeight="medium" color="gray.500">
                            Produtos
                        </Text>
                    </Link>
                </ChakraLink>
            </Stack>
        </Stack>
        <Stack>
            <Text fontSize="xs" fontWeight="bold" color="gray.400">
                Estoque
            </Text>
            <Stack>
                <ChakraLink _hover={{bg: "gray.100"}} px="4" py="2" borderRadius={5} bg={assPath === "/" ? "gray.200" : ""}>
                    <Link href="/">
                        <Text fontSize="md" fontWeight="medium" color="gray.500">
                            Saldo
                        </Text>
                    </Link>
                </ChakraLink>
                <ChakraLink _hover={{bg: "gray.100"}} px="4" py="2" borderRadius={5} bg={assPath === "/" ? "gray.200" : ""}>
                    <Link href="/">
                        <Text fontSize="md" fontWeight="medium" color="gray.500">
                            Entradas
                        </Text>
                    </Link>
                </ChakraLink>
                <ChakraLink _hover={{bg: "gray.100"}} px="4" py="2" borderRadius={5} bg={assPath === "/" ? "gray.200" : ""}>
                    <Link href="/">
                        <Text fontSize="md" fontWeight="medium" color="gray.500">
                            Saídas
                        </Text>
                    </Link>
                </ChakraLink>
            </Stack>
        </Stack>
    </Stack>
    );
};

export default sidebarNav
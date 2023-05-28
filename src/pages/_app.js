import { SidebarProvider } from "@/contexts/SidebarContext";

const { ChakraProvider } = require("@chakra-ui/react");

function MyApp({Component, pageProps}){
    return(
        <ChakraProvider>
            <SidebarProvider>
                <Component {...pageProps}/>
            </SidebarProvider>
        </ChakraProvider>
    )
}

export default MyApp;
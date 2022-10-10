import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "../constant/theme";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<QueryClientProvider client={client}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</ChakraProvider>
	);
}

export default MyApp;

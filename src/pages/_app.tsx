import { ChakraProvider } from "@chakra-ui/react";
import type { AppPropsWithLayout } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "../constant/theme";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);
	return (
		<ChakraProvider theme={theme}>
			<QueryClientProvider client={client}>{getLayout(<Component {...pageProps} />)}</QueryClientProvider>
		</ChakraProvider>
	);
}

export default MyApp;

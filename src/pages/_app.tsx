import { ChakraProvider } from "@chakra-ui/react";
import type { AppPropsWithLayout } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "../constant/theme";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);
	return getLayout(
		<ChakraProvider theme={theme}>
			<QueryClientProvider client={client}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</ChakraProvider>
	);
}

export default MyApp;

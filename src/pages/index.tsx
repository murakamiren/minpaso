import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>みんパソ</title>
				<meta name="description" content="みんパソ" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box display="flex" justifyContent="center">
				<Text>hello world</Text>
			</Box>
		</div>
	);
};

export default Home;

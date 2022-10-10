import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar/navbar";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>みんパソ</title>
				<meta name="description" content="みんパソ" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<Box display="flex" justifyContent="center">
				<Text color="text.black">hello world</Text>
			</Box>
		</div>
	);
};

export default Home;

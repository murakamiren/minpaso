import { Box, Center, Heading, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer/footer";
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

			<main>
				<Box mt="28">
					<VStack justify="center">
						<Heading as="h2" fontSize="5xl" fontWeight="semibold" color="text.black">
							自慢のPCを共有、探索しよう
						</Heading>
						<Text color="text.black">自分の自作PCを共有し、みんなに見せよう。</Text>
						<Text color="text.black">みんなのPCを見て、参考にしたりインスピレーションを受けてみよう。</Text>
					</VStack>
					<Center mt={20}>
						<Text color="text.black">今すぐ探索しよう</Text>
					</Center>
				</Box>
			</main>

			<Footer />
		</div>
	);
};

export default Home;

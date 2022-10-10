import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import type { NextPageWithLayout } from "next";
import Head from "next/head";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Layout from "../layout/layout";

const Home: NextPageWithLayout = () => {
	return (
		<div>
			<Head>
				<title>みんパソ</title>
				<meta name="description" content="みんパソ" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Box mt="28">
					<VStack justify="center">
						<Heading as="h2" fontSize="5xl" fontWeight="semibold" color="text.black">
							自慢のPCを共有、探索しよう
						</Heading>
						<Text color="text.black">自分の自作PCを共有し、みんなに見せよう。</Text>
						<Text color="text.black">みんなのPCを見て、参考にしたりインスピレーションを受けてみよう。</Text>
					</VStack>
					<VStack mt={20} spacing={3}>
						<Text color="text.black" fontWeight="semibold">
							今すぐ探索しよう
						</Text>
						<ArrowDownIcon color="linkedin.600" w={7} h={7} />
					</VStack>
				</Box>
			</main>
		</div>
	);
};

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;

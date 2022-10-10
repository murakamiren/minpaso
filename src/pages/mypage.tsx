import { Box, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

const MyPage: NextPage = () => {
	return (
		<>
			<Navbar />
			<main>
				<Box>
					<Heading as="h2">マイページ</Heading>
				</Box>
			</main>
			<Footer />
		</>
	);
};

export default MyPage;

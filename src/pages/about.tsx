import { Box, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

const About: NextPage = () => {
	return (
		<>
			<Navbar />
			<main>
				<Box>
					<Heading as="h2">みんパソについて</Heading>
				</Box>
			</main>
			<Footer />
		</>
	);
};

export default About;

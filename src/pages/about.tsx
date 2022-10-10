import { Box, Heading } from "@chakra-ui/react";
import { NextPageWithLayout } from "next";
import Layout from "../layout/layout";

const About: NextPageWithLayout = () => {
	return (
		<>
			<main>
				<Box>
					<Heading as="h2">みんパソについて</Heading>
				</Box>
			</main>
		</>
	);
};

About.getLayout = (page) => <Layout>{page}</Layout>;

export default About;

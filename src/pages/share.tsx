import { Box, Heading } from "@chakra-ui/react";
import { NextPageWithLayout } from "next";
import ShareForm from "../components/shareForm/shareForm";

const Share: NextPageWithLayout = () => {
	return (
		<main>
			<Box px={20}>
				<Heading as="h2">共有する</Heading>
				<ShareForm />
			</Box>
		</main>
	);
};

export default Share;

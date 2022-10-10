import { Box, Heading } from "@chakra-ui/react";
import { NextPageWithLayout } from "next";
import Layout from "../layout/layout";

const MyPage: NextPageWithLayout = () => {
	return (
		<>
			<main>
				<Box>
					<Heading as="h2">マイページ</Heading>
				</Box>
			</main>
		</>
	);
};

MyPage.getLayout = (page) => <Layout>{page}</Layout>;

export default MyPage;

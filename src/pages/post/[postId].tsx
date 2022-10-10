import { Box, Heading } from "@chakra-ui/react";
import { NextPageWithLayout } from "next";
import Layout from "../../layout/layout";

const PostDetail: NextPageWithLayout = () => {
	return (
		<main>
			<Box>
				<Heading as="h2"></Heading>
			</Box>
		</main>
	);
};

PostDetail.getLayout = (page) => <Layout>{page}</Layout>;

export default PostDetail;

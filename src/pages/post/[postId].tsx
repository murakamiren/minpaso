import { Box, Heading } from "@chakra-ui/react";
import { NextPageWithLayout } from "next";
import Detail from "../../components/detail/detail";
import Layout from "../../layout/layout";

const PostDetail: NextPageWithLayout = () => {
	return (
		<main>
			<Box px={20}>
				<Heading as="h2"></Heading>
				<Detail />
			</Box>
		</main>
	);
};

PostDetail.getLayout = (page) => <Layout>{page}</Layout>;

export default PostDetail;

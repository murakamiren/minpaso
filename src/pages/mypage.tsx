import { Avatar, Box, Center, Heading, Spinner, VStack } from "@chakra-ui/react";
import { NextPageWithLayout } from "next";
import MyFavoriteGridMemo from "../components/cardGrid/myFavoriteGrid";
import MyPostGridMemo from "../components/cardGrid/myPostsGrid";
import MyPageTab from "../components/myPageTab/myPageTab";
import { useRedirect } from "../hook/useRedirect";
import { useUser } from "../hook/useUser";
import Layout from "../layout/layout";

const MyPage: NextPageWithLayout = () => {
	const { user } = useUser();

	const userPhoto = user?.photoURL as string;

	useRedirect(user);

	if (!user)
		return (
			<Center>
				<Spinner />
			</Center>
		);

	return (
		<main>
			<Box px="24" mt={20}>
				<VStack spacing={2}>
					<Avatar src={userPhoto} size="xl" />
					<Heading as="h2">{user.displayName}</Heading>
				</VStack>
				<Center mt={12}>
					<Heading as="h3" fontSize="2xl">
						投稿一覧
					</Heading>
				</Center>
				<Box mt={12}>
					<MyPageTab myPosts={<MyPostGridMemo user={user} />} favorite={<MyFavoriteGridMemo user={user} />} />
				</Box>
			</Box>
		</main>
	);
};

MyPage.getLayout = (page) => <Layout>{page}</Layout>;

export default MyPage;

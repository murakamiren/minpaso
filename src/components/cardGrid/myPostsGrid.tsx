import { Center, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { FC, memo } from "react";
import Card from "../card/card";
import { MyPostGridProps } from "./type";
import { useMyPosts } from "./useMyPosts";

const MyPostsGrid: FC<MyPostGridProps> = ({ user }) => {
	const { formattedMyPostsData, isLoading } = useMyPosts(user);

	if (isLoading)
		return (
			<Center>
				<Spinner />
			</Center>
		);

	return (
		<Grid gridTemplateColumns="repeat(auto-fit, minmax(min(480px, 100%), 1fr))" gap={16}>
			{formattedMyPostsData?.map((post) => (
				<GridItem key={post.id}>
					<Card src={post.firstImage} userName={post.author} postId={post.id} title={post.title} />
				</GridItem>
			))}
		</Grid>
	);
};

const MyPostGridMemo = memo(MyPostsGrid);

export default MyPostGridMemo;

import { Center, Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
import Card from "../card/card";
import { MyFavoriteGridProps } from "./type";
import { useMyFavoritePosts } from "./useMyFavorite";

const MyFavoriteGrid: FC<MyFavoriteGridProps> = ({ user }) => {
	const { formattedPostsData } = useMyFavoritePosts(user);

	if (!formattedPostsData)
		return (
			<Center>
				<Spinner />
			</Center>
		);

	if (formattedPostsData?.length === 0)
		return (
			<Center>
				<Text>まだいいねしていません！</Text>
			</Center>
		);

	return (
		<Grid gridTemplateColumns="repeat(auto-fit, minmax(min(440px, 100%), 1fr))" gap={8} justifyItems="center">
			{formattedPostsData.map((post) => (
				<GridItem key={post.id}>
					<Card
						src={post.firstImage}
						userName={post.author}
						postId={post.id}
						title={post.title}
						isFavorite={post.isFavorite}
					/>
				</GridItem>
			))}
		</Grid>
	);
};

const MyFavoriteGridMemo = memo(MyFavoriteGrid);

export default MyFavoriteGridMemo;

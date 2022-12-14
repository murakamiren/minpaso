import { Center, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { FC, memo } from "react";
import Card from "../card/card";
import { useCardGrid } from "./useCardGrid";

const CardGrid: FC = () => {
	const { formattedPostsData } = useCardGrid();

	if (!formattedPostsData)
		return (
			<Center>
				<Spinner />
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

const CardGridMemo = memo(CardGrid);

export default CardGridMemo;

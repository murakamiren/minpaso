import { Grid, GridItem } from "@chakra-ui/react";
import { FC, memo } from "react";
import Card from "../card/card";

const CardGrid: FC = () => {
	return (
		<Grid>
			<GridItem>
				<Card src="https://placehold.jp/300x300.png" userName="test" postId="1" />
			</GridItem>
		</Grid>
	);
};

const CardGridMemo = memo(CardGrid);

export default CardGridMemo;

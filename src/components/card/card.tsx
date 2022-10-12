import { Box, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import { CardProps } from "./type";
import { useCard } from "./useCard";

const Card: FC<CardProps> = ({ src, userName, title, postId }) => {
	const { scale, filter, isHover, clickToPassQueryId } = useCard();
	return (
		<Box
			w="full"
			h="full"
			maxH="400px"
			onMouseOver={() => isHover(true)}
			onMouseOut={() => isHover(false)}
			cursor="pointer"
			overflow="hidden"
			pos="relative"
			onClick={() => clickToPassQueryId(postId)}
		>
			<Image
				src={src}
				alt="pc image"
				w="full"
				h="full"
				objectFit="cover"
				objectPosition="center"
				transition="ease-out 0.3s"
				transform={`scale(${scale})`}
				filter={filter}
			/>
			<Text pos="absolute" bottom={4} left={4} zIndex={10} color="red">
				{userName}
			</Text>
			<Text pos="absolute" bottom={4} right={4} zIndex={10} color="red">
				{title}
			</Text>
		</Box>
	);
};

export default Card;

import { Box, Image, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import { CardProps } from "./type";
import { useCard } from "./useCard";

const Card: FC<CardProps> = ({ src, userName, title, postId }) => {
	const { scale, filter, isHover } = useCard();
	return (
		<NextLink href={`/${postId}`} passHref>
			<a>
				<Box
					w="full"
					height="full"
					onMouseOver={() => isHover(true)}
					onMouseOut={() => isHover(false)}
					cursor="pointer"
					overflow="hidden"
					pos="relative"
				>
					<Image
						src={src}
						alt="pc image"
						w="full"
						objectFit="cover"
						transition="ease-out 0.3s"
						transform={`scale(${scale})`}
						filter={filter}
					/>
					<Text pos="absolute" bottom={2} left={2} zIndex={10}>
						{userName}
					</Text>
					<Text pos="absolute" bottom={2} right={2} zIndex={10}>
						{title}
					</Text>
				</Box>
			</a>
		</NextLink>
	);
};

export default Card;

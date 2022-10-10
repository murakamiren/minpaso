import { Box, Image, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import { CardProps } from "./type";
import { useCard } from "./useCard";

const Card: FC<CardProps> = ({ src, userName, postId }) => {
	const { scale, filter, isHover } = useCard();
	return (
		<NextLink href={`/${postId}`} passHref>
			<a>
				<Box w="full" height="full">
					<Image
						src={src}
						alt="pc image"
						w="full"
						objectFit="cover"
						transition="ease-out"
						scale={scale}
						filter={filter}
						onMouseOver={() => isHover(true)}
						onMouseOut={() => isHover(false)}
					/>
					<Text>{userName}</Text>
				</Box>
			</a>
		</NextLink>
	);
};

export default Card;

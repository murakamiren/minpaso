import { Box, Image, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import { CardProps } from "./type";

const Card: FC<CardProps> = ({ src, userName, postId }) => {
	return (
		<NextLink href={`/${postId}`} passHref>
			<a>
				<Box>
					<Image src={src} alt="pc image" />
					<Text>{userName}</Text>
				</Box>
			</a>
		</NextLink>
	);
};

export default Card;

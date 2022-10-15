import { Box, Icon, IconButton, Image, SlideFade, Text } from "@chakra-ui/react";
import { BsHeartFill, BsShareFill } from "react-icons/bs";
import { FC, useState } from "react";
import { CardProps } from "./type";
import { useCard } from "./useCard";

const Card: FC<CardProps> = ({ src, userName, title, postId }) => {
	const [favoriteHover, setFavoriteHover] = useState(false);
	const [shareHover, setShareHover] = useState(false);
	const { scale, filter, clickToPassQueryId, isOpen, setIsHover } = useCard();
	return (
		<Box
			w="full"
			h="full"
			maxH="400px"
			onMouseOver={() => setIsHover(true)}
			onMouseOut={() => setIsHover(false)}
			cursor="pointer"
			overflow="hidden"
			pos="relative"
			onClick={() => clickToPassQueryId(postId)}
		>
			<SlideFade
				in={isOpen}
				offsetY="-18px"
				style={{
					display: "flex",
					flexDirection: "row-reverse",
					position: "absolute",
					top: 16,
					zIndex: 10,
					width: "100%",
					paddingRight: 16,
				}}
			>
				<Icon
					as={BsHeartFill}
					color={favoriteHover ? "red.500" : "whiteAlpha.900"}
					w={5}
					h={5}
					onMouseOver={() => setFavoriteHover(true)}
					onMouseOut={() => setFavoriteHover(false)}
				/>
				<Icon
					as={BsShareFill}
					color={shareHover ? "linkedin.600" : "whiteAlpha.900"}
					marginRight={4}
					w={5}
					h={5}
					onMouseOver={() => setShareHover(true)}
					onMouseOut={() => setShareHover(false)}
				/>
			</SlideFade>
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
			<SlideFade in={isOpen} offsetY="18px">
				<Text pos="absolute" bottom={4} left={4} zIndex={10} color="whiteAlpha.900" fontWeight="bold">
					{title}
				</Text>
				<Text pos="absolute" bottom={4} right={4} zIndex={10} color="whiteAlpha.900" fontWeight="bold">
					{userName}
				</Text>
			</SlideFade>
		</Box>
	);
};

export default Card;

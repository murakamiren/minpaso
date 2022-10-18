import { Box, Icon, Image, SlideFade, Text } from "@chakra-ui/react";
import { BsHeartFill, BsTwitter } from "react-icons/bs";
import { FC, useState } from "react";
import { CardProps } from "./type";
import { useCard } from "./useCard";
import { useAddFavorite } from "../../hook/useAddFavorite";
import { TwitterShareButton } from "react-share";
import { useRouter } from "next/router";
import { getOriginPath } from "../../util/getPath";

const Card: FC<CardProps> = ({ src, userName, title, postId, isFavorite }) => {
	const router = useRouter();
	const originURL = getOriginPath();
	const [favoriteHover, setFavoriteHover] = useState(false);
	const [shareHover, setShareHover] = useState(false);
	const [endLoad, setEndLoad] = useState(false);
	const { scale, filter, clickToPassQueryId, isOpen, setIsHover } = useCard();
	const { addFavorite } = useAddFavorite(postId, isFavorite);

	const url = `${originURL}${router.asPath}`;

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
			visibility={endLoad ? "visible" : "collapse"}
			opacity={endLoad ? "1" : "0"}
			transition="opacity 500ms ease-out"
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
					color={favoriteHover || isFavorite ? "red.500" : "whiteAlpha.900"}
					w={5}
					h={5}
					onMouseOver={() => setFavoriteHover(true)}
					onMouseOut={() => setFavoriteHover(false)}
					onClick={() => addFavorite()}
				/>
				<TwitterShareButton style={{ marginRight: 4 }} url={url} title={`みんぱそ：${title}`} hashtags={["みんぱそ"]}>
					<Icon
						as={BsTwitter}
						marginRight={4}
						w={5}
						h={5}
						color={shareHover ? "linkedin.600" : "whiteAlpha.900"}
						onMouseOver={() => setShareHover(true)}
						onMouseOut={() => setShareHover(false)}
					/>
				</TwitterShareButton>
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
				onClick={() => clickToPassQueryId(postId)}
				onLoad={() => setEndLoad(true)}
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

import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Spec } from "../../types/post";
import { useDetail } from "./useDetail";

const Detail = () => {
	const router = useRouter();
	const { postData, user, isLoading, onClickToDeleteMyPost, isLoadingStart } = useDetail();

	if (!postData)
		return (
			<Center>
				<Spinner />
			</Center>
		);

	return (
		<Box>
			<ArrowBackIcon onClick={() => router.back()} cursor="pointer" w={8} h={8} />
			<Heading as="h2">{postData?.title}</Heading>
			{postData?.image.map((img, i) => (
				<Box key={i} w="200px">
					<Image src={img.src} alt="pc" w="full" h="full" />
				</Box>
			))}
			<Box>
				<Heading as="h3">投稿者</Heading>
				<Text>{postData?.author}</Text>
			</Box>
			<Box>
				<Heading as="h3">こだわりポイント</Heading>
				<Text>{postData?.point}</Text>
			</Box>
			<Box>
				<Heading as="h3">パーツ</Heading>
				{Object.keys(postData.spec).map((part) => {
					const key = part as keyof Spec;
					return (
						<Text key={part}>
							{part}: {postData.spec[key]}
						</Text>
					);
				})}
			</Box>
			{user?.uid === postData.authorId && (
				<Button
					colorScheme="red"
					isLoading={isLoading || isLoadingStart}
					onClick={() => onClickToDeleteMyPost(postData.image)}
				>
					削除する
				</Button>
			)}
		</Box>
	);
};

export default Detail;

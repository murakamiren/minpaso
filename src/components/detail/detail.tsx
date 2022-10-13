import { Box, Button, Center, Image, Spinner, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Spec } from "../../types/post";
import { useDetail } from "./useDetail";

const Detail: FC = () => {
	const { postData, user, isLoading, onClickToDeleteMyPost, isLoadingStart } = useDetail();

	if (!postData)
		return (
			<Center>
				<Spinner />
			</Center>
		);

	console.log(postData);

	return (
		<Box>
			{postData?.image.map((img, i) => (
				<Box key={i} w="200px">
					<Image src={img.src} alt="pc" w="full" h="full" />
				</Box>
			))}
			<Text>{postData?.title}</Text>
			<Text>{postData?.author}</Text>
			<Text>{postData?.point}</Text>
			{Object.keys(postData.spec).map((part) => {
				const key = part as keyof Spec;
				return (
					<Text key={part}>
						{part}: {postData.spec[key]}
					</Text>
				);
			})}
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

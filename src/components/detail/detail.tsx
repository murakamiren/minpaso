import { Box, Center, Image, Spinner, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Spec } from "../../types/post";
import { useDetail } from "./useDetail";

const Detail: FC = () => {
	const { postData } = useDetail();

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
					<Image src={img} alt="pc" w="full" h="full" />
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
		</Box>
	);
};

export default Detail;

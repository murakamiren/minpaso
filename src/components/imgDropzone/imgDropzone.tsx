import { Box, Button, chakra, Image, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { useImgDropzone } from "./useImgDropzone";

const ImgDropzone: FC = () => {
	const { getRootProps, getInputProps, isDragActive, open, file } = useImgDropzone();

	return (
		<>
			<Box
				{...getRootProps()}
				w="xs"
				h="xs"
				display="flex"
				justifyContent="center"
				alignItems="center"
				p={4}
				bgColor="blackAlpha.50"
			>
				<chakra.input {...getInputProps()} />
				<VStack spacing={4}>
					<Text color="blackAlpha.500" align="center">
						{isDragActive
							? "画像ファイルをここにドラッグ"
							: "画像ファイルをここにドラッグ又はクリックでファイルを選択する"}
					</Text>
					<Button colorScheme="linkedin" onClick={() => open()}>
						ファイルを選択
					</Button>
				</VStack>
			</Box>
			<Box>
				{file.map((img) => (
					<Box key={img.name} w="80px" h="80px">
						<Image src={img.preview} alt={img.name} objectFit="contain" />
					</Box>
				))}
			</Box>
		</>
	);
};

export default ImgDropzone;

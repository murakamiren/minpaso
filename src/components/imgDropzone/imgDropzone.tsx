import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { ImgDropzoneProps } from "./type";
import { useImgDropzone } from "./useImgDropzone";

const ImgDropzone: FC<ImgDropzoneProps> = ({ setValue }) => {
	const { getRootProps, getInputProps, isDragActive, open, file, fileRejections, isDragReject } = useImgDropzone({
		setValue,
	});

	return (
		<Box display="flex">
			<Box
				{...getRootProps()}
				w="xs"
				h="xs"
				display="flex"
				pos="relative"
				justifyContent="center"
				alignItems="center"
				p={4}
				bgColor="blackAlpha.50"
			>
				<input type="file" {...getInputProps()} />
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
				{isDragReject && (
					<Text
						pos="absolute"
						bottom={4}
						left="50%"
						transform="translateX(-50%)"
						mt={4}
						color="red.500"
						fontSize="xs"
						fontWeight="bold"
					>
						ファイル形式はpng,jpgのみです
					</Text>
				)}
				{fileRejections.length > 0 && (
					<Text
						pos="absolute"
						bottom={4}
						left="50%"
						transform="translateX(-50%)"
						mt={4}
						color="red.500"
						fontSize="xs"
						fontWeight="bold"
					>
						{fileRejections[0].errors[0].message}
					</Text>
				)}
			</Box>
			<Box display="flex">
				{file.map((img) => (
					<Box key={img.name} w="80px" h="80px">
						<Image src={img.preview} alt={img.name} objectFit="contain" />
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default ImgDropzone;

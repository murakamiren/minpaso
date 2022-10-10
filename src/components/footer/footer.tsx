import { Box, chakra, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

const Footer: FC = () => {
	return (
		<footer>
			<Box px={20}>
				<Heading as="h1" fontWeight="bold" color="text.black" fontSize="3xl" letterSpacing="tighter">
					みん<chakra.span color="linkedin.600">パソ</chakra.span>
				</Heading>
				<Text color="text.black" mt={4}>
					自慢のPCを共有、探索しよう
					<br />
					PC好きの為の情報共有コミュニティー
				</Text>
			</Box>
		</footer>
	);
};

export default Footer;

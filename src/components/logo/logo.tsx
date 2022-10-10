import { Heading, chakra } from "@chakra-ui/react";
import { FC } from "react";

const Logo: FC = () => {
	return (
		<Heading as="h1" fontWeight="bold" color="text.black" fontSize="3xl" letterSpacing="tighter">
			みん<chakra.span color="linkedin.600">パソ</chakra.span>
		</Heading>
	);
};

export default Logo;

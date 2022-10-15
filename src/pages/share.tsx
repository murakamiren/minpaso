import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Heading } from "@chakra-ui/react";
import { NextPageWithLayout } from "next";
import NextLink from "next/link";
import ShareForm from "../components/shareForm/shareForm";
import { useRedirect } from "../hook/useRedirect";
import { useUser } from "../hook/useUser";

const Share: NextPageWithLayout = () => {
	const { user } = useUser();

	useRedirect(user);

	return (
		<main>
			<Box px={20} pb={8}>
				<Box mt={4}>
					<NextLink href="/" passHref>
						<a>
							<ArrowBackIcon w={8} h={8} />
						</a>
					</NextLink>
				</Box>
				<Heading as="h2" my={12}>
					共有する
				</Heading>
				<ShareForm />
			</Box>
		</main>
	);
};

export default Share;

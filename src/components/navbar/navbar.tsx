import { Box, Button, chakra, Flex, Heading, Link, List, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import { navItem } from "./navItem";

const Navbar: FC = () => {
	return (
		<nav>
			<Flex px={20} py={4} justify="space-between" alignItems="center">
				<Heading as="h1" fontWeight="bold" color="text.black" fontSize="3xl" letterSpacing="tighter">
					みん<chakra.span color="linkedin.600">パソ</chakra.span>
				</Heading>
				<Box flex={1} display="flex" justifyContent="flex-end" alignItems="center" gap={4}>
					<List display="flex" gap={4}>
						{navItem.map((item, i) => (
							<ListItem key={i}>
								<NextLink href={item.href} passHref>
									<Link color="text.black">{item.text}</Link>
								</NextLink>
							</ListItem>
						))}
					</List>
					<NextLink href="/login">
						<Button fontWeight="semibold" colorScheme="linkedin">
							ログイン
						</Button>
					</NextLink>
				</Box>
			</Flex>
		</nav>
	);
};

export default Navbar;

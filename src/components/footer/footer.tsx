import { Box, Center, chakra, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import { navItem } from "../navbar/navItem";

const Footer: FC = () => {
	return (
		<chakra.footer w="full" h="360px">
			<Box px={20} h="90%" display="flex" flexDir="column" alignItems="center" justifyContent="center">
				<Heading as="h1" fontWeight="bold" color="text.black" fontSize="3xl" letterSpacing="tighter">
					みん<chakra.span color="linkedin.600">パソ</chakra.span>
				</Heading>
				<Text color="text.black" mt={4} textAlign="center" fontSize="sm">
					自慢のPCを共有、探索しよう。
					<br />
					PC好きの為の情報共有コミュニティー。
				</Text>
				<Box mt={4}>
					<nav>
						<List display="flex" gap={4}>
							{navItem.map((item, i) => (
								<ListItem key={i}>
									<NextLink href={item.href} passHref>
										<Link color="text.black">{item.text}</Link>
									</NextLink>
								</ListItem>
							))}
						</List>
					</nav>
				</Box>
			</Box>
			<Center>
				<chakra.small>
					<Text>© 2022 みんパソ, All rights reserved.</Text>
				</chakra.small>
			</Center>
		</chakra.footer>
	);
};

export default Footer;

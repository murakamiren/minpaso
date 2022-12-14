import { Box, Center, chakra, Link, List, ListItem, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC, memo } from "react";
import Logo from "../logo/logo";
import { navItem } from "../navbar/navItem";

const Footer: FC = () => {
	return (
		<chakra.footer w="full" h="360px">
			<Box px={20} h="90%" display="flex" flexDir="column" alignItems="center" justifyContent="center">
				<Logo />
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

const footerMemo = memo(Footer);

export default footerMemo;

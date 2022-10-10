import { Avatar, Box, Button, chakra, Flex, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import { useAuthUser } from "@react-query-firebase/auth";
import NextLink from "next/link";
import { FC } from "react";
import { auth } from "../../lib/firebase";
import NavAvatar from "../navAvatar/navAvatar";
import { navItem } from "./navItem";
import { useLogin } from "../../hook/useLogin";
import Logo from "../logo/logo";

const Navbar: FC = () => {
	const { handleLoginWithGoogle } = useLogin();
	const { data: user } = useAuthUser("[nav-user]", auth);
	console.log(user);

	return (
		<nav>
			<Flex px={20} py={4} justify="space-between" alignItems="center">
				<Logo />
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
					{user && user.photoURL && user.displayName ? (
						<NavAvatar photoURL={user.photoURL} name={user.displayName} />
					) : (
						<Button fontWeight="semibold" colorScheme="linkedin" onClick={() => handleLoginWithGoogle()}>
							ログイン
						</Button>
					)}
				</Box>
			</Flex>
		</nav>
	);
};

export default Navbar;

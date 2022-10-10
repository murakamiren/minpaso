import { Avatar, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import { useLogout } from "../../hook/logout";
import { NavAvatarProps } from "./type";

const NavAvatar: FC<NavAvatarProps> = ({ photoURL, name }) => {
	const handleLogout = useLogout();

	return (
		<Menu>
			<MenuButton as={Avatar} name={name} src={photoURL} size="sm" />
			<MenuList>
				<MenuItem>
					<NextLink href="/mypage" passHref>
						<a>マイページ</a>
					</NextLink>
				</MenuItem>
				<MenuItem onClick={() => handleLogout()}>
					<Text>ログアウト</Text>
				</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default NavAvatar;

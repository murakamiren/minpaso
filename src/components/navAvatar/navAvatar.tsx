import { Avatar, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC, memo } from "react";
import { useLogout } from "../../hook/useLogout";
import { NavAvatarProps } from "./type";

const NavAvatar: FC<NavAvatarProps> = ({ photoURL, name }) => {
	const handleLogout = useLogout();

	return (
		<Menu>
			<MenuButton as={Avatar} name={name} src={photoURL} size="sm" loading="lazy" />
			<MenuList>
				<NextLink href="/mypage" passHref>
					<MenuItem>
						<a>マイページ</a>
					</MenuItem>
				</NextLink>
				<MenuItem onClick={() => handleLogout()}>
					<Text>ログアウト</Text>
				</MenuItem>
			</MenuList>
		</Menu>
	);
};

const NavAvatarMemo = memo(NavAvatar);

export default NavAvatarMemo;

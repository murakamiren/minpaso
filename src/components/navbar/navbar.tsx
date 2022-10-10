import { Box, Link, List, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import { navItem } from "./navItem";

const Navbar: FC = () => {
	return (
		<nav>
			<Box>
				<List display="flex" gap={4}>
					{navItem.map((item, i) => (
						<ListItem key={i}>
							<NextLink href={item.href} passHref>
								<Link>{item.text}</Link>
							</NextLink>
						</ListItem>
					))}
				</List>
			</Box>
		</nav>
	);
};

export default Navbar;

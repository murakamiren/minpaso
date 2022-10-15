import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FC } from "react";
import { MyPageTabProps } from "./type";

const MyPageTab: FC<MyPageTabProps> = ({ myPosts, favorite }) => {
	return (
		<Tabs isFitted>
			<TabList>
				<Tab>投稿一覧</Tab>
				<Tab>いいね一覧</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>{myPosts}</TabPanel>
				<TabPanel>{favorite}</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default MyPageTab;

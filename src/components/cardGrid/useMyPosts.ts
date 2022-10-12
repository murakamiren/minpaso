import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { User } from "firebase/auth";
import { collection, query, where } from "firebase/firestore";
import { firestore } from "../../lib/firebase";

export const useMyPosts = (user: User) => {
	const ref = query(collection(firestore, "posts"), where("authorId", "==", user.uid));
	const { data: myPostsData, isLoading } = useFirestoreQueryData(["my-posts"], ref);

	const formattedMyPostsData = myPostsData?.map((post) => ({
		id: post.id,
		title: post.title,
		author: post.author,
		firstImage: post.image[0],
	}));

	return { formattedMyPostsData, isLoading };
};

import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { User } from "firebase/auth";
import { collection, query, where } from "firebase/firestore";
import { firestore } from "../../lib/firebase";
import { postsConverter } from "../../util/firestoreConverter";

export const useMyPosts = (user: User) => {
	const ref = query(collection(firestore, "posts").withConverter(postsConverter), where("authorId", "==", user.uid));
	const { data: myPostsData, isLoading } = useFirestoreQueryData(["my-posts"], ref, { subscribe: true });

	const formattedMyPostsData = myPostsData?.map((post) => ({
		id: post.id,
		title: post.title,
		author: post.author,
		firstImage: post.image[0].src,
	}));

	return { formattedMyPostsData, isLoading, myPostsData };
};

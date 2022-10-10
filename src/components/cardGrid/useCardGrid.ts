import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { collection, query } from "firebase/firestore";
import { firestore } from "../../lib/firebase";
import { postsConverter } from "../../util/firestoreConverter";

export const useCardGrid = () => {
	const ref = query(collection(firestore, "posts").withConverter(postsConverter));
	const { data: postsData, isLoading } = useFirestoreQueryData(["card-grid-posts"], ref);

	const formattedPostsData = postsData?.map((post) => ({
		id: post.id,
		title: post.title,
		author: post.author,
		firstImage: post.image[0],
	}));

	return { formattedPostsData, isLoading };
};

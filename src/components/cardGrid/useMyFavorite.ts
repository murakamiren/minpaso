import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { User } from "firebase/auth";
import { collection, query, where } from "firebase/firestore";
import { firestore } from "../../lib/firebase";
import { formatPostData } from "../../util/cardPostsDataFormat";
import { postsConverter } from "../../util/firestoreConverter";

export const useMyFavoritePosts = (user: User) => {
	const ref = query(
		collection(firestore, "posts").withConverter(postsConverter),
		where("favorited", "array-contains", user.uid)
	);
	const { data: myFavoritePostsData, isLoading } = useFirestoreQueryData(["my-favorite-posts"], ref, {
		subscribe: true,
	});

	const formattedPostsData = formatPostData(myFavoritePostsData, user);

	return { formattedPostsData, isLoading };
};

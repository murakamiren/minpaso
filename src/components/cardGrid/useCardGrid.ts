import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { collection, query } from "firebase/firestore";
import { useUser } from "../../hook/useUser";
import { firestore } from "../../lib/firebase";
import { formatPostData } from "../../util/cardPostsDataFormat";
import { postsConverter } from "../../util/firestoreConverter";

export const useCardGrid = () => {
	const { user } = useUser();
	const ref = query(collection(firestore, "posts").withConverter(postsConverter));
	const { data: postsData } = useFirestoreQueryData(["card-grid-posts"], ref, {
		subscribe: true,
	});

	const formattedPostsData = formatPostData(postsData, user);

	return { formattedPostsData };
};

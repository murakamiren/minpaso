import { useFirestoreDocumentData } from "@react-query-firebase/firestore";
import { doc } from "firebase/firestore";
import { useAtomValue } from "jotai";
import { firestore } from "../../lib/firebase";
import { postDetailQueryIdAtom } from "../../store/postDetailAtom";
import { postsConverter } from "../../util/firestoreConverter";

export const useDetail = () => {
	const queryPostId = useAtomValue(postDetailQueryIdAtom);

	const ref = doc(firestore, "posts", queryPostId).withConverter(postsConverter);

	const { data: postData } = useFirestoreDocumentData(["detail-post", queryPostId], ref);

	return { postData };
};

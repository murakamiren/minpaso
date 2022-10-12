import {
	useFirestoreDocumentData,
	useFirestoreDocumentDeletion,
	useFirestoreDocumentMutation,
} from "@react-query-firebase/firestore";
import { collection, doc } from "firebase/firestore";
import { useAtomValue } from "jotai";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { useUser } from "../../hook/useUser";
import { firestore } from "../../lib/firebase";
import { postDetailQueryIdAtom } from "../../store/postDetailAtom";
import { postsConverter } from "../../util/firestoreConverter";

export const useDetail = () => {
	const router = useRouter();
	const { user } = useUser();
	const queryPostId = useAtomValue(postDetailQueryIdAtom);

	const deleteCollection = collection(firestore, "posts");
	const deleteRef = doc(deleteCollection, queryPostId);
	const { mutate, isLoading } = useFirestoreDocumentDeletion(deleteRef);

	const onClickToDeleteMyPost = async () => {
		await mutate();
		router.replace("/");
	};

	const ref = doc(firestore, "posts", queryPostId).withConverter(postsConverter);

	const { data: postData } = useFirestoreDocumentData(["detail-post", queryPostId], ref);

	return { postData, user, isLoading, onClickToDeleteMyPost };
};

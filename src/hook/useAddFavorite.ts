import { useToast } from "@chakra-ui/react";
import { useFirestoreDocumentMutation } from "@react-query-firebase/firestore";
import { arrayRemove, arrayUnion, collection, doc } from "firebase/firestore";
import { firestore } from "../lib/firebase";
import { useUser } from "./useUser";

export const useAddFavorite = (docId: string, isFavorite: boolean) => {
	const { user } = useUser();
	const toast = useToast();

	const col = collection(firestore, "posts");
	const ref = doc(col, docId);
	const { mutate } = useFirestoreDocumentMutation(ref, {
		merge: true,
	});

	const addFavorite = () => {
		if (!user) {
			toast({
				title: "アカウントが見つかりません",
				description: "いいね機能を使用するには、ログインしてください",
				status: "error",
				duration: 3000,
			});

			return;
		}

		isFavorite ? mutate({ favorited: arrayRemove(user.uid) }) : mutate({ favorited: arrayUnion(user.uid) });
	};

	return { addFavorite };
};

import { useToast } from "@chakra-ui/react";
import { useFirestoreDocumentMutation } from "@react-query-firebase/firestore";
import { arrayUnion, collection, doc } from "firebase/firestore";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { firestore } from "../lib/firebase";
import { postsConverter } from "../util/firestoreConverter";
import { useUser } from "./useUser";

export const useAddFavorite = (docId: string) => {
	const { user } = useUser();
	const [isLoading, setIsLoading] = useState(false);
	const toast = useToast();
	const client = useQueryClient();

	const col = collection(firestore, "posts");
	const ref = doc(col, docId);
	const { mutate } = useFirestoreDocumentMutation(ref);

	const addFavorite = () => {
		setIsLoading(true);

		if (!user) {
			toast({
				title: "アカウントが見つかりません",
				description: "いいね機能を使用するには、ログインしてください",
				status: "error",
				duration: 3000,
			});

			setIsLoading(false);

			return;
		}

		mutate(
			{ favorited: arrayUnion(user.uid) },
			{
				onSuccess: () => {
					setIsLoading(false);
					client.invalidateQueries(["card-grid-posts"]);
					client.invalidateQueries(["my-posts"]);
				},
			}
		);
	};

	return { addFavorite };
};

import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { collection, query } from "firebase/firestore";
import { useState } from "react";
import { useUser } from "../../hook/useUser";
import { firestore } from "../../lib/firebase";
import { postsConverter } from "../../util/firestoreConverter";

export const useCardGrid = () => {
	const { user } = useUser();
	const ref = query(collection(firestore, "posts").withConverter(postsConverter));
	const { data: postsData } = useFirestoreQueryData(["card-grid-posts"], ref, {
		subscribe: true,
	});

	const formattedPostsData = postsData?.map((post) => {
		let isFavorite: boolean;

		if (!user) {
			isFavorite = false;
		} else {
			isFavorite = post.favorited?.includes(user.uid) as boolean;
		}

		const data = {
			id: post.id,
			title: post.title,
			author: post.author,
			firstImage: post.image[0].src,
			isFavorite: isFavorite,
		};

		return data;
	});

	return { formattedPostsData };
};

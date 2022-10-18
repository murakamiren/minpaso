import { useFirestoreDocumentData, useFirestoreDocumentDeletion } from "@react-query-firebase/firestore";
import { collection, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { useUser } from "../../hook/useUser";
import { firestore, storage } from "../../lib/firebase";
import { postsConverter } from "../../util/firestoreConverter";
import { ImgInfoType } from "../shareForm/type";
import { deleteObject, ref } from "firebase/storage";
import { useState } from "react";

export const useDetail = (id: string) => {
	const router = useRouter();
	const client = useQueryClient();
	const { user } = useUser();
	const gsUrl = process.env.NEXT_PUBLIC_STORAGE_URL as string;
	const queryPostId = id;

	const [isLoadingStart, setIsLoadingStart] = useState(false);

	const deleteCollection = collection(firestore, "posts");
	const deleteRef = doc(deleteCollection, queryPostId);
	const { mutate, isLoading } = useFirestoreDocumentDeletion(deleteRef, {
		onSuccess: () => {
			setIsLoadingStart(false);
			client.invalidateQueries(["card-grid-posts"]);
			client.invalidateQueries(["my-posts"]);
			router.replace("/");
		},
	});

	const onClickToDeleteMyPost = async (imgInfo: ImgInfoType[]) => {
		setIsLoadingStart(true);
		await Promise.all(
			imgInfo.map(async (info) => {
				const imgPath = gsUrl + "/" + info.path;
				const deleteImgRef = ref(storage, imgPath);
				await deleteObject(deleteImgRef);
			})
		);

		await mutate();
	};

	const postRef = doc(firestore, "posts", queryPostId).withConverter(postsConverter);

	const { data: postData } = useFirestoreDocumentData(["detail-post", queryPostId], postRef);

	return { postData, user, isLoading, isLoadingStart, onClickToDeleteMyPost };
};

import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { collection } from "firebase/firestore";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUser } from "../../hook/useUser";
import { firestore, storage } from "../../lib/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { imgRefPath } from "../../constant/storage";
import { ImgInfoType, ShareFormDataType } from "./type";
import { handleResize } from "../../lib/loadImage";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

export const useShare = () => {
	const {
		handleSubmit,
		register,
		setValue,
		formState: { errors },
	} = useForm<ShareFormDataType>();
	const { user } = useUser();
	const router = useRouter();
	const client = useQueryClient();
	const toast = useToast();

	const [startLoading, setStartLoading] = useState(false);
	const randomId = Math.random().toString(32).substring(2);

	const postRef = collection(firestore, "posts");
	const { mutate, isLoading } = useFirestoreCollectionMutation(postRef, {
		onSuccess: () => {
			setStartLoading(false);
			client.invalidateQueries(["card-grid-posts"]);
			client.invalidateQueries(["my-posts"]);
			toast({
				title: "記事を投稿しました！",
				status: "success",
				duration: 3000,
			});
			router.replace("/");
		},
	});

	const onSubmit: SubmitHandler<ShareFormDataType> = async (formData) => {
		setStartLoading(true);
		let imgFileArr: ImgInfoType[] = [];
		console.log("upload process");

		if (!user) return console.log("no user");

		const imgFile = formData.imgFile;

		await Promise.all(
			imgFile.map(async (file) => {
				const resizeImg = await handleResize(file);
				const imgFileName = randomId + file.name;
				const imgUploadPath = `${imgRefPath}${user.uid}/${imgFileName}`;
				const imgUploadRef = ref(storage, imgUploadPath);
				const snapshot = await uploadBytes(imgUploadRef, resizeImg);
				const path = await snapshot.ref.fullPath;
				const src = await getDownloadURL(snapshot.ref);
				await imgFileArr.push({ src, path });
			})
		);

		const testPostingValue = {
			title: formData.title,
			point: formData.point,
			image: imgFileArr,
			spec: formData.spec,
			author: user?.displayName,
			authorId: user?.uid,
		};

		mutate(testPostingValue);
		imgFileArr = [];
	};

	return { onSubmit, handleSubmit, register, isLoading, setValue, startLoading, errors };
};

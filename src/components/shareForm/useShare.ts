import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { collection } from "firebase/firestore";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUser } from "../../hook/useUser";
import { firestore, storage } from "../../lib/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { imgRefPath } from "../../constant/storage";
import { useAtomValue } from "jotai";
import { ShareFormDataType } from "./type";
import { handleResize } from "../../lib/loadImage";

export const useShare = () => {
	const { handleSubmit, register, setValue } = useForm<ShareFormDataType>();
	const { user } = useUser();

	const randomId = Math.random().toString(32).substring(2);

	const postRef = collection(firestore, "posts");
	const { mutate, isLoading } = useFirestoreCollectionMutation(postRef);

	const onSubmit: SubmitHandler<ShareFormDataType> = async (formData) => {
		let imgFilePathArr: string[] = [];
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
				const url = await getDownloadURL(snapshot.ref);
				await imgFilePathArr.push(url);
			})
		);

		const testPostingValue = {
			title: formData.title,
			point: formData.point,
			image: imgFilePathArr,
			spec: {
				case: "nice case",
				cpu: "good cpu",
				cpuCooler: "ice cold",
				motherboard: "big board",
				memory: "Pog 16GB",
				gpu: "RTX 4090 8GB",
				powerSupply: "sage 800w gold",
				storage: "512GB ssd",
				etc: "LED",
			},
			author: user?.displayName,
			authorId: user?.uid,
		};

		await mutate(testPostingValue);
		imgFilePathArr = [];
	};

	return { onSubmit, handleSubmit, register, isLoading, setValue };
};

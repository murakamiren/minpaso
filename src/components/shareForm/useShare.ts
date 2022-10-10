import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useUser } from "../../hook/useUser";
import { firestore } from "../../lib/firebase";
import { PostType } from "../../types/post";

export const useShare = () => {
	const { handleSubmit, register } = useForm();
	const { user } = useUser();

	const ref = collection(firestore, "posts");
	const { mutate, isLoading } = useFirestoreCollectionMutation(ref);

	const onSubmit = (formData: any) => {
		console.log(formData);
		const testPostingValue = {
			title: formData.title,
			point: formData.point,
			image: [
				"https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80",
				"https://images.unsplash.com/photo-1542729716-6d1890d980ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			],
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

		mutate(testPostingValue);
	};

	return { onSubmit, handleSubmit, register, isLoading };
};

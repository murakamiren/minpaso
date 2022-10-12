import { useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { postDetailQueryIdAtom } from "../../store/postDetailAtom";

export const useCard = () => {
	const router = useRouter();
	const [hover, isHover] = useState(false);
	const [scale, setScale] = useState(1);
	const [filter, setFilter] = useState("brightness(1)");
	const setId = useSetAtom(postDetailQueryIdAtom);

	const clickToPassQueryId = async (postId: string) => {
		await setId(postId);
		router.push(`/post/${postId}`);
	};

	useEffect(() => {
		if (hover) {
			setScale(() => 1.1);
			setFilter(() => "brightness(1.1)");
		} else {
			setScale(() => 1);
			setFilter(() => "brightness(1)");
		}
	}, [hover]);

	return { scale, filter, isHover, clickToPassQueryId };
};

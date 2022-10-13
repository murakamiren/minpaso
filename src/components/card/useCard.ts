import { useDisclosure } from "@chakra-ui/react";
import { useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { postDetailQueryIdAtom } from "../../store/postDetailAtom";

export const useCard = () => {
	const router = useRouter();
	const { isOpen, onOpen, onClose } = useDisclosure();
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
			setScale(() => 1.05);
			setFilter(() => "brightness(0.8)");
			onOpen();
		} else {
			setScale(() => 1);
			setFilter(() => "brightness(1)");
			onClose();
		}
	}, [hover]);

	return { scale, filter, isHover, clickToPassQueryId, isOpen };
};

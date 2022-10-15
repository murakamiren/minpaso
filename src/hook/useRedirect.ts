import { User } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useRedirect = (user: User | undefined) => {
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			if (router.pathname === "/mypage" || router.pathname === "/share") router.replace("/");
		}
	}, [user, router]);

	return null;
};

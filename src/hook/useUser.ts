import { useAuthUser } from "@react-query-firebase/auth";
import { auth } from "../lib/firebase";

export const useUser = () => {
	const { data: user, isLoading } = useAuthUser("[nav-user]", auth, { staleTime: Infinity });

	return { user, isLoading };
};

import { useAuthSignOut } from "@react-query-firebase/auth";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { auth } from "../lib/firebase";

export const useLogout = () => {
	const router = useRouter();
	const client = useQueryClient();
	const logout = useAuthSignOut(auth);
	const handleLogout = async () => {
		await logout.mutate();
		await client.removeQueries("nav-user");
		router.reload();
	};

	return handleLogout;
};

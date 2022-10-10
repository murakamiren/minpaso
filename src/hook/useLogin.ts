import { useAuthSignInWithPopup } from "@react-query-firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../lib/firebase";

export const useLogin = () => {
	const loginWithGoogle = useAuthSignInWithPopup(auth);

	const handleLoginWithGoogle = () =>
		loginWithGoogle.mutate({
			provider: new GoogleAuthProvider(),
		});

	return { handleLoginWithGoogle };
};

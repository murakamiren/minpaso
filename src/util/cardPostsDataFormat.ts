import { User } from "firebase/auth";
import { PostType } from "../types/post";

export const formatPostData = (postsData: PostType[] | undefined, user: User | undefined) => {
	const format = postsData?.map((post) => {
		let isFavorite: boolean;

		if (!user) {
			isFavorite = false;
		} else {
			isFavorite = post.favorited?.includes(user.uid) as boolean;
		}

		const data = {
			id: post.id,
			title: post.title,
			author: post.author,
			firstImage: post.image[0].src,
			isFavorite: isFavorite,
		};
		return data;
	});
	return format;
};

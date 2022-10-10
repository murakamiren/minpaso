import {
	DocumentData,
	FirestoreDataConverter,
	QueryDocumentSnapshot,
	serverTimestamp,
	SnapshotOptions,
} from "firebase/firestore";
import { PostType } from "../types/post";

export const postsConverter: FirestoreDataConverter<PostType> = {
	toFirestore(post: PostType): DocumentData {
		return {
			id: post.id,
			title: post.title,
			favorited: post.favorited,
			image: post.image,
			point: post.point,
			spec: post.spec,
			author: post.author,
			createAt: serverTimestamp(),
		};
	},

	fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): PostType {
		const data = snapshot.data(options);
		return {
			id: snapshot.id,
			title: data.title,
			favorited: data.favorited,
			image: data.image,
			point: data.point,
			spec: data.spec,
			author: data.author,
		};
	},
};

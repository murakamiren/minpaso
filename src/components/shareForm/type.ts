import { FileWithPreview } from "../imgDropzone/type";

export type ShareFormDataType = {
	title: string;
	point: string;
	spec: any;
	imgFile: FileWithPreview[];
};

export type ImgInfoType = {
	src: string;
	path: string;
};

import { FileWithPath } from "react-dropzone";

export interface FileWithPreview extends FileWithPath {
	preview: string;
}

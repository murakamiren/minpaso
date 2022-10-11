import { FileWithPath } from "react-dropzone";
import { UseFormSetValue } from "react-hook-form";
import { ShareFormDataType } from "../shareForm/type";

export interface FileWithPreview extends FileWithPath {
	preview: string;
}

export type ImgDropzoneProps = {
	setValue: UseFormSetValue<ShareFormDataType>;
};

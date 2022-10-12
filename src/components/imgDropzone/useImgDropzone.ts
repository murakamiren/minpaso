import { useCallback, useEffect, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { FileWithPreview, ImgDropzoneProps } from "./type";

export const useImgDropzone = ({ setValue }: ImgDropzoneProps) => {
	const [file, setFile] = useState<FileWithPreview[]>([]);

	const onDrop = useCallback(async (acceptedFiles: FileWithPath[]) => {
		const convertFileWithPreview = acceptedFiles.map((file) =>
			Object.assign(file, { preview: URL.createObjectURL(file) })
		);
		await setFile(() => convertFileWithPreview);
		setValue("imgFile", convertFileWithPreview);
	}, []);

	const { getRootProps, getInputProps, isDragActive, open, fileRejections, isDragReject } = useDropzone({
		onDrop,
		noClick: true,
		accept: { "image/jpeg": [], "image/png": [] },
		maxFiles: 4,
		maxSize: 20971520,
	});

	useEffect(() => {
		return () => file.forEach((file) => URL.revokeObjectURL(file.preview));
	}, []);

	return { getInputProps, getRootProps, isDragActive, open, file, fileRejections, isDragReject };
};

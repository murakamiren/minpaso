import { useCallback, useEffect, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { FileWithPreview } from "./type";

export const useImgDropzone = () => {
	const [file, setFile] = useState<FileWithPreview[]>([]);

	const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
		setFile(() => acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) })));
	}, []);

	const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
		onDrop,
		noClick: true,
		accept: { "image/jpeg": [], "image/png": [] },
	});

	useEffect(() => {
		return () => file.forEach((file) => URL.revokeObjectURL(file.preview));
	}, []);

	return { getInputProps, getRootProps, isDragActive, open, file };
};

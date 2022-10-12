import loadImage from "blueimp-load-image";
import { FileWithPreview } from "../components/imgDropzone/type";

export const handleResize = async (file: FileWithPreview) => {
	const canvas = await loadImage(file, { maxWidth: 1200, canvas: true, orientation: true });
	const canvasImage = (await canvas.image) as HTMLCanvasElement;

	const resize: Blob = await new Promise((resolve) => {
		canvasImage.toBlob(
			(blob) => {
				if (blob) resolve(blob);
			},
			"image/jpeg",
			0.9
		);
	});

	return resize;
};

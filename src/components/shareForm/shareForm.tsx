import { Button, FormControl, FormLabel, Input, Textarea, VStack } from "@chakra-ui/react";
import { FC, useId } from "react";
import ImgDropzone from "../imgDropzone/imgDropzone";
import { useShare } from "./useShare";

const ShareForm: FC = () => {
	const htmlId = useId();
	const { onSubmit, handleSubmit, register, isLoading, setValue } = useShare();
	return (
		<form onSubmit={handleSubmit((data) => onSubmit(data))}>
			<VStack spacing={8}>
				<FormControl>
					<ImgDropzone setValue={setValue} />
				</FormControl>
				<FormControl>
					<FormLabel htmlFor={htmlId + "-title"}>タイトル</FormLabel>
					<Input id={htmlId + "-title"} placeholder="例：超快適ゲーミングPC" {...register("title")} />
				</FormControl>
				<FormControl>
					<FormLabel htmlFor={htmlId + "-point"}>こだわりポイント</FormLabel>
					<Textarea
						id={htmlId + "-point"}
						placeholder="例：ゲームを快適にプレイしつつ、騒音もありません！"
						resize="none"
						{...register("point")}
					/>
				</FormControl>
				<Button fontWeight="semibold" colorScheme="linkedin" type="submit" isLoading={isLoading}>
					共有する
				</Button>
			</VStack>
		</form>
	);
};

export default ShareForm;

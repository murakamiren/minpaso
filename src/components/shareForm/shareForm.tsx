import { Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea, VStack } from "@chakra-ui/react";
import { FC, useId } from "react";
import { specForm } from "../../constant/specForm";
import ImgDropzone from "../imgDropzone/imgDropzone";
import { useShare } from "./useShare";

const ShareForm: FC = () => {
	const htmlId = useId();
	const { onSubmit, handleSubmit, register, isLoading, setValue, startLoading, errors } = useShare();

	return (
		<form onSubmit={handleSubmit((data) => onSubmit(data))}>
			<VStack spacing={8}>
				<FormControl>
					<ImgDropzone setValue={setValue} />
				</FormControl>
				<FormControl>
					<FormLabel htmlFor={htmlId + "-title"}>タイトル</FormLabel>
					<Input
						id={htmlId + "-title"}
						placeholder="例：超快適ゲーミングPC"
						{...register("title", { required: true })}
					/>
					<FormErrorMessage>{errors.title && errors.title.message}</FormErrorMessage>
				</FormControl>
				{specForm.map((spec, i) => (
					<FormControl key={i}>
						<FormLabel htmlFor={htmlId + spec.htmlId}>{spec.title}</FormLabel>
						<Input
							id={htmlId + spec.htmlId}
							placeholder={spec.placeHolder}
							{...register(`spec.${spec.registerTitle}`, { required: spec.registerTitle !== "etc" ? true : false })}
						/>
					</FormControl>
				))}
				<FormControl>
					<FormLabel htmlFor={htmlId + "-point"}>こだわりポイント</FormLabel>
					<Textarea
						id={htmlId + "-point"}
						placeholder="例：ゲームを快適にプレイしつつ、騒音もありません！"
						resize="none"
						{...register("point", { required: true })}
					/>
				</FormControl>
				<Button fontWeight="semibold" colorScheme="linkedin" type="submit" isLoading={isLoading || startLoading}>
					共有する
				</Button>
			</VStack>
		</form>
	);
};

export default ShareForm;

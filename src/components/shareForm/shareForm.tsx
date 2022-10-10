import { Button, FormControl, FormLabel, Input, Textarea, VStack } from "@chakra-ui/react";
import { FC, useId } from "react";
import { useShare } from "./useShare";

const ShareForm: FC = () => {
	const htmlId = useId();
	const { onSubmit, handleSubmit, register, isLoading } = useShare();
	return (
		<form onSubmit={handleSubmit((data) => onSubmit(data))}>
			<VStack spacing={8}>
				<FormControl>
					<FormLabel htmlFor={htmlId + "-img"} color="text.black">
						画像
					</FormLabel>
					<Input type="file" id={htmlId + "-img"} />
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

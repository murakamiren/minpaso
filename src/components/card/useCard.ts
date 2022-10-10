import { useEffect, useState } from "react";

export const useCard = () => {
	const [hover, isHover] = useState(false);
	const [scale, setScale] = useState(1);
	const [filter, setFilter] = useState("brightness(1)");

	useEffect(() => {
		if (hover) {
			setScale(() => 1.2);
			setFilter(() => "brightness(1.1)");
		} else {
			setScale(() => 1);
			setFilter(() => "brightness(1)");
		}
	}, [hover]);

	return { scale, filter, isHover };
};

import { useState } from "react";

export const useCard = () => {
	const [hover, isHover] = useState(false);
	const [scale, setScale] = useState(1);
	const [filter, setFilter] = useState("brightness(1)");

	hover ? setScale(1.2) : setScale(1);
	hover ? setFilter("brightness(1.1)") : setFilter("brightness(1)");

	return { scale, filter, isHover };
};

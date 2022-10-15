import { SpecField } from "../types/specForm";

export const specForm: SpecField[] = [
	{
		title: "CPU",
		placeHolder: "例：AMD Ryzen 5 5600X",
		registerTitle: "cpu",
		htmlId: "-cpu",
	},
	{
		title: "CPU Cooler",
		placeHolder: "例：MasterLiquid ML120L V2 RGB",
		registerTitle: "cpuCooler",
		htmlId: "-cpu-cooler",
	},
	{
		title: "GPU",
		placeHolder: "例：Nvidia GeForce RTX3060 Ti",
		registerTitle: "gpu",
		htmlId: "-gpu",
	},
	{
		title: "マザーボード",
		placeHolder: "例：AM4 B550（ATX）",
		registerTitle: "motherboard",
		htmlId: "-motherboard",
	},
	{
		title: "メモリー",
		placeHolder: "例：DDR4-3200 16GB",
		registerTitle: "memory",
		htmlId: "-memory",
	},
	{
		title: "ストレージ",
		placeHolder: "例：M.2 SSD 512GB（NVMe1.3）, 4TB 5400RPM",
		registerTitle: "storage",
		htmlId: "-storage",
	},
	{
		title: "電源",
		placeHolder: "例：850W Gold認証",
		registerTitle: "powerSupply",
		htmlId: "-powerSupply",
	},
	{
		title: "その他",
		placeHolder: "例：H510 White & Black, MasterFan MF120 Halo",
		registerTitle: "etc",
		htmlId: "-etc",
	},
];

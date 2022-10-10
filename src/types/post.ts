type Spec = {
	cpu: string;
	cpuCooler: string;
	motherboard: string;
	memory: string;
	gpu: string;
	powerSupply: string;
	storage: string;
	etc: string;
};

export type PostType = {
	id: string;
	title: string;
	favorited: string[];
	point: string;
	spec: Spec;
	image: string[];
	author: string;
};

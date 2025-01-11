export type BackgroundType = "solid" | "gradientLinear";

export interface Options {
	seed?: string;
	flip?: boolean;
	rotate?: number;
	scale?: number;
	radius?: number;
	size?: number;
	backgroundColor?: string[];
	backgroundType?: BackgroundType[];
	backgroundRotation?: number[];
	translateX?: number;
	translateY?: number;
	clip?: boolean;
	randomizeIds?: boolean;
}

export interface Result {
	toJSON: () => string;
	toString: () => {
		svg: string;
		extra: {};
	};
	toDataURL: () => string;
}

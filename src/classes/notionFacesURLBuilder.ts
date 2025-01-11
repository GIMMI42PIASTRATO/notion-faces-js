export class NotionFacesURLBuilder {
	private readonly baseURL: string =
		"https://faces.notion.com/_next/image?url=/layers";

	constructor(
		private assetType: string,
		private assetId: number,
		private width: number = 128,
		private q: number = 75
	) {}

	set setAssetType(assetType: string) {
		this.assetType = assetType;
	}

	set setAssetId(assetId: number) {
		this.assetId = assetId;
	}

	set setWidth(width: number) {
		this.width = width;
	}

	set setQ(q: number) {
		this.q = q;
	}

	get getBaseURL(): string {
		return this.baseURL;
	}

	get getAssetType(): string {
		return this.assetType;
	}

	get getAssetId(): number {
		return this.assetId;
	}

	get getWidth(): number {
		return this.width;
	}

	get getQ(): number {
		return this.q;
	}

	get getURL(): string {
		return `${this.baseURL}/${this.assetType}/${this.assetId}.png&w=${this.width}&q=${this.q}`;
	}
}

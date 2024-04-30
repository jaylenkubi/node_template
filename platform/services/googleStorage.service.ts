import { Service } from "typedi";
import {GoogleStorageAdapter} from "../adapters/googleStorage.adapter";


@Service()
export class GoogleStorageService {
	adapter: GoogleStorageAdapter


	constructor() {
		this.adapter = new GoogleStorageAdapter()
	}

	uploadImageFromUrl = async (fileLocation: string, fileName: string, imageUrl: string ): Promise<any> => {
		return await this.adapter.uploadImageFromUrl(fileLocation, imageUrl, fileName)
	}
}
import {Storage} from "@google-cloud/storage"
import axios from 'axios';


export class GoogleStorageAdapter {
	storage: any

	constructor() {
		this.storage = new Storage({
			projectId: process.env.PROJECT_ID,
			keyFilename: './../../docker-backend-container-sa-key.json'
		})
	}

	public async uploadFile(bucketName: string, filePath: string, fileName: string, isPublicVisible: boolean) {
		const bucket = this.storage.bucket(bucketName)

		const options = {
			destination: fileName,
			public: isPublicVisible,
			private: !isPublicVisible
		}

		await bucket.upload(filePath, options)
	}

	public async uploadImageFromUrl(bucketName: string, imageUrl: string, fileName: string, isPublicVisible: boolean) {
		const bucket = this.storage.bucket(bucketName);

		const response = await axios.get(imageUrl, {responseType: 'stream'});

		const options = {
			destination: fileName,
			public: isPublicVisible,
			private: !isPublicVisible,
			contentType: response.headers['content-type']
		};

		const file = bucket.file(fileName);
		const writeStream = file.createWriteStream(options);

		response.data.pipe(writeStream);

		return new Promise((resolve, reject) => {
			writeStream.on('finish', resolve);
			writeStream.on('error', reject);
		});
	}
}
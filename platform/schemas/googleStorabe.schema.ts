import {IsBoolean, IsString} from "class-validator";


export class UploadImageWithUrlRequest {

	@IsString()
	fileLocation!: string

	@IsString()
	fileName!: string
}
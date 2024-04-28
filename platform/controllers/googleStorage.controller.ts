import {Body, JsonController, Post, QueryParam, UseBefore} from "routing-controllers";
import {AuthMiddleware} from "../middlewares/authentication.middleware";
import {OpenAPI} from "routing-controllers-openapi";
import {Subject} from "../config/acls/subjects";
import {rules} from "../rules/core.rules";
import {aclMiddleware} from "../middlewares/acl.middleware";
import {Action} from "../middlewares/next.acls";
import {UploadImageWithUrlRequest} from "../schemas/googleStorabe.schema";
import Container from "typedi";
import {GoogleStorageService} from "../services/googleStorage.service";


export const GoogleStorageController = () => {
	@OpenAPI({security: [{jwt: []}], tags: ['googleStorage']})
	@JsonController('/gcs')
	@UseBefore(AuthMiddleware)
	class googleStorageController {

		gcsService = Container.get(GoogleStorageService)

		@Post('/upload')
		@OpenAPI({
			summary: 'save image to gcs',
			operationId: 'uploadImageWithUrl'
		})
		@UseBefore(aclMiddleware([{action: Action.CREATE, subject: Subject.GCS}], rules))
		async uploadImageWithUrl(@QueryParam('imageUrl') imageUrl: string, @QueryParam('imageUrl') isPublic: boolean, @Body() uploadBody: UploadImageWithUrlRequest) {
			const {fileLocation, fileName} = uploadBody
			return await this.gcsService.uploadImageFromUrl(fileLocation, fileName, isPublic, imageUrl)
		}

	}

	return googleStorageController
}


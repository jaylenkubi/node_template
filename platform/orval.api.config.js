const { camelCase } = require('text-case');

module.exports = {
	ApiClient: {
		output: {
			mode: 'tags',
			target: '../../../libraries/clients/rpc-services/domain/orchestrator',
			schemas: '../../../libraries/clients/rpc-services/domain/orchestrator/model',
			client: 'axios',
			mock: false,
			override: {
				title: (title) => camelCase(`${title}Rpc`),
				useDates: true,
				mutator: {
					path: '../../../libraries/clients/rpc-services/domain/orchestrator/custom-instance-api.ts',
					name: 'factoryInstance'
				},
				components: {
					schemas: {
						suffix: 'Interface'
					}
				}
			}
		},
		input: {
			target: './swagger/swagger.json'
		}
	}
};

module.exports = {
	uiClient: {
		output: {
			mode: 'tags',
			target: '../libraries/services/ui-services',
			schemas: '../libraries/services/ui-services/models',
			client: 'react-query',
			mock: false,
			override: {
				useDates: true,
				operations: {
					GetQuery: {
						query: {
							useQuery: true
						}
					}
				},
				mutator: {
					path: '../libraries/services/ui-services/custom-instance-ui.ts',
					name: 'customInstance'
				}
			}
		},
		input: {
			target: './swagger/swagger.json'
		}
	}
};

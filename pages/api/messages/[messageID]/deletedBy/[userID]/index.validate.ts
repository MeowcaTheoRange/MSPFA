// This file is automatically generated by `scripts/generate-validators`. Do not edit directly.

import createAPIValidator from 'lib/server/api/createAPIValidator';

export default createAPIValidator({
	$schema: 'http://json-schema.org/draft-07/schema#',
	$ref: '#/definitions/RequestMethod',
	definitions: {
		RequestMethod: {
			type: 'string',
			const: 'PUT'
		}
	}
}, {
	$schema: 'http://json-schema.org/draft-07/schema#',
	$ref: '#/definitions/Request',
	definitions: {
		Request: {
			type: 'object',
			additionalProperties: false,
			properties: {
				body: {
					type: 'boolean',
					const: true
				},
				query: {
					type: 'object',
					properties: {
						messageID: {
							type: 'string'
						},
						userID: {
							type: 'string'
						}
					},
					required: [
						'messageID',
						'userID'
					],
					additionalProperties: false
				},
				method: {
					type: 'string',
					const: 'PUT'
				}
			},
			required: [
				'body',
				'method',
				'query'
			]
		}
	}
});

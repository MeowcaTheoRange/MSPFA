// This file is automatically generated by `scripts/generate-validators`. Do not edit directly.

import createAPIValidator from 'lib/server/api/createAPIValidator';

export default createAPIValidator({
	$schema: 'http://json-schema.org/draft-07/schema#',
	$ref: '#/definitions/RequestMethod',
	definitions: {
		RequestMethod: {
			type: 'string',
			enum: [
				'GET',
				'DELETE',
				'PATCH'
			]
		}
	}
}, {
	$schema: 'http://json-schema.org/draft-07/schema#',
	$ref: '#/definitions/Request',
	definitions: {
		Request: {
			anyOf: [
				{
					type: 'object',
					additionalProperties: false,
					properties: {
						body: {},
						query: {
							type: 'object',
							properties: {
								storyID: {
									type: 'string'
								},
								colorGroupID: {
									type: 'string'
								}
							},
							required: [
								'storyID',
								'colorGroupID'
							],
							additionalProperties: false
						},
						method: {
							type: 'string',
							const: 'GET'
						}
					},
					required: [
						'method',
						'query'
					]
				},
				{
					type: 'object',
					additionalProperties: false,
					properties: {
						body: {},
						query: {
							type: 'object',
							properties: {
								storyID: {
									type: 'string'
								},
								colorGroupID: {
									type: 'string'
								}
							},
							required: [
								'storyID',
								'colorGroupID'
							],
							additionalProperties: false
						},
						method: {
							type: 'string',
							const: 'DELETE'
						}
					},
					required: [
						'method',
						'query'
					]
				},
				{
					type: 'object',
					additionalProperties: false,
					properties: {
						body: {
							type: 'object',
							additionalProperties: false,
							properties: {
								position: {
									$ref: '#/definitions/integer',
									description: 'The position in the `colorGroups` array to move the specified color group to.'
								},
								name: {
									type: 'string',
									minLength: 1,
									maxLength: 50
								}
							}
						},
						query: {
							type: 'object',
							properties: {
								storyID: {
									type: 'string'
								},
								colorGroupID: {
									type: 'string'
								}
							},
							required: [
								'storyID',
								'colorGroupID'
							],
							additionalProperties: false
						},
						method: {
							type: 'string',
							const: 'PATCH'
						}
					},
					required: [
						'body',
						'method',
						'query'
					]
				}
			]
		},
		integer: {
			type: 'integer'
		}
	}
});

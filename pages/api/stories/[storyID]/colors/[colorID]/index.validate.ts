// This file is automatically generated by `scripts/generate-validators`. Do not edit directly.

import { createValidator } from 'lib/server/api';

export default createValidator({
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
		'Request': {
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
								colorID: {
									type: 'string'
								}
							},
							required: [
								'storyID',
								'colorID'
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
								colorID: {
									type: 'string'
								}
							},
							required: [
								'storyID',
								'colorID'
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
							$ref: '#/definitions/RecursivePartial%3Calias-731470504-70263-70404-731470504-0-212510%3Cdef-alias--202-402--0-4021557724836%2Calias-rID%5D_index.ts-549-709-rID%5D_index.ts-0-31901039555369%3E%3E'
						},
						query: {
							type: 'object',
							properties: {
								storyID: {
									type: 'string'
								},
								colorID: {
									type: 'string'
								}
							},
							required: [
								'storyID',
								'colorID'
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
		'RecursivePartial<alias-731470504-70263-70404-731470504-0-212510<def-alias--202-402--0-4021557724836,alias-rID]_index.ts-549-709-rID]_index.ts-0-31901039555369>>': {
			type: 'object',
			properties: {
				name: {
					type: 'string'
				},
				value: {
					type: 'string'
				}
			},
			additionalProperties: false
		}
	}
});
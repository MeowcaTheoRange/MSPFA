// This file is automatically generated by `scripts/generate-validators`. Do not edit directly.

import createAPIValidator from 'lib/server/api/createAPIValidator';

export default createAPIValidator({
	$schema: 'http://json-schema.org/draft-07/schema#',
	$ref: '#/definitions/RequestMethod',
	definitions: {
		RequestMethod: {
			type: 'string',
			enum: [
				'POST',
				'GET'
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
						body: {
							anyOf: [
								{
									type: 'object',
									additionalProperties: false,
									properties: {
										captchaToken: {
											type: 'string',
											minLength: 1
										},
										name: {
											type: 'string',
											minLength: 1,
											maxLength: 32
										},
										birthdate: {
											$ref: '#/definitions/DateNumber'
										},
										authMethod: {
											$ref: '#/definitions/ExternalAuthMethodOptions'
										}
									},
									required: [
										'authMethod',
										'birthdate',
										'captchaToken',
										'name'
									]
								},
								{
									type: 'object',
									additionalProperties: false,
									properties: {
										captchaToken: {
											type: 'string',
											minLength: 1
										},
										name: {
											type: 'string',
											minLength: 1,
											maxLength: 32
										},
										birthdate: {
											$ref: '#/definitions/DateNumber'
										},
										authMethod: {
											$ref: '#/definitions/InternalAuthMethodOptions'
										},
										email: {
											$ref: '#/definitions/EmailString'
										}
									},
									required: [
										'authMethod',
										'birthdate',
										'captchaToken',
										'email',
										'name'
									]
								}
							]
						},
						query: {},
						method: {
							type: 'string',
							const: 'POST'
						}
					},
					required: [
						'body',
						'method'
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
								limit: {
									anyOf: [
										{
											$ref: '#/definitions/integer'
										},
										{
											type: 'string'
										}
									],
									description: 'How many results to respond with. Must not be greater than 50.'
								},
								nameOrID: {
									type: 'string',
									minLength: 1,
									maxLength: 32,
									description: 'A case-insensitive username search or exact user ID match.'
								}
							},
							required: [
								'nameOrID'
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
				}
			]
		},
		DateNumber: {
			$ref: '#/definitions/integer',
			minimum: -8640000000000000,
			maximum: 8640000000000000
		},
		integer: {
			type: 'integer'
		},
		ExternalAuthMethodOptions: {
			type: 'object',
			properties: {
				type: {
					type: 'string',
					enum: [
						'google',
						'discord'
					]
				},
				value: {
					type: 'string',
					minLength: 1
				}
			},
			required: [
				'type',
				'value'
			],
			additionalProperties: false
		},
		InternalAuthMethodOptions: {
			type: 'object',
			properties: {
				type: {
					type: 'string',
					const: 'password'
				},
				value: {
					$ref: '#/definitions/PasswordString'
				}
			},
			required: [
				'type',
				'value'
			],
			additionalProperties: false
		},
		PasswordString: {
			type: 'string',
			minLength: 8
		},
		EmailString: {
			type: 'string',
			pattern: '^[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'
		}
	}
});

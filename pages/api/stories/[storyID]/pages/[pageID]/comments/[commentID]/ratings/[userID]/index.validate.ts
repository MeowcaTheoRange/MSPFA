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
					type: 'number',
					enum: [
						-1,
						0,
						1
					],
					description: '`1` if the user liked the comment, `-1` if they disliked the comment, or `0` if they haven\'t rated the comment. Undefined if there is no user.'
				},
				query: {
					type: 'object',
					properties: {
						storyID: {
							type: 'string'
						},
						pageID: {
							type: 'string'
						},
						commentID: {
							type: 'string'
						},
						userID: {
							type: 'string'
						}
					},
					required: [
						'storyID',
						'pageID',
						'commentID',
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

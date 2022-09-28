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
								userID: {
									type: 'string'
								}
							},
							required: [
								'userID'
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
								userID: {
									type: 'string'
								}
							},
							required: [
								'userID'
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
							$ref: '#/definitions/RecursivePartial%3Calias-2073358172-70263-70404-2073358172-0-212510%3Cdef-alias-lib_client_users.ts-435-737-lib_client_users.ts-0-1305247327831%2Calias-1318184999-748-978-1318184999-0-30931551664714%3E%3E'
						},
						query: {
							type: 'object',
							properties: {
								userID: {
									type: 'string'
								}
							},
							required: [
								'userID'
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
		'RecursivePartial<alias-2073358172-70263-70404-2073358172-0-212510<def-alias-lib_client_users.ts-435-737-lib_client_users.ts-0-1305247327831,alias-1318184999-748-978-1318184999-0-30931551664714>>': {
			type: 'object',
			properties: {
				birthdate: {
					$ref: '#/definitions/DateNumber'
				},
				name: {
					type: 'string',
					minLength: 1,
					maxLength: 32
				},
				email: {
					$ref: '#/definitions/EmailString',
					description: 'The user\'s verified email address.'
				},
				description: {
					type: 'string',
					maxLength: 2000
				},
				icon: {
					anyOf: [
						{
							type: 'string',
							const: ''
						},
						{
							$ref: '#/definitions/URLString'
						}
					]
				},
				site: {
					anyOf: [
						{
							type: 'string',
							const: ''
						},
						{
							$ref: '#/definitions/URLString'
						}
					]
				},
				profileStyle: {
					type: 'string'
				},
				settings: {
					$ref: '#/definitions/RecursivePartial%3Cstructure-839751756-3105-3972-839751756-3094-3973-839751756-2121-4558-839751756-1984-4559-839751756-0-6676%3E'
				}
			},
			additionalProperties: false
		},
		'DateNumber': {
			$ref: '#/definitions/integer',
			minimum: -8640000000000000,
			maximum: 8640000000000000
		},
		'integer': {
			type: 'integer'
		},
		'EmailString': {
			type: 'string',
			pattern: '^[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'
		},
		'URLString': {
			type: 'string',
			pattern: '^https?://'
		},
		'RecursivePartial<structure-839751756-3105-3972-839751756-3094-3973-839751756-2121-4558-839751756-1984-4559-839751756-0-6676>': {
			type: 'object',
			properties: {
				emailPublic: {
					type: 'boolean'
				},
				birthdatePublic: {
					type: 'boolean'
				},
				favsPublic: {
					type: 'boolean'
				},
				autoOpenSpoilers: {
					type: 'boolean'
				},
				stickyNav: {
					type: 'boolean',
					description: 'This makes the nav bar always stay at the top of the screen when scrolling below it.'
				},
				imageAliasing: {
					type: 'boolean',
					description: 'This sets the image rendering style to nearest-neighbor on images which the user might want that on (such as story panels).'
				},
				theme: {
					$ref: '#/definitions/Theme'
				},
				style: {
					type: 'string'
				},
				controls: {
					$ref: '#/definitions/RecursivePartial%3Cstructure-839751756-3531-3609-839751756-3519-3610-839751756-3105-3972-839751756-3094-3973-839751756-2121-4558-839751756-1984-4559-839751756-0-6676%3E'
				},
				notifications: {
					$ref: '#/definitions/RecursivePartial%3Cstructure-839751756-3627-3969-839751756-3610-3969-839751756-3105-3972-839751756-3094-3973-839751756-2121-4558-839751756-1984-4559-839751756-0-6676%3E'
				}
			},
			additionalProperties: false
		},
		'Theme': {
			type: 'string',
			enum: [
				'standard',
				'dark',
				'felt',
				'sah'
			]
		},
		'RecursivePartial<structure-839751756-3531-3609-839751756-3519-3610-839751756-3105-3972-839751756-3094-3973-839751756-2121-4558-839751756-1984-4559-839751756-0-6676>': {
			type: 'object',
			properties: {
				previousPage: {
					type: 'string'
				},
				nextPage: {
					type: 'string'
				},
				toggleSpoilers: {
					type: 'string'
				}
			},
			additionalProperties: false
		},
		'RecursivePartial<structure-839751756-3627-3969-839751756-3610-3969-839751756-3105-3972-839751756-3094-3973-839751756-2121-4558-839751756-1984-4559-839751756-0-6676>': {
			type: 'object',
			properties: {
				messages: {
					$ref: '#/definitions/RecursivePartial%3CNotificationSetting%3E'
				},
				userTags: {
					$ref: '#/definitions/RecursivePartial%3CNotificationSetting%3E'
				},
				commentReplies: {
					$ref: '#/definitions/RecursivePartial%3CNotificationSetting%3E'
				},
				storyDefaults: {
					$ref: '#/definitions/RecursivePartial%3Cdef-alias-839751756-1496-1688-839751756-0-66762047801771%3E'
				},
				stories: {
					type: 'array',
					items: {
						$ref: '#/definitions/StoryNotificationSettings'
					}
				}
			},
			additionalProperties: false
		},
		'RecursivePartial<NotificationSetting>': {
			type: 'object',
			properties: {
				email: {
					type: 'boolean'
				},
				site: {
					type: 'boolean'
				}
			},
			additionalProperties: false
		},
		'RecursivePartial<def-alias-839751756-1496-1688-839751756-0-66762047801771>': {
			type: 'object',
			additionalProperties: {
				$ref: '#/definitions/RecursivePartial%3CNotificationSetting%3E'
			}
		},
		'StoryNotificationSettings': {
			anyOf: [
				{
					type: 'boolean',
					const: true
				},
				{
					$ref: '#/definitions/StoryReaderNotificationSettings'
				},
				{
					$ref: '#/definitions/StoryEditorNotificationSettings'
				}
			],
			description: '`true` if the setting should inherit the user\'s default story notification settings.\n\n`StoryReaderNotificationSettings | StoryEditorNotificationSettings` otherwise.'
		},
		'StoryReaderNotificationSettings': {
			type: 'object',
			additionalProperties: false,
			properties: {
				comments: {
					not: {}
				},
				updates: {
					$ref: '#/definitions/NotificationSetting'
				},
				news: {
					$ref: '#/definitions/NotificationSetting'
				}
			},
			required: [
				'news',
				'updates'
			]
		},
		'NotificationSetting': {
			type: 'object',
			properties: {
				email: {
					type: 'boolean'
				},
				site: {
					type: 'boolean'
				}
			},
			required: [
				'email',
				'site'
			],
			additionalProperties: false
		},
		'StoryEditorNotificationSettings': {
			type: 'object',
			additionalProperties: {
				$ref: '#/definitions/NotificationSetting'
			}
		}
	}
});

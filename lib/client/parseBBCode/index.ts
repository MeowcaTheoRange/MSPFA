import processNoparseTags from 'lib/client/parseBBCode/processNoparseTags';
import type { SanitizeBBCodeOptions } from 'lib/client/parseBBCode/sanitizeBBCode';
import sanitizeBBCode from 'lib/client/parseBBCode/sanitizeBBCode';
import type { ParseNodeOptions } from 'lib/client/parseBBCode/parseNode';
import parseNode from 'lib/client/parseBBCode/parseNode';

export type ParseBBCodeOptions<RemoveBBTags extends boolean | undefined = boolean | undefined> = (
	SanitizeBBCodeOptions & ParseNodeOptions<RemoveBBTags>
);

/** Sanitizes and parses a string containing HTML and BBCode. Returns a `ReactNode` of the parsed BBCode. */
const parseBBCode = <RemoveBBTags extends boolean | undefined = undefined>(
	bbString: string,
	{ removeBBTags, ...sanitizeOptions }: ParseBBCodeOptions<RemoveBBTags> = {}
) => {
	// Optimize for the common case of the input being empty.
	if (bbString === '') {
		return '';
	}

	return parseNode(
		sanitizeBBCode(
			// `noparse` tags must be processed before sanitization occurs to avoid the sanitizer transforming HTML that should be escaped in `noparse` tags.
			processNoparseTags(bbString),
			sanitizeOptions
		),
		{ removeBBTags }
	);
};

export default parseBBCode;
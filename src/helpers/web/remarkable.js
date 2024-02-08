/**
 * Copyright 2021 Olympe S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Remarkable } from 'remarkable';
import React from 'react';
import parse from 'html-react-parser';
import { getLogger } from 'logging';

/**
 * Provide a unique way of using Remarkable parser
 * (see https://www.npmjs.com/package/remarkable)
 */

// Options
const options = {
    html: true,
    xhtmlOut: true,
    breaks: true
};

// Core rules
const coreRules = [
    { name: 'block', enable: true },
    { name: 'abbr', enable: false },
    { name: 'references', enable: false },
    { name: 'inline', enable: true },
    { name: 'footnote_tail', enable: false },
    { name: 'abbr2', enable: false },
    { name: 'replacements', enable: false },
    { name: 'smartquotes', enable: false }
];

// Block rules
const blockRules = [
    { name: 'code', enable: false },
    { name: 'fences', enable: false },
    { name: 'blockquote', enable: false },
    { name: 'hr', enable: false },
    { name: 'list', enable: false },
    { name: 'footnote', enable: false },
    { name: 'heading', enable: false },
    { name: 'lheading', enable: false },
    { name: 'htmlblock', enable: false },
    { name: 'table', enable: false },
    { name: 'deflist', enable: false },
    { name: 'paragraph', enable: true }
];

// Inline rules
const inlineRules = [
    { name: 'text', enable: false },
    { name: 'newline', enable: true },
    { name: 'escape', enable: true },
    { name: 'backticks', enable: true },
    { name: 'del', enable: true },
    { name: 'ins', enable: false },
    { name: 'mark', enable: false },
    { name: 'emphasis', enable: true },
    { name: 'sub', enable: true },
    { name: 'sup', enable: true },
    { name: 'links', enable: true },
    { name: 'footnote_inline', enable: false },
    { name: 'footnote_ref', enable: false },
    { name: 'autolink', enable: true },
    { name: 'htmltag', enable: true },
    { name: 'entity', enable: false }
];

// Parser
const parser = new Remarkable(options);

// Apply selected rules
function applyRules(ruler, rules) {
    ruler.disable(rules.map(r => r.name));
    ruler.enable(rules.filter(r => r.enable).map(r => r.name));
}
applyRules(parser.core.ruler, coreRules);
applyRules(parser.block.ruler, blockRules);
applyRules(parser.inline.ruler, inlineRules);

/**
 * @param {string} text
 * @param {string} element
 * @return {Element}
 */
export function markdownTextToReactElement(text, element) {
    try {
        return parse(
            parser.render(text.replaceAll('\n', '<br/>'))
                .replace('<p>', `<${element}>`)
                .replace('</p>', `</${element}>`)
        );
    }
    catch(e) {
        getLogger('markdownTextToReactElement').error('Improper input in text property, got type ' + typeof text + ' instead of string.', e);
        return React.createElement('span', {}, 'Format error: invalid input');
    }
}
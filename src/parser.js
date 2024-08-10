const Parser = require('tree-sitter');
const JavaScript = require('tree-sitter-javascript');
const JSON = require('tree-sitter-json');

const LANGUAGE_MAPPING = {
    'javascript': JavaScript,
    'json': JSON
};

function get_parser(lang) {
    const parser = new Parser();
    const language = LANGUAGE_MAPPING[lang];
    if (!language) {
        throw new Error(`Unsupported language: ${lang}`);
    }
    parser.setLanguage(language);
    return parser;
}

function get_language(lang) {
    const language = LANGUAGE_MAPPING[lang];
    if (!language) {
        throw new Error(`Unsupported language: ${lang}`);
    }
    return language;
}

module.exports = {
    get_parser,
    get_language
};
#include "parser.h"
#include "tree_sitter/api.h"

// Include the generated headers for the parsers
extern "C" {
    TSLanguage *tree_sitter_javascript();
    TSLanguage *tree_sitter_json();
}

void InitParser(Napi::Env env, Napi::Object exports) {
    Napi::Object parsers = Napi::Object::New(env);

    parsers.Set("javascript", Napi::External<TSLanguage>::New(env, tree_sitter_javascript()));
    parsers.Set("json", Napi::External<TSLanguage>::New(env, tree_sitter_json()));

    exports.Set("parsers", parsers);
}
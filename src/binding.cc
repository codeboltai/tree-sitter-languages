#include <napi.h>
#include "parser.h"

Napi::Object InitAll(Napi::Env env, Napi::Object exports) {
    InitParser(env, exports);
    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, InitAll)
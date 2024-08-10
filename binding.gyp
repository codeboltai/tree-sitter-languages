{
  "targets": [
    {
      "target_name": "my_tree_sitter",
      "sources": [
        "src/binding.cc",
        "src/parser.cc"
      ],
      "include_dirs": [
        "<!(node -e \"require('node-addon-api').include\")",
        "path/to/tree-sitter-javascript/src",
        "path/to/tree-sitter-json/src"
      ],
      "dependencies": {
        "tree-sitter": ">=0.20.0"
      }
    }
  ]
}
"use strict";(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[7308],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=l,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81233:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=a(25773),l=a(30808),r=(a(27378),a(35318)),o=["components"],i={id:"schema-field",title:"`schema` field"},s=void 0,p={unversionedId:"getting-started/schema-field",id:"getting-started/schema-field",isDocsHomePage:!1,title:"`schema` field",description:"The schema field should point to your GraphQLSchema - there are multiple ways you can specify it and load your GraphQLSchema.",source:"@site/docs/getting-started/schema-field.md",sourceDirName:"getting-started",slug:"/getting-started/schema-field",permalink:"/docs/getting-started/schema-field",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/getting-started/schema-field.md",tags:[],version:"current",frontMatter:{id:"schema-field",title:"`schema` field"},sidebar:"sidebar",previous:{title:"codegen.yml",permalink:"/docs/getting-started/codegen-config"},next:{title:"`documents` field",permalink:"/docs/getting-started/documents-field"}},c=[{value:"How to use it?",id:"how-to-use-it",children:[{value:"Root level",id:"root-level",children:[]},{value:"Output-file level",id:"output-file-level",children:[]},{value:"Multiple schemas and client-side schema",id:"multiple-schemas-and-client-side-schema",children:[]}]},{value:"Available formats",id:"available-formats",children:[{value:"URL",id:"url",children:[]},{value:"JSON",id:"json",children:[]},{value:"Local <code>.graphql</code> files",id:"local-graphql-files",children:[]},{value:"Code Files",id:"code-files",children:[]},{value:"JavaScript export",id:"javascript-export",children:[]},{value:"String",id:"string",children:[]},{value:"GitHub",id:"github",children:[]},{value:"Git",id:"git",children:[]},{value:"Apollo Engine",id:"apollo-engine",children:[]}]},{value:"Custom Schema Loader",id:"custom-schema-loader",children:[]}],u={toc:c};function m(e){var t=e.components,a=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," field should point to your ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," - there are multiple ways you can specify it and load your ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLSchema"),"."),(0,r.kt)("p",null,"You can specify either a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," pointing to your schema, or ",(0,r.kt)("inlineCode",{parentName:"p"},"string[]")," point to multiple schemas, and they will be merged."),(0,r.kt)("h2",{id:"how-to-use-it"},"How to use it?"),(0,r.kt)("h3",{id:"root-level"},"Root level"),(0,r.kt)("p",null,"You can specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," field in your root level config, as follow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema: http://localhost:3000/graphql\ngenerates:\n  ./src/types.ts:\n    plugins:\n      - typescript\n")),(0,r.kt)("h3",{id:"output-file-level"},"Output-file level"),(0,r.kt)("p",null,"Or, you can specify it per-output file level. This way you can"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  ./src/types1.ts:\n    schema: http://server1.com/graphql\n    plugins:\n      - typescript\n  ./src/types2.ts:\n    schema: http://server2.com/graphql\n    plugins:\n      - typescript\n")),(0,r.kt)("h3",{id:"multiple-schemas-and-client-side-schema"},"Multiple schemas and client-side schema"),(0,r.kt)("p",null,"You can also specify ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," on both levels: root and output-file, and then GraphQL Code Generator will merge both schemas into one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema: http://localhost:3000/graphql\ngenerates:\n  ./src/types.ts:\n    schema: ./schema.graphql\n    plugins:\n      - typescript\n      - typescript-operations\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It's also useful if you have a remote schema coming from a server, and a client-side schema that available in your client-side.")),(0,r.kt)("h2",{id:"available-formats"},"Available formats"),(0,r.kt)("p",null,"The following can be specified as a single value, or as an array with mixed values."),(0,r.kt)("h3",{id:"url"},"URL"),(0,r.kt)("p",null,"You can specify a URL to load your ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," from:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema: http://localhost:3000/graphql\n")),(0,r.kt)("h4",{id:"supported-configuration"},"Supported Configuration"),(0,r.kt)("h5",{id:"headers"},(0,r.kt)("inlineCode",{parentName:"h5"},"headers")),(0,r.kt)("p",null,"You can also specify custom HTTP headers to be sent with the request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - http://localhost:3000/graphql:\n      headers:\n        Authorization: YOUR-TOKEN-HERE\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that spacing and indentation is very important in YAML, so please make sure it matches the examples above.")),(0,r.kt)("h5",{id:"customfetch"},(0,r.kt)("inlineCode",{parentName:"h5"},"customFetch")),(0,r.kt)("p",null,"You can specify a custom fetch function for the HTTP request, using the module name you wish to use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - http://localhost:3000/graphql:\n      customFetch: 'my-custom-fetch'\n")),(0,r.kt)("h5",{id:"method"},(0,r.kt)("inlineCode",{parentName:"h5"},"method")),(0,r.kt)("p",null,"You can specify a HTTP method to use for the introspection query. default is ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - http://localhost:3000/graphql:\n      method: GET\n")),(0,r.kt)("h3",{id:"json"},"JSON"),(0,r.kt)("p",null,"You can point to a local ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," file that contains ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/learn/introspection/"},"GraphQL Introspection")," JSON."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema: schema.json\n")),(0,r.kt)("h3",{id:"local-graphql-files"},"Local ",(0,r.kt)("inlineCode",{parentName:"h3"},".graphql")," files"),(0,r.kt)("p",null,"You can point to a single ",(0,r.kt)("inlineCode",{parentName:"p"},".graphql")," file that contains AST string of your schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema: schema.graphql\n")),(0,r.kt)("p",null,"Or, you can point to multiple files using a glob expression (codegen will merge the schema files for you):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema: 'src/**/*.graphql'\n")),(0,r.kt)("p",null,"You can also specify multiple patterns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - 'src/dir1/**/*.graphql'\n  - 'src/dir2/**/*.graphql'\n")),(0,r.kt)("p",null,"And, you can specify files to exclude/ignore, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," sign: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - './src/**/*.graphql'\n  - '!*.generated.graphql'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All provided glob expressions are evaluated together. The usage is similar to ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore"),".")),(0,r.kt)("h4",{id:"supported-configuration-1"},"Supported Configuration"),(0,r.kt)("h5",{id:"skipgraphqlimport"},(0,r.kt)("inlineCode",{parentName:"h5"},"skipGraphQLImport")),(0,r.kt)("p",null,"By default, codegen skips ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-import")," in favor of loading all files using glob expressions."),(0,r.kt)("p",null,"If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-import")," syntax in your schema definitions, you can tell codegen to use those import statements:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - 'src/dir1/**/*.graphql':\n      skipGraphQLImport: false\n")),(0,r.kt)("h5",{id:"commentdescriptions"},(0,r.kt)("inlineCode",{parentName:"h5"},"commentDescriptions")),(0,r.kt)("p",null,"This will convert all deprecated form of Graphql comments (marked with ",(0,r.kt)("inlineCode",{parentName:"p"},"#"),") into a GraphQL descriptions (marked with ",(0,r.kt)("inlineCode",{parentName:"p"},'"'),") during the parsing phase."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - 'src/dir1/**/*.graphql':\n      commentDescriptions: true\n")),(0,r.kt)("h5",{id:"assumevalidsdl"},(0,r.kt)("inlineCode",{parentName:"h5"},"assumeValidSDL")),(0,r.kt)("p",null,"Set to true to assume the SDL is valid, and skip any SDL syntax validations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - 'src/dir1/**/*.graphql':\n      assumeValidSDL: true\n")),(0,r.kt)("h3",{id:"code-files"},"Code Files"),(0,r.kt)("p",null,"You can use code files and the codegen will try to extract the GraphQL schema from it, based on ",(0,r.kt)("inlineCode",{parentName:"p"},"gql")," tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema: './src/**/*.ts'\n")),(0,r.kt)("p",null,"The codegen will try to load the file as an AST and look for explicit GraphQL strings, but if it can't find those, it will try to ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," the file and looks for operations in the default export."),(0,r.kt)("h4",{id:"supported-configuration-2"},"Supported Configuration"),(0,r.kt)("h5",{id:"norequire"},(0,r.kt)("inlineCode",{parentName:"h5"},"noRequire")),(0,r.kt)("p",null,"You can disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," if it causes errors for you (for example, because of different module system or missing deps):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - './src/**/*.ts':\n      noRequire: true\n")),(0,r.kt)("h5",{id:"nopluck"},(0,r.kt)("inlineCode",{parentName:"h5"},"noPluck")),(0,r.kt)("p",null,"You can disable the AST lookup phase, and tell codegen to skip and directly try to ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," each file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - './src/**/*.ts':\n      noPluck: true\n")),(0,r.kt)("h5",{id:"assumevalid"},(0,r.kt)("inlineCode",{parentName:"h5"},"assumeValid")),(0,r.kt)("p",null,"Set this to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in order to tell codegen to skip AST validation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - './src/**/*.ts':\n      assumeValid: true\n")),(0,r.kt)("h3",{id:"javascript-export"},"JavaScript export"),(0,r.kt)("p",null,"You can also specify a code file that exports your ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," object as named export ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," or as default export."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema: schema.js\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { buildSchema } = require('graphql');\n\nmodule.exports = buildSchema(/* GraphQL */ `\n  type MyType {\n    foo: String!\n  }\n\n  type Query {\n    myType: MyType!\n  }\n`);\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also import from TypeScript files, but don't forget to specify ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/require-field"},"require field"),".")),(0,r.kt)("h3",{id:"string"},"String"),(0,r.kt)("p",null,"You can specify your schema directly as an AST string in your config file. It's very useful for testing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema: 'type MyType { foo: String }    type Query { myType: MyType }'\n")),(0,r.kt)("h3",{id:"github"},"GitHub"),(0,r.kt)("p",null,"You can load your schema file from a remote GitHub file, using the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema: github:user/repo#branchName:path/to/file.graphql\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can load from a JSON file, ",(0,r.kt)("inlineCode",{parentName:"p"},".graphql")," file or from a code file containing ",(0,r.kt)("inlineCode",{parentName:"p"},"gql")," tag syntax.")),(0,r.kt)("h3",{id:"git"},"Git"),(0,r.kt)("p",null,"You can load your schema file from a Git repository, using the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema: git:branch:path/to/file.graphql\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can load from a JSON file, ",(0,r.kt)("inlineCode",{parentName:"p"},".graphql")," file or from a code file containing ",(0,r.kt)("inlineCode",{parentName:"p"},"gql")," tag syntax.")),(0,r.kt)("h3",{id:"apollo-engine"},"Apollo Engine"),(0,r.kt)("p",null,"You can load your schema from Apollo Engine, with the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - apollo-engine: \n      engine:\n        apiKey: APOLLO_ENGINE_KEY_ID\n      graph: GRAPH_ID\n      variant: current\n")),(0,r.kt)("h2",{id:"custom-schema-loader"},"Custom Schema Loader"),(0,r.kt)("p",null,"If your schema has a different or complicated way of loading, you can point to a single code file, that does that work for you."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - http://localhost:3000/graphql:\n      loader: ./my-url-loader.js\n  - schema.graphql:\n      loader: ./my-file-loader.js\n")),(0,r.kt)("p",null,"Your custom loader should export a default function that returns ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," object, or an identifier called ",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { buildSchema } = require('graphql');\nconst { readFileSync } = require('fs');\n\nmodule.exports = function(schemaString, config) {\n  // Your logic for loading your GraphQLSchema\n  return buildSchema(readFileSync(schemaString, { encoding: 'utf-8' }));\n};\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The second parameter passed to the loader function is a config object that includes a ",(0,r.kt)("inlineCode",{parentName:"p"},"pluginContext")," property. This value is passed to any executed plugins, so it can be modified by the loader to pass any additional information to those plugins.")))}m.isMDXComponent=!0}}]);
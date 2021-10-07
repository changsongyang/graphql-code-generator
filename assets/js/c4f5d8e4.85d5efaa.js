"use strict";(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[4195],{47812:function(e,t,n){n.r(t),n.d(t,{default:function(){return fe}});var a=n(25773),r=n(82218),s=n(27378),o=n(60042),i=n.n(o),c=n(11652),l=n(31142),p={buttons:"buttons_1r9m",features:"features_3azU",featureImage:"featureImage_ZtzX",headerCover:"headerCover_3ltZ",cover:"cover_3FaG",coverContainer:"coverContainer_1jTy",homeContainer:"homeContainer_2KOB",projectTitle:"projectTitle_1cf8",desktopOnly:"desktopOnly_3p-0",buttonsWrapper:"buttonsWrapper_2vxP"},u=n(9559),m=n(30808),g="button_1VTR",d="buttonContained_2pV-",h="mobileHide_3hm9",y=["mobileHide"],f=function(e){var t,n=e.mobileHide,r=(0,m.Z)(e,y);return s.createElement("button",(0,a.Z)({},r,{className:i()((t={},t[d]=r.contained,t[g]=!r.contained,t[h]=!!n,t[r.className]=!0,t))}),r.children)},v=n(93219),b=n(27791),E=n(57135),k=n.n(E),x=n(43329),N="picker_3XiF",C="exampleDesc_o-N0",w="exampleIcon_2Tik",j="exampleTag_2QTE",q="exampleTags_1_a0",S="container_1zEf",T="column_xq-3",P="title_3fGx",_="tabs_1EI5",O="tab_1lqR",G="activeTab_18FJ",Q="iconText_1JDY",L="logo_1uzv",D={"react-query":function(e){return s.createElement("img",{alt:"React-Query",className:w,key:e,src:"/img/icons/react-query.svg"})},typescript:function(e){return s.createElement("img",{alt:"TypeScript",className:w,key:e,src:"/img/icons/typescript.svg"})},react:function(e){return s.createElement("img",{alt:"React",className:w,key:e,src:"/img/icons/react.svg"})},apollo:function(e){return s.createElement("img",{alt:"Apollo GraphQL",className:w,key:e,src:"/img/icons/apollo.svg"})},csharp:function(e){return s.createElement("img",{alt:"C#",className:w,key:e,src:"/img/icons/csharp.svg"})},graphql:function(e){return s.createElement("img",{alt:"GraphQL",className:w,key:e,src:"/img/icons/graphql.svg"})},vue:function(e){return s.createElement("img",{alt:"VueJS",className:w,key:e,src:"/img/icons/vue.svg"})},java:function(e){return s.createElement("img",{alt:"Java",className:w,key:e,src:"/img/icons/java.svg"})},flow:function(e){return s.createElement("img",{alt:"FlowJS",className:w,key:e,src:"/img/icons/flow.svg"})},angular:function(e){return s.createElement("img",{alt:"Angular",className:w,key:e,src:"/img/icons/angular.svg"})},urql:function(e){return s.createElement("img",{alt:"urql",className:w,key:e,src:"/img/icons/urql.svg"})},nodejs:function(e){return s.createElement("img",{alt:"NodeJS",className:w,key:e,src:"/img/icons/nodejs.svg"})},"type-graphql":function(e){return s.createElement("img",{alt:"type-graphql",className:w,key:e,src:"/img/icons/type-graphql.png"})},mongodb:function(e){return s.createElement("img",{alt:"MongoDB",className:w,key:e,src:"/img/icons/mongodb.png"})}},U="scalar Date\n\nschema {\n  query: Query\n}\n\ntype Query {\n  me: User!\n  user(id: ID!): User\n  allUsers: [User]\n  search(term: String!): [SearchResult!]!\n  myChats: [Chat!]!\n}\n\nenum Role {\n  USER,\n  ADMIN,\n}\n\ninterface Node {\n  id: ID!\n}\n\nunion SearchResult = User | Chat | ChatMessage\n\ntype User implements Node {\n  id: ID!\n  username: String!\n  email: String!\n  role: Role!\n}\n\ntype Chat implements Node {\n  id: ID!\n  users: [User!]!\n  messages: [ChatMessage!]!\n}\n\ntype ChatMessage implements Node {\n  id: ID!\n  content: String!\n  time: Date!\n  user: User!\n}\n",F="query findUser($userId: ID!) {\n  user(id: $userId) {\n    ...UserFields\n  }\n}\n\nfragment UserFields on User {\n  id\n  username\n  role\n}",I={TypeScript:[{name:"Schema types",description:"This is the simplest example of generating output based on a GraphQL Schema. Codegen will generate the compatible base type, based on your schema. These type declarations are 1:1 to your schema, and it will be used as base types for other Codegen plugins (such as `typescript-operations`), while combined into the same file.",tags:["typescript","frontend","backend"],config:"generates:\n  types.ts:\n    plugins:\n      - typescript",schema:U,documents:""},{name:"Operations types",description:"This examples uses the based types from `typescript` plugin, and generates TypeScript signature based on your GraphQL operations (query/mutation/subscription/fragment) and the selection set you choose in each operation.",tags:["typescript","frontend"],config:"generates:\n  operations-types.ts:\n    plugins:\n      - typescript\n      - typescript-operations",schema:U,documents:F},{name:"Operations types (near-operation-file)",description:"This examples uses the based types from `typescript` plugin, and generates TypeScript signature based on your GraphQL operations (query/mutation/subscription/fragment) and the selection set you choose in each operation. It uses Presets feature to manipulate the output of the codegen, and generate multiple files. In this example, it will generate a file per each operation, near the source file.",tags:["typescript","frontend"],config:"generates:\n  ./types.ts:\n    plugins:\n      - typescript\n  ./:\n    preset: near-operation-file\n    presetConfig:\n      extension: .generated.tsx\n      baseTypesPath: types.ts\n    plugins:\n      - typescript-operations\n      - typescript-react-apollo",schema:U,documents:F},{name:"Operations types (with Pick)",description:"This is a similar output to regular usage of `typescript-operations`, but instead of using `Pick`, it will use the primitive value when possible, and reduce the output to the minimal types possible.",tags:["typescript","frontend"],config:"generates:\n  operations-types.ts:\n    config:\n      preResolveTypes: false\n    plugins:\n      - typescript\n      - typescript-operations",schema:U,documents:F},{name:"TypedDocumentNode",description:"This plugin generates a per-compiled version of `DocumentNode`, with the result and variables types bundled into the object, using this library: https://github.com/dotansimha/graphql-typed-document-node",tags:["typescript","frontend"],config:"generates:\n  operations-types.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typed-document-node",schema:U,documents:F},{name:"Apollo-Client v3 TypePolicies",description:"This plugin generates fully-typed `keyFields` and Type-Policies for Apollo-Client v3.",tags:["typescript","apollo"],config:"generates:\n      type-policies.ts:\n        plugins:\n          - typescript-apollo-client-helpers",schema:U},{name:"React-Query Hooks",description:'This example uses types generated by `typescript` and `typescript-operations`, and creates a fully type-safe React Hooks, based on your GraphQL operations, that wraps "react-query" hooks.',tags:["typescript","react","react-query","frontend"],config:"generates:\n  types-and-hooks.tsx:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-react-query",schema:U,documents:F},{name:"RTK-Query Hooks",description:"This example uses types generated by `typescript` and `typescript-operations`, and creates fully type-safe React Hooks, based on your GraphQL operations, by injecting those into an existing RTK-Query api.",tags:["typescript","react","rtk-query","redux","frontend"],config:"generates:\n  types-and-hooks.tsx:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-rtk-query:\n          importBaseApiFrom: 'src/app/api/baseApi'\n          exportHooks: true",schema:U,documents:F},{name:"React-Apollo Hooks",description:"This example uses types generated by `typescript` and `typescript-operations`, and creates fully type-safe React Hooks, based on your GraphQL operations.",tags:["typescript","react","apollo","frontend"],config:"generates:\n  types-and-hooks.tsx:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-react-apollo",schema:U,documents:F},{name:"React-Apollo Data Components (deprecated)",description:"This example uses types generated by `typescript` and `typescript-operations`, and creates a fully type-safe React Components, based on your GraphQL operations.",tags:["typescript","react","apollo","frontend"],config:"generates:\n  types-and-components.tsx:\n    config:\n      withComponent: true\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-react-apollo",schema:U,documents:F},{name:"React-Apollo Data HOC (deprecated)",description:"This example uses types generated by `typescript` and `typescript-operations`, and creates a fully type-safe React HOC, based on your GraphQL operations.",tags:["typescript","react","apollo","frontend"],config:"generates:\n  types-and-hoc.tsx:\n    config:\n      withHOC: true\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-react-apollo",schema:U,documents:F},{name:"Vue-Apollo composition functions",description:"This example uses types generated by `typescript` and `typescript-operations`, and creates a fully type-safe Vue composition components, based on your GraphQL operations.",tags:["typescript","vue","apollo","frontend"],config:"generates:\n  composition-functions.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-vue-apollo",schema:U,documents:F},{name:"Vue-Apollo Smart Operation functions",description:"This example uses types generated by `typescript` and `typescript-operations`, and creates fully type-safe Vue Apollo Smart Query options and mutation functions, based on your GraphQL operations.",tags:["typescript","vue","apollo","frontend"],config:"generates:\n  composition-functions.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-vue-apollo-smart-ops",schema:U,documents:F},{name:"Apollo-Angular Components",description:"This example uses types generated by `typescript` and `typescript-operations`, and creates a fully type-safe Angular `Service`, based on your GraphQL operations.",tags:["typescript","angular","apollo","frontend"],config:"generates:\n  components.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-apollo-angular",schema:U,documents:F},{name:"Urql",description:"This example uses types generated by `typescript` and `typescript-operations`, and creates a fully type-safe Urql Hooks, based on your GraphQL operations.",tags:["typescript","urql","react","frontend"],config:"generates:\n  components.tsx:\n    config:\n      withHooks: true\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-urql",schema:U,documents:F},{name:"Stencil-Apollo Components",description:"This example uses types generated by `typescript` and `typescript-operations`, and creates a fully Stencil Components, based on your GraphQL operations.",tags:["typescript","apollo","stencil","frontend"],config:"generates:\n  components.tsx:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-stencil-apollo",schema:U,documents:F},{name:"Resolvers Signature",description:"This example demonstrate how to generate a basic resolver signature, based on your GraphQL schema. With the default setup, you'll need to adjust your models types to the same structure of your GraphQL schema (see mappers example for more advanced usage).\n      \n[You can read more about using this plugin here](https://the-guild.dev/blog/better-type-safety-for-resolvers-with-graphql-codegen)",tags:["nodejs","backend"],config:"generates:\n  resolvers.ts:\n    plugins:\n      - typescript\n      - typescript-resolvers",schema:U,documents:""},{name:"Resolvers Signature (with custom models)",description:"This example demonstrate how to generate resolvers signature, based on your GraphQL schema, with your model types (`mappers` configuration)\n      \n[You can read more about using this plugin here](https://the-guild.dev/blog/better-type-safety-for-resolvers-with-graphql-codegen)",tags:["nodejs","backend"],config:"generates:\n  resolvers.ts:\n    config:\n      mappers:\n        User: ./models#UserDbObject\n        Chat: ./models#ChatModel\n    plugins:\n      - typescript\n      - typescript-resolvers",schema:U,documents:""},{name:"graphql-request typed SDK",tags:["nodejs","backend","frontend"],config:"generates:\n  sdk.ts:\n    plugins:\n      - typescript\n      - typescript-graphql-request",schema:U,documents:F},{name:"Generic SDK",tags:["nodejs","backend"],config:"generates:\n  sdk.ts:\n    plugins:\n      - typescript\n      - typescript-generic-sdk",schema:U,documents:F},{name:"type-graphql",tags:["type-graphql","nodejs","backend"],config:"generates:\n  types.ts:\n    plugins:\n      - typescript-type-graphql",schema:U,documents:""},{name:"MongoDB Models",tags:["mongodb","nodejs","backend"],config:"generates:\n    models.ts:\n      plugins:\n        - typescript-mongodb",schema:'type User @entity {\n    id: ID! @id\n    username: String! @column\n    email: String! @column @map(\n      path: "login.email"\n    )\n    profile: Profile! @column\n    chats: [Chat!]! @link\n  }\n  \n  type Profile @entity(embedded: true,\n    additionalFields: [\n      { path: "dateOfBirth", type: "string" }\n    ]) {\n    name: String! @column\n    age: Int\n  }\n  \n  type Chat @entity {\n    id: ID! @id\n    users: [User!]! @link\n    messages: [ChatMessage!]!\n  }\n  \n  type ChatMessage @entity {\n    id: ID! @id\n    chat: Chat! @link\n    content: String! @column\n    author: User! @link\n  }\n  ',documents:""}],".NET":[{name:"C# Schema types",tags:["csharp","frontend","backend"],config:"generates:\n  src/main/c-sharp/my-org/my-app/Types.cs:\n    plugins:\n      - c-sharp",schema:U,documents:""},{name:"C# Operations",tags:["csharp","frontend"],config:"generates:\n  src/main/c-sharp/my-org/my-app/Operations.cs:\n    plugins:\n      - c-sharp-operations",schema:U,documents:F}],Java:[{name:"Types (Enum & Input)",tags:["java","backend"],config:"generates:\n  src/main/java/my/app/generated/Types.java:\n    plugins:\n      - java",schema:U,documents:""},{name:"Resolvers Signature",tags:["java","backend"],config:"generates:\n  src/main/java/my/app/generated/Resolvers.java:\n    plugins:\n      - java-resolvers",schema:U,documents:""},{name:"Apollo Android",tags:["java","apollo","frontend"],config:'generates:\n  ./app/src/main/java/:\n    preset: java-apollo-android\n    config:\n      package: "com.my.paackage.generated.graphql"\n      typePackage: "com.my.paackage.generated.Types"\n      fragmentPackage: "com.my.paackage.generated.Fragment"\n    plugins:\n      - java-apollo-android',schema:U,documents:F}],Flow:[{name:"Schema types",tags:["flow","frontend","backend"],config:"generates:\n  types.flow.js:\n    plugins:\n      - flow\n    ",schema:U,documents:""},{name:"Resolvers Signature",tags:["flow","backend"],config:"generates:\n  resolvers.flow.js:\n    plugins:\n      - flow\n      - flow-resolvers\n    ",schema:U,documents:""},{name:"Operations types",tags:["flow","frontend"],config:"generates:\n  types.flow.js:\n    plugins:\n      - flow\n      - flow-operations\n    ",schema:U,documents:F}],Other:[{name:"JSDoc",config:"generates:\n  schema.js:\n    plugins:\n      - jsdoc",schema:U,documents:""},{name:"Introspection JSON",tags:["graphql"],config:"generates:\n  schema.json:\n    plugins:\n      - introspection",schema:U,documents:""},{name:"Schema AST",tags:["graphql"],config:"generates:\n  schema.graphql:\n    plugins:\n      - schema-ast",schema:U,documents:""},{name:"Fragment Matcher",tags:["typescript","apollo","frontend"],config:"generates:\n  fragment-matcher.json:\n    plugins:\n      - fragment-matcher",schema:U,documents:""}]},A={ts:"typescript","d.ts":"typescript",tsx:"typescript",graphql:"graphql",json:"json",java:"java",js:"javascript",jsx:"javascript"};function R(e){var t;return"string"==typeof e?[(t={},t[e]={},t)]:Array.isArray(e)?e.map((function(e){var t;return"string"==typeof e?((t={})[e]={},t):e})):"object"==typeof e?Object.keys(e).reduce((function(t,n){var a;return[].concat(t,[(a={},a[n]=e[n],a)])}),[]):[]}var Z={"near-operation-file":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(8646)]).then(n.bind(n,98646))},"import-types":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(1586)]).then(n.bind(n,1586))},"java-apollo-android":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(6305),n.e(3067)]).then(n.bind(n,67101))}},H={jsdoc:function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(5245)]).then(n.bind(n,25245))},java:function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(2889)]).then(n.bind(n,2889))},"java-resolvers":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(8661)]).then(n.bind(n,18661))},"fragment-matcher":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(8199)]).then(n.bind(n,28199))},flow:function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(752)]).then(n.bind(n,50752))},"flow-operations":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(3850)]).then(n.bind(n,3850))},"flow-resolvers":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(8054)]).then(n.bind(n,88054))},typescript:function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(4654)]).then(n.bind(n,54654))},"typescript-operations":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(8418)]).then(n.bind(n,68418))},"typescript-resolvers":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(166)]).then(n.bind(n,20166))},"typescript-apollo-angular":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(3347)]).then(n.bind(n,3347))},"typescript-react-apollo":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(2484)]).then(n.bind(n,42484))},"typescript-vue-apollo":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(9092)]).then(n.bind(n,89092))},"typescript-vue-apollo-smart-ops":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(1089)]).then(n.bind(n,11089))},"typescript-vue-urql":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(3137)]).then(n.bind(n,53137))},"typescript-stencil-apollo":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(7499)]).then(n.bind(n,67499))},"typescript-graphql-files-modules":function(){return n.e(5149).then(n.bind(n,55149))},"typescript-graphql-request":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(9356)]).then(n.bind(n,29356))},"typescript-generic-sdk":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(6564)]).then(n.bind(n,56564))},"typescript-type-graphql":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(918)]).then(n.bind(n,90918))},"typescript-react-query":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(1211)]).then(n.bind(n,91211))},"typescript-rtk-query":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(5633)]).then(n.bind(n,85633))},"typescript-mongodb":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(8466)]).then(n.bind(n,98466))},"java-apollo-android":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(6305),n.e(3067)]).then(n.bind(n,67101))},"c-sharp-operations":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(5185)]).then(n.bind(n,45185))},"c-sharp":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(2717)]).then(n.bind(n,22717))},"typescript-urql":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(5120)]).then(n.bind(n,25120))},"typed-document-node":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(3903),n.e(3353),n.e(2470),n.e(4647)]).then(n.bind(n,94647))},add:function(){return n.e(3340).then(n.bind(n,43340))},time:function(){return Promise.all([n.e(6243),n.e(4623)]).then(n.bind(n,18999))},introspection:function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(5022),n.e(8142)]).then(n.bind(n,8142))},"schema-ast":function(){return Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(3903),n.e(8345)]).then(n.bind(n,98345))},"typescript-apollo-client-helpers":function(){return Promise.all([n.e(4553),n.e(2228)]).then(n.bind(n,62228))}},M=n(30138),V=["generates"];function z(e,t,n){return J.apply(this,arguments)}function J(){return(J=(0,b.Z)(k().mark((function e(t,a,r){var s,o,i,c,l,p,u,g,d,h,y,f,v,E,x,N,C;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=[],e.next=4,Promise.all([Promise.resolve().then(n.t.bind(n,43329,23)).then((function(e){return"default"in e?e.default:e})),Promise.all([n.e(4553),n.e(6457),n.e(7665),n.e(3903),n.e(2061),n.e(3714)]).then(n.bind(n,23714)).then((function(e){return"default"in e?e.default:e})),Promise.all([n.e(4553),n.e(6457),n.e(5022),n.e(3903),n.e(3353)]).then(n.bind(n,73353)).then((function(e){return"default"in e?e.default:e}))]);case 4:o=e.sent,i=o[0].load,c=o[1].codegen,l=o[2].parse,p=t.replace(/\t/g,"  "),u=i(p),g=u.generates,d=(0,m.Z)(u,V),h=d.config||{},y=[],f=k().mark((function e(){var t,n,s,o,i,c,p,u,m,g;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=E[v],n=t[0],s=t[1],o=!!s.preset,i=R(s.plugins||s),c=s.config,p={},e.next=7,Promise.all(i.map(function(){var e=(0,b.Z)(k().mark((function e(t){var n;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.keys(t)[0],e.prev=1,e.next=4,H[n]();case 4:p[n]=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),M.error('Unable to find codegen plugin named "'+n+'"...');case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()));case 7:if(u=Object.assign({},h,c),o){e.next=12;break}y.push({filename:n,plugins:i,schema:l(a),documents:r?[{location:"operation.graphql",document:l(r)}]:[],config:u,pluginMap:p}),e.next=22;break;case 12:return e.next=14,Z[s.preset]();case 14:return m=e.sent,g="function"==typeof m?m:m.preset,e.t0=y.push,e.t1=y,e.next=20,g.buildGeneratesSection({baseOutputDir:n,presetConfig:s.presetConfig||{},plugins:i,schema:l(a),documents:r?[{location:"operation.graphql",document:l(r)}]:[],config:u,pluginMap:p});case 20:e.t2=e.sent,e.t0.apply.call(e.t0,e.t1,e.t2);case 22:case"end":return e.stop()}}),e)})),v=0,E=Object.entries(g);case 14:if(!(v<E.length)){e.next=19;break}return e.delegateYield(f(),"t0",16);case 16:v++,e.next=14;break;case 19:x=0,N=y;case 20:if(!(x<N.length)){e.next=32;break}return C=N[x],e.t1=s,e.t2=C.filename,e.next=26,c(C);case 26:e.t3=e.sent,e.t4={filename:e.t2,content:e.t3},e.t1.push.call(e.t1,e.t4);case 29:x++,e.next=20;break;case 32:return e.abrupt("return",s);case 35:if(e.prev=35,e.t5=e.catch(0),M.error(e.t5),!e.t5.details){e.next=42;break}return e.abrupt("return","\n      "+e.t5.message+":\n      \n      "+e.t5.details+"\n      ");case 42:if(!e.t5.errors){e.next=46;break}return e.abrupt("return",e.t5.errors.map((function(e){return e.message+": \n"+e.details})).join("\n"));case 46:return e.abrupt("return",e.t5.message);case 47:case"end":return e.stop()}}),e,null,[[0,35]])})))).apply(this,arguments)}var W="loadingContainer_XH7T";function B(e){var t=e.color,n=e.height;return s.createElement("div",{className:W,style:{color:t,height:n}},s.createElement("div",null,"Loading..."))}var K=n(67915),Y=n(74699),X=n(60873),$=n(33738),ee=function(){return s.createElement("div",null)};r.Z.canUseDOM&&(ee=n(84901).ZP);var te=function(e){var t=e.value,n=e.lang,a=e.readOnly,r=e.onEdit;if("undefined"==typeof window)return null;var o=(0,$.TC)().isDarkTheme,i={readOnly:a,minimap:{enabled:!1}};return s.createElement(ee,{height:"40vh",language:n,theme:o?"vs-dark":"vs",value:t,options:i,onChange:function(e){return r(e)}})},ne=n(67425),ae=function(e){var t=e.outputArray,n=e.editorProps,r=e.error,o=s.useState(0),c=o[0],l=o[1],p=r||(t&&t[c]?t[c].content:"");return s.useEffect((function(){l(0)}),[t]),s.createElement(s.Fragment,null,s.createElement("div",{className:P},s.createElement("div",{className:_},(t||[]).map((function(e,t){var n;return s.createElement("div",{onClick:function(){return l(t)},key:e.filename,className:i()((n={},n[O]=!0,n[G]=c===t,n))},(0,ne.basename)(e.filename))})))),s.createElement(te,(0,a.Z)({},n,{value:p})))};function re(e){var t=e.setSchema,n=e.schema,a=e.setDocuments,r=e.documents,o=e.setConfig,i=e.config,c=e.mode,l=e.error,p=e.output;return s.createElement(s.Fragment,null,s.createElement("div",{className:T},s.createElement("div",{className:P},s.createElement("img",{className:L,alt:"GraphQL",src:"/img/GraphQL_Logo.svg"}),s.createElement("span",{className:Q},"schema.graphql")),s.createElement(te,{lang:"graphql",onEdit:t,value:n})),s.createElement("div",{className:T},s.createElement("div",{className:P},s.createElement("img",{className:L,alt:"GraphQL",src:"/img/GraphQL_Logo.svg"}),s.createElement("span",{className:Q},"operation.graphql")),s.createElement(te,{lang:"graphql",onEdit:a,value:r||"# This example isn't\n# using GraphQL operations"})),s.createElement("div",{className:T},s.createElement("div",{className:P},s.createElement("img",{className:L,alt:"Codegen",src:"/img/logo.svg"}),s.createElement("span",{className:Q},"codegen.yml")),s.createElement(te,{lang:"yaml",onEdit:o,value:i})),s.createElement("div",{className:T,style:{minWidth:"34vw",maxWidth:"34vw"}},s.createElement(ae,{editorProps:{lang:c,readOnly:!0},error:l,outputArray:p})))}var se=n(30138),oe=Object.keys(I).map((function(e){return{label:e,options:I[e].map((function(t,n){return Object.assign({},t,{selectId:e+"__"+n})}))}}));function ie(e,t,n,a){var r=s.useState(null),o=r[0],i=r[1],c=s.useState(null),l=c[0],p=c[1];function u(){return(u=(0,b.Z)(k().mark((function a(){var r;return k().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,z(e,t,n);case 2:"string"==typeof(r=a.sent)?(p(null),i(r)):(p(r),i(null));case 4:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return s.useEffect((function(){!function(){u.apply(this,arguments)}()}),[e,t,n,a]),{error:o,output:l}}var ce="TypeScript",le=0,pe=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={hasError:!1},n}(0,v.Z)(t,e),t.getDerivedStateFromError=function(){return{hasError:!0}};var n=t.prototype;return n.componentDidCatch=function(e,t){se.error(e,t)},n.render=function(){return this.state.hasError?s.createElement("span",null,"Something went wrong."):this.props.children},t}(s.Component),ue=function(){var e=(0,$.TC)().isDarkTheme,t=s.useState(ce+"__"+le),n=t[0],a=t[1],r=s.useState(I[ce][le].schema),o=r[0],i=r[1],c=s.useState(I[ce][le].documents),l=c[0],p=c[1],u=s.useState(I[ce][le].config),m=u[0],g=u[1],d=ie(m,o,l,n),h=d.output,y=d.error,f=null;try{var v=(0,x.load)(m||"");f="typescript"===(f=function(e){var t=Object.keys(e.generates)[0].split("."),n=t[t.length-1];return A[n]}(v)||"typescript")?"text/typescript":f}catch(T){}var b=null;if(n){var E=n.split("__"),k=E[0],w=E[1];b=I[k][w].description}return s.createElement("div",null,s.createElement("div",{className:N},s.createElement("div",null,s.createElement("h3",null,"Choose Live Example: ")),s.createElement("div",null,s.createElement(K.ZP,{isSearchable:!1,styles:{menu:function(t){return Object.assign({},t,e?{backgroundColor:"black"}:{})},control:function(t){return Object.assign({},t,e?{backgroundColor:"black"}:{})},container:function(e){return Object.assign({},e,{display:"inline-block",width:"100%",textAlign:"left"})},option:function(t,n){var a=n.isFocused;return Object.assign({},t,{fontSize:13},e&&a?{backgroundColor:"gray"}:{})},singleValue:function(t){return Object.assign({},t,{width:"100%"},e?{color:"white"}:{})}},isMulti:!1,isClearable:!1,onChange:function(e){return function(e){var t=e.split("__"),n=t[0],r=t[1];i(I[n][r].schema),p(I[n][r].documents),g(I[n][r].config),a(e)}(e.selectId)},getOptionValue:function(e){return e.selectId},getOptionLabel:function(e){return s.createElement(s.Fragment,null,s.createElement("span",null,e.name),s.createElement("span",{className:q},e.tags&&e.tags.length?e.tags.map((function(t,n){return D[t]?D[t](e.name+"_"+n):s.createElement("span",{key:e.name+"_"+n,className:j},t)})):null))},defaultValue:oe[0].options[0],options:oe}),s.createElement("div",{className:C},b?s.createElement(X.Z,{source:b}):null))),s.createElement("div",{className:S},s.createElement(Y.Z,null,(function(){return s.createElement(pe,null,s.createElement(s.Suspense,{fallback:s.createElement(B,{color:e?"#fff":"#000",height:"450px"})},s.createElement(re,{setSchema:i,schema:o,setDocuments:p,documents:l,setConfig:g,config:m,mode:f,error:y,output:h})))}))))},me=n(27061);r.Z.canUseDOM&&(me.hrtime=function(){return null});var ge=[{title:s.createElement(s.Fragment,null,"Generate Code Instantly"),imageUrl:"img/gear.svg",description:s.createElement(s.Fragment,null,"Generate code from your GraphQL schema and GraphQL operations with a single function call regardless of your environment or code format.")},{title:s.createElement(s.Fragment,null,"Watch For Changes"),imageUrl:"img/eye.svg",description:s.createElement(s.Fragment,null,"Watch for changes in your GraphQL schema and operations, and automatically generate code as you go. Codegen easily integrates into your development workflow.")},{title:s.createElement(s.Fragment,null,"Customize Easily"),imageUrl:"img/puzzle.svg",description:s.createElement(s.Fragment,null,"One of the goals of GraphQL Codegen is to allow you to easily customize the output, and add custom behaviour according to your needs.")},{title:s.createElement(s.Fragment,null,"And more!"),imageUrl:"img/more-options.svg",description:s.createElement(s.Fragment,null,"You can generate your resolvers' signatures, dump schemas, model types, query builders, React Hooks, Angular Services, and much more!")}];function de(e){var t=e.imageUrl,n=e.title,a=e.description,r=(0,l.Z)(t);return s.createElement("div",{className:i()("col col--3",p.feature)},r&&s.createElement("div",{className:"text--center"},s.createElement("img",{className:p.featureImage,src:r,alt:n})),s.createElement("h3",null,n),s.createElement("p",null,a))}function he(e){return s.createElement("div",{className:p.homeContainer},s.createElement("img",{className:p.desktopOnly,src:"/img/hexagons/blue.svg",style:{position:"absolute",left:"350px",top:"100px",height:"30px"}}),s.createElement("img",{className:p.desktopOnly,src:"/img/hexagons/pink.svg",style:{position:"absolute",left:"100px",top:"200px",height:"150px"}}),s.createElement("img",{className:p.desktopOnly,src:"/img/hexagons/blue.svg",style:{position:"absolute",left:"250px",top:"450px",height:"70px"}}),s.createElement("img",{className:p.desktopOnly,src:"/img/hexagons/pink.svg",style:{position:"absolute",right:"300px",top:"150px",height:"70px"}}),s.createElement("img",{className:p.desktopOnly,src:"/img/hexagons/blue.svg",style:{position:"absolute",right:"200px",top:"350px",height:"100px"}}),s.createElement("div",{className:p.homeSplashFade},s.createElement("div",{className:[p.wrapper,p.homeWrapper]},e.children)))}function ye(){return s.createElement("div",{className:p.coverContainer},s.createElement("img",{src:"img/gql-codegen-cover.png",className:p.cover}),s.createElement("h3",{className:p.projectTitle},"Generate code from your GraphQL schema and operations with a simple CLI"),s.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/@graphql-codegen/cli?color=%23e15799&label=cli\xa0version&style=for-the-badge"}))}var fe=function(){return s.createElement(s.Fragment,null,s.createElement(c.Z,{title:"GraphQL Code Generator",description:""},s.createElement("header",null,s.createElement(he,null,s.createElement("div",{className:p.inner},s.createElement(ye,null),s.createElement("div",{className:p.buttonsWrapper},s.createElement(f,{mobileHide:!0},s.createElement(u.Z,{to:"#live-demo"},"Try It Out Live")),s.createElement(f,null,s.createElement(u.Z,{to:"/docs/getting-started/index"},"View Docs")))))),s.createElement("div",{className:i()(p.liveDemo,p.desktopOnly)},s.createElement("a",{id:"live-demo"}),s.createElement(ue,null)),s.createElement("main",null,ge&&ge.length&&s.createElement("section",{className:p.features},s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},ge.map((function(e,t){return s.createElement(de,(0,a.Z)({key:t},e))}))))))))}}}]);
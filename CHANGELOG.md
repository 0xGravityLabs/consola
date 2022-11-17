# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.5.8](https://github.com/unjs/consola/compare/v3.0.1...v2.5.8) (2022-11-17)

### [3.0.1](https://github.com/unjs/consola/compare/v3.0.0...v3.0.1) (2022-11-17)

## 3.0.0 (2022-11-17)


### ⚠ BREAKING CHANGES

* Use new additionalColor prop
* lot's of internals had been changed.
* Behavior may be changed in some conditions

### Features

* add __VERSION__ to consola prototype ([982c8ca](https://github.com/unjs/consola/commit/982c8cae58157d0bdf4316dddd75e3a011392ff7))
* add aliases ([cbea7bd](https://github.com/unjs/consola/commit/cbea7bdccce25f9aad14bd67e709821ec1b601c7))
* add assignGlobalConsola helper ([1af28f7](https://github.com/unjs/consola/commit/1af28f71567b2d3a2cda76248f48e5320547f332))
* add getter/setter for level ([7af5ed5](https://github.com/unjs/consola/commit/7af5ed52d33b5e5afbb8109b97bcf2b99995c1c2))
* add global.consola ([4da784d](https://github.com/unjs/consola/commit/4da784d2fdf6ed04ef98d29a0e7c6d84837121c6))
* add log type for console compability ([96a8162](https://github.com/unjs/consola/commit/96a816219330c873f92d8edb6ea422a5d1cb7a13))
* add shmancy reporter ([dc6121a](https://github.com/unjs/consola/commit/dc6121ae9ec05e149d336bfdaefe6bb2b409bc65))
* add symbols to browser ([30cd4f0](https://github.com/unjs/consola/commit/30cd4f0a117733217c5f4d0e0725f122715ef03e))
* add sync/async write ([8525525](https://github.com/unjs/consola/commit/85255257ff25a4942683bd04db140dd41b14ad36))
* add typescript typings ([#24](https://github.com/unjs/consola/issues/24)) ([0853a6f](https://github.com/unjs/consola/commit/0853a6f39591d0765b2a76617d0d580c9f82b948))
* align basic and fancy reporter tags ([38a4729](https://github.com/unjs/consola/commit/38a47296da8b62dd6b10e6ab984af434c42c18ad))
* always hide right side on width < 80 ([07d8246](https://github.com/unjs/consola/commit/07d82465bf70ad14c1d7296c5e0b973e097d909b))
* **basic:** support additional field ([b50cad8](https://github.com/unjs/consola/commit/b50cad81bdb0efb0328d1d1f09d772f5eee003c2))
* better stack formater ([f5acb3c](https://github.com/unjs/consola/commit/f5acb3c3348c44922927e58edefea43e312ca40b))
* browser reporter improvements ([591d0b4](https://github.com/unjs/consola/commit/591d0b45e179fb82d524ef8d60fd4442ea36d6cb)), closes [#31](https://github.com/unjs/consola/issues/31)
* **browser:** add support of formatted strings ([#66](https://github.com/unjs/consola/issues/66)) ([920f313](https://github.com/unjs/consola/commit/920f313dba322c34ccd1b2f08afba59122c3b8e7))
* **browser:** fancier logs ([b64f337](https://github.com/unjs/consola/commit/b64f337459c7c28ea725f0864a2fab33a592e1eb))
* count spam log ([197a6b3](https://github.com/unjs/consola/commit/197a6b398e7475e20e114ac488f9645bb4d8088e))
* default `logLevel` to 1 in test environments ([#134](https://github.com/unjs/consola/issues/134)) ([b839b0d](https://github.com/unjs/consola/commit/b839b0d5e583f57d1a028af6995fcf2aeb4fb052)), closes [#131](https://github.com/unjs/consola/issues/131)
* detect version changes and throw a warning ([73bdd1a](https://github.com/unjs/consola/commit/73bdd1a62ef7041bf217ffbcfefe8c0f886a6845))
* expose constructor and reporters ([3a8f662](https://github.com/unjs/consola/commit/3a8f6627d30c161a1b40542d5416e09c2b52751f))
* **fancy/basic:** support logObj.stack field ([aa2216f](https://github.com/unjs/consola/commit/aa2216fa8bd895124acfe5a3093f5b78a11c5b49))
* **fancy:** highlight keywords with grave accent char ([b3e09fd](https://github.com/unjs/consola/commit/b3e09fd92be292e3f6e52a1f41b8d9e396e99dc1))
* **fancy:** look like jest traces ([ecae238](https://github.com/unjs/consola/commit/ecae2388a9462b7e9464ba030cef8f8bac33dac3))
* **fancy:** move right to the left if length is <= 80 ([34738c7](https://github.com/unjs/consola/commit/34738c7d1c0e8ac57c98d45696ef757c6c8e248c))
* **fancy:** support icon field ([0123bed](https://github.com/unjs/consola/commit/0123bed33cc9d166e94530bd06348e2715448699))
* hide time from basic logger as it is commonly used in CI environments ([68c3bae](https://github.com/unjs/consola/commit/68c3bae5fd3b3b81eec272922fad4e29666ff5d7))
* improve basic logs ([ea6ce59](https://github.com/unjs/consola/commit/ea6ce597fa1abb8a1c1afcbfae0cdd71f874b9e9))
* improve packaging ([158e8ef](https://github.com/unjs/consola/commit/158e8efc1a57e2387dc0ca40ce83ea5f67cdb3f3))
* improve packaging and exports ([90da862](https://github.com/unjs/consola/commit/90da862e6e7ad9fbadacf65f84245fca41d46933))
* improve packaging for browser support ([47af1df](https://github.com/unjs/consola/commit/47af1df9df9e99d557fd3e685a0734ef399f19e9))
* improve spam throttle ([5314eee](https://github.com/unjs/consola/commit/5314eeebb4b564408a4ab14cb457bdbd426f6124))
* improve typescript type definitions ([#57](https://github.com/unjs/consola/issues/57)) ([80eefd8](https://github.com/unjs/consola/commit/80eefd8b07b687ac83b31d235cec45b59b07fcea))
* initial works for v2.0.0 ([455b6f9](https://github.com/unjs/consola/commit/455b6f9f80bb8604a673954c0b851ece5039b07e))
* log formatting using printf ([2afb025](https://github.com/unjs/consola/commit/2afb025837eec4ab580dce576bddd8a61f034b53))
* mockTypes for easy mocking ([a332890](https://github.com/unjs/consola/commit/a332890dfa29cf6ee5c0d8f2a43a0b528ce4f82b))
* no more side effects ([c015c31](https://github.com/unjs/consola/commit/c015c31f5f5b98804e15d5186820423664e4efd5))
* pause/resume ([f217cc1](https://github.com/unjs/consola/commit/f217cc1c6a18d458cc15ddfd51652f5148fb2e5a))
* remove level boundary check ([8972d47](https://github.com/unjs/consola/commit/8972d478c93690fafb909f49d9d0edbcb67bddae))
* return new consola instance with consola.create ([4ae3614](https://github.com/unjs/consola/commit/4ae3614d3995d4205b474aea49b9ca4a90f81af6))
* rework _createLogFn with better argument handling ([2d4af39](https://github.com/unjs/consola/commit/2d4af390c0861734c41bedb91c66cd06d67120c1))
* rewrite FancyReporter without ora ([73c1ddc](https://github.com/unjs/consola/commit/73c1ddc760a7178d2370e973b8b64ebff51fe87a))
* scope inheritance support ([#23](https://github.com/unjs/consola/issues/23)) ([0070c54](https://github.com/unjs/consola/commit/0070c54a83c37a5c4615fd443500084b256a549d))
* setReporters, withDefaults and withTag ([912446f](https://github.com/unjs/consola/commit/912446fc4f9c9397c29f7f83c34be820a7fa9488))
* showType option ([ed294e4](https://github.com/unjs/consola/commit/ed294e452850755b743c640eaff221162d38e14d))
* smart hide time and tag when there is no space ([00a375f](https://github.com/unjs/consola/commit/00a375fcf57b631d7953c04003ddff59c0df6755))
* spam preventation ([7da806b](https://github.com/unjs/consola/commit/7da806bf4397ee9ea97903e5f0c44a800b6cb440))
* style browser reporter ([d39684d](https://github.com/unjs/consola/commit/d39684d6a7ede71cd1a730debf1b47bc53f3581a))
* support `formatOptions.date` to optionally hide date ([#101](https://github.com/unjs/consola/issues/101)) ([6bf733f](https://github.com/unjs/consola/commit/6bf733f2b9a5320584bdd0de7de08f4341c74335))
* support all chalk colors ([2cec678](https://github.com/unjs/consola/commit/2cec67851344eb9ccfbb0c77528546e402befb3c)), closes [#20](https://github.com/unjs/consola/issues/20)
* support badge with fancy ([38600fe](https://github.com/unjs/consola/commit/38600fe1189d32641805b03c1a0863908b08d0e5))
* support custom additional style ([#18](https://github.com/unjs/consola/issues/18)) ([7a750bf](https://github.com/unjs/consola/commit/7a750bf96d1d2e64b473f893d4ed84d3644f3b92))
* support extra log arguments ([8b6d3d2](https://github.com/unjs/consola/commit/8b6d3d250f2863a299cbf572193f6aeae01fecc0))
* support formatOptions. resolves [#29](https://github.com/unjs/consola/issues/29). ([7ed640f](https://github.com/unjs/consola/commit/7ed640f399ca98de2bf1cf5e686343cfb6e2704a))
* support literal for logLevels ([#133](https://github.com/unjs/consola/issues/133)) ([22738ac](https://github.com/unjs/consola/commit/22738ac20fe87472518e420b801f8f7b72255f07)), closes [#130](https://github.com/unjs/consola/issues/130)
* **types:** add missing typescript definitions for reporters  ([#94](https://github.com/unjs/consola/issues/94)) ([4a08ef0](https://github.com/unjs/consola/commit/4a08ef02bc48ddc887f2b91713520eda50793a27))
* **types:** update types ([d0d7455](https://github.com/unjs/consola/commit/d0d74558be626c3e1011b82b1f112a1d280dacae))
* **types:** use union type for `ConsolaLogObject.type`  ([#100](https://github.com/unjs/consola/issues/100)) ([a6eba53](https://github.com/unjs/consola/commit/a6eba532381bcec9c84ac5600ac668aca87c8487))
* upgrade dependencies ([1b6ea4b](https://github.com/unjs/consola/commit/1b6ea4b7f61c3ca3eb226c7b34f19ffdfddd352a))
* wrapConsole ([3962a1f](https://github.com/unjs/consola/commit/3962a1ff0890cffbca6e779ebdb8855abe2fd5d6))
* wrapStd ([f8bfbeb](https://github.com/unjs/consola/commit/f8bfbeb46ff1dcb3878fafb5bee50c36fec2743d))
* write error and warns to process.stderr by default ([6565254](https://github.com/unjs/consola/commit/65652541d91d97d0f24daacf76b1082c93eb7e6c))


### Bug Fixes

* add `.raw` to mocked functions ([987dadc](https://github.com/unjs/consola/commit/987dadcc81a82698051ade2384ae2f0fc12d8aef))
* add default/undefined color for browser ([39584d2](https://github.com/unjs/consola/commit/39584d2498e5f5643f70225e8446b1700f2d141f))
* add global.consola ([558cae5](https://github.com/unjs/consola/commit/558cae5d4448f336754970b5ab05b5f25fb8383e))
* add isRaw flag only for wrapped calls ([23b1184](https://github.com/unjs/consola/commit/23b1184e2897f5d33943bec7180fb2427402d400)), closes [nuxt/nuxt.js#8752](https://github.com/nuxt/nuxt.js/issues/8752)
* add legacy ready and start levels for more backward compatibility ([f54b5c2](https://github.com/unjs/consola/commit/f54b5c2babcfa3f6286557e668da16748fc9d0aa))
* add methods for legacy support ([4bdd034](https://github.com/unjs/consola/commit/4bdd034e054c646312ae18874d4fe2b53b377213))
* add missing parseStack import ([da53dee](https://github.com/unjs/consola/commit/da53dee1d70c7ec5b4e09928e921fc302d3443d3))
* add missing typescript declaration for level, stdout and stderr ([#58](https://github.com/unjs/consola/issues/58)) ([a149dbb](https://github.com/unjs/consola/commit/a149dbbf31604ec96b44325219e3d385923e580e))
* add prepublish script ([8dd8700](https://github.com/unjs/consola/commit/8dd870065d1ea1830ccec13baf8f7b01bf39c575))
* add schmance.js ([2929648](https://github.com/unjs/consola/commit/2929648e56a85f8b06fbe21087c0cef78572fde1))
* also copy symbols in assignGlobalReference ([b0eefb5](https://github.com/unjs/consola/commit/b0eefb5ad92fbb3ed4224f4244802fc760e98cd9))
* always use computed values for stdout/stderr ([f91abc0](https://github.com/unjs/consola/commit/f91abc008ff59e2c1a70c0c39c55ac5a839b6155))
* **browser:** hide `:` with tag and normal log ([8250d5a](https://github.com/unjs/consola/commit/8250d5a0d59e12abfca9fd5a8ba8071a516ff678))
* **browser:** use `console.warn` when possible ([#49](https://github.com/unjs/consola/issues/49)) ([e386ede](https://github.com/unjs/consola/commit/e386edecd77cedfd9c70daa75893127b6ee32612))
* bundle std-env and entrypoint ([7b0f838](https://github.com/unjs/consola/commit/7b0f838fbc95859d699aabd6225669e051c89cb1))
* bypass webpack for lazy required version of winston ([500b509](https://github.com/unjs/consola/commit/500b5097262c45f4ffb47cbfa80f264ba5ead95d))
* cannot set level as 0 in options ([4c1ecce](https://github.com/unjs/consola/commit/4c1ecce4090f4d3bdc566df45d981f6e8f6a692f))
* **consola:** use `options.stderr` ([#77](https://github.com/unjs/consola/issues/77)) ([774c673](https://github.com/unjs/consola/commit/774c6739e794665bc5e2c40aa84921b7f2a26387))
* correctly calculate line width when using grave accent ([bad52bd](https://github.com/unjs/consola/commit/bad52bd8e5fa27544f4f91b3b2242cf5ab36c93a))
* correctly handle falsy values ([367fb19](https://github.com/unjs/consola/commit/367fb198c063f3544a8bdf53cde51d57fe1d77b3))
* **docs:** update readme ([#22](https://github.com/unjs/consola/issues/22)) ([e75f2a0](https://github.com/unjs/consola/commit/e75f2a0ab5b46fb514c6079c7f0c94392bd0063e))
* don't return this when calling log functions ([f07e056](https://github.com/unjs/consola/commit/f07e05637ffe89504b2897d2933fdd0ecc2996bc))
* **error:** always strip first line from stack ([3afa9aa](https://github.com/unjs/consola/commit/3afa9aa7c862e4f4f4cccf839920eb41d61d1222))
* expose typescript typings ([f0398ed](https://github.com/unjs/consola/commit/f0398eddf84427cb61315c95c620d251d8257f32))
* **fancy:** honor logObj.icon ([d56fa38](https://github.com/unjs/consola/commit/d56fa3835a0d7260b6ffa2ba8e0515923a0259fe))
* **fancy:** logObj.type ([418be28](https://github.com/unjs/consola/commit/418be28ba75eeae735a7c1dd41bf2d17f655cc39))
* **fancy:** remove extra icons ([b66fde0](https://github.com/unjs/consola/commit/b66fde0f28fa6fa0d6eeadeee75127e44c84c9e9))
* **fancy:** use proper color for log paths ([7c75283](https://github.com/unjs/consola/commit/7c7528339654126fe338dcc863f2b4e7daefd350))
* fix badge display ([e036eed](https://github.com/unjs/consola/commit/e036eed409399486108e91b2be003872e1040b1b))
* fix esm compatibility ([8ddecc3](https://github.com/unjs/consola/commit/8ddecc3605ef472774b2dac94ea62a109d48bfbb))
* fix main field ([4b56e48](https://github.com/unjs/consola/commit/4b56e48ffdac3ed12b1c2a3200d5258a1e9c7c16))
* fix main field in package.json ([31030c2](https://github.com/unjs/consola/commit/31030c2a84a97ebf4c091aa0497a82fa01d00538))
* fix typos ([45e2f99](https://github.com/unjs/consola/commit/45e2f9989fd7e25f0f2021b8c6437282b597cbea))
* **formatting:** fix formatting when multiple back-quotes ([#44](https://github.com/unjs/consola/issues/44)) ([669a12e](https://github.com/unjs/consola/commit/669a12ee11e044429049ab964e95282c6a5435ce))
* handle null and undefined calls ([1f98bb1](https://github.com/unjs/consola/commit/1f98bb1e3994630979eae41dfca0c3230af4c69d))
* handle null value of obj for assignToLogObj ([d2402af](https://github.com/unjs/consola/commit/d2402afadf22a137d5021c1607e6454c6232544a))
* ignore winston dep in webpack ([#37](https://github.com/unjs/consola/issues/37)) ([e534a28](https://github.com/unjs/consola/commit/e534a286fd8390eccd5c9b5a57285e8bd5e2429d))
* improve browser packaging ([4d8c8d0](https://github.com/unjs/consola/commit/4d8c8d030f3f8033d701a043b1e1cdc223d77924))
* **isLogObj:** handle non-standard error objects ([8748c81](https://github.com/unjs/consola/commit/8748c81d1924aa8697f1253d8cb5d6672d1d3b8b))
* **json-reporter:** add a default value to the constructor ([#33](https://github.com/unjs/consola/issues/33)) ([c59db36](https://github.com/unjs/consola/commit/c59db3640c1ff3c7040688654a20e37b6ded0779))
* lint ([f909761](https://github.com/unjs/consola/commit/f9097613b20ef447badfbe9e708cdd22cbf2b774))
* lint ([d976620](https://github.com/unjs/consola/commit/d976620ccc252dc7fcb22450e2966b82be6648f7))
* new LogLevel enum is not exported properly [#95](https://github.com/unjs/consola/issues/95) ([#96](https://github.com/unjs/consola/issues/96)) ([fafbec2](https://github.com/unjs/consola/commit/fafbec2b1bc75912eea5d0618a27b982738d6cda))
* only include dist and src in package ([8b477ec](https://github.com/unjs/consola/commit/8b477ecdaa58a0858973353585506cc2e9ed0bd3))
* only one color ending parameter is enough ([d213634](https://github.com/unjs/consola/commit/d213634b863edd5ba71107bb795b042cec1024ae))
* **package:** add chalk to dependencies ([3f738e9](https://github.com/unjs/consola/commit/3f738e9ea6ca7af51753f63ef59bbfe18f6096ae))
* **pkg:** exclude src from package ([4b1fb7d](https://github.com/unjs/consola/commit/4b1fb7d435b3773b5a1c69c92dd29c7435efb3a3))
* **pkg:** remove sourcemaps for less package size ([67565fc](https://github.com/unjs/consola/commit/67565fcf0d5de87b27da527b6d1765f96eeee7e4))
* preserve additional new lines ([340a001](https://github.com/unjs/consola/commit/340a001a2686ccd5809ac921db1ab4b58b00bc98))
* prevent duplicate consola instances when different versions used by packages ([0bce262](https://github.com/unjs/consola/commit/0bce262e6757e9ea785717c609c238f65fa8cfd5))
* readme: icon string length is digit ([31f1894](https://github.com/unjs/consola/commit/31f189416fbe251afabe42af4250ef3095bea279))
* remove file:// from error stack traces ([ff24b69](https://github.com/unjs/consola/commit/ff24b696f1929262c9c9310dfe25d63c3a498964))
* remove name assignment ([8d59075](https://github.com/unjs/consola/commit/8d590759d7952940614969e1363684fb3699f646))
* remove pushes for better readability ([418d84a](https://github.com/unjs/consola/commit/418d84a877189e36a90a08d72d02abb792e5eaf8))
* rename private fields ([244fe5c](https://github.com/unjs/consola/commit/244fe5c167f0f68510cbdb86a1b9d208ce3fb0f2))
* rename require test file ([cfc8f9e](https://github.com/unjs/consola/commit/cfc8f9e0a235c695c147ba86290d2a07dac0332f))
* **reporters/fancy:** extra space for additional ([efeab44](https://github.com/unjs/consola/commit/efeab44f933cb77564b5d1eaea2052c8368c8135))
* return earlier on not displaying levels ([cfdcf04](https://github.com/unjs/consola/commit/cfdcf0412de25788876e6db6e1b60226e11fcfb8))
* return this in setReporters ([544a887](https://github.com/unjs/consola/commit/544a88788920e1cdae1edbd30bc03d9b303d93a2))
* silent log level does not work ([#98](https://github.com/unjs/consola/issues/98)) ([6a4a79c](https://github.com/unjs/consola/commit/6a4a79c24b8db902b078ad92a6ee7a33880ed26c))
* skip logObj check for wrapped calls (fixes [#109](https://github.com/unjs/consola/issues/109)) ([091a244](https://github.com/unjs/consola/commit/091a24423bb9c28b7371e7af849b15c7e39747fa))
* support Error as logObject ([134ff54](https://github.com/unjs/consola/commit/134ff546159c320615219d5b3443ad6905d42ccb))
* text color comment ([9336fbc](https://github.com/unjs/consola/commit/9336fbcc520fdf31da585132a417b5e6f536cc02))
* throttle expiration ([#81](https://github.com/unjs/consola/issues/81)) ([940474d](https://github.com/unjs/consola/commit/940474d3b64a4969acdec04290734e700920c19f)), closes [#68](https://github.com/unjs/consola/issues/68)
* transpile browser dist to ES5 ([1f81eea](https://github.com/unjs/consola/commit/1f81eeaf78adb80758ce2cde038d8af2e3f0b32c)), closes [nuxt/nuxt.js#5743](https://github.com/nuxt/nuxt.js/issues/5743)
* **ts:** export consola ts declarations ([#42](https://github.com/unjs/consola/issues/42)) ([a884773](https://github.com/unjs/consola/commit/a8847737f1cd5e9d2eae04996cfd62537f7e523e))
* **ts:** revert export consola ts declarations ([#43](https://github.com/unjs/consola/issues/43)) ([6bd4f85](https://github.com/unjs/consola/commit/6bd4f85bd565ee0bd363b0139193434c89e51abc))
* **ts:** set message type to "any" ([#39](https://github.com/unjs/consola/issues/39)) ([ff97b09](https://github.com/unjs/consola/commit/ff97b09e87aa131ba9b7e868fc10858bb52db4d3)), closes [#38](https://github.com/unjs/consola/issues/38)
* **ts:** set type "any" ([#40](https://github.com/unjs/consola/issues/40)) ([ea9d551](https://github.com/unjs/consola/commit/ea9d5518bbf36c07470a8fecc2f2f31a226613ef))
* typecheck type and tag before normalize ([1984deb](https://github.com/unjs/consola/commit/1984deb0a5214a3aa82dab972ec76af20ba14d1b))
* **types:** `const consola = require('consola')` type is wrong ([#80](https://github.com/unjs/consola/issues/80)) ([5c22d8c](https://github.com/unjs/consola/commit/5c22d8cd4624e3bbd7294b9eba09f131ed786332))
* **types:** add some of the missing types ([#35](https://github.com/unjs/consola/issues/35)) ([5e3e69b](https://github.com/unjs/consola/commit/5e3e69b78e1aba5a43ea93aaa9ac39cf850a5cd4))
* **types:** allow passing extra arguments ([#46](https://github.com/unjs/consola/issues/46)) ([d29fc46](https://github.com/unjs/consola/commit/d29fc466ac48ce0af2bf0e0b9f51c27c413b5ca1))
* **typescript:** remove cjs export (fixes [#88](https://github.com/unjs/consola/issues/88)) ([0d9ab1b](https://github.com/unjs/consola/commit/0d9ab1bba8645853c721069c57527764ed708869))
* **types:** fix silent/verbose levels ([7ab0a65](https://github.com/unjs/consola/commit/7ab0a65f383d9dd1b68a18ee439bf19468a57885))
* **types:** reporter in remove methods are optional ([#70](https://github.com/unjs/consola/issues/70)) ([a17cdb1](https://github.com/unjs/consola/commit/a17cdb1a423e41076c58692130955d5a9f5e36ba))
* update demo ([3842e0e](https://github.com/unjs/consola/commit/3842e0e15110bbba2a7548699c4e7e93bb963404))
* update std-env to 2.1.0 ([2dc2a50](https://github.com/unjs/consola/commit/2dc2a501167f66632a3fdbcdadd3186eea63721a))
* update std-env to 2.1.1 ([32a9c67](https://github.com/unjs/consola/commit/32a9c6791578d7548405a7194058518e1d047ae6))
* use basic reporter only for ci and test environments ([33220e4](https://github.com/unjs/consola/commit/33220e4b520747624e4956e01f3e60b4e1daafc0))
* use live console._stdout bindings for default stream ([d9573c3](https://github.com/unjs/consola/commit/d9573c3d0e7fca83cefb0bad8151a2a0dc2f3fc7))
* use more compatible string to clear the console ([82ce410](https://github.com/unjs/consola/commit/82ce410f1803950e6143f8f7c6ad5801f2f1a540))
* use symbols for private property access ([8e6343c](https://github.com/unjs/consola/commit/8e6343c39e1acd3b6a4f3eb1781921e85d6f41f1))


* additionalStyle ~> additionalColor ([3f808e9](https://github.com/unjs/consola/commit/3f808e96c2e955dbe59b0bed6c7d81795f89eb99))

### [2.15.3](https://github.com/nuxt/consola/compare/v2.15.2...v2.15.3) (2021-02-07)


### Bug Fixes

* add `.raw` to mocked functions ([987dadc](https://github.com/nuxt/consola/commit/987dadcc81a82698051ade2384ae2f0fc12d8aef))

### [2.15.2](https://github.com/nuxt/consola/compare/v2.15.1...v2.15.2) (2021-02-03)


### Bug Fixes

* add isRaw flag only for wrapped calls ([23b1184](https://github.com/nuxt/consola/commit/23b1184e2897f5d33943bec7180fb2427402d400)), closes [nuxt/nuxt.js#8752](https://github.com/nuxt/nuxt.js/issues/8752)

### [2.15.1](https://github.com/nuxt/consola/compare/v2.15.0...v2.15.1) (2021-02-02)


### Bug Fixes

* skip logObj check for wrapped calls (fixes [#109](https://github.com/nuxt/consola/issues/109)) ([091a244](https://github.com/nuxt/consola/commit/091a24423bb9c28b7371e7af849b15c7e39747fa))

## [2.15.0](https://github.com/nuxt/consola/compare/v2.14.0...v2.15.0) (2020-08-05)


### Features

* **types:** use union type for `ConsolaLogObject.type`  ([#100](https://github.com/nuxt/consola/issues/100)) ([a6eba53](https://github.com/nuxt/consola/commit/a6eba532381bcec9c84ac5600ac668aca87c8487))
* support `formatOptions.date` to optionally hide date ([#101](https://github.com/nuxt/consola/issues/101)) ([6bf733f](https://github.com/nuxt/consola/commit/6bf733f2b9a5320584bdd0de7de08f4341c74335))

## [2.14.0](https://github.com/nuxt/consola/compare/v2.13.0...v2.14.0) (2020-06-26)


### Features

* improve spam throttle ([5314eee](https://github.com/nuxt/consola/commit/5314eeebb4b564408a4ab14cb457bdbd426f6124))

## [2.13.0](https://github.com/nuxt/consola/compare/v2.12.2...v2.13.0) (2020-06-12)


### Features

* remove level boundary check ([8972d47](https://github.com/nuxt/consola/commit/8972d478c93690fafb909f49d9d0edbcb67bddae))


### Bug Fixes

* **types:** fix silent/verbose levels ([7ab0a65](https://github.com/nuxt/consola/commit/7ab0a65f383d9dd1b68a18ee439bf19468a57885))

### [2.12.2](https://github.com/nuxt/consola/compare/v2.12.1...v2.12.2) (2020-05-26)


### Bug Fixes

* silent log level does not work ([#98](https://github.com/nuxt/consola/issues/98)) ([6a4a79c](https://github.com/nuxt/consola/commit/6a4a79c24b8db902b078ad92a6ee7a33880ed26c))

### [2.12.1](https://github.com/nuxt/consola/compare/v2.12.0...v2.12.1) (2020-05-07)


### Bug Fixes

* new LogLevel enum is not exported properly [#95](https://github.com/nuxt/consola/issues/95) ([#96](https://github.com/nuxt/consola/issues/96)) ([fafbec2](https://github.com/nuxt/consola/commit/fafbec2b1bc75912eea5d0618a27b982738d6cda))

## [2.12.0](https://github.com/nuxt/consola/compare/v2.11.3...v2.12.0) (2020-05-07)


### Features

* **types:** add missing typescript definitions for reporters  ([#94](https://github.com/nuxt/consola/issues/94)) ([4a08ef0](https://github.com/nuxt/consola/commit/4a08ef02bc48ddc887f2b91713520eda50793a27))

### [2.11.3](https://github.com/nuxt/consola/compare/v2.11.2...v2.11.3) (2019-12-31)


### Bug Fixes

* **typescript:** remove cjs export (fixes [#88](https://github.com/nuxt/consola/issues/88)) ([0d9ab1b](https://github.com/nuxt/consola/commit/0d9ab1bba8645853c721069c57527764ed708869))

### [2.11.2](https://github.com/nuxt/consola/compare/v2.11.1...v2.11.2) (2019-12-27)


### Bug Fixes

* **types:** `const consola = require('consola')` type is wrong ([#80](https://github.com/nuxt/consola/issues/80)) ([5c22d8c](https://github.com/nuxt/consola/commit/5c22d8cd4624e3bbd7294b9eba09f131ed786332))
* throttle expiration ([#81](https://github.com/nuxt/consola/issues/81)) ([940474d](https://github.com/nuxt/consola/commit/940474d3b64a4969acdec04290734e700920c19f)), closes [#68](https://github.com/nuxt/consola/issues/68)

### [2.11.1](https://github.com/nuxt/consola/compare/v2.11.0...v2.11.1) (2019-12-17)


### Bug Fixes

* **consola:** use `options.stderr` ([#77](https://github.com/nuxt/consola/issues/77)) ([774c673](https://github.com/nuxt/consola/commit/774c6739e794665bc5e2c40aa84921b7f2a26387))

## [2.11.0](https://github.com/nuxt/consola/compare/v2.10.0...v2.11.0) (2019-11-10)


### Features

* **browser:** add support of formatted strings ([#66](https://github.com/nuxt/consola/issues/66)) ([920f313](https://github.com/nuxt/consola/commit/920f313dba322c34ccd1b2f08afba59122c3b8e7))


### Bug Fixes

* typecheck type and tag before normalize ([1984deb](https://github.com/nuxt/consola/commit/1984deb0a5214a3aa82dab972ec76af20ba14d1b))
* **types:** reporter in remove methods are optional ([#70](https://github.com/nuxt/consola/issues/70)) ([a17cdb1](https://github.com/nuxt/consola/commit/a17cdb1a423e41076c58692130955d5a9f5e36ba))

### [2.10.1](https://github.com/nuxt/consola/compare/v2.10.0...v2.10.1) (2019-08-05)

## [2.10.0](https://github.com/nuxt/consola/compare/v2.9.0...v2.10.0) (2019-08-05)


### Bug Fixes

* add missing typescript declaration for level, stdout and stderr ([#58](https://github.com/nuxt/consola/issues/58)) ([a149dbb](https://github.com/nuxt/consola/commit/a149dbb))


### Features

* improve typescript type definitions ([#57](https://github.com/nuxt/consola/issues/57)) ([80eefd8](https://github.com/nuxt/consola/commit/80eefd8))

## [2.9.0](https://github.com/nuxt/consola/compare/v2.8.0...v2.9.0) (2019-06-18)


### Features

* count spam log ([197a6b3](https://github.com/nuxt/consola/commit/197a6b3))



## [2.8.0](https://github.com/nuxt/consola/compare/v2.7.1...v2.8.0) (2019-06-18)


### Features

* spam preventation ([7da806b](https://github.com/nuxt/consola/commit/7da806b))



### [2.7.1](https://github.com/nuxt/consola/compare/v2.7.0...v2.7.1) (2019-05-26)


### Bug Fixes

* **browser:** hide `:` with tag and normal log ([8250d5a](https://github.com/nuxt/consola/commit/8250d5a))



## [2.7.0](https://github.com/nuxt/consola/compare/v2.6.2...v2.7.0) (2019-05-26)


### Bug Fixes

* correctly calculate line width when using grave accent ([bad52bd](https://github.com/nuxt/consola/commit/bad52bd))


### Features

* always hide right side on width < 80 ([07d8246](https://github.com/nuxt/consola/commit/07d8246))
* improve basic logs ([ea6ce59](https://github.com/nuxt/consola/commit/ea6ce59))
* **browser:** fancier logs ([b64f337](https://github.com/nuxt/consola/commit/b64f337))
* hide time from basic logger as it is commonly used in CI environments ([68c3bae](https://github.com/nuxt/consola/commit/68c3bae))
* smart hide time and tag when there is no space ([00a375f](https://github.com/nuxt/consola/commit/00a375f))



### [2.6.2](https://github.com/nuxt/consola/compare/v2.6.1...v2.6.2) (2019-05-15)


### Bug Fixes

* transpile browser dist to ES5 ([1f81eea](https://github.com/nuxt/consola/commit/1f81eea)), closes [nuxt/nuxt.js#5743](https://github.com/nuxt/consola/issues/5743)



### [2.6.1](https://github.com/nuxt/consola/compare/v2.6.0...v2.6.1) (2019-05-08)


### Bug Fixes

* **browser:** use `console.warn` when possible ([#49](https://github.com/nuxt/consola/issues/49)) ([e386ede](https://github.com/nuxt/consola/commit/e386ede))



# [2.6.0](https://github.com/nuxt/consola/compare/v2.5.8...v2.6.0) (2019-04-12)


### Features

* expose constructor and reporters ([3a8f662](https://github.com/nuxt/consola/commit/3a8f662))



## [2.5.8](https://github.com/nuxt/consola/compare/v2.5.7...v2.5.8) (2019-03-29)


### Bug Fixes

* **types:** allow passing extra arguments ([#46](https://github.com/nuxt/consola/issues/46)) ([d29fc46](https://github.com/nuxt/consola/commit/d29fc46))



## [2.5.7](https://github.com/nuxt/consola/compare/v2.5.6...v2.5.7) (2019-03-19)


### Bug Fixes

* **formatting:** fix formatting when multiple back-quotes ([#44](https://github.com/nuxt/consola/issues/44)) ([669a12e](https://github.com/nuxt/consola/commit/669a12e))



## [2.5.6](https://github.com/nuxt/consola/compare/v2.5.5...v2.5.6) (2019-02-25)


### Bug Fixes

* **ts:** revert export consola ts declarations ([#43](https://github.com/nuxt/consola/issues/43)) ([6bd4f85](https://github.com/nuxt/consola/commit/6bd4f85))



<a name="2.4.1"></a>
## [2.4.1](https://github.com/nuxt/consola/compare/v2.4.0...v2.4.1) (2019-02-12)


### Bug Fixes

* **ts:** set type "any" ([#40](https://github.com/nuxt/consola/issues/40)) ([ea9d551](https://github.com/nuxt/consola/commit/ea9d551))



<a name="2.4.0"></a>
# [2.4.0](https://github.com/nuxt/consola/compare/v2.3.2...v2.4.0) (2019-02-05)


### Bug Fixes

* **esm:** fix esm compatibility ([8ddecc3](https://github.com/nuxt/consola/commit/8ddecc3))
* **consola:** return `this` in setReporters ([544a887](https://github.com/nuxt/consola/commit/544a887))
* **types:** set message type to "any" ([#39](https://github.com/nuxt/consola/issues/39)) ([ff97b09](https://github.com/nuxt/consola/commit/ff97b09)), closes [#38](https://github.com/nuxt/consola/issues/38)

### Features

* **types:** update types ([d0d7455](https://github.com/nuxt/consola/commit/d0d7455))



<a name="2.3.2"></a>
## [2.3.2](https://github.com/nuxt/consola/compare/v2.3.1...v2.3.2) (2019-01-06)


### Bug Fixes

* **types:** add some of the missing types ([#35](https://github.com/nuxt/consola/issues/35)) ([5e3e69b](https://github.com/nuxt/consola/commit/5e3e69b))
* ignore winston dep in webpack ([#37](https://github.com/nuxt/consola/issues/37)) ([e534a28](https://github.com/nuxt/consola/commit/e534a28))



<a name="2.3.1"></a>
## [2.3.1](https://github.com/nuxt/consola/compare/v2.3.0...v2.3.1) (2019-01-02)


### Bug Fixes

* bypass webpack for lazy required version of winston ([500b509](https://github.com/nuxt/consola/commit/500b509))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/nuxt/consola/compare/v2.2.6...v2.3.0) (2018-11-19)


### Bug Fixes

* **isLogObj:** handle non-standard error objects ([8748c81](https://github.com/nuxt/consola/commit/8748c81))


### Features

* browser reporter improvements ([591d0b4](https://github.com/nuxt/consola/commit/591d0b4)), closes [#31](https://github.com/nuxt/consola/issues/31)
* **fancy:** look like jest traces ([ecae238](https://github.com/nuxt/consola/commit/ecae238))



<a name="2.2.6"></a>
## [2.2.6](https://github.com/nuxt/consola/compare/v2.2.5...v2.2.6) (2018-11-14)


### Bug Fixes

* **json-reporter:** add a default value to the constructor ([#33](https://github.com/nuxt/consola/issues/33)) ([c59db36](https://github.com/nuxt/consola/commit/c59db36))



<a name="2.2.5"></a>
## [2.2.5](https://github.com/nuxt/consola/compare/v2.2.4...v2.2.5) (2018-11-14)


### Bug Fixes

* expose typescript typings ([f0398ed](https://github.com/nuxt/consola/commit/f0398ed))



<a name="2.2.4"></a>
## [2.2.4](https://github.com/nuxt/consola/compare/v2.2.3...v2.2.4) (2018-11-08)


### Bug Fixes

* use basic reporter only for ci and test environments ([33220e4](https://github.com/nuxt/consola/commit/33220e4))



<a name="2.2.3"></a>
## [2.2.3](https://github.com/nuxt/consola/compare/v2.2.2...v2.2.3) (2018-11-07)


### Bug Fixes

* **fancy:** honor logObj.icon ([d56fa38](https://github.com/nuxt/consola/commit/d56fa38))



<a name="2.2.2"></a>
## [2.2.2](https://github.com/nuxt/consola/compare/v2.2.1...v2.2.2) (2018-11-04)


### Bug Fixes

* update std-env to 2.1.1 ([32a9c67](https://github.com/nuxt/consola/commit/32a9c67))



<a name="2.2.1"></a>
## [2.2.1](https://github.com/nuxt/consola/compare/v2.2.0...v2.2.1) (2018-11-04)


### Bug Fixes

* remove file:// from error stack traces ([ff24b69](https://github.com/nuxt/consola/commit/ff24b69))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/nuxt/consola/compare/v2.1.1...v2.2.0) (2018-11-04)


### Bug Fixes

* correctly handle falsy values ([367fb19](https://github.com/nuxt/consola/commit/367fb19))


### Features

* support formatOptions. resolves [#29](https://github.com/nuxt/consola/issues/29). ([7ed640f](https://github.com/nuxt/consola/commit/7ed640f))



<a name="2.1.1"></a>
## [2.1.1](https://github.com/nuxt/consola/compare/v2.1.0...v2.1.1) (2018-11-03)


### Bug Fixes

* add legacy ready and start levels for more backward compatibility ([f54b5c2](https://github.com/nuxt/consola/commit/f54b5c2))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/nuxt/consola/compare/v2.0.9...v2.1.0) (2018-11-03)


### Features

* add aliases ([cbea7bd](https://github.com/nuxt/consola/commit/cbea7bd))
* mockTypes for easy mocking ([a332890](https://github.com/nuxt/consola/commit/a332890))



<a name="2.0.9"></a>
## [2.0.9](https://github.com/nuxt/consola/compare/v2.0.8...v2.0.9) (2018-11-03)



<a name="2.0.8"></a>
## [2.0.8](https://github.com/nuxt/consola/compare/v2.0.7...v2.0.8) (2018-11-03)



<a name="2.0.7"></a>
## [2.0.7](https://github.com/nuxt/consola/compare/v2.0.6...v2.0.7) (2018-11-02)


### Bug Fixes

* always use computed values for stdout/stderr ([f91abc0](https://github.com/nuxt/consola/commit/f91abc0))



<a name="2.0.6"></a>
## [2.0.6](https://github.com/nuxt/consola/compare/v2.0.5...v2.0.6) (2018-11-02)



<a name="2.0.5"></a>
## [2.0.5](https://github.com/nuxt/consola/compare/v2.0.4...v2.0.5) (2018-11-02)



<a name="2.0.4"></a>
## [2.0.4](https://github.com/nuxt/consola/compare/v2.0.3...v2.0.4) (2018-11-02)


### Bug Fixes

* **fancy:** remove extra icons ([b66fde0](https://github.com/nuxt/consola/commit/b66fde0))



<a name="2.0.3"></a>
## [2.0.3](https://github.com/nuxt/consola/compare/v2.0.2...v2.0.3) (2018-11-02)


### Bug Fixes

* **pkg:** exclude src from package ([4b1fb7d](https://github.com/nuxt/consola/commit/4b1fb7d))
* use live console._stdout bindings for default stream ([d9573c3](https://github.com/nuxt/consola/commit/d9573c3))



<a name="2.0.2"></a>
## [2.0.2](https://github.com/nuxt/consola/compare/v2.0.1...v2.0.2) (2018-11-02)


### Bug Fixes

* **error:** always strip first line from stack ([3afa9aa](https://github.com/nuxt/consola/commit/3afa9aa))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/nuxt/consola/compare/v2.0.0...v2.0.1) (2018-11-02)


### Bug Fixes

* **fancy:** use proper color for log paths ([7c75283](https://github.com/nuxt/consola/commit/7c75283))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/nuxt/consola/compare/v2.0.0-2...v2.0.0) (2018-11-02)



<a name="2.0.0-2"></a>
# [2.0.0-2](https://github.com/nuxt/consola/compare/v2.0.0-1...v2.0.0-2) (2018-11-02)


### Bug Fixes

* add methods for legacy support ([4bdd034](https://github.com/nuxt/consola/commit/4bdd034))
* preserve additional new lines ([340a001](https://github.com/nuxt/consola/commit/340a001))
* update std-env to 2.1.0 ([2dc2a50](https://github.com/nuxt/consola/commit/2dc2a50))


### Features

* support badge with fancy ([38600fe](https://github.com/nuxt/consola/commit/38600fe))



<a name="2.0.0-1"></a>
# [2.0.0-1](https://github.com/nuxt/consola/compare/v2.0.0-0...v2.0.0-1) (2018-10-31)



<a name="2.0.0-0"></a>
# [2.0.0-0](https://github.com/nuxt/consola/compare/v1.4.4...v2.0.0-0) (2018-10-31)


### Bug Fixes

* add schmance.js ([2929648](https://github.com/nuxt/consola/commit/2929648))
* **docs:** update readme ([#22](https://github.com/nuxt/consola/issues/22)) ([e75f2a0](https://github.com/nuxt/consola/commit/e75f2a0))
* add default/undefined color for browser ([39584d2](https://github.com/nuxt/consola/commit/39584d2))
* add missing parseStack import ([da53dee](https://github.com/nuxt/consola/commit/da53dee))
* also copy symbols in assignGlobalReference ([b0eefb5](https://github.com/nuxt/consola/commit/b0eefb5))
* don't return this when calling log functions ([f07e056](https://github.com/nuxt/consola/commit/f07e056))
* fix badge display ([e036eed](https://github.com/nuxt/consola/commit/e036eed))
* fix main field ([4b56e48](https://github.com/nuxt/consola/commit/4b56e48))
* fix typos ([45e2f99](https://github.com/nuxt/consola/commit/45e2f99))
* handle null value of obj for assignToLogObj ([d2402af](https://github.com/nuxt/consola/commit/d2402af))
* improve browser packaging ([4d8c8d0](https://github.com/nuxt/consola/commit/4d8c8d0))
* lint ([f909761](https://github.com/nuxt/consola/commit/f909761))
* lint ([d976620](https://github.com/nuxt/consola/commit/d976620))
* only one color ending parameter is enough ([d213634](https://github.com/nuxt/consola/commit/d213634))
* readme: icon string length is digit ([31f1894](https://github.com/nuxt/consola/commit/31f1894))
* remove name assignment ([8d59075](https://github.com/nuxt/consola/commit/8d59075))
* remove pushes for better readability ([418d84a](https://github.com/nuxt/consola/commit/418d84a))
* rename private fields ([244fe5c](https://github.com/nuxt/consola/commit/244fe5c))
* rename require test file ([cfc8f9e](https://github.com/nuxt/consola/commit/cfc8f9e))
* return earlier on not displaying levels ([cfdcf04](https://github.com/nuxt/consola/commit/cfdcf04))
* support Error as logObject ([134ff54](https://github.com/nuxt/consola/commit/134ff54))
* text color comment ([9336fbc](https://github.com/nuxt/consola/commit/9336fbc))
* update demo ([3842e0e](https://github.com/nuxt/consola/commit/3842e0e))
* use symbols for private property access ([8e6343c](https://github.com/nuxt/consola/commit/8e6343c))


### Code Refactoring

* additionalStyle ~> additionalColor ([3f808e9](https://github.com/nuxt/consola/commit/3f808e9))


### Features

* add __VERSION__ to consola prototype ([982c8ca](https://github.com/nuxt/consola/commit/982c8ca))
* add assignGlobalConsola helper ([1af28f7](https://github.com/nuxt/consola/commit/1af28f7))
* add getter/setter for level ([7af5ed5](https://github.com/nuxt/consola/commit/7af5ed5))
* add global.consola ([4da784d](https://github.com/nuxt/consola/commit/4da784d))
* add shmancy reporter ([dc6121a](https://github.com/nuxt/consola/commit/dc6121a))
* add symbols to browser ([30cd4f0](https://github.com/nuxt/consola/commit/30cd4f0))
* add sync/async write ([8525525](https://github.com/nuxt/consola/commit/8525525))
* add typescript typings ([#24](https://github.com/nuxt/consola/issues/24)) ([0853a6f](https://github.com/nuxt/consola/commit/0853a6f))
* align basic and fancy reporter tags ([38a4729](https://github.com/nuxt/consola/commit/38a4729))
* better stack formater ([f5acb3c](https://github.com/nuxt/consola/commit/f5acb3c))
* detect version changes and throw a warning ([73bdd1a](https://github.com/nuxt/consola/commit/73bdd1a))
* improve packaging and exports ([90da862](https://github.com/nuxt/consola/commit/90da862))
* improve packaging for browser support ([47af1df](https://github.com/nuxt/consola/commit/47af1df))
* initial works for v2.0.0 ([455b6f9](https://github.com/nuxt/consola/commit/455b6f9))
* log formatting using printf ([2afb025](https://github.com/nuxt/consola/commit/2afb025))
* no more side effects ([c015c31](https://github.com/nuxt/consola/commit/c015c31))
* pause/resume ([f217cc1](https://github.com/nuxt/consola/commit/f217cc1))
* return new consola instance with consola.create ([4ae3614](https://github.com/nuxt/consola/commit/4ae3614))
* rework _createLogFn with better argument handling ([2d4af39](https://github.com/nuxt/consola/commit/2d4af39))
* scope inheritance support ([#23](https://github.com/nuxt/consola/issues/23)) ([0070c54](https://github.com/nuxt/consola/commit/0070c54))
* **fancy/basic:** support logObj.stack field ([aa2216f](https://github.com/nuxt/consola/commit/aa2216f))
* setReporters, withDefaults and withTag ([912446f](https://github.com/nuxt/consola/commit/912446f))
* showType option ([ed294e4](https://github.com/nuxt/consola/commit/ed294e4))
* style browser reporter ([d39684d](https://github.com/nuxt/consola/commit/d39684d))
* support all chalk colors ([2cec678](https://github.com/nuxt/consola/commit/2cec678)), closes [#20](https://github.com/nuxt/consola/issues/20)
* wrapConsole ([3962a1f](https://github.com/nuxt/consola/commit/3962a1f))
* wrapStd ([f8bfbeb](https://github.com/nuxt/consola/commit/f8bfbeb))
* write error and warns to process.stderr by default ([6565254](https://github.com/nuxt/consola/commit/6565254))


### Performance Improvements

* **basic:** refactor getWriteMethod ([c52db69](https://github.com/nuxt/consola/commit/c52db69))
* remove all DEPRECATED helpers for less bundle size ([fe39d37](https://github.com/nuxt/consola/commit/fe39d37))


### BREAKING CHANGES

* Use new additionalColor prop
* lot's of internals had been changed.
* Behavior may be changed in some conditions



<a name="1.4.4"></a>
## [1.4.4](https://github.com/nuxt/consola/compare/v1.4.3...v1.4.4) (2018-10-13)


### Bug Fixes

* add global.consola ([558cae5](https://github.com/nuxt/consola/commit/558cae5))



<a name="1.4.3"></a>
## [1.4.3](https://github.com/nuxt/consola/compare/v1.4.2...v1.4.3) (2018-08-18)


### Bug Fixes

* use more compatible string to clear the console ([82ce410](https://github.com/nuxt/consola/commit/82ce410))



<a name="1.4.2"></a>
## [1.4.2](https://github.com/nuxt/consola/compare/v1.4.1...v1.4.2) (2018-08-12)


### Bug Fixes

* cannot set level as 0 in options ([4c1ecce](https://github.com/nuxt/consola/commit/4c1ecce))



<a name="1.4.1"></a>
## [1.4.1](https://github.com/nuxt/consola/compare/v1.4.0...v1.4.1) (2018-05-27)


### Bug Fixes

* **fancy:** logObj.type ([418be28](https://github.com/nuxt/consola/commit/418be28))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/nuxt/consola/compare/v1.3.0...v1.4.0) (2018-05-27)


### Features

* support custom additional style ([#18](https://github.com/nuxt/consola/issues/18)) ([7a750bf](https://github.com/nuxt/consola/commit/7a750bf))
* **fancy:** support icon field ([0123bed](https://github.com/nuxt/consola/commit/0123bed))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/nuxt/consola/compare/v1.2.0...v1.3.0) (2018-04-15)


### Bug Fixes

* **reporters/fancy:** extra space for additional ([efeab44](https://github.com/nuxt/consola/commit/efeab44))
* prevent duplicate consola instances when different versions used by packages ([0bce262](https://github.com/nuxt/consola/commit/0bce262))


### Features

* support extra log arguments ([8b6d3d2](https://github.com/nuxt/consola/commit/8b6d3d2))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/nuxt/consola/compare/v1.1.4...v1.2.0) (2018-04-02)


### Features

* **basic:** support additional field ([b50cad8](https://github.com/nuxt/consola/commit/b50cad8))
* improve packaging ([158e8ef](https://github.com/nuxt/consola/commit/158e8ef))


### Performance Improvements

* require needed lodash methods only ([91065e4](https://github.com/nuxt/consola/commit/91065e4))



<a name="1.1.4"></a>
## [1.1.4](https://github.com/nuxt/consola/compare/v1.1.3...v1.1.4) (2018-03-31)


### Bug Fixes

* **package:** add chalk to dependencies ([3f738e9](https://github.com/nuxt/consola/commit/3f738e9))



<a name="1.1.3"></a>
## [1.1.3](https://github.com/nuxt/consola/compare/v1.1.2...v1.1.3) (2018-03-31)


### Bug Fixes

* only include dist and src in package ([8b477ec](https://github.com/nuxt/consola/commit/8b477ec))



<a name="1.1.2"></a>
## [1.1.2](https://github.com/nuxt/consola/compare/v1.1.1...v1.1.2) (2018-03-31)


### Bug Fixes

* handle null and undefined calls ([1f98bb1](https://github.com/nuxt/consola/commit/1f98bb1))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/nuxt/consola/compare/v1.1.0...v1.1.1) (2018-03-31)


### Bug Fixes

* add prepublish script ([8dd8700](https://github.com/nuxt/consola/commit/8dd8700))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/nuxt/consola/compare/v1.0.0...v1.1.0) (2018-03-31)


### Features

* rewrite FancyReporter without ora ([73c1ddc](https://github.com/nuxt/consola/commit/73c1ddc))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/nuxt/consola/compare/v0.1.0...v1.0.0) (2018-03-31)



<a name="0.1.0"></a>
# 0.1.0 (2018-03-31)


### Features

* add log type for console compability ([96a8162](https://github.com/nuxt/consola/commit/96a8162))

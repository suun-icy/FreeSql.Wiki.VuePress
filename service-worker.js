if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let i={};const c=e=>a(e,r),f={module:{uri:r},exports:i,require:c};s[r]=Promise.all(t.map((e=>f[e]||c(e)))).then((e=>(d(...e),i)))}}define(["./workbox-91fa23da"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-2114a57a.js",revision:"fe7a175e8c96d3da276a8653ef0d98eb"},{url:"assets/404.html-86b43cf4.js",revision:"99271ac6ee8e1ed9bdacc87ac839aa0c"},{url:"assets/ado.html-07c466bd.js",revision:"8b59f993f1806a1fe6e54ebfa26a9e25"},{url:"assets/ado.html-a8a56a08.js",revision:"4524b4148ce668ec875a20c02367811e"},{url:"assets/aggregateroot.html-ad2074a2.js",revision:"dae15af248cf333111092d27f2ed935f"},{url:"assets/aggregateroot.html-b5118785.js",revision:"19ccc230fb59bb0282073a9b3277a1c1"},{url:"assets/aop-freesql-autofac.html-286501a7.js",revision:"289df108e8fdb3f3ebcf403d19a93123"},{url:"assets/aop-freesql-autofac.html-ecd85b67.js",revision:"b583327f27fb3990d1c7507846ebdfd8"},{url:"assets/aop.html-b62e30d3.js",revision:"3ea1300f2c474397993e15f48c4c7454"},{url:"assets/aop.html-cf84b2ff.js",revision:"63101d66ce96a974c10153842f9fc45d"},{url:"assets/api.html-7d4ddc80.js",revision:"7dc2d0a5c9c584981225191b90389806"},{url:"assets/api.html-870692b7.js",revision:"b4594d2b99cae937aaf70741e5b3656d"},{url:"assets/app-9940c5b7.js",revision:"0b7e5088520b08cfc3473a38893f8586"},{url:"assets/awesome-freesql.html-0a882d23.js",revision:"e61b3d914bb098a4b14b9ede562a9c69"},{url:"assets/awesome-freesql.html-1652f3c3.js",revision:"0d5a67de49ef6423ffbba31e8874f647"},{url:"assets/BaseEntity.html-6a75917c.js",revision:"ca83a9c68d0ed5cfba64bc0be7f61a52"},{url:"assets/BaseEntity.html-7ec8e0e9.js",revision:"74147ca7f2f324a6a6a1806ccbba3e7e"},{url:"assets/cascade-delete.html-4c6399ac.js",revision:"547104f124e714954555c62a198d767a"},{url:"assets/cascade-delete.html-b67281fc.js",revision:"ac3e9c44873d8dddacbee5ca54e7643d"},{url:"assets/cascade-saving.html-09c81426.js",revision:"bacd77f0f89c984bb75245e26a793294"},{url:"assets/Cascade-Saving.html-b8feeef5.js",revision:"fa840d139378c79fc1cd712ace315b73"},{url:"assets/cascade-saving.html-d08f25d2.js",revision:"67b493408f35dfa2e0e664ea3f583ec4"},{url:"assets/Cascade-Saving.html-ea7480b3.js",revision:"14aad0767e5bf94f8ebb395ce2720cf8"},{url:"assets/change-log.html-963cbba7.js",revision:"38539719cb5e27304b2e0b20c7df99ae"},{url:"assets/change-log.html-c176b855.js",revision:"00a4b09ce68f24b832f60d4fe483ae39"},{url:"assets/code-first.html-426b048c.js",revision:"193ada4dc1c5510087fe8954d3662531"},{url:"assets/code-first.html-487be93d.js",revision:"68c70ec8864c02cee62af42babe33ad7"},{url:"assets/CodeFirst-Mode.html-853d1744.js",revision:"081a2f5260f78391183d468860dab2bb"},{url:"assets/CodeFirst-Mode.html-b4fc43fd.js",revision:"517f46a65fdc336e7e14dc20db043be3"},{url:"assets/config-entity-from-db-first.html-2715697d.js",revision:"ce0134ed151b109eeed8d446df3268ad"},{url:"assets/config-entity-from-db-first.html-66bb64af.js",revision:"35ad647d4b72100d4ba2bf5ee302958b"},{url:"assets/contributing.html-b8f21a13.js",revision:"944b7b0f25d4ba2c438bf1ce9665ae40"},{url:"assets/contributing.html-de91468c.js",revision:"5401a9218271477ea96951a05d2e96d3"},{url:"assets/custom-attribute.html-92e10fc8.js",revision:"26a71c3b90b678dd8ab3b88ce21c6302"},{url:"assets/custom-attribute.html-f5f5151c.js",revision:"d9cbba6770a26aca6597057ef59eea54"},{url:"assets/db-context.html-162049dc.js",revision:"7aa39bce07a5fd2d730dccd9038c9cd1"},{url:"assets/db-context.html-4fede4eb.js",revision:"e1a4ec8b1f62f0726c93e4ebcb30f160"},{url:"assets/db-first.html-bbbe7640.js",revision:"189e37ded9a5004b9bb9ab2cecfea051"},{url:"assets/db-first.html-c47e1db4.js",revision:"54a56d75c01d7876bf823d87f62f083a"},{url:"assets/Delete-Data.html-52b29921.js",revision:"c12577a555633748dbf00290fd1acb6f"},{url:"assets/Delete-Data.html-ef978f95.js",revision:"fea197610122fa5f782dc9910f173037"},{url:"assets/delete.html-5d05e930.js",revision:"b4e2ff4f74d0fae0dca71b50088ab7f3"},{url:"assets/delete.html-bb10f205.js",revision:"83873218541b1a8af700f0162da656fd"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/donation.html-45f7f5a6.js",revision:"12b32db0e3321f46083ad96def08ea8e"},{url:"assets/donation.html-4d798af2.js",revision:"aeebf348c5c6bd34cabf61feb9306c00"},{url:"assets/dynamic.html-35f7f61e.js",revision:"f65a319595ffeb7ccbfa2c22da27bc57"},{url:"assets/dynamic.html-457be542.js",revision:"aaad897c0a7e37e1c0ebad4d9eefe56a"},{url:"assets/entity-attribute.html-062d0d32.js",revision:"97df71c2a46f3ec0616691b5ad9320c5"},{url:"assets/entity-attribute.html-311a631c.js",revision:"073d22d2d4266dcfd8b7257a70a3972b"},{url:"assets/Entity-Relationship.html-325ce46a.js",revision:"0d18bb6e09a422711ddf39d013383e01"},{url:"assets/Entity-Relationship.html-e4f58063.js",revision:"fa1e500729b467253e981eab6db27a87"},{url:"assets/expression-function.html-18ebd5df.js",revision:"8a88b55d1ab368c5abdf59ed53d0e8dd"},{url:"assets/expression-function.html-309c7b41.js",revision:"5600f198788ed71257825f423c1a37bc"},{url:"assets/faq.html-0a628a88.js",revision:"ae2ec23284b06d8db3534b6649aa2a55"},{url:"assets/faq.html-e5cd512e.js",revision:"75a0de47696b18e639bbf4fb93e3477a"},{url:"assets/filters.html-c7f2f935.js",revision:"444ca950910356d03200d1f92e02fa28"},{url:"assets/filters.html-f1f4368a.js",revision:"914a57005e9863823504651e33e645a6"},{url:"assets/fluent-api.html-52149959.js",revision:"15668f910f9a5ac58247123aac0654b1"},{url:"assets/fluent-api.html-7814dc03.js",revision:"17c2c7ee086cee119227c3e53ae2d99e"},{url:"assets/freeim.html-0be48049.js",revision:"037b7b943ad02bacf6c62f88ce2967af"},{url:"assets/freeim.html-c9f396d1.js",revision:"370c52e14853a1d194993f41873b717b"},{url:"assets/freeredis.html-0b037a68.js",revision:"d7e5cc84c49c44ab3c388354ffd51580"},{url:"assets/freeredis.html-1355d9b4.js",revision:"5b44cc453d09c7ef2f0a8f3ea8a1a375"},{url:"assets/freescheduler.html-946c325b.js",revision:"bf9dc6a7da9b0749eb58fc30e6b55e35"},{url:"assets/freescheduler.html-9817f4e8.js",revision:"2d2a0a18363f7e23664b5d056a5611df"},{url:"assets/freesql-auditlog.html-1806a1a9.js",revision:"39f3d43203f58b3979ed670dd5008288"},{url:"assets/freesql-auditlog.html-a6301efb.js",revision:"0a0f5e091664faeed24988f6622dc850"},{url:"assets/freesql-cap.html-8b9ba518.js",revision:"398669e6be2161c2a92a5fa4b8201f69"},{url:"assets/freesql-cap.html-f53bf6ab.js",revision:"000c53161367e0a4e6abc236d55076d0"},{url:"assets/freesql-docker.html-a243f90f.js",revision:"5ae4b9626caed5b4519651aa2e138782"},{url:"assets/freesql-docker.html-e8fc091e.js",revision:"07817167031013b75c71e13c7c809ed2"},{url:"assets/freeSql-extensions-baseentity.html-26566730.js",revision:"e1e40e5213e387cc53be5d1c68de41dc"},{url:"assets/freeSql-extensions-baseentity.html-7a104d6e.js",revision:"b892ac663c92e2c38b4ab9a1dcc5bfdd"},{url:"assets/freesql-extensions-jsonmap.html-7c78d2b5.js",revision:"b546d1d180da1680c5c846401893b57f"},{url:"assets/freesql-extensions-jsonmap.html-e87eb7f2.js",revision:"b1a74a0d193c95a575ea9ff24647a325"},{url:"assets/freesql-provider-custom.html-6fb39ba2.js",revision:"4abf21a53d95efb83a0abf4544558166"},{url:"assets/freesql-provider-custom.html-f943d531.js",revision:"5cfdec82f0e26d30593669e4bf059cf5"},{url:"assets/freesql-provider-mysqlconnector.html-913b72b4.js",revision:"f08e9dfe017732de035e42b98cb28cd9"},{url:"assets/freesql-provider-mysqlconnector.html-a40c3bf3.js",revision:"e9b088d1283dd5965010d4c48c6cb2e2"},{url:"assets/freesql-provider-odbc.html-84e73519.js",revision:"681d2d93b27d6b1fe20f8d32252aeaf0"},{url:"assets/freesql-provider-odbc.html-90c58360.js",revision:"12ce043af9e41abae3be0a8a135020ac"},{url:"assets/freesql-provider-oracle.html-93069d8f.js",revision:"23a21a317900a8385edbbdc8e06b5c1b"},{url:"assets/freesql-provider-oracle.html-a7c1535c.js",revision:"b4f39dae674d1fc6242e94c933f1e99b"},{url:"assets/freesql-provider-postgresql.html-1ce4832a.js",revision:"c394ce70623eadbde8ae8da392c4c405"},{url:"assets/freesql-provider-postgresql.html-5fc90236.js",revision:"d2c787a6e8b4bf16f85867b7f3d65b0e"},{url:"assets/freesql-provider-questdb.html-5ed7bd81.js",revision:"c0aeaecac4cf72eabcc5eb8fa0c61e25"},{url:"assets/freesql-provider-questdb.html-c5ffcec3.js",revision:"929bcc9f22903f7c685731a83a6de865"},{url:"assets/freesql-provider-sqlitecore.html-7533dd88.js",revision:"0599bc135adb60082283022de49af2c0"},{url:"assets/freesql-provider-sqlitecore.html-9f1e9c66.js",revision:"4b4c9616f990acba13523dbac3b5634d"},{url:"assets/freesqladminlte.html-79ad6087.js",revision:"7fa2077d8810132f10c80769e81ee6c7"},{url:"assets/freesqladminlte.html-ddc48b1b.js",revision:"14d362a91a02d0f7bbbd4dd23fec52ee"},{url:"assets/getting-started.html-2ee7af6c.js",revision:"b8a7fb48c336b285869196d740c29189"},{url:"assets/getting-started.html-7d0ad57d.js",revision:"67cdeccdc5b1d7095495cb0f18df325d"},{url:"assets/getting-started.html-a59c4072.js",revision:"39def04e18796ecb424a0456a167f336"},{url:"assets/getting-started.html-dad75e36.js",revision:"b7155d9e1acf08ff61a886306be3f1da"},{url:"assets/Greed-Loading.html-39770a40.js",revision:"4d9c48a6e7be5b73432bc5522035a17c"},{url:"assets/Greed-Loading.html-f3e53460.js",revision:"dc2d44f6534e5e991cf3fb56463f89c2"},{url:"assets/Group-Aggregation-Query.html-cc592349.js",revision:"22edf8790c3f48dfdbbcb67b532787ca"},{url:"assets/Group-Aggregation-Query.html-d024140b.js",revision:"dd2ea4870c0b7326a8b2cc442463cfb4"},{url:"assets/idlebus-freesql.html-53cb61e7.js",revision:"bb30f05012b9f0630d0b24749d807093"},{url:"assets/idlebus-freesql.html-bc1130a0.js",revision:"8e9495d94a79e43e2ffba8970cbb8265"},{url:"assets/ifreesql-context.html-4a484f12.js",revision:"02ad816de8446e4299b22ced88946cd7"},{url:"assets/ifreesql-context.html-fe7a0172.js",revision:"8f1687fada985f90b454f0c536902275"},{url:"assets/index-d2e5859f.js",revision:"33bfc9f9df9ffd7833bc6f13e2eccee1"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-0e9cf5eb.js",revision:"d460fad3afa5d9af19eee0eda107e04d"},{url:"assets/index.html-1344bd39.js",revision:"a62bb8cee0bc655c3646b9bdeea56812"},{url:"assets/index.html-1e46dfd2.js",revision:"59d5926d5d7b5df77e8c86d0bee2a54e"},{url:"assets/index.html-6a77f979.js",revision:"332f4c9dc8fbca1f1a53b08a65ebcccf"},{url:"assets/index.html-74ffde50.js",revision:"e5a0c13519193fbf4a6c8532e65b4ab0"},{url:"assets/index.html-763986e5.js",revision:"7013f504e5070f9ad8c9081299557f8c"},{url:"assets/index.html-7f0ea61d.js",revision:"55e9c53f56b201d6792bc990b6013d63"},{url:"assets/index.html-83b4c2ca.js",revision:"82fd8dc667886d0a838d55a0fe511996"},{url:"assets/index.html-8dd14ce0.js",revision:"a69b2e4453a65a8f92329f4fe3099d28"},{url:"assets/index.html-967e2538.js",revision:"0cb9bd3d40a51c86a6e0338603f103eb"},{url:"assets/index.html-a1d8d464.js",revision:"51bb1ff4273a4d5fadd7d70ea33b002f"},{url:"assets/index.html-e25853fd.js",revision:"f686b01204700f8c15f464adf98cb7c0"},{url:"assets/Insert-Data.html-57625caf.js",revision:"fc121e71c962d1a670b83fae7dd6682d"},{url:"assets/Insert-Data.html-f325f89e.js",revision:"274549a546d1d73d0eafd84c28165582"},{url:"assets/insert-or-update.html-40d48dc3.js",revision:"40ac54e8defb7915f530b2b962a5e5de"},{url:"assets/insert-or-update.html-8c090c79.js",revision:"10d22c6974f36403d57f93330df54d52"},{url:"assets/insert-or-update.html-a5a8b30c.js",revision:"dfc9185c672463584dc3a9dff13cb272"},{url:"assets/insert-or-update.html-c1c1b061.js",revision:"f431041fbe801312788d2c87e72fcc0d"},{url:"assets/insert.html-34d18501.js",revision:"a4350e2bb0717918f955fb5e65da78d9"},{url:"assets/insert.html-f52b160d.js",revision:"a0688c22efcde5b2c985c2f279bb1537"},{url:"assets/install.html-19da757a.js",revision:"aa0fe8491f19f623c316f91cbde5e441"},{url:"assets/install.html-a30b9f92.js",revision:"af7fa42aa7e5848e7dfe1f973fb0e6b8"},{url:"assets/install.html-a3910478.js",revision:"c56bd985f5bd4cdf0d7cab135cbcf242"},{url:"assets/install.html-e9a430b1.js",revision:"8163e8cb4d29a44940fbba7631b02566"},{url:"assets/iselect-depcopy.html-8b822fd1.js",revision:"d54e1b1199c7e440ff4611fcf5e7d0e6"},{url:"assets/iselect-depcopy.html-fd05d4de.js",revision:"7f0798cf4b5b3b55a9582553c87ecd7a"},{url:"assets/issues-expression-groupbysum.html-1d0ac83d.js",revision:"d9d561cd31aaf26ed726dc9e4f391044"},{url:"assets/issues-expression-groupbysum.html-c161300c.js",revision:"b39f6b8b5e4d56601b84d2138c4db95c"},{url:"assets/issues-in-valuetype.html-79eda4c1.js",revision:"fe1e3271dc87953f9da1635b2cf858c5"},{url:"assets/issues-in-valuetype.html-9dd15629.js",revision:"59036e48d25faf5fe57354015543fb74"},{url:"assets/issues-mysql5_5.html-c4a6aa43.js",revision:"558d88284a2e5c1783bb8ce81c8bf09c"},{url:"assets/issues-mysql5_5.html-ee832b5d.js",revision:"5d05494ebc9d2cb27fa73042cd4bf72b"},{url:"assets/Lazy-Loading.html-1d86a6ba.js",revision:"fb89428dc21043a170449c42d8ee1bc9"},{url:"assets/Lazy-Loading.html-3acf9766.js",revision:"2dc15e21aa2d10979b43ee1c1de3a8d8"},{url:"assets/Linq-to-Sql.html-6518bb1b.js",revision:"7bba5dcf64ce21b28a470f6ef91147bc"},{url:"assets/linq-to-sql.html-7fe2af79.js",revision:"4f696205b04c3a3b3f72eaba7fca8bbf"},{url:"assets/Linq-to-Sql.html-94c8517c.js",revision:"eb168e5f67a899481bee0ff75b34489e"},{url:"assets/linq-to-sql.html-9f075b8f.js",revision:"6f3c01a52b683e70c2fba7c1538d2e59"},{url:"assets/more.html-2257b9da.js",revision:"d2c1cadbaf52237ae284033d953bf96c"},{url:"assets/more.html-befdbd6f.js",revision:"3747580602bc89b047789ee2265617f3"},{url:"assets/multi-tenancy.html-c135a01a.js",revision:"d6586fb772659c8aac5e6565841c057a"},{url:"assets/multi-tenancy.html-fe5b8123.js",revision:"f2cb18d1c915730c5c86ec46a179df11"},{url:"assets/navigate-attribute.html-178b8c3a.js",revision:"9ef4eaa6a85fdcf1d35f8eb8934b682c"},{url:"assets/navigate-attribute.html-1d0944b7.js",revision:"4772d8a9c888116598e6c0d04519935f"},{url:"assets/otherworks.html-6a03fede.js",revision:"8277b92c4e74b996f90285e003cfc507"},{url:"assets/otherworks.html-f2685b42.js",revision:"d0567a9e8a94fedb54a809b1fa4c76fd"},{url:"assets/Pagination.html-226d58b6.js",revision:"6d4394b0d2a7e4707fd5db46154ae953"},{url:"assets/Pagination.html-abd95b4f.js",revision:"73c258125af4dad33c89cad8972a5403"},{url:"assets/paging.html-45b8613e.js",revision:"2262eaa7a8f414bdfbd1e4a97b86babe"},{url:"assets/paging.html-da4981de.js",revision:"b406a87f53fb45d470f3d89c9cc59e1b"},{url:"assets/Parent-Child-Relationship-Query.html-24d4e93f.js",revision:"39e2d4a03f6743071ee75d13ff35b10c"},{url:"assets/Parent-Child-Relationship-Query.html-9cbf4cc1.js",revision:"06f7f5d33b20684dec9a353f3f18ca7a"},{url:"assets/performance.html-7acec474.js",revision:"fffbb435ac96b1dd4db87b661e010941"},{url:"assets/performance.html-a4ad55e2.js",revision:"7977f28258f4f4f4bfcd0b031b00db24"},{url:"assets/photoswipe.esm-2450701e.js",revision:"55b8097e827163367e1bb02833c0acec"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/Query-Data.html-03a021e9.js",revision:"2b47a359ae94fa2318121e9d06c90ed2"},{url:"assets/Query-Data.html-bbcfbaa2.js",revision:"b890a2b576ece64947b816d7b9094462"},{url:"assets/Query-from-Multi-Table.html-b93eb4f7.js",revision:"70c9f14373cfba64d49c403be3648976"},{url:"assets/Query-from-Multi-Table.html-fe438cc2.js",revision:"da15d66cf42117b4aef0cbec96d4cd53"},{url:"assets/Query-from-Single-Table.html-4020e180.js",revision:"93ff00647610fdf350fca35d95fecd66"},{url:"assets/Query-from-Single-Table.html-e399d391.js",revision:"2683de66b6b8d6e0c7cf0efbcac96ec2"},{url:"assets/read-write-splitting.html-71855a96.js",revision:"b2961b33d31d5359650043654b2b00fb"},{url:"assets/read-write-splitting.html-e88520e4.js",revision:"745238214678fec7d4e18b61c7a1b9dd"},{url:"assets/Repository-Layer.html-85b4545f.js",revision:"463653ca48fc29a8b2daf5b5b27df4d7"},{url:"assets/Repository-Layer.html-aae5a1a1.js",revision:"57d996a7ea2fd8a8a84bb94bd94a6c44"},{url:"assets/repository.html-2378ff8c.js",revision:"7969e9a49ecfcaf153d62f5dc4551808"},{url:"assets/repository.html-ce5a7fd0.js",revision:"bccbe43773992d3591b5bdb6d7728fbe"},{url:"assets/Return-Data.html-1fe70e12.js",revision:"d77f11e98c77c1de175e74f24840fcea"},{url:"assets/Return-Data.html-4a7e42f0.js",revision:"19cfc52072e02735c50efe9417a52fcf"},{url:"assets/select-as-tree.html-8f965ef4.js",revision:"b006d97e908df79bee700c2b314ff64b"},{url:"assets/select-as-tree.html-aa1b1964.js",revision:"d60b98cd7133b3eae350b25c1d8cfa72"},{url:"assets/select-group-by.html-15c793cd.js",revision:"c07329cd23367cc56ec634ad6db6dc9a"},{url:"assets/select-group-by.html-ec5c058e.js",revision:"b28e5b39811f873e6d14ec31f77f4a51"},{url:"assets/select-include.html-12ee1272.js",revision:"171c99f38c95ee83063effac6aba0b5a"},{url:"assets/select-include.html-1822017c.js",revision:"edc1b0c3f6fe393a5dbb9b5acde78766"},{url:"assets/select-lazy-loading.html-87ac01d7.js",revision:"211991ee578845926a90baeadaa036d0"},{url:"assets/select-lazy-loading.html-dcb7bd8f.js",revision:"d0190c6aa3f5b190f92d773d095cce61"},{url:"assets/select-multi-table.html-9636543d.js",revision:"81f6fbf088e1dc5142a8e5511f006534"},{url:"assets/select-multi-table.html-d7a68acc.js",revision:"643068f3d12babf10a578ef7c3f608f4"},{url:"assets/select-return-data.html-7fbe2f8e.js",revision:"f9f8218228bb7fa802aaecccc2a24f23"},{url:"assets/select-return-data.html-96380762.js",revision:"99d87884b9b830cc63b7cf6d3b6bdd62"},{url:"assets/select-single-table.html-59872dc5.js",revision:"a8592402f61ac45312a4620b21b007f4"},{url:"assets/select-single-table.html-7d195265.js",revision:"30c0034a6d86edd148b01d129a63726e"},{url:"assets/select.html-6ce0d86d.js",revision:"320b0c0814fe15d3b14e991dda5c7710"},{url:"assets/select.html-e670a10d.js",revision:"043558dcd25a9170840a292fa3b69687"},{url:"assets/service-support.html-395c213a.js",revision:"2a3f65304faa8423772213a2bb79d28f"},{url:"assets/service-support.html-e68d0b8b.js",revision:"d10e1b07cfede6a025b92e859ea4c0c1"},{url:"assets/sharding.html-1884b727.js",revision:"b3fe681cf822c9dadb901d33f5ed8fee"},{url:"assets/sharding.html-63bd3e81.js",revision:"a68350e377e67963081ae45be21b7cfa"},{url:"assets/style-327aa9a6.css",revision:"ec2c0462b19f292afc0808346f9cddad"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/transaction.html-05361d5d.js",revision:"f9b4d868a22dafeb16b5b45793c5290e"},{url:"assets/transaction.html-b7eac130.js",revision:"be142c388ed0e49f5a0b58986a71e822"},{url:"assets/type-mapping.html-6d82d5f2.js",revision:"6089e371cb494d51fdc5a0d41050d63c"},{url:"assets/type-mapping.html-c218846b.js",revision:"72511407af427501e2dec1ea2ff3b9a7"},{url:"assets/unionall.html-4d582416.js",revision:"c4ae91f48563716630c77403d172c766"},{url:"assets/unionall.html-fce4eab1.js",revision:"2d86168b1e5b40719096e3d17fb6dd2b"},{url:"assets/Unit-of-Work-Manager.html-70667171.js",revision:"e253645b56418bf183f871a1e079a623"},{url:"assets/Unit-of-Work-Manager.html-7e6e5a70.js",revision:"f6fd3abc4736b33fa57012c5c2fa1231"},{url:"assets/unit-of-work.html-79ae925b.js",revision:"baebccd9a6c1ed261944b9c55f3a4632"},{url:"assets/unit-of-work.html-d494cac8.js",revision:"33967f847a104cccd0ed573a69d38db0"},{url:"assets/Unit-of-Work.html-e048ab1c.js",revision:"f260af4abe0f93ad74fcfce7ed9c405f"},{url:"assets/Unit-of-Work.html-ea9eae67.js",revision:"67c0faa18a7997a2b06414cbb6dd37c7"},{url:"assets/unitofwork-manager.html-342db14a.js",revision:"21927328396b22fd55afff0aad276b65"},{url:"assets/unitofwork-manager.html-7f496bac.js",revision:"b5c12ffab84624ad549f25897702155a"},{url:"assets/Update-Data.html-17b46e6d.js",revision:"f8ade1aaa0d5bde02c9663325f790588"},{url:"assets/Update-Data.html-58a38c3e.js",revision:"b9ce2d72996d7971cf2b48b8de71340e"},{url:"assets/update.html-16d336b7.js",revision:"2d662f518dad88f9f4e181a5c8467df6"},{url:"assets/update.html-3455588d.js",revision:"1d3bff585b6b986589c3c3ae20e93e50"},{url:"assets/vs-dapper.html-219f08a6.js",revision:"ab9b0fe0decf2b043fce9a90169bc568"},{url:"assets/vs-dapper.html-9093c505.js",revision:"05a0ff1bfdee9083932da559fddcf828"},{url:"assets/vs-entity-framework.html-37492ee0.js",revision:"4a74def9d2c4a0e0ddd82dec7d001c1b"},{url:"assets/vs-entity-framework.html-89ec9b17.js",revision:"d5bb5ab037d7b6f5dea5acdfeb89c1a4"},{url:"assets/With-Sql.html-cacc85fe.js",revision:"8da9a9084e5b71ee4e7e95c13c46efbc"},{url:"assets/With-Sql.html-f77d96e5.js",revision:"467e4bd8420c3512a68ef9c5c5c0f69a"},{url:"assets/withsql.html-36d6f953.js",revision:"54960ae2c69996f179831e886f72dd54"},{url:"assets/withsql.html-691111f7.js",revision:"cdd6d1cade4380e4f3a4eefc6db35cb0"},{url:"assets/withtempquery.html-9fd29596.js",revision:"3c1c550d8433240a9281386b535ba428"},{url:"assets/withtempquery.html-d441bdce.js",revision:"bd9cf25a37e0eb40b9f3522853b3d3c9"},{url:"js/base.js",revision:"e0eaa312c6884ef5f8a21a0ecf300b49"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"index.html",revision:"19d2246e3be1e60d9bf0d6b841e27563"},{url:"404.html",revision:"afaeebba683ddeb9eb78848448f4c791"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map

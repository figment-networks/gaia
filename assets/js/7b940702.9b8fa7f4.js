"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[6222],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=a.createContext({}),d=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(r.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(t),k=i,c=m["".concat(r,".").concat(k)]||m[k]||u[k]||l;return t?a.createElement(c,o(o({ref:n},p),{},{components:t})):a.createElement(c,o({ref:n},p))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=k;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<l;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},6745:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=t(7462),i=(t(7294),t(3905));const l={title:"The Genesis File",order:1},o=void 0,s={unversionedId:"resources/genesis",id:"resources/genesis",title:"The Genesis File",description:"This document explains how the genesis file of the Cosmos Hub mainnet is structured. It also explains how you can build a genesis file for your own gaia testnet.",source:"@site/docs/resources/genesis.md",sourceDirName:"resources",slug:"/resources/genesis",permalink:"/resources/genesis",draft:!1,tags:[],version:"current",frontMatter:{title:"The Genesis File",order:1},sidebar:"tutorialSidebar",previous:{title:"Cosmos Hub Archives",permalink:"/resources/archives"},next:{title:"HD Wallets",permalink:"/resources/hd-wallets"}},r={},d=[{value:"What is a Genesis File",id:"what-is-a-genesis-file",level:2},{value:"Genesis Time and Chain_id",id:"genesis-time-and-chain_id",level:2},{value:"Consensus Parameters",id:"consensus-parameters",level:2},{value:"Application State",id:"application-state",level:2},{value:"Genesis Accounts",id:"genesis-accounts",level:3},{value:"Bank",id:"bank",level:3},{value:"Staking",id:"staking",level:3},{value:"Mint",id:"mint",level:3},{value:"Distribution",id:"distribution",level:3},{value:"Governance",id:"governance",level:3},{value:"Slashing",id:"slashing",level:3},{value:"Genesis Transactions",id:"genesis-transactions",level:3}],p={toc:d},m="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document explains how the genesis file of the Cosmos Hub mainnet is structured. It also explains how you can build a genesis file for your own ",(0,i.kt)("inlineCode",{parentName:"p"},"gaia")," testnet."),(0,i.kt)("p",null,"Note that you can generate a default genesis file for your own testnet by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad init <moniker> --chain-id <chain-id>\n")),(0,i.kt)("p",null,"The genesis file is stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.gaia/config/genesis.toml"),"."),(0,i.kt)("h2",{id:"what-is-a-genesis-file"},"What is a Genesis File"),(0,i.kt)("p",null,"A genesis file is a JSON file which defines the initial state of your blockchain. It can be seen as height ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," of your blockchain. The first block, at height ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", will reference the genesis file as its parent."),(0,i.kt)("p",null,"The state defined in the genesis file contains all the necessary information, like initial token allocation, genesis time, default parameters, and more. Let us break down this information."),(0,i.kt)("h2",{id:"genesis-time-and-chain_id"},"Genesis Time and Chain_id"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"genesis_time")," is defined at the top of the genesis file. It is a ",(0,i.kt)("inlineCode",{parentName:"p"},"UTC")," timestamp that specifies when the blockchain is due to start. At this time, genesis validators are supposed to come online and start participating in the consensus process. The blockchain starts when more than 2/3rd of the genesis validators (weighted by voting power) are online."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"genesis_time": "2019-03-13T17:00:00.000000000Z",\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"chain_id")," is a unique identifier for your chain. It helps differentiate between different chains using the same version of the software."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"chain_id": "cosmoshub-2",\n')),(0,i.kt)("h2",{id:"consensus-parameters"},"Consensus Parameters"),(0,i.kt)("p",null,"Next, the genesis file defines consensus parameters. Consensus parameters regroup all the parameters that are related to the consensus layer, which is ",(0,i.kt)("inlineCode",{parentName:"p"},"Tendermint")," in the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"gaia"),". Let us look at these parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"block"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_bytes"),": Maximum number of bytes per block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_gas"),": Gas limit per block. Each transaction included in the block will consume some gas. The total gas used by transactions included in a block cannot exceed this limit."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"evidence"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_age"),": An evidence is a proof that a validator signed two different blocks at the same height (and round). This is an explicitly malicious behaviour that is punished at the state-machine level. The ",(0,i.kt)("inlineCode",{parentName:"li"},"max_age")," defines the maximum number of ",(0,i.kt)("strong",{parentName:"li"},"blocks")," after which an evidence is not valid anymore."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validator"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pub_key_types"),": The types of pubkey (",(0,i.kt)("inlineCode",{parentName:"li"},"ed25519"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"secp256k1"),", ...) that are accepted for validators. Currently only ",(0,i.kt)("inlineCode",{parentName:"li"},"ed25519")," is accepted.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"consensus_params": {\n    "block_size": {\n      "max_bytes": "150000",\n      "max_gas": "1500000"\n    },\n    "evidence": {\n      "max_age": "1000000"\n    },\n    "validator": {\n      "pub_key_types": [\n        "ed25519"\n      ]\n    }\n  },\n')),(0,i.kt)("h2",{id:"application-state"},"Application State"),(0,i.kt)("p",null,"The application state defines the initial state of the state-machine."),(0,i.kt)("h3",{id:"genesis-accounts"},"Genesis Accounts"),(0,i.kt)("p",null,"In this section, the initial allocation of tokens is defined. It is possible to add accounts manually by directly editing the genesis file, but it is also possible to use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"// Example: gaiad add-genesis-account cosmos1qs8tnw2t8l6amtzvdemnnsq9dzk0ag0z37gh3h 10000000uatom\n\ngaiad genesis add-genesis-account <account-address> <amount><denom>\n")),(0,i.kt)("p",null,"This command creates an item in the ",(0,i.kt)("inlineCode",{parentName:"p"},"accounts")," list, under the ",(0,i.kt)("inlineCode",{parentName:"p"},"app_state")," section."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"accounts": [\n      {\n        "address": "cosmos1qs8tnw2t8l6amtzvdemnnsq9dzk0ag0z37gh3h",\n        "coins": [\n          {\n            "denom": "uatom",\n            "amount": "10000000"\n          }\n        ],\n        "sequence_number": "0",\n        "account_number": "0",\n        "original_vesting": [\n          {\n            "denom": "uatom",\n            "amount": "26306000000"\n          }\n        ],\n        "delegated_free": null,\n        "delegated_vesting": null,\n        "start_time": "0",\n        "end_time": "10000"\n      }\n]\n')),(0,i.kt)("p",null,"Let us break down the parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sequence_number"),": This number is used to count the number of transactions sent by this account. It is incremented each time a transaction is included in a block, and used to prevent replay attacks. Initial value is ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"account_number"),": Unique identifier for the account. It is generated the first time a transaction including this account is included in a block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"original_vesting"),": Vesting is natively supported by ",(0,i.kt)("inlineCode",{parentName:"li"},"gaia"),". You can define an amount of token owned by the account that needs to be vested for a period of time before they can be transferred. Vested tokens can be delegated. Default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegated_free"),": Amount of delegated tokens that can be transferred after they've been vested. Most of the time, will be ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," in genesis."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegated_vesting"),": Amount of delegated tokens that are still vesting. Most of the time, will be ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," in genesis."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start_time"),": Timestamp at which the vesting period starts. ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," most of the time in genesis."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"end_time"),": Timestamp at which the vesting period ends. ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," if no vesting for this account.")),(0,i.kt)("h3",{id:"bank"},"Bank"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"bank")," module handles tokens. The only parameter that needs to be defined in this section is whether ",(0,i.kt)("inlineCode",{parentName:"p"},"transfers")," are enabled at genesis or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"bank": {\n      "send_enabled": false\n    }\n')),(0,i.kt)("h3",{id:"staking"},"Staking"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"staking")," module handles the bulk of the Proof-of-Stake logic of the state-machine. This section should look like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"staking": {\n      "pool": {\n        "not_bonded_tokens": "10000000",\n        "bonded_tokens": "0"\n      },\n      "params": {\n        "unbonding_time": "1814400000000000",\n        "max_validators": 100,\n        "max_entries": 7,\n        "bond_denom": "uatom"\n      },\n      "last_total_power": "0",\n      "last_validator_powers": null,\n      "validators": null,\n      "bonds": null,\n      "unbonding_delegations": null,\n      "redelegations": null,\n      "exported": false\n    }\n')),(0,i.kt)("p",null,"Let us break down the parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pool"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"not_bonded_tokens"),": Defines the amount of tokens not bonded (i.e. delegated) in genesis. Generally, it equals the total supply of the staking token (",(0,i.kt)("inlineCode",{parentName:"li"},"uatom")," in this example)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bonded_tokens"),": Amount of bonded tokens in genesis. Generally ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unbonding_time"),": Time in ",(0,i.kt)("strong",{parentName:"li"},"nanosecond")," it takes for tokens to complete unbonding."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_validators"),": Maximum number of active validators."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_entries"),": Maximum unbonding delegations and redelegations between a particular pair of delegator / validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bond_denom"),": Denomination of the staking token."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"last_total_power"),": Total amount of voting power. Generally ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," in genesis (except if genesis was generated using a previous state)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"last_validator_powers"),": Power of each validator in last known state. Generally ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," in genesis (except if genesis was generated using a previous state)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validators"),": List of last known validators. Generally ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," in genesis (except if genesis was generated using a previous state)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bonds"),": List of last known delegation. Generally ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," in genesis (except if genesis was generated using a previous state)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unbonding_delegations"),": List of last known unbonding delegations. Generally ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," in genesis (except if genesis was generated using a previous state)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"redelegations"),": List of last known redelegations. Generally ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," in genesis (except if genesis was generated using a previous state)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exported"),": Whether this genesis was generated using the export of a previous state.")),(0,i.kt)("h3",{id:"mint"},"Mint"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"mint")," module governs the logic of inflating the supply of token. The ",(0,i.kt)("inlineCode",{parentName:"p"},"mint")," section in the genesis file looks like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"mint": {\n      "minter": {\n        "inflation": "0.070000000000000000",\n        "annual_provisions": "0.000000000000000000"\n      },\n      "params": {\n        "mint_denom": "uatom",\n        "inflation_rate_change": "0.130000000000000000",\n        "inflation_max": "0.200000000000000000",\n        "inflation_min": "0.070000000000000000",\n        "goal_bonded": "0.670000000000000000",\n        "blocks_per_year": "6311520"\n      }\n    }\n')),(0,i.kt)("p",null,"Let us break down the parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"minter"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inflation"),": Initial yearly percentage of increase in the total supply of staking token, compounded weekly. A ",(0,i.kt)("inlineCode",{parentName:"li"},"0.070000000000000000")," value means the target is ",(0,i.kt)("inlineCode",{parentName:"li"},"7%")," yearly inflation, compounded weekly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"annual_provisions"),": Calculated each block. Initialize at ",(0,i.kt)("inlineCode",{parentName:"li"},"0.000000000000000000"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mint_denom"),": Denom of the staking token that is inflated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inflation_rate_change"),": Max yearly change in inflation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inflation_max"),": Maximum level of inflation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inflation_min"),": Minimum level of inflation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"goal_bonded"),": Percentage of the total supply that is targeted to be bonded. If the percentage of bonded staking tokens is below this target, the inflation increases (following ",(0,i.kt)("inlineCode",{parentName:"li"},"inflation_rate_change"),") until it reaches ",(0,i.kt)("inlineCode",{parentName:"li"},"inflation_max"),". If the percentage of bonded staking tokens is above this target, the inflation decreases (following ",(0,i.kt)("inlineCode",{parentName:"li"},"inflation_rate_change"),") until it reaches ",(0,i.kt)("inlineCode",{parentName:"li"},"inflation_min"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blocks_per_year"),": Estimation of the amount of blocks per year. Used to compute the block reward coming from inflated staking token (called block provisions).")))),(0,i.kt)("h3",{id:"distribution"},"Distribution"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"distribution")," module handles the logic of distribution block provisions and fees to validators and delegators. The ",(0,i.kt)("inlineCode",{parentName:"p"},"distribution")," section in the genesis file looks like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    "distribution": {\n      "fee_pool": {\n        "community_pool": null\n      },\n      "community_tax": "0.020000000000000000",\n      "base_proposer_reward": "0.010000000000000000",\n      "bonus_proposer_reward": "0.040000000000000000",\n      "withdraw_addr_enabled": false,\n      "delegator_withdraw_infos": null,\n      "previous_proposer": "",\n      "outstanding_rewards": null,\n      "validator_accumulated_commissions": null,\n      "validator_historical_rewards": null,\n      "validator_current_rewards": null,\n      "delegator_starting_infos": null,\n      "validator_slash_events": null\n    }\n')),(0,i.kt)("p",null,"Let us break down the parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fee_pool"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"community_pool"),": The community pool is a pool of tokens that can be used to pay for bounties. It is allocated via governance proposals. Generally ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," in genesis."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"community_tax"),": The tax percentage on fees and block rewards that goes to the community pool."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"base_proposer_reward"),": Base bonus on transaction fees collected in a valid block that goes to the proposer of block. If value is ",(0,i.kt)("inlineCode",{parentName:"li"},"0.010000000000000000"),", 1% of the fees go to the proposer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bonus_proposer_reward"),": Max bonus on transaction fees collected in a valid block that goes to the proposer of block. The bonus depends on the number of ",(0,i.kt)("inlineCode",{parentName:"li"},"precommits")," the proposer includes. If the proposer includes 2/3rd ",(0,i.kt)("inlineCode",{parentName:"li"},"precommits")," weighted by voting power (minimum for the block to be valid), they get a bonus of ",(0,i.kt)("inlineCode",{parentName:"li"},"base_proposer_reward"),". This bonus increases linearly up to ",(0,i.kt)("inlineCode",{parentName:"li"},"bonus_proposer_reward")," if the proposer includes 100% of ",(0,i.kt)("inlineCode",{parentName:"li"},"precommits"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withdraw_addr_enabled"),": If ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", delegators can set a different address to withdraw their rewards. Set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," if you want to disable transfers at genesis, as it can be used as a way to get around the restriction."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegator_withdraw_infos"),": List of delegators withdraw address. Generally ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," if genesis was not exported from previous state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"previous_proposer"),": Proposer of the previous block. Set to ",(0,i.kt)("inlineCode",{parentName:"li"},'""')," if genesis was not exported from previous state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"outstanding_rewards"),": Outstanding (un-withdrawn) rewards. Set to ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," if genesis was not exported from previous state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validator_accumulated_commission"),": Outstanding (un-withdrawn) commission of validators. Set to ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," if genesis was not exported from previous state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validator_historical_rewards"),": Set of information related to the historical rewards of validators and used by the ",(0,i.kt)("inlineCode",{parentName:"li"},"distribution")," module for various computation. Set to ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," if genesis was not exported from previous state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validators_current_rewards"),": Set of information related to the current rewards of validators and used by the ",(0,i.kt)("inlineCode",{parentName:"li"},"distribution")," module for various computation. Set to ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," if genesis was not exported from previous state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegator_starting_infos"),": Tracks the previous validator period, the delegation's amount of staking token, and the creation height (to check later on if any slashes have occurred). Set to ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," if genesis was not exported from previous state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validator_slash_events"),": Set of information related to the past slashing of validators. Set to ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," if genesis was not exported from previous state.")),(0,i.kt)("h3",{id:"governance"},"Governance"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"gov")," module handles all governance-related transactions. The initial state of the ",(0,i.kt)("inlineCode",{parentName:"p"},"gov")," section looks like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"gov": {\n      "starting_proposal_id": "1",\n      "deposits": null,\n      "votes": null,\n      "proposals": null,\n      "deposit_params": {\n        "min_deposit": [\n          {\n            "denom": "uatom",\n            "amount": "512000000"\n          }\n        ],\n        "max_deposit_period": "1209600000000000"\n      },\n      "voting_params": {\n        "voting_period": "1209600000000000"\n      },\n      "tally_params": {\n        "quorum": "0.4",\n        "threshold": "0.5",\n        "veto": "0.334",\n        "governance_penalty": "0.0"\n      }\n    }\n')),(0,i.kt)("p",null,"Let us break down the parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"starting_proposal_id"),": This parameter defines the ID of the first proposal. Each proposal is identified by a unique ID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deposits"),": List of deposits for each proposal ID. Set to ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," if genesis was not exported from previous state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"votes"),": List of votes for each proposal ID. Set to ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," if genesis was not exported from previous state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"proposals"),": List of proposals for each proposal ID: Set to ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," if genesis was not exported from previous state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deposit_params"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min_deposit"),": The minimum deposit required for the proposal to enter ",(0,i.kt)("inlineCode",{parentName:"li"},"Voting Period"),". If multiple denoms are provided, the ",(0,i.kt)("inlineCode",{parentName:"li"},"OR")," operator applies."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_deposit_period"),": The maximum period (in ",(0,i.kt)("strong",{parentName:"li"},"nanoseconds"),") after which it is not possible to deposit on the proposal anymore."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"voting_params"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"voting_period"),": Length of the voting period in ",(0,i.kt)("strong",{parentName:"li"},"nanoseconds"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tally_params"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"quorum"),": Minimum percentage of bonded staking tokens that needs to vote for the result to be valid."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"threshold"),": Minimum percentage of votes that need to be ",(0,i.kt)("inlineCode",{parentName:"li"},"YES")," for the result to be valid."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"veto"),": Maximum percentage ",(0,i.kt)("inlineCode",{parentName:"li"},"NO_WITH_VETO")," votes for the result to be valid."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"governance_penalty"),": Penalty for validators that do not vote on a given proposal.")))),(0,i.kt)("h3",{id:"slashing"},"Slashing"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"slashing")," module handles the logic to slash delegators if their validator misbehaves. The ",(0,i.kt)("inlineCode",{parentName:"p"},"slashing")," section in genesis looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"slashing": {\n      "params": {\n        "max_evidence_age": "1814400000000000",\n        "signed_blocks_window": "10000",\n        "min_signed_per_window": "0.050000000000000000",\n        "downtime_jail_duration": "600000000000",\n        "slash_fraction_double_sign": "0.050000000000000000",\n        "slash_fraction_downtime": "0.000100000000000000"\n      },\n      "signing_infos": {},\n      "missed_blocks": {}\n    }\n')),(0,i.kt)("p",null,"Let us break down the parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_evidence_age"),": Maximum age of the evidence in ",(0,i.kt)("strong",{parentName:"li"},"nanoseconds"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signed_blocks_window"),": Moving window of blocks to figure out offline validators."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min_signed_per_window"),": Minimum percentage of ",(0,i.kt)("inlineCode",{parentName:"li"},"precommits"),"that must be present in the ",(0,i.kt)("inlineCode",{parentName:"li"},"block window")," for the validator to be considered online."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"downtime_jail_duration"),": Duration in ",(0,i.kt)("strong",{parentName:"li"},"nanoseconds")," for which a validator is jailed after they get slashed for downtime."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"slash_fraction_double_sign"),": Percentage of delegators bonded stake slashed when their validator double signs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"slash_fraction_downtime"),": Percentage of delegators bonded stake slashed when their validator is down."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signing_infos"),": Various infos per validator needed by the ",(0,i.kt)("inlineCode",{parentName:"li"},"slashing")," module. Set to ",(0,i.kt)("inlineCode",{parentName:"li"},"{}")," if genesis was not exported from previous state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"missed_blocks"),": Various infos related to missed blocks needed by the ",(0,i.kt)("inlineCode",{parentName:"li"},"slashing")," module. Set to ",(0,i.kt)("inlineCode",{parentName:"li"},"{}")," if genesis was not exported from previous state.")),(0,i.kt)("h3",{id:"genesis-transactions"},"Genesis Transactions"),(0,i.kt)("p",null,"By default, the genesis file do not contain any ",(0,i.kt)("inlineCode",{parentName:"p"},"gentxs"),". A ",(0,i.kt)("inlineCode",{parentName:"p"},"gentx")," is a transaction that bonds staking token present in the genesis file under ",(0,i.kt)("inlineCode",{parentName:"p"},"accounts")," to a validator, essentially creating a validator at genesis. The chain will start as soon as more than 2/3rds of the validators (weighted by voting power) that are the recipient of a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"gentx")," come online after ",(0,i.kt)("inlineCode",{parentName:"p"},"genesis_time"),"."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"gentx")," can be added manually to the genesis file, or via the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad collect-gentxs\n")),(0,i.kt)("p",null,"This command will add all the ",(0,i.kt)("inlineCode",{parentName:"p"},"gentxs")," stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.gaia/config/gentx")," to the genesis file. In order to create a genesis transaction, click ",(0,i.kt)("a",{parentName:"p",href:"/validators/validator-setup#participate-in-genesis-as-a-validator"},"here"),"."))}u.isMDXComponent=!0}}]);
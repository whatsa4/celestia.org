---
path: "/learn/"
slug: "/learn/modular-settlement-layers"
edit: "https://github.com/celestiaorg/celestia.org/tree/main/src/pages/markdown-pages/learn/modular-settlement-layers.md"
date: "2022-07-08"
icon: "/images/modular-settlement.png"
title: "Modular settlement layers"
description: "A first principles perspective on modular blockchains."
---

<head>
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@CelestiaOrg">
  <meta name="twitter:creator" content="@likebeckett">
  <meta name="twitter:title" content="Modular Settlement Layers">
  <meta name="twitter:description" content="By beginning with the first principles of modular blockchains, their purpose and goals will become easier to understand.">
  <meta name="twitter:image" content="https://raw.githubusercontent.com/celestiaorg/celestia.org/main/src/pages/markdown-pages/learn/images/learn-modular-twitter-card.png">
<head/>


# Summary 
* A settlement layer is a blockchain that has a two-way trust minimized bridge with a rollup or any rollup hybrid, such as a validium or volition.
* Settlement layers provide multiple purposes for rollups, which include proof verification & dispute resolution, a hub to facilitate cross-rollup bridging, and a source of liquidity.
* An optimal settlement layer can provide maximal block space for execution layers by disincentivizing applications from deploying on the settlement layer.
* By introducing fraud or validity proofs, a settlement layer can enhance the security of light clients, allowing them to verify valid or invalid blocks.

#### Introduction
The modular blockchain paradigm creates many potential configurations in which blockchains can connect. Since modular blockchains only handle a subset of functions, more specialization can be facilitated. Settlement is one function, in particular, that can become optimized and specialized by a modular blockchain. 


##### Settlement layers
A settlement layer is a blockchain that has a two-way trust minimized bridge with a rollup or any hybrid rollup, such as a validium or volition. The two-way bridge setup enables tokens to move freely between the settlement layer and the rollup. A bridge is trust minimized when communication only requires only a minority of participants to act honestly for it to function correctly. The minimal trust assumptions made by the bridge are possible because the rollup’s batches are fully verified by the settlement layer - using a combination of fraud/validity proofs and data availability verification.

Settlement layers provide multiple purposes for rollups:
* Proof verification & dispute resolution: A place for rollups to publish their proofs for external verification. This is especially useful for optimistic rollups that rely on interactive fraud proofs. 
* Hub to facilitate bridging: Rollups can bridge between each other if they through a common settlement layer. A hub removes the need for all rollups to have a bridge between each other.
* Liquidity source: Liquidity that lives on the settlement layer can be utilized by all rollups on top.

##### Settlement in the modular stack 
Many blockchains can be used as settlement layers, though most of them are monolithic chains that are not specialized for settlement. A settlement layer in the modular stack can decouple the settlement functionality, which execution enables, from the remaining functions, consensus, and data availability. Since a modular settlement layer takes the form of a rollup, it is also referred to as a settlement rollup.

- IMAGE HERE

In this example, the rollup at the top is where user-facing applications live. Like a typical rollup, it publishes its batches of transactions to a settlement layer and pays a fee in its designated token. From there, the rollup doesn’t need to have any direct contact with Celestia. The settlement layer will independently build its own batches, which will include transaction data from the rollup, and publish them to Celestia.

Alternatively, the rollup could publish its transaction data directly to Celestia and its proofs to the settlement rollup separately. Regardless, the process is abstracted away from users and apps as they are only exposed to the requirements on the rollup, such as the gas token and wallet type.

#### Specialized settlement layers
The primary purpose of settlement layers is to cater to the rollups that deploy on top. To create an optimal settlement layer for them, multiple optimizations are possible.
Settlement layers can provide maximal block space to rollups by restricting or heavily disincentivizing applications from launching on the settlement layer. If users are interacting with settlement layer applications, they are simultaneously competing with the rollups for block space. Instead, user-facing applications should live on dedicated execution layers. A settlement layer without user-facing applications can provide maximal capacity for its rollups.

By introducing fraud or validity proofs, the settlement layer can create trust-minimized light clients. Security increases because settlement layer light clients can receive and verify a proof that a block is valid or invalid. Now light clients can reject invalid blocks, unlike naive light clients that get fooled by a dishonest majority of validators. As a result, any execution layers that want to verify the settlement layer don’t have to run a full node but can instead run a secure light node. 

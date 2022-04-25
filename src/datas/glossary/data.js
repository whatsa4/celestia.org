export const glossaries = [
    {
        'B':[
            {
                url: 'blockchain-cluster',
                title: 'Blockchain cluster',
                text: 'A group of blockchains that can communicate with each other in a trust-minimized way.',
            }
        ]
    },{
        'C':[
            {
                url: 'composability',
                title: 'Composability',
                text: 'The ability for applications on a blockchain to read and write state to each other.',
            },{
                url: 'cross-chain-interoperability',
                title: 'Cross-chain interoperability',
                text: 'The ability for separate blockchains to communicate and interact with each other.',
            }
        ]
    },{
        'D':[
            {
                url: 'data-availability-sampling',
                title: 'Data availability sampling',
                text: 'A technique in which nodes can verify that data is available for a block without having to download the entire block, formerly known as data availability proofs.',
            },{
                url: 'data-availability',
                title: 'Data availability',
                text: 'The condition of whether or not transaction data was made available for nodes to download, when a block was proposed.',
            },{
                url: 'data-withholding-attack',
                title: 'Data withholding attack',
                text: 'A type of attack that occurs when a block producer proposes a new block but does not share the underlying transaction data that was used to create the block.',
            }
        ]
    },{
        'E':[
            {
                url: 'execution-environment',
                title: 'Execution environment',
                text: 'The virtual environment within a blockchain where transactions are processed, and accounts and smart contracts live.',
            }
        ]
    },{
        'F':[
            {
                url: 'full-node',
                title: 'Full node',
                text: 'A type of node that fully validates a blockchain by downloading each block and executing transactions to verify its validity.',
            }
        ]
    },{
        'H':[
            {
                url: 'honest-majority-assumption',
                title: 'Honest majority assumption',
                text: 'The assumption that a majority of blockchain participants (such as the validator set) are honest and follow the rules of the protocol.',
            },{
                url: 'honest-minority-assumption',
                title: 'Honest minority assumption',
                text: 'The assumption that only a minority of blockchain participants are honest and follow the rules of the protocol.',
            }
        ]
    },{
        'I':[
            {
                url: 'inter-cluster-communication',
                title: 'Inter-cluster communication',
                text: 'Communication that occurs between blockchains that are in different clusters.',
            }
        ]
    },{
        'L':[
            {
                url: 'light-client',
                title: 'Light client',
                text: 'A type of node that only downloads and verifies block headers, relying on an honest majority assumption that the state of the chain indicated by the block header is valid.',
            }
        ]
    },{
        'M':[
            {
                url: 'modular-blockchain',
                title: 'Modular blockchain',
                text: 'A type of blockchain that specializes in only a few functions, rather than all of them.',
            }
        ]
    },{
        'O':[
            {
                url: 'optimistic-rollup',
                title: 'Optimistic rollup',
                text: 'A type of rollup that posts its blocks to a parent chain without any cryptographic proofs that attest to their validity.',
            }
        ]
    },{
        'R':[
            {
                url: 'rollup',
                title: 'Rollup',
                text: 'A type of blockchain that posts their blocks to a parent chain to receive consensus and ensure data availability.',
            }
        ]
    },{
        'S':[
            {
                url: 'sharding',
                title: 'Sharding',
                text: 'The process of separating a blockchain from a single chain into multiple chains (shards).',
            },{
                url: 'shared-security',
                title: 'Shared security',
                text: 'Security that a blockchain inherits from an external source.',
            },{
                url: 'social-consensus',
                title: 'Social consensus',
                text: 'The process by which individuals come to an agreement on a change that will be made to a blockchain.',
            },{
                url: 'sovereign-application',
                title: 'Sovereign application',
                text: 'An application that is deployed on its own sovereign blockchain.',
            },{
                url: 'sovereign-blockchain',
                title: 'Sovereign blockchain',
                text: 'A blockchain that has independent control over itself and its applications via social consensus.',
            },{
                url: 'state-transition-fraud-proof',
                title: 'State transition fraud proof',
                text: 'A method for proving that a state transition is invalid.',
            },{
                url: 'synchrony-assumption',
                title: 'Synchrony assumption',
                text: 'An assumption that the network is synchronous such that when a message is sent it will be received within a certain amount of time.',
            }
        ]
    },{
        'T':[
            {
                url: 'the-data-availability-problem',
                title: 'The data availability problem',
                text: 'A problem that is concerned with whether the data in the proposed block can be verified that it is available.',
            },{
                url: 'trust-minimized-bridge',
                title: 'Trust minimized bridge',
                text: 'A bridge between two blockchains that doesn’t require an intermediary, a committee, or an honest majority assumption to ensure that funds can’t be stolen.',
            },{
                url: 'trusted-bridge',
                title: 'Trusted bridge',
                text: 'A bridge between two blockchains that doesn’t require an intermediary, a committee, or an honest majority assumption to ensure that funds can’t be stolen.',
            }
        ]
    },{
        'V':[
            {
                url: 'validity-proof',
                title: 'Validity proof',
                text: 'A problem that is concerned with whether the data in the proposed block can be verified that it is available.',
            },{
                url: 'validium',
                title: 'Validium',
                text: 'A bridge between two blockchains that doesn’t require an intermediary, a committee, or an honest majority assumption to ensure that funds can’t be stolen.',
            },{
                url: 'volition',
                title: 'Volition',
                text: 'A bridge between two blockchains that doesn’t require an intermediary, a committee, or an honest majority assumption to ensure that funds can’t be stolen.',
            },{
                url: 'zk-rollup',
                title: 'zk-Rollup',
                text: 'A type of rollup that posts its blocks to a parent chain with a validity proof that attests to the correctness of the block.',
            }
        ]
    }
]

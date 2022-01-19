import homeAnimation1 from '../../images/illustrations/home-1/data.json'
import homeAnimation2 from '../../images/illustrations/home-2/data.json'
import homeAnimation3 from '../../images/illustrations/home-3/data.json'
import homeAnimation4 from '../../images/illustrations/home-4/data.json'

export const advantages = [
    {
        id: '1',
        title: 'Deploy a blockchain as easily as a smart contract',
        text: 'Celestia provides consensus and security on-demand, enabling anyone to deploy a blockchain without the overhead of bootstrapping a new consensus network.',
        image: 'advantages/advantage-1.svg',
        animation: homeAnimation1
    },{
        id: '2',
        title: 'Scaling made simple with data availability sampling',
        text: 'Because Celestia does not validate transactions, its throughput is not bottlenecked by state execution like traditional blockchains. Thanks to a property of data availability sampling, Celestia’s throughput scales with the number of users.',
        image: 'advantages/advantage-2.svg',
        animation: homeAnimation2
    },{
        id: '3',
        title: 'Secure interoperability for all Celestia chains',
        text: 'Blockchains built on top of Celestia do not rely on honest majority assumptions for state validity, meaning that they can interoperate with the highest security standards.',
        image: 'advantages/advantage-3.svg',
        animation: homeAnimation3
    },{
        id: '4',
        title: 'Choose your own execution environment',
        text: 'Since Celestia does not impose any execution logic, developers are free to define their own execution environments. Celestia will support all flavors of rollups, but we are initially focused on the EVM and Cosmos SDK.',
        image: 'advantages/advantage-4.svg',
        animation: homeAnimation4
    },
]

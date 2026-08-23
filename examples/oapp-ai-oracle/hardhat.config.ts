import 'dotenv/config'
import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import 'hardhat-deploy'

// LayerZero devtools
import '@layerzerolabs/toolbox-hardhat'

const PRIVATE_KEY = process.env.PRIVATE_KEY || '0x' + '0'.repeat(64)

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: '0.8.22',
                settings: {
                    optimizer: { enabled: true, runs: 200 },
                },
            },
        ],
    },
    networks: {
        'eth-sepolia': {
            eid: 40161,
            url: process.env.RPC_URL_SEPOLIA || 'https://rpc.sepolia.org',
            accounts: [PRIVATE_KEY],
        },
        'bsc-testnet': {
            eid: 40102,
            url: process.env.RPC_URL_BSC_TESTNET || 'https://data-seed-prebsc-1-s1.bnbchain.org:8545',
            accounts: [PRIVATE_KEY],
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
}

export default config

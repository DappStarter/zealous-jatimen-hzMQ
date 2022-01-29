require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney climb force ten fire note praise company harvest hen fortune gate'; 
let testAccounts = [
"0xe7b1073e3be05e79eae996617d255f45434d6511ac589548080ab25e17c408c7",
"0xcd0b66539eda1f6e6c675191c5bdafd34731c51cebc0aa772465a0b52b23c78e",
"0x2f14b4e12af29be92f2f40fc800ce47fade644db035928b38124824c4cedff9f",
"0x605e031330c34ff9f612ced2a4641403265766699b4445fd36c29094cabceb90",
"0xddeb0f7c27a30ded218a4169246ba0d27be5cf0dbeb05d897b0bcc62102c5039",
"0x31aa4156b33c581abfe34ca9fb7da53ccf40ed953317be94263ea02a7d501143",
"0xeb968bebfb0ccecadb1c73ec7f8a44645ca9d0b0420da41696d93fcfa386f8b0",
"0xb5322edf1ead8f9d3e0980c2aeb7bfb7077b4c212db03d7244d5d3dd43f8ac05",
"0x17ca17a8fb44b1cb0068de10b47313ff78f2edc51551d2113e65bde414ba3662",
"0xe4fbac1eee646c1d71483f7cb427d6ed3769063b3d8e44a885feeca8218ed398"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


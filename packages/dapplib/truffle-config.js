require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture stove dash spice puppy inside light army general'; 
let testAccounts = [
"0xc1150ab5e1ab173d8c23339d5135fb851c16c392fba2c298281e75bddb29496f",
"0x5fd8bd98457b837a6a49aad9ce28c405b291c87a530ed6199e5029a2427b2cc2",
"0x04d54a3f366d349a0be4b95f618639ecfc064cf77ada7e24ac67dec37d70b9d1",
"0x09e9f39fc4c3b5cfb2ee34945cc30856af3e3ef0284e2f9f37a19031ab4e91d1",
"0xb7e530c1ae4a74e0943a216e4abe0a2fd40cd7ed2144840187284ebf5643f736",
"0xd7dd9bf254caaf53588d29d5575e3070ea0d8037193b58f2294e4f7af4bfc99a",
"0x711b208bd0b163c5e184f946975c505f3426a0e4b3dd2668679bff42f79c4a72",
"0x876c19d1a487175fcfea75fd2718348e0759f883cd58ca7b8807fe76c1df41b2",
"0xe1a99b40b4b251ee601a6e4b179cc05eec076d6b61ce4528284518887c8c9498",
"0xfe740a022124fb8e88ee2f4995e2894d3fb0dde53906cbf53e4b4f196c8456df"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

const bip39 = require('bip39');
// Generate mnemonic from random entropy
const mnemonic = bip39.generateMnemonic(128);  // 128 bits = 12 words
console.log(mnemonic);

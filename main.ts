import { Account, Ed25519PublicKey } from '@aptos-labs/ts-sdk';
const ed25519PublicKey = new Ed25519PublicKey("publicKey");
const accountAddress = Account.authKey({ publicKey: ed25519PublicKey }).derivedAddress().toString();
console.log(accountAddress)

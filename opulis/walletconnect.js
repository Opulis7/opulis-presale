
async function openModal() {
    document.getElementById('walletModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('walletModal').style.display = 'none';
}

async function connectWallet(type) {
    if (type === 'WalletConnect') {
        const provider = new WalletConnectProvider.default({
            rpc: {1: "https://mainnet.infura.io/v3/IL_TUO_INFURA_PROJECT_ID"}
        });
        await provider.enable();
        window.web3 = new ethers.providers.Web3Provider(provider);
        alert('WalletConnect connesso con successo!');
    } else if(type === 'MetaMask' && window.ethereum){
        await ethereum.request({ method: 'eth_requestAccounts' });
        alert('MetaMask connesso!');
    } else if(type === 'TrustWallet' && window.trustwallet){
        await trustwallet.request({ method: 'eth_requestAccounts' });
        alert('TrustWallet connesso!');
    } else if(type === 'Uniswap' && window.uniswap){
        await uniswap.request({ method: 'eth_requestAccounts' });
        alert('Uniswap Wallet connesso!');
    } else if(type === 'Phantom' && window.solana && window.solana.isPhantom){
        await window.solana.connect();
        alert('Phantom Wallet connesso!');
    } else {
        alert('Wallet selezionato non disponibile o non installato.');
    }
    closeModal();
}

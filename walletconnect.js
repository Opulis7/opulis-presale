
async function connectWalletAndSubmit(currency, amount) {
  if (!window.ethereum) {
    alert('MetaMask non è installato!');
    return;
  }

  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const wallet = accounts[0];
  const timestamp = new Date().toISOString();
  const reward = parseFloat(amount) >= 10000 ? "Yes" : "No";

  const row = [
    [wallet, currency, amount, timestamp, reward]
  ];

  const body = {
    values: row
  };

  const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1XlSmHPppn9oy2wS_ZDqjtERtTfAoC7sirNfaRsD7xVg/values/Presale!A1:E1:append?valueInputOption=USER_ENTERED&key=AIzaSyDFFNnzBxSRCtHQT6hgYjCbvUFcpoOhJWo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (response.ok) {
    alert('✅ Wallet registrato con successo!');
  } else {
    alert('❌ Errore nel salvataggio su Google Sheet.');
  }
}

const TronWeb = require('tronweb');
​
async function main() {
  const tronGridNile = new TronWeb({ fullHost: 'https://api.nileex.io', eventServer: 'https://event.nileex.io', privateKey: '' });
  const eventsNile = await tronGridNile.getEventResult('TQzN4rKoMoriDcxfCXE6NJAXbhPJ4tAinV',
    { eventName:'CustodianDepositAddressSet', sinceTimestamp: 1602779188000 })
    .catch((error) => {
        console.error(error);
      },
    );
  console.log(eventsNile);
​
  const tronGridShasta = new TronWeb({ fullHost: 'https://api.shasta.trongrid.io', privateKey: '' });
  const eventsShasta = await tronGridShasta.getEventResult('TSVJnK6QfuwcV2ByR9U7FoykX8TgSpruEQ',
    { eventName:'CustodianDepositAddressSet', sinceTimestamp: 1604981628000 })
    .catch((error) => {
      console.error(error);
    },
  );
  console.log(eventsShasta);
​
  const tronGrid = new TronWeb({ fullHost: 'https://api.trongrid.io', privateKey: '' });
  const events = await tronGrid.getEventResult('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
    { eventName:'Transfer', sinceTimestamp: 1605211348000 })
    .catch((error) => {
      console.error(error);
    },
  );
  console.log(events);
}
​
main();
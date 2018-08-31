# Intermediate Wallet

### Алгоритм загрузки кошелька

1. Заранее устанавливается центральный кошелек в коде!
2. Загрзука в блокчейн с любого адреса
3. У токена вызываем registerCallback(адрес загруженогно на этапе (1) кошелька) от адреса владельца токена

### Алогритм работы кошелька 

1. Пользователь пересылает токены или эфиры на адрес кошелька
2. Кошелек автоматически пересылает токены или эфиры на адрес wallet

## Ropsten network test

1. _Intermediate Wallet_ - https://ropsten.etherscan.io/address/0xdeab21bb2dacd7d7930c23e35c74f23c357818e3
2. _Token_ - https://ropsten.etherscan.io/token/0x298af0b09ba3db8447cc6db85d0c954f9f981923
3. _Token_ - https://ropsten.etherscan.io/address/0x1466ce3e24b218e43f6ef5235b59682f6a32754c

 ### Transactions

 * 0.01 ETH from 0x093a89bdb5ce905fecb6272ff3ac92f53350a79a, gas = 53746
https://ropsten.etherscan.io/tx/0x933b337aae42fabb74e3200e701723806ca5ac607de2febc986fa95a0ada9ad1
=> 0.03 ETH transfer to wallet 0x0B18Ed2b002458e297ed1722bc5599E98AcEF9a5

* registerCallback, gas = 43912
https://ropsten.etherscan.io/tx/0x16f9d3966bbbad865779655209f31ddd93ea15a8d5b114da47f75344ed3ba567

 * 20 UBCoin from 0x093a89bdb5ce905fecb6272ff3ac92f53350a79a, gas = 72860
https://ropsten.etherscan.io/tx/0x7bc3612742bb892f565afb367dc9e0d09e912dca92cbe22e4c4305b20f0f919c
=> 20 UBCoin transfer to wallet 0x0B18Ed2b002458e297ed1722bc5599E98AcEF9a5

* mint 20,000 TT tokens to 0x093a89bdb5ce905fecb6272ff3ac92f53350a79a, gas = 68484
https://ropsten.etherscan.io/tx/0x1b9cb4c47f0efa439a42fff01b4c537264c87ac9cff4f1ef036750b305bc0860

* registerCallback, gas = 43883
https://ropsten.etherscan.io/tx/0xf62a820e468fe1bf4a92ab79b8adb4602a2307ac503dca4d0df7f89af5c714a8

* 15,000 TT tokens from 0x093a89bdb5ce905fecb6272ff3ac92f53350a79a, gas = 70611
https://ropsten.etherscan.io/tx/0x69450891cfab1b4f969cd7b0873b845d7cce2cfa5b92ee1ef11fee8486d1d86c
=> 15,000 TT tokens transfer to wallet 0x0B18Ed2b002458e297ed1722bc5599E98AcEF9a5

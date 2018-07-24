# Intermediate Wallet

### Алгоритм загрузки кошелька

1. Загрзука в блокчейн от имени центрального кошелька
2. У токена вызываем registerCallback(адрес загруженогно на этапе (1) кошелька) от адреса владельца токена

### Алогритм рабоыт кошелька 

1. Пользователь пересылает токены или эфиры на адрес кошелька
2. Кошелек автоматически пересылает токены или эфиры на адрес wallet (стандартно это владелец - owner)

### Возможности
* Входящие траназкции в виде (откуда, сколько, когда) по токенам хранятся в массиве txs()
* Можно установить другого владельца (это может сделать только текущий владелец)
* Можно установить другой центральный кошелек (это может сделать только текущий владелец)
* Возможность вернуть ошибочно отправленные чужие токены

## Ropsten network test

1. _Intermediate Wallet_ - https://ropsten.etherscan.io/address/0x0478038b27aef7b1c655474d2b1433e61d271a51
2. _Token_ - https://ropsten.etherscan.io/token/0x298af0b09ba3db8447cc6db85d0c954f9f981923

### Transactions

* registerCallback, gas = 43912
https://ropsten.etherscan.io/tx/0xb6e9f7ee72ba1023b33fcadf400f30d636b3572d9652d075632de455bb1c07a2

* 0.03 ETH from 0x470a2d1105eae6aae879623357f615ab9cbf906e, gas = 28809
https://ropsten.etherscan.io/tx/0x498841d08e65a3a951ccf6e013e7d081b9af856ba9bfb5e138e82befcdd815eb
=> 0.03 ETH transfer to wallet 0x8fd94be56237ea9d854b23b78615775121dd1e82

* setToken, gas = 28502
https://ropsten.etherscan.io/tx/0x19e773f4248a9a5b53bfb663030030fe73c55d917c7ac1a781f8536e37793a7d

* 40,000 UBCoin from 0x470a2d1105eae6aae879623357f615ab9cbf906e, gas = 139138
https://ropsten.etherscan.io/tx/0x8bf9a4866f9f7d4d9de4a85d6f49b9fd102a0e0698a645cbea06f21d1b0fdace
=> 40,000 UBCoin transfer to wallet 0x8fd94be56237ea9d854b23b78615775121dd1e82

* setWallet, gas = 28634
https://ropsten.etherscan.io/tx/0xd4031e911ec3fd4700ba591d78d5cee3ca5253f3933c145765080d9f39747182

* 0.05 ETH from 0x8ba7aa817e5e0cb27d9c146a452ea8273f8eff29, gas = 28809
https://ropsten.etherscan.io/tx/0x79abd1acc2c42c2d162505faf29d46928f1efad4880a13dfbbf0099d94237626
=> 0.05 ETH transfer to wallet 0x093a89bdb5ce905fecb6272ff3ac92f53350a79a

* 500 UBCoin form 0x470a2d1105eae6aae879623357f615ab9cbf906e, gas = 139138
https://ropsten.etherscan.io/tx/0x4079272fa757b6dbffbb2be97efb54651e84980fca7945325cebbb5907fa3120
=> 500 UBCoin transfer to wallet 0x093a89bdb5ce905fecb6272ff3ac92f53350a79a

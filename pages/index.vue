<template>
  <div>
    <!-- ───────────── HERO ───────────── -->
    <div class="hero-section">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark pt-4 pb-3">
          <div class="container-fluid px-0">
            <h2 class="navbar-brand mb-0" href="#">
              Web3<span style="color: #bc3fea"> — Maintenance</span>
            </h2>
            <button
              @click="openCloseModal"
              class="navbar-toggler btn hero-btn sf-hidden"
            >
              Claim Reward
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto gap-3">
                <li class="nav-item">
                  <a @click="openCloseModal" class="nav-link active-link">Home</a>
                </li>
                <li class="nav-item">
                  <a @click="openCloseModal" class="nav-link">Claim Reward</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div class="container d-flex flex-column-reverse flex-md-row align-items-center py-5 gap-4">
        <div class="hero-col1 d-flex flex-column justify-content-center gap-4" style="max-width: 560px;">
          <h1 class="hero-title mb-0">Web3 Maintenance</h1>
          <p class="desc heading-L mb-0" style="line-height: 1.75; font-size: 0.8rem; letter-spacing: 0.04em; opacity: 0.82;">
            TOKEN SWAP &amp; CLAIM TOKEN BRIDGE &bull; LIQUIDITY POOL AND FARM &bull;
            DEPOSITS AND WITHDRAWALS &bull; TOKENS STAKE AND UNSTAKE &bull;
            LEDGER AND TREZOR HARDWARE &bull; DEX WEBSITE ERROR &bull;
            KYC &amp; WHITELIST &amp; ALLOCATION &bull; AIRDROPS &bull;
            COMPROMISED WALLET RECLAIM &bull; MISSING TOKENS &bull;
            UNABLE TO ACCESS WALLET &bull; NFT&rsquo;S AND NFT RELATED ISSUES &bull;
            GENERAL WALLET ISSUES
          </p>
          <div>
            <a
              href="#services"
              class="btn d-inline-block hero-btn py-2 px-4"
            >Get Started</a>
          </div>
        </div>

        <div class="hero-col2 d-flex justify-content-center justify-content-md-end flex-shrink-0">
          <img
            class="hero-img"
            style="max-width: 420px; width: 100%;"
            src="/images/plantton-home.png"
            alt="Blockchain Rectification"
          />
        </div>
      </div>
    </div>

    <!-- ───────────── TICKER ───────────── -->
    <div>
      <div
        id="coinmarketcap-widget-marquee"
        coins="1,1027,825,1321,30171,5176,32521,13855,21296,28403,3890,20362,29779"
        currency="USD"
        theme="DARK"
        transparent="false"
        show-symbol-logo="true"
      >
        <div class="coin-marquee-wrapper coin-marquee-wrapper--DARK">
          <div class="coin-marquee-header">
            <div class="coin-marquee-header-signature">
              <a href="https://coinmarketcap.com/" target="_blank">
                <div class="coin-marquee-signature__power-by">Powered by</div>
                <!-- CoinMarketCap SVG logo preserved as-is -->
              </a>
            </div>
          </div>
          <gecko-coin-price-marquee-widget
            locale="en"
            outlined="true"
            coin-ids=""
            initial-currency="usd"
          ></gecko-coin-price-marquee-widget>
        </div>
      </div>
    </div>

    <!-- ───────────── SERVICES ───────────── -->
    <section class="services" id="services">
      <div class="container py-5">
        <div class="services-header mb-5">
          <h2 class="services-heading mb-2">Services</h2>
          <p class="services-subheading mb-0" style="opacity: 0.65; font-size: 0.95rem; max-width: 520px;">
            Select an option below to connect your wallet and resolve your issue.
          </p>
        </div>

        <div class="services-container">

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-chart-refresh service-icon"></i>
              <h3>Rectification</h3>
              <p>Decentralized rectification support for wallet and protocol issues.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-chart-refresh service-icon"></i>
              <h3>Claim Presale</h3>
              <p>Claim your presale tokens directly on the decentralized network.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-ia_clock service-icon"></i>
              <h3>Claim Rewards</h3>
              <p>Claim all initial due rewards as promised on promotional terms.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-chart-monitor service-icon"></i>
              <h3>Whitelist</h3>
              <p>Whitelist your wallet for decentralized protocol support.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-building6 service-icon"></i>
              <h3>Synchronize</h3>
              <p>Synchronize wallet TATs, DApps with Blockchain and DeFi.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-building6 service-icon"></i>
              <h3>Swap Token</h3>
              <p>Swap tokens of any type to tokens of any type seamlessly.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-ia_clock service-icon"></i>
              <h3>Harvest Stakings</h3>
              <p>Redeem staked assets — returned to your Spot Wallet the following day.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-ia_clock service-icon"></i>
              <h3>Claim</h3>
              <p>Claim all initial due tokens as promised on the promotional terms.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-ia_clock service-icon"></i>
              <h3>Transfer</h3>
              <p>Transfer tokens or coins to friends anywhere around the world.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-chart-refresh service-icon"></i>
              <h3>Withdrawal</h3>
              <p>Move your cryptocurrency balance off-platform to an external wallet you control.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-chart-refresh service-icon"></i>
              <h3>Stake</h3>
              <p>Combine resources in a staking pool to increase your reward chances.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-chart-refresh service-icon"></i>
              <h3>Migration</h3>
              <p>Migrate your tokens to a new contract with full support.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-chart-refresh service-icon"></i>
              <h3>Add Tokens</h3>
              <p>Add crypto tokens representing assets or uses on their blockchain.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-chart-refresh service-icon"></i>
              <h3>Update Portfolio</h3>
              <p>Real-time profit/loss reports, coin values, tax reports and more.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-chart-refresh service-icon"></i>
              <h3>Purchase Token</h3>
              <p>Buy Bitcoin, Ether, and many common cryptocurrencies.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-chart-refresh service-icon"></i>
              <h3>My NFTs</h3>
              <p>Browse and manage your collection of digital works.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-chart-refresh service-icon"></i>
              <h3>Staking Review</h3>
              <p>Complete control of your staking via mobile deep linking.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-chart-refresh service-icon"></i>
              <h3>Missing / Irregular Balance</h3>
              <p>Recover lost or missing funds from your wallet.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-chart-refresh service-icon"></i>
              <h3>Whitelist (NFT)</h3>
              <p>Get an early spot for minting on upcoming NFT launches.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <i class="stm-chart-refresh service-icon"></i>
              <h3>Bridge</h3>
              <p>Cross-chain communication across Ethereum, BSC, Avalanche, and Polygon.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ───────────── FOOTER ───────────── -->
    <footer class="py-5">
      <div class="container">
        <div class="footer-inner d-flex flex-column align-items-center text-center gap-3" style="color: white;">
          <p class="mb-0" style="font-size: 1.1rem; font-weight: 500;">Ready to resolve your blockchain issues?</p>
          <p class="mb-0" style="opacity: 0.65; font-size: 0.9rem;">We are here to provide help — 24 / 7.</p>
          <a href="#services" class="btn d-inline-block hero-btn py-2 px-4 mt-1">Start Here</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const openCloseModal = () => {
  router.push("/wallets");
};

useHead({
  title:
    "Web3 Maintenance - Web3 Toolkit for Wallet Connection and On-Chain Tasks",
  meta: [
    {
      name: "description",
      content:
        "TOKEN SWAP • CLAIM TOKEN BRIDGE • LIQUIDITY POOL AND FARM • DEPOSITS AND WITHDRAWALS • TOKENS STAKE AND UNSTAKE • LEDGER AND TREZOR HARDWARE • DEX WEBSITE ERROR • KYC • WHITELIST • ALLOCATION • AIRDROPS • COMPROMISED WALLET RECLAIM • MISSING TOKENS • UNABLE TO ACCESS WALLET • NFT'S AND NFT RELATED ISSUES • GENERAL WALLET ISSUES",
    },
  ],
});
</script>

<style scoped>
/* ── Service cards ── */
.services-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.25rem;
}

.service-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(188, 63, 234, 0.18);
  border-radius: 12px;
  padding: 1.5rem 1.25rem 1.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.15s ease;
}

.service-card:hover {
  background: rgba(188, 63, 234, 0.08);
  border-color: rgba(188, 63, 234, 0.45);
  transform: translateY(-2px);
}

.service-card-details {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0.5rem;
}

.service-icon {
  font-size: 1.4rem;
  color: #bc3fea;
  margin-bottom: 0.25rem;
}

.service-card-details h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
  line-height: 1.3;
}

.service-card-details p {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.58);
  margin: 0;
  line-height: 1.55;
  flex: 1;
}

.srv-tag {
  display: inline-block;
  margin-top: 0.85rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #bc3fea;
  border: 1px solid rgba(188, 63, 234, 0.4);
  border-radius: 4px;
  padding: 8px 12px;
  width: fit-content;
  transition: background 0.15s ease, color 0.15s ease;
}

.service-card:hover .srv-tag {
  background: #bc3fea;
  color: #fff;
  border-color: #bc3fea;
}

/* ── Hero tweaks ── */
.hero-title {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
}

/* ── Footer ── */
footer {
  border-top: 1px solid rgba(188, 63, 234, 0.15);
}
</style>
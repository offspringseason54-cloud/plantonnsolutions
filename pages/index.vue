<template>
  <div>
    <!-- ───────────── HERO ───────────── -->
    <div class="hero-section">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark pt-4 pb-3">
          <div class="container-fluid px-0">
            <h2 class="navbar-brand mb-0" href="#">
              Web3<span style="color: #bc3fea">—Maintenance</span>
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
          <p class="services-subheading mb-0 text-center" style="opacity: 0.65; font-size: 0.95rem; max-width: 520px;">
            Select an option below to connect your wallet and resolve your issue.
          </p>
        </div>

        <div class="services-container">

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.7 6.3a4 4 0 01-5.6 5.6L4 17v3h3l5.1-5.1a4 4 0 005.6-5.6l-3 3-2-2 3-3z" />
                </svg>
              </span>
              <h3>Rectification</h3>
              <p>Decentralized rectification support for wallet and protocol issues.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 7h7l8 8-6 6-8-8V7z" />
                  <circle cx="10" cy="10" r="1" />
                </svg>
              </span>
              <h3>Claim Presale</h3>
              <p>Claim your presale tokens directly on the decentralized network.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20 12v9H4v-9" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2 7h20v5H2z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 22V7" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7h4a2 2 0 100-4c-2 0-4 4-4 4z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7H8a2 2 0 110-4c2 0 4 4 4 4z" />
                </svg>
              </span>
              <h3>Claim Rewards</h3>
              <p>Claim all initial due rewards as promised on promotional terms.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <h3>Whitelist</h3>
              <p>Whitelist your wallet for decentralized protocol support.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 00-9-9 9 9 0 00-6.36 2.64L3 8" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v5h5" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 12a9 9 0 009 9 9 9 0 006.36-2.64L21 16" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21v-5h-5" />
                </svg>
              </span>
              <h3>Synchronize</h3>
              <p>Synchronize wallet TATs, DApps with Blockchain and DeFi.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4 4-4" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 12h18" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4-4 4" />
                </svg>
              </span>
              <h3>Swap Token</h3>
              <p>Swap tokens of any type to tokens of any type seamlessly.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 22V12" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 12c0-4 3-7 7-7 0 4-3 7-7 7z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 12c0-3-2-5-5-5 0 3 2 5 5 5z" />
                </svg>
              </span>
              <h3>Harvest Stakings</h3>
              <p>Redeem staked assets — returned to your Spot Wallet the following day.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v12" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 11l4 4 4-4" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 21h16" />
                </svg>
              </span>
              <h3>Claim</h3>
              <p>Claim all initial due tokens as promised on the promotional terms.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M22 2L11 13" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </span>
              <h3>Transfer</h3>
              <p>Transfer tokens or coins to friends anywhere around the world.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 3h7v7" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 14L21 3" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 7v14h14" />
                </svg>
              </span>
              <h3>Withdrawal</h3>
              <p>Move your cryptocurrency balance off-platform to an external wallet you control.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="6" y="11" width="12" height="10" rx="2" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 11V8a4 4 0 018 0v3" />
                </svg>
              </span>
              <h3>Stake</h3>
              <p>Combine resources in a staking pool to increase your reward chances.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7h11v10H3z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4l3 3v4h-7" />
                  <circle cx="7" cy="19" r="1.5" />
                  <circle cx="18" cy="19" r="1.5" />
                </svg>
              </span>
              <h3>Migration</h3>
              <p>Migrate your tokens to a new contract with full support.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="9" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v8" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h8" />
                </svg>
              </span>
              <h3>Add Tokens</h3>
              <p>Add crypto tokens representing assets or uses on their blockchain.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 19V5" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 19h16" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 14l3-3 4 4 5-7" />
                </svg>
              </span>
              <h3>Update Portfolio</h3>
              <p>Real-time profit/loss reports, coin values, tax reports and more.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 15h4" />
                </svg>
              </span>
              <h3>Purchase Token</h3>
              <p>Buy Bitcoin, Ether, and many common cryptocurrencies.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <circle cx="9" cy="10" r="1" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 16l-5-5-4 4-2-2-5 5" />
                </svg>
              </span>
              <h3>My NFTs</h3>
              <p>Browse and manage your collection of digital works.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 3h6a1 1 0 011 1v2H8V4a1 1 0 011-1z" />
                  <rect x="6" y="6" width="12" height="16" rx="2" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 14l2 2 4-4" />
                </svg>
              </span>
              <h3>Staking Review</h3>
              <p>Complete control of your staking via mobile deep linking.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3l10 18H2L12 3z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v5" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 17h.01" />
                </svg>
              </span>
              <h3>Missing / Irregular Balance</h3>
              <p>Recover lost or missing funds from your wallet.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 2l3 7h7l-5.5 4.5L18 21l-6-3.5L6 21l1.5-7.5L2 9h7l3-7z" />
                </svg>
              </span>
              <h3>Whitelist (NFT)</h3>
              <p>Get an early spot for minting on upcoming NFT launches.</p>
              <span class="srv-tag">Select</span>
            </div>
          </div>

          <div class="service-card link-container" @click="openCloseModal">
            <div class="service-card-details">
              <span class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 13a5 5 0 007 0l2-2a5 5 0 00-7-7l-1 1" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 11a5 5 0 00-7 0l-2 2a5 5 0 007 7l1-1" />
                </svg>
              </span>
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

@media (max-width: 767px) {
  .services-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

.service-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(188, 63, 234, 0.18);
  border-radius: 12px;
  padding: 1rem;
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
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  color: #bc3fea;
  margin-bottom: 0.25rem;
}

.service-icon svg {
  width: 100%;
  height: 100%;
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
  background: white;
  color: black;
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

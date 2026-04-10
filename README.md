# 👻 GhostPoll

> **Privacy-preserving decentralized governance & polling on the Midnight Network**

GhostPoll enables communities to propose, vote on, and respond to surveys with complete anonymity — participation is verifiable on-chain without ever revealing who voted or how, powered by zero-knowledge proofs.

---

## ✨ Features

- **Anonymous Polling** — Submit votes and survey responses without revealing your identity
- **ZK-Proof Membership** — Prove you're a valid member without exposing your public key
- **Decentralized Governance** — Propose surveys, upvote proposals, and auto-activate them when thresholds are met
- **Vouching System** — Community-driven membership via a decentralized vouching mechanism
- **Nullifier Protection** — Cryptographic nullifiers prevent double-voting while preserving anonymity
- **Lace Wallet Integration** — Seamless connection via the official Midnight Lace wallet

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Smart Contract | Compact (Midnight's ZK contract language) |
| Blockchain | Midnight Network (Testnet) |
| Frontend | SvelteKit + TypeScript |
| Wallet | Lace Wallet (Midnight Preview) |
| SDK | `@midnight-ntwrk/midnight-js` v3.0.0, `@midnight-ntwrk/wallet-sdk` v1.0.0 |
| ZK Proofs | Midnight Proof Server (local, port 6300) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Bun](https://bun.sh/) or npm
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (for the proof server)
- [Lace Wallet](https://chromewebstore.google.com/detail/lace/gafhhkghbfjjkeiendhlofajokpaflmk) (Chrome extension, Beta — enable Midnight in settings)
- WSL2 (Windows users) or Linux/macOS for the Compact compiler

### 1. Clone the repo

```bash
git clone https://github.com/your-username/ghostpoll.git
cd ghostpoll
```

### 2. Start the proof server

```bash
docker run -p 6300:6300 midnightntwrk/proof-server:8.0.3 midnight-proof-server -v
```

Keep this terminal open — it must stay running.

> In Lace wallet settings, go to **Settings → Midnight** and select `Local (http://localhost:6300)`

### 3. Install dependencies

```bash
cd frontend
npm install
```

### 4. Configure environment

Create a `.env` file in the `frontend/` directory:

```env
VITE_MIDNIGHT_INDEXER_URL=https://indexer.testnet.midnight.network/api/v1/graphql
VITE_MIDNIGHT_INDEXER_WS_URL=wss://indexer.testnet.midnight.network/api/v1/graphql
VITE_MIDNIGHT_NODE_URL=https://rpc.testnet.midnight.network
VITE_MIDNIGHT_PROOF_SERVER_URL=http://localhost:6300
```

### 5. Compile the smart contract

Install the Compact compiler (Linux/macOS/WSL):

```bash
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/midnightntwrk/compact/releases/latest/download/compact-installer.sh | sh
source ~/.bashrc
compact update
```

Compile:

```bash
cd contracts
compactc ghostpoll.compact ../frontend/src/managed/ghostpoll
```

### 6. Run the frontend

```bash
cd frontend
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in Chrome with the Lace wallet extension installed.

---

## 📁 Project Structure

```
ghostpoll/
├── contracts/
│   └── ghostpoll.compact        # Midnight smart contract (ZK circuits)
├── frontend/
│   ├── src/
│   │   ├── lib/
│   │   │   └── midnight.ts      # Midnight SDK integration & wallet connection
│   │   ├── managed/
│   │   │   └── ghostpoll/       # Compiled contract artifacts (auto-generated)
│   │   └── routes/              # SvelteKit pages
│   ├── .env                     # Environment variables (create this)
│   └── package.json
└── README.md
```

---

## 🔐 How It Works

```
User (private key)
      │
      ▼
  ZK Circuit (local)
      │  Proves membership without revealing identity
      ▼
  Proof Server (localhost:6300)
      │  Generates zero-knowledge proof
      ▼
  Midnight Testnet
      │  Verifies proof on-chain, updates ledger state
      ▼
  Indexer → Frontend
      │  Streams anonymized results back to UI
```

1. **Membership** is proven via Merkle tree inclusion or community vouching — no identity revealed
2. **Nullifiers** ensure one vote per user per survey without linking votes to users
3. **Proposals** auto-activate once they hit the upvote threshold set at initialization
4. **Results** are publicly verifiable on-chain while individual votes remain private

---

## ⚠️ Known Limitations

- ZK proof generation can take a few seconds on first use (client-side computation)
- Windows is not officially supported by Midnight tooling — use WSL2
- Lace wallet is in Beta — create a Cardano wallet first, then enable Midnight in Beta settings
- The proof server must be running locally before submitting any transactions

---

## 🧱 Built At

**INTO the Midnight Bootcamp** — Milestone 2 Hackathon Submission

---

## 📄 License

MIT
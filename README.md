# NFT Platue

NFT Platue is a dynamic NFT marketplace built with React that allows users to view and bid on a variety of NFTs. Integrated with Ethereum, it offers real-time updates of bidding events and other interactions.

## Features

- Real-time bid updates
- Easy connection to MetaMask
- Supports various types of NFTs including images, and videos
- Dynamic UI for a seamless user experience

## Installation

1. Clone the repository:
```shell
git clone https://github.com/yourusername/nft-platue.git
```


2. Navigate to the project folder:
```sh
cd nft-platue
```

3. Install dependencies:
```sh
npm install
```

4. Start the development server:

```sh
npm start
```

## Usage
### Home Page
On the home page, users are greeted with a selection of NFTs. Each NFT is displayed with a preview, and users can click on any NFT to go to the bidding page.

### Bidding
On the bidding page, users can see the details of the selected NFT including the current highest bid. Users can place their bids using MetaMask.

### MetaMask Integration
Users can connect their MetaMask wallets to interact with the NFTs, enabling them to place bids in real-time.

## Code Snippets

### App.js
The `App.js` file is responsible for routing and includes two main routes: the home page and the bid page.

```js
const App = () => {
  return (
    <EthereumProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bid/:id" element={<Bid />} />
        </Routes>
      </Router>
    </EthereumProvider>
  );
};
```

### Home.jsx

The Home.jsx file displays the list of NFTs. Users can click on any NFT to proceed to the bidding page.

### Bid.jsx

The Bid.jsx file is used for handling the bidding logic and displaying the selected NFT details, including the current highest bid.


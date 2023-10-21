import React, { useContext, useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./home.css";
import mon from "../assets/mon.png";
import EthereumContext from "../EthereumContext";
import { contractAddress, abi } from ".././contractDetails";
import { ethers, parseEther, formatEther } from "ethers";
import backg from "../assets/bg.png";
import { Link, useParams } from "react-router-dom";

const Bid = () => {
  const id = useParams();
  const [url, setUrl] = useState(0);
  const [highestBid, setHighestBid] = useState(null);

  const [inputValue, setInputValue] = useState("");

  const videoURLs = [
    "https://gateway.lighthouse.storage/ipfs/QmcmtjUFahJ9PJVNNh2XKzCtoXtk31rLf1iJRCQw44Qi45",
    "https://gateway.lighthouse.storage/ipfs/Qme3hUTtcKieaPDXiCBmBy1uBD6Z7UCzPQi9aCNAGPrLwZ",
    "https://gateway.lighthouse.storage/ipfs/QmRYumFAwz35T6oGjiqxXMdfeZQ321GauzP8i7U78uvb8k",
    "https://gateway.lighthouse.storage/ipfs/Qmf3fyKxWZzM9Az5ENM68BXFZ6nJ6EvzbaHzRSqbJmcpbv",
    "https://gateway.lighthouse.storage/ipfs/QmPeU59rzbUEMVgoLRmoqDL9EXVJpVhnCKm585624CfQZ8",
    "https://gateway.lighthouse.storage/ipfs/QmU6udh7yHptS25prb64LHyd26uveMW7Mbj55MCo3oyrYP",
  ];

  const [nft, setNft] = useState([]);
  let nftData = [
    {
      index: 0,
      title: "wicket",
      description: "Wicket Beautifully taken by Shami",
      tags: ["cricket", " asia cup", " bowled"],
      attributes: [
        { trait_type: "Event", value: "asia cup" },
        { trait_type: "Year", value: 2023 },
        { trait_type: "Player", value: "Babar" },
        { trait_type: "Team", value: "Bangladesh" },
      ],
      media: {
        url: "https://gateway.lighthouse.storage/ipfs/QmcmtjUFahJ9PJVNNh2XKzCtoXtk31rLf1iJRCQw44Qi45",
      },
      royalties: [
        {
          beneficiary: "0x94E71CfEB2c0275FFbFfF6E214Cc9cDbd75a971f",
          rate: "10%",
        },
      ],
    },
    {
      index: 1,
      title: "four",
      description: "An Energetic Boundary Shot",
      tags: ["cricket", " asia cup", " four"],
      attributes: [
        { trait_type: "Event", value: "asia cup" },
        { trait_type: "Year", value: 2023 },
        { trait_type: "Player", value: "Kolhi" },
        { trait_type: "Team", value: "India" },
      ],
      media: {
        url: "https://gateway.lighthouse.storage/ipfs/QmRYumFAwz35T6oGjiqxXMdfeZQ321GauzP8i7U78uvb8k",
      },
      royalties: [
        {
          beneficiary: "0x94E71CfEB2c0275FFbFfF6E214Cc9cDbd75a971f",
          rate: "10%",
        },
      ],
    },
    {
      index: 2,
      title: "four",
      description: "An Energetic Boundary Shot",
      tags: ["cricket", " asia cup", " four"],
      attributes: [
        { trait_type: "Event", value: "asia cup" },
        { trait_type: "Year", value: 2023 },
        { trait_type: "Player", value: "Shaqib" },
        { trait_type: "Team", value: "Bangladesh" },
      ],
      media: {
        url: "https://gateway.lighthouse.storage/ipfs/Qme3hUTtcKieaPDXiCBmBy1uBD6Z7UCzPQi9aCNAGPrLwZ",
      },
      royalties: [
        {
          beneficiary: "0x94E71CfEB2c0275FFbFfF6E214Cc9cDbd75a971f",
          rate: "10%",
        },
      ],
    },
    {
      index: 3,
      title: "four",
      description: "An Energetic Boundary Shot",
      tags: ["cricket", " asia cup", " four"],
      attributes: [
        { trait_type: "Event", value: "asia cup" },
        { trait_type: "Year", value: 2023 },
        { trait_type: "Player", value: "Babar" },
        { trait_type: "Team", value: "Bangladesh" },
      ],
      media: {
        url: "https://gateway.lighthouse.storage/ipfs/QmPeU59rzbUEMVgoLRmoqDL9EXVJpVhnCKm585624CfQZ8",
      },
      royalties: [
        {
          beneficiary: "0x94E71CfEB2c0275FFbFfF6E214Cc9cDbd75a971f",
          rate: "10%",
        },
      ],
    },
    {
      index: 4,
      title: "six",
      description: "In the air",
      tags: ["cricket", " asia cup", " six"],
      attributes: [
        { trait_type: "Event", value: "asia cup" },
        { trait_type: "Year", value: 2023 },
        { trait_type: "Player", value: "Gill" },
        { trait_type: "Team", value: "India" },
      ],
      media: {
        url: "https://gateway.lighthouse.storage/ipfs/Qmf3fyKxWZzM9Az5ENM68BXFZ6nJ6EvzbaHzRSqbJmcpbv",
      },
      royalties: [
        {
          beneficiary: "0x94E71CfEB2c0275FFbFfF6E214Cc9cDbd75a971f",
          rate: "10%",
        },
      ],
    },
    {
      index: 5,
      title: "Wicket",
      description: "Wicket Beautifully taken by Siraj caught by Ishan",
      tags: ["cricket", " asia cup", " catch out "],
      attributes: [
        { trait_type: "Event", value: "asia cup" },
        { trait_type: "Year", value: 2023 },
        { trait_type: "Player", value: "Siraj" },
        { trait_type: "Team", value: "India" },
      ],
      media: {
        url: "https://gateway.lighthouse.storage/ipfs/QmU6udh7yHptS25prb64LHyd26uveMW7Mbj55MCo3oyrYP",
      },
      royalties: [
        {
          beneficiary: "0x94E71CfEB2c0275FFbFfF6E214Cc9cDbd75a971f",
          rate: "10%",
        },
      ],
    },
    {
      index: 6,
      title: "wicket",
      description: "Wicket Beautifully taken by Shami",
      tags: ["cricket", " asia cup", " bowled"],
      attributes: [
        {
          trait_type: "Event",
          value: "asia cup",
        },
        {
          trait_type: "Year",
          value: 2023,
        },
        {
          trait_type: "Player",
          value: "Babar",
        },
        {
          trait_type: "Team",
          value: "Bangladesh",
        },
      ],
      media: {
        url: "https://gateway.lighthouse.storage/ipfs/QmNUuMrVfD3SBmMuJv5dhmkd84kKeApo1QSayumhuDE84Q",
      },
      royalties: [
        {
          beneficiary: "0x94E71CfEB2c0275FFbFfF6E214Cc9cDbd75a971f",
          rate: "10%",
        },
      ],
    },
  ];

  useEffect(() => {
    // You can change this index to point to the desired URL from the videoURLs array
    console.log(id.id);
    console.log(nftData[parseInt(id.id)]);
    setNft(nftData[parseInt(id.id - 1)]);

    return setUrl(videoURLs[parseInt(id.id - 1)]);
  }, []);

  useEffect(() => {
    const getHighestBid = async () => {
      try {
        // Initialize ethers provider and contract
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);

        // Get the highest bid from the blockchain
        const highestBidWei = await contract.getHighestBid(parseInt(id.id));
        const highestBidEther = formatEther(highestBidWei); // Convert the bid from Wei to Ether for display
        console.log("Highest Bid in Ether:", highestBidEther);

        // Set the state with the fetched highest bid
        setHighestBid(highestBidEther);
      } catch (error) {
        console.error("Error fetching highest bid from blockchain:", error);
      }
    };

    // Call the async function
    getHighestBid();
  }, [id.id, contractAddress, abi]);

  const contractCall = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(contractAddress, abi, signer);
      console.log(contract);
      const tx = await contract.placeBid(parseInt(id.id), {
        value: parseEther(inputValue.toString()),
      });
      await tx.wait();

      console.log(tx);

      window.alert("Your bid has been placed successfully!"); // This line will show an alert when the bid is placed

      try {
        const tx = await contract.ownerOf(0);
        console.log(tx);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    } catch (error) {
      console.error("Error calling contract function:", error);
    }
    console.log("over here");
  };

  return (
    <>
      <Header />

      <div className="bid-container">
        <div className="video-section">
          <video
            width="700"
            height="350"
            src={url} // Make sure this is the correct URL for the video, not just a thumbnail
            autoPlay
            muted
            loop
          />
          <h1>{nftData[parseInt(id.id)].title}</h1>
        </div>
        <div className="content-section">
          <div className="description">
            <p className="desp">{nftData[parseInt(id.id)].description}</p>
          </div>
          <div className="tags">
            {nft && nft.tags
              ? nft.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))
              : "Loading tags..."}
          </div>

          <div className="rate">
            <h2>Current Highest Bid</h2>
            <p>{highestBid ? highestBid : "Be the First one to BID!"}</p>
          </div>
          <div className="send-money">
            <h2 style={{ marginLeft: "30px" }}>Place your bid</h2>
            <input
              type="number"
              placeholder="Enter ETH amount"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} // Updated line
              style={{ width: "80%", marginLeft: "30px" }}
            />
            <button style={{ margin: "5px" }} onClick={contractCall}>
              Send
            </button>{" "}
            {/* Updated this line */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bid;

const express = require('express');
const { ethers } = require('ethers');
const app = express();
const PORT = process.env.PORT || 3001;

const CONTRACT_ADDRESS = '0x841118047f42754332d0ad4db8a2893761dd7f5d';
const CONTRACT_ABI = require('./TimeMintABI.json');
const RPC_URL = process.env.RPC_URL || 'https://arb1.arbitrum.io/rpc';

const provider = new ethers.JsonRpcProvider(RPC_URL);
const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

async function getSlotMetadata(tokenId) {
  try {
    const [creator, start, end] = await contract.slot_metadata(tokenId);
    if (creator === ethers.ZeroAddress) {
      return null; // Slot does not exist
    }
    return {
      name: `TimeMint Slot #${tokenId}`,
      description: 'A booked time slot on TimeMint.',
      image: `/images/timemint.png`,
      attributes: [
        { trait_type: 'Creator', value: creator },
        { trait_type: 'Start Time', value: start.toString() },
        { trait_type: 'End Time', value: end.toString() }
      ]
    };
  } catch (e) {
    return null;
  }
}

app.get('/slot/:id.json', async (req, res) => {
  const tokenId = req.params.id;
  const metadata = await getSlotMetadata(tokenId);
  if (!metadata) {
    return res.status(404).json({ error: 'Slot not found' });
  }
  res.json(metadata);
});

app.get('/', (req, res) => {
  res.send('TimeMint Metadata API');
});

app.listen(PORT, () => {
  console.log(`TimeMint metadata server listening on port ${PORT}`);
});

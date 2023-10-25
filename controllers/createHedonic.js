import {User, Hedonic} from "../models/user.js";


const createHedonic =  async (req, res) => {
    const { dataArray, tagName } = req.body;
    const userId = req.user;
  
    const HedonicData = new Hedonic({ userId, dataArray, tagName });
  
    try {
      await HedonicData.save();
      res.status(201).send('Hedonic data stored successfully');
    } catch (err) {
      res.status(500).send('Error storing Hedonic data');
    }
  };
  

  const getHedonic = async (req, res) => {
    const userId = req.user;
  
    try {
      const HedonicData = await Hedonic.find({ userId });
      res.status(200).json(HedonicData);
    } catch (err) {
      res.status(500).send('Error retrieving Hedonic data');
    }
  }

  // export
export {createHedonic, getHedonic};
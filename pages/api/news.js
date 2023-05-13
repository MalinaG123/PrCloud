import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?q=animal&category=science&apiKey=${process.env.API_KEY_NEWS}&language=en`
      );
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  
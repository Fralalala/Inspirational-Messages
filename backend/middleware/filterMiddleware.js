import fetch from "node-fetch";
import dotenv from "dotenv"

dotenv.config()

export const filter = async (req, res, next) => {
  try {
    const { message } = req.headers;

    const url = "https://neutrinoapi.com/bad-word-filter";

    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "user-id": process.env.userId,
        "api-key": process.env.apiKey,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        content: message,
      }),
    });

    const obj = await response.json();

    if (obj["is-bad"] === true) {
      throw new Error("Youre saying bad words!");
    } else if (obj["is-bad"] === false) {
      next();
    } else if (obj["api-error"] === 2) {
      throw new Error(
        "Unfortunately we dont accept messages right now. Sorry!"
      );
    } else {
      throw new Error("Something went wrong, please try again");
    }
  } catch (error) {
    
console.log("obj")
    res.json({
      error: error.message,
    });
  }
};

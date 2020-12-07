import fetch from "node-fetch";

const filterMessage = async (req, res) => {
  try {
    const { message } = req.headers;

    const url = "https://neutrinoapi.com/bad-word-filter";

    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "user-id": process.env.user-id,
        "api-key": process.env.api-key,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        content: "this is some random words ass",
      }),
    });

    res.json(
         await response.json()
    );
  } catch (error) {}
};

export { filterMessage };

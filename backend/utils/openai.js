import 'dotenv/config';

const getOpenAIAPIResponse = async (prompt) => {
    const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  };

  try{
    const response = await fetch("https://api.openai.com/v1/chat/completions", options);
    const data = await response.json();
    
    const reply = data.choices[0].message.content;
    // console.log(reply);

    return reply; //sent to the frontend
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred while fetching data from OpenAI API");
  }
}

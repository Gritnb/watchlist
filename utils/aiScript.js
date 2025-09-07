import Anthropic from "@anthropic-ai/sdk"
import { getResultsByName } from '/utils/getResults.js'

/******************/
let apikey = null
/******************/
const PROMPT = `You are an assistant, and your job is to suggest movies to the user, 
based on a string of text that the user provides. If the text is gibberish a.k.a does
not make sense, for example: long strings without vowels, consonants, random characters
e.t.c, respond with an empty string: "". If the text makes sense, then your job is to 
suggest movie titles. The user may provide feelings, mood or genres, so adjust your 
response accordingly to satisfy the user. Do not make assumptions based on age, gender and
past user inputs. Do not include pornographic material and answer with an empty string:""
if prompted for any. Your only consideration is the user input that you are being prompted with.
Do not suggest cartoons or animated movies unless the user says so. Provide a maximum of 10 results
per user input. Do not deviate from what the user wants. If the information you receive from the
user is very little or generic then provide the best rated movie titles that follow the information
received. The movies must be more than 30 minutes long. Omit commas from the titles themselves.
Your response should not include any other text, besides the titles that should be seperated by 
slashes.`

const anthropic = new Anthropic({
    apiKey: apikey,
})

export async function getMovieFromAi(userInput) {

    const message = await anthropic.messages.create({
        model: 'claude-3-5-haiku-20241022',
        // model: 'claude-opus-4-1-20250805',
        max_tokens: 1024,
        system: PROMPT,
        messages: [
            {
                role: "user",
                content: userInput
            }
        ],
    })
    return await getResultsByName(message.content[0].text.split('/'))
}

# The Watchlist
The Watchlist is a React application that provides you the ability to search, keep track and archive your favorite movies. You can search for movie titles and get relevant results with detailed information. The app provides you the ability to add each title in your personal Watchlist, or History if you've watched it. 

## Features
### Search
Inside the Search tab you can search by movie title and get the most relevant results. Each movie comes in a card format that includes detailed information such as: imdBD Ratings, duration, genre and much more. Each movie contains information based on whether it's in your Watchlist or History.

![search-example](https://github.com/user-attachments/assets/778ab1a1-b0b5-4a16-adcb-82765c4ca6d5)

### AI Assistant
A secondary search tool that utilizes reasoning AI models in order to provide suggestions based on user text. You can provide information such as mood, genre or ask for the best movie in a category.

![assistant-example](https://github.com/user-attachments/assets/41c6bd7d-a4a9-4467-a26e-ae9d302e924d)

### Watchlist
The Watchlist is your personal bookmarking tool to keep track of movies you want to watch in the future. All the information is currently saved in the browser.

![watchlist-example](https://github.com/user-attachments/assets/4a62d8b6-bed6-41db-ae44-a25626391f0e)

### History
The History tab contains every movie that you have watched in the past. All the information is currently saved in the browser.

![history-example](https://github.com/user-attachments/assets/77f18a31-9d23-4e3a-b84e-cf8a7017a55c)

### Upcoming updates
- API Migration. Current API handles search results poorly. Search by title yields limited information per movie, so in order to display full information for each one, a seperate API request - per movie - happens in the background the get the information needed. Basically each search is at maximum 11 requests. (API returns 10 results maximum).
- Implement skeleton loading for the card component.
- Implement user authentication.
- Store user information on a server.
- Assistant tool will take into consideration the users preferences based on their history data.

## General Information

This project aims to replicate a YouTube-like website, where I focused on practicing API consumption, page styling, and responsiveness.

I enjoyed the process and was satisfied with the final result. In addition to improving my programming skills, it also provided an excellent opportunity to improve my skills in creating screens using Figma and working on overall design.

Upon visiting the site, users will encounter a popup that explains the site's functionalities and features, summarizing the details mentioned here.

Feel free to explore, and any feedback is appreciated.

Link for the deployed app: [https://pipe-tube-one.vercel.app/](https://pipe-tube-one.vercel.app/)

![Image](https://github.com/thomasalbuquerque/pipe-tube/assets/7840248/bcaf4d55-0d69-4d42-8e97-417893047133)

## Features
- Search Bar: Allows users to search for videos using the YouTube API, fetching relevant results.
- Home and Recommended Videos: These sections display static videos stored in a JSON file within the project. I chose this approach to avoid exceeding the limited usage of the YouTube API, as the main objective here is learning.
- Like and Subscribe: Note that I didn't implement these features due to their dependency on backend functionality. Currently, the focus is solely on frontend development.

## Stack
This project was made with:
 - React.js
 - Next.js
 - Typescript
 - Tailwindcss

## Installation
To begin, make sure you have Node.js with npm installed on your system. If you don't have them, please refer to the [official documentation](https://nodejs.org/en/download) for instructions on how to install them.

Next, follow the steps below:

1. Clone the repository by running:
```bash
    git clone https://github.com/thomasalbuquerque/pipe-tube/
```
2. Open the newly created folder **pipe-tube** using Visual Studio Code (or any preferred code editor).

3. Run the command below to install all the necessary dependencies.
```bash
    npm install
```

4. Create a file named '.env' in root directory and include the following content inside it, replacing the value with your YouTube API Key. You can get a new YouTube API key following official documentation or through some tutorial on web like this: https://www.youtube.com/watch?v=44OBOSBd73M&ab_channel=AWPLife.
```bash
   NEXT_PUBLIC_YOUTUBE_API_KEY=XXXXX_your_youtube_api_key_XXXXXXX
```

5. Finally, run the command below to start the application in development mode.
```bash
    npm run dev
```

7. Or if you want to run the application in production mode, run:
```bash
    npm run build
    npm run start
```

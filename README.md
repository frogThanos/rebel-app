## How to Start the App:

### First, run the development server 🐹

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Then, run the json-server to fetch the sweet data ✨

```bash
npm run server
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the server.

### Finally, run the unit tests to ensure everything is solid 🛠️

```bash
npm run test
```

## My Creative Journey

It’s been over three years since I last worked on a React project, and I must say, diving back in has been both fun and challenging! 🙂 I dedicated most of my time to this project over the past weekend and a few evenings this week. Given the requirement for React and TypeScript, I opted for Next.js as my framework since it comes pre-configured with both.

To expedite my UI development, I also decided to use Tailwind CSS, which has made the styling process much smoother. But to be honest it was my first time using it and I'm not sure I would use it again, adding all those classes to my elements resulting in those long strings reminded me of inline css styling developers did once upon a time, it didn't look or feel clean to me. If I was working on a longterm project I would setup my own CSS and opt for [BEM](https://getbem.com/).

For state management, I decided to use hooks instead of a more complex library like Redux. I wanted to avoid the boilerplate code associated with Redux, which involves setting up stores, actions, and reducers, especially since I wasn’t sure if I would need that level of complexity.

However, while working on the SearchBar, I initially placed it in the root pages.tsx file between the Title and the ProductList components. I attempted to use the hook there, but unfortunately, the products list wouldn’t update as I typed in the SearchBar. In hindsight, having a global state would have been beneficial in that situation! 😆 As a quick fix, I moved the SearchBar into the ProductList component. While this resolved the immediate issue, it did lead to some layout shifting when typing in the SearchBar.

One issue I encountered while fetching products is that the image URLs are no longer functional. Unsplash recently updated their API for random images, and the URL https://source.unsplash.com/random/600x600?laptop in db.json is no longer valid. Now, to access random images, you need to create a developer account, obtain an API key, and utilize their libraries as outlined in the Unsplash [documentation](https://unsplash.com/documentation#libraries--sdks).

As a quick fix, I decided to use https://placehold.co instead to provide placeholder images.

Regarding unit tests I opted for testsing important things like the apiService.

## Future Adjustments

If I had more time I would finish the wishlists

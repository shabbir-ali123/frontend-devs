# Sports Betting Dashboard

A modern, responsive dashboard for sports betting similar to Wizzy platform, built with Next.js and Tailwind CSS.

## Features

- Clean, modern UI with sports-themed dark design
- Interactive bet selection with YES/NO options
- Match progress visualization
- Team information display
- Navigation between different picks
- Responsive design

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Add images to the `public/images` directory (see placeholder-info.txt)
4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Folder Structure

```
public/
  ├── images/ - Store images and assets here
src/
  ├── app/
      ├── components/
          ├── dashboard/ - Dashboard components
              ├── Background.jsx - Background effects
              ├── BetOptions.jsx - Yes/No betting options 
              ├── BetQuestion.jsx - Question display
              ├── Dashboard.jsx - Main dashboard layout
              ├── HistoryStats.jsx - Stats component
              ├── MatchInfo.jsx - Team display
              ├── MatchProgress.jsx - Progress indicator
              ├── NavigationButtons.jsx - Prev/Next buttons
          ├── header/ - Page header
      ├── globals.css - Global styles
      ├── layout.js - App layout
      ├── page.js - Main page component
```

## Customization

- Edit colors in component files and globals.css
- Add team logos and images to public/images
- Modify bet options in BetOptions.jsx
- Update match information in MatchInfo.jsx

## Technologies Used

- Next.js
- React
- Tailwind CSS
- React Icons

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Notes by Shahin

----SETTING UP OUR PROJECT----

For this project, we started with installing Vite (source: https://vitejs.dev/guide/).

Terminal command:
npm create vite@latest
-For project name we wrote ./ to create it in the current directory
-Then we chose React as its framework, and JavaScript as its 'variant'. 

Then we deleted everything in the source folder (+ the favicon in the public folder), except for the main.jsx, to start from scratch. 

We then installed tailwind (source: https://tailwindcss.com/docs/guides/vite).
Terminal commands:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p 

Finally, we copied the contents of "Configure your template paths" from the source linked above, and pasted it into our 
tailwind.config.js file

Terminal command to run our project: npm run dev 




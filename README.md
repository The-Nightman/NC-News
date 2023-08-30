# Northcoders News FrontEnd

# project summary

Live version: https://ncnewsfeproject.netlify.app/

This project is a single-page-application built using ReactJS and MUI components with a responsive mobile-first design with a focus on good UX/UI design connecting to a RESTful backend service to server news articles and vote/comment using optimistic rendering and error handling. 

**Please note: The application may take a few minutes to load due to awaiting the backend to respond due to the BE hosting service winding down after periods of inactivity**


---
### Clone instructions:

1. copy the following code into your terminal after using `cd` to navigate to your desired directory:

```
git clone https://github.com/The-Nightman/NC-News.git
```

2. navigate into the repo folder using `cd`

3. use the following code to create a new repository with the cloned code:
```
git remote set-url origin YOUR_NEW_REPO_URL_HERE
git branch -M main
git push -u origin main
```

4. open the repo inside VsCode using the following: 
```
code .
```
---
### install dependencies:

all dependencies can be installed with the following code:
```
npm install
```
---
### Launch project in development mode with Vite:

1. Run the following code in the terminal to begin development with the dev preview server:
```
npm run dev
```
2. Open the localhost address returned in the terminal in the browser of choice either by Ctrl+Click or copy and paste.

3. Save any code edits to refresh the development server and preview changes.

### Build a production version:

1. run the following code in the terminal to run the build compiler: 
```
npm run build
```
2. run the following code in the terminal to start the preview server and check the production build for errors or faults (repeat this process from steps 1 and 2 following any changes made to the code):
```
npm run preview
```

3. Deploy to your host of choice follow the instructions given in their documentation

**any images that were imported and used in the project using a filepath will not be compiled by webpack, instead import your images directly into your components using the following syntax**

```
import imageName from "../assets/image.png"
```

### Hosting with Netlify:

1. Create a file named *_redirects* without a file extension within your public directory and add the following rule inside the file:  
```
/* /index.html 200
```

2. Install the Netlify CLI tool by running the following code in the terminal:
```
npm install netlify-cli -g
```

3. Deploy the project to a draft URL using the following code and following the prompts given by Netlify:
```
netlify deploy
```
ensure the deploy path given to Netlify is the build directoy ./build and if done correctly you should be able to preview a draft deployment of the project in order to test before moving to a production deployment.

4. Deploy to a production URL by using the following code and specifiying the build path again:
```
netlify deploy --prod
```
you should now have a production URL e.g. **https://your-site-name.netlify.com**

5. Redeployment can be done by running the following 3 lines of code in the terminal:

```
npm run build
```
```
netlify deploy
```
```
netlify deploy --prod
```

---
<br />

### Node minimum requirements
<br />
Node.js v16

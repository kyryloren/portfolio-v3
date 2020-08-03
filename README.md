<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Logo" src="https://i.imgur.com/34HanMA.png" width="100" />
  </a>
</p>
<h1 align="center">
  kyryloorlov.com - v3
</h1>
<p align="center">
  The second version of my personal website, built with <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a> and hosted with <a href="https://www.netlify.com" target="_blank">Netlify</a>.
</p>
<p align="center">
  Previous versions:
  <a href="https://github.com/kyryloren/portfolio-v1" target="_blank">Version 1</a>
</p>
<p align="center">
  <a href="https://app.netlify.com/sites/kyrylo-v2/deploys" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/1ac3bde1-3734-42e0-bb97-d6a43b866500/deploy-status" alt="Netlify status" />
    <a href="https://deepscan.io/dashboard#view=project&tid=9434&pid=12647&bid=197096"><img src="https://deepscan.io/api/teams/9434/projects/12647/branches/197096/badge/grade.svg" alt="DeepScan grade"></a>
  </a>
</p>

![hero](https://i.imgur.com/1hY4Zjy.png)

## 🚀 Installing

1.  Install the gatsby CLI

    ```shell
    npm i -g gatsby-cli
    ```

2. Clone the repository and change directories

    ```shell
    git clone https://github.com/kyryloren/portfolio-v2
    cd portfolio-v2
    ```

3. Install dependencies
    ```shell
    npm install
    ```
4. Start the local server
    ```shell
    gatsby develop # local dev server
    gatsby build && gatsby serve # local prod server
    ```

1.  **Open the source code and start editing!**

    The site is now running at `http://localhost:8000`!

## 🧐 What's inside?

A quick look at the top-level files and directories.

```sh
  .
  ├── node_modules # modules
  ├── content # the actual text of the website
  ├── src # source folder
      └── components # main components
          └── layouts
            ├── Head.js # SEO and meta tags that go in the head
            ├── index.js # layout file
          └── sections # section content
          ├── nav.js
          ├── _useWindowSize.js # get dimensions of window
      └── images
      └── pages
          ├── index.js
      └── styles # styled components styles
      └── utils
          ├── config.js # website info for SEO
  ├── static # static content
  ├── .gitignore
  ├── .prettierrc
  ├── gatsby-config.js # imports
  ├── gatsby-browser.js # wrap page with layout
  ├── gatsby-ssr.js # wrap page with layout
  ├── LICENSE
  ├── package-lock.json
  ├── package.json
  ├── README.md
 ```
 
 ## 🎨 Color Reference
| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Black          | ![#000000](https://via.placeholder.com/10/0000?text=+) `#000000` |
| Darker         | ![#0d0d0d](https://via.placeholder.com/10/0d0d0d?text=+) `#0d0d0d` |
| Primary        | ![#DD7373](https://via.placeholder.com/10/DD7373?text=+) `#DD7373` |
| Accent         | ![#fffcf2](https://via.placeholder.com/10/fffcf2?text=+) `#fffcf2` |
| White          | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) `#ffffff` |
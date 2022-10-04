# Master Branch

# Quick Start

In this Docs, I'll guide you step-by-step, to help you ready for joining this project.

### Frameworks & Libraries

- First of all, this project use **NextJS**, which will be render all HTML by SSR or SSG. And this will be really good for Google's Bot, as well as other search machine. It will help our website SEO better. [See NextJS Docs](https://nextjs.org/docs/getting-started)
- **Formik**. This will help us control this Form in HTML. Everyone know that Form is really hard. so this will help us not only value controller but also validation of inputs. [Formik docs](https://formik.org/docs/overview)
- **GraphQL**. This connect api by apollo graphql. [Apollo docs](https://www.apollographql.com/)
- **Redux Saga**. Manager state in web app by redux-saga

  ### Code Formatter

- **Prettier**. Well this will simply keep your code cleanly.

## VSCode extension

To make sure you will be given fully support for coding. Please use VSCode.

- **Code spell check**. This tool will help you won't be taken silly spell mistakes
- **Prettier**. This is clean-code-keeper which will make sure your code isn't like s\*\*t. And make sure you turn on "Auto format when save". Check this [Blog](https://www.codereadability.com/automated-code-formatting-with-prettier/)

## VSCode snippets

This is powerful tool, which is natively written by us.
Simply, it will help you write code faster.

- Firstly, please check file `.vscode/nextjs.code-snippets`.
- Then text some prefix.
- Ready for code faster

## Folder

- Routes: every new page was code must declare in routes with two languages
- Services: this folder have all fetch data from API. often call in saga. ATTENTION: cafully with !
- Redux: All redux file will be in here. The (\_app) use for data api global in web app, and (common) use for state global
  in web app
- Pages: Read the NextJs Document for detail
- Design: All component with customer look like design
- Containers: The component using for every pages. You don't want see a pages with all child in there xD
- Constants: mockdata, config framework or librarie. Of somethings of course is constant
- Components: All the component will with all pages.
- Common:
  --Config: graphql, firebase, .... config
  --typings: All interfaces and typings. All interfaces must be to obey backend
  --hooks: create a hooks use like React Hooks
  --styles: only for global style. Don't add style for page in here
  --utils: ....
- all font, locales, images, src put to public.

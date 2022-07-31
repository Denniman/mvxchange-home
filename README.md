# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# UI Components

The project follows Atomic Design Pattern for building UI compoments in Confee. See more details here: [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)
In short this means we are organising our code into the following structure:

- atoms - Smallest reusable building block of components that don't make sense to break down further. Typical examples are: Buttons, Icons, Logos, Labels, etc.
- molecules - Smaller reusable logical components that are composed of multiple atoms together. Typical examples are Menu, SearchBox, Filter Configuration, etc.
- organisms - Larger pieces of components composed of molecules and atoms. Typical examples are Header, Footer, Layout components, various page sections

The design paradigm also details mentions templates and pages. Templates are consolidated in organisms while, pages are going in the NextJS pages setion.

## Component structure

The component folder structure follows this pattern.

```
./Component
    Component.jsx
    index.js
``
```

import ToDoList from './assets/ToDoList.png'
import MMS from './assets/MMS.png'
import newsAppImg from './assets/newsAppReact.png'
import WeatherApp from "./assets/WeatherAppReact.png"
import pokemonGallery from "./assets/pokemonGallery.png"
import ShopifyDev from './assets/ShopifyDev.png'

const projects = [
  {
    img: ShopifyDev,
    title: 'Shopify Stores (90+)',
    descrip: `Developed and customized 90+ production Shopify stores — Liquid theme customization, metafields, app integrations, store migrations, payment gateways, and performance optimization achieving high Google Lighthouse scores.`,
    repo: 'https://github.com/mohamed17-a',
    Api: '',
    upwork: 'https://upwork.com/freelancers/mohameda9',
  },
  {
    img: newsAppImg,
    title: 'News App',
    descrip: `Built with React + Vite and Bootstrap. Integrates with News API for latest tech and sports news. Features routing, React hooks, and user login & register flow.`,
    repo: 'https://github.com/mohamed17-a/news-app',
    Api: 'https://newsapi.org/'
  },
  {
    img: pokemonGallery,
    title: 'Pokemon Gallery',
    descrip: `React application using TypeScript and Ant Design with PokéAPI integration.`,
    repo: 'https://github.com/mohamed17-a/pokemon-gallery',
    Api: 'https://pokeapi.co/'
  },
  {
    img: WeatherApp,
    title: 'Weather App',
    descrip: `React website with Bootstrap and OpenWeatherMap API. Select your city and get live weather data.`,
    repo: 'https://github.com/mohamed17-a/Weather-app',
    Api: 'https://openweathermap.org/current'
  },
  {
    img: ToDoList,
    title: 'To-Do List',
    descrip: `Built with React.js and Bootstrap. Covers state management, user input handling, and conditional rendering.`,
    repo: 'https://github.com/mohamed17-a/todo-list-react',
    Api: ''
  },
  {
    img: MMS,
    title: 'Market Management System',
    descrip: `Built with HTML, CSS, and JavaScript. Full CRUDS implementation: Create, Read, Update, Delete, and Search.`,
    repo: 'https://github.com/mohamed17-a/Market-Management-System',
    Api: ''
  },
]

export default projects;

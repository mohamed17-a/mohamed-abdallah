import ToDoList from './assets/ToDoList.png'
import MMS from './assets/MMS.png'
import newsAppImg from './assets/newsAppReact.png'
import WeatherApp from "./assets/WeatherAppReact.png"
import pokemonGallery from "./assets/pokemonGallery.png"
const projects = [
    {
        img: MMS,
        title: 'Market-Management-System',
        descrip: `Project has built using Html, CSS , Javascript.
        Implemented CRUDS methods "Create, Read, Update, Delete, Search" and more....
        `,
        repo: 'https://github.com/mohamed17-a/Market-Management-System',
        Api : ""
    },

    {
        img: ToDoList,
        title: 'To-Do-List',
        descrip: 'Built using react js and bootstrap. I practiced the fundamentals of React, including state management, handling user input, and conditional rendering.',
        repo: 'https://github.com/mohamed17-a/todo-list-react',
        Api:''
    },
    {
        img: WeatherApp,
        title: 'weather-app',
        descrip: `React Website has built Using react, Bootstrap ,Bootstrap Icons and more.
        You can choose your city from different cities and you will get all latest about weather.
        Used Api: openweathermap`,
        repo: 'https://github.com/mohamed17-a/Weather-app',
        Api:'https://openweathermap.org/current'
    },
    {
        img: newsAppImg,
        title: 'News-App',
        descrip: `News App built with React, Bootstrap, BootrstrapIcons,React-Router-Dom,handle states.
        retrieving Data from News Api about TechCrunch and Sports latest news since a month.
        `,
        repo: "https://github.com/mohamed17-a/news-app",
        Api : "https://newsapi.org/"
    },
    {
        img: pokemonGallery,
        title: 'pokemon-gallery',
        descrip: `A React-based application utilizing TypeScript and Ant Design with Poke API integration.
        `,
        repo: "https://github.com/mohamed17-a/pokemon-gallery",
        Api : "https://pokeapi.co/"
    },
]
export default projects;
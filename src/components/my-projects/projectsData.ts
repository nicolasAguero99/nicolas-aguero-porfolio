interface Project {
  title: string
  imageSrc: `/images/${string}`
  description: string
  technologies: Technologies[]
  projectLink: string
  codeLink: string
}

export type Technologies = 'React' | 'React native' | 'Node' | 'Mongo Db' | 'Axios' | 'Jwt' | 'Socket.io' | 'Scss' | 'Tailwind' | 'Three.js' | 'Html' | 'Css' | 'Javascript' | 'PWA' | 'API' | 'Bootstrap' | 'Php' | 'MySql' | 'Vue'

export const projects: Project[] = [
  {
    title: 'Ready',
    imageSrc: '/images/Ready.jpg',
    description: 'Proyecto académico (tesis final) el cual consiste en una app que se centra en la gestión de tareas de las empresas. (Solicitar acceso para ver código).',
    technologies: ['React', 'Node', 'Mongo Db', 'Axios', 'Jwt', 'Socket.io'],
    projectLink: 'https://ready-app-gamma.vercel.app/',
    codeLink: 'https://github.com/nicolasAguero99/Ready-project'
  },
  {
    title: 'Nowly',
    imageSrc: '/images/Nowly.jpg',
    description: 'Proyecto personal el cual consiste en una es una app mobile de administrador de tareas personal, el cual cuenta con diferentes funciones para ayudarte. (Solicitar acceso para ver código).',
    technologies: ['React native'],
    projectLink: '',
    codeLink: 'https://github.com/nicolasAguero99/Nowly-project'
  },
  {
    title: 'Task list',
    imageSrc: '/images/TaskList.jpg',
    description: 'Proyecto personal en el que consiste en una app de lista de tareas o también llamadas "task list" o "todo list".',
    technologies: ['React', 'Scss'],
    projectLink: 'https://task-list-project-chi.vercel.app/',
    codeLink: 'https://github.com/nicolasAguero99/TaskList-project'
  },
  {
    title: 'Sneak-er',
    imageSrc: '/images/SneakEr.jpg',
    description: 'Proyecto personal en el que consiste en un prototipo de un sitio web, el cual se ofrecen zapatillas (calzado) deportivas de diferentes marcas.',
    technologies: ['React', 'Tailwind', 'Three.js'],
    projectLink: 'https://sneak-er.vercel.app/',
    codeLink: 'https://github.com/nicolasAguero99/SneakEr-project'
  },
  {
    title: 'Fly X',
    imageSrc: '/images/FlyX.jpg',
    description: 'Proyecto académico en el que consiste en una PWA (utilizando ServiceWorker y Manifest) y utilizando una API y un Json local.',
    technologies: ['Html', 'Css', 'Javascript', 'Tailwind', 'PWA', 'API'],
    projectLink: 'https://nicolasaguero99.github.io/FlyX-project/',
    codeLink: 'https://github.com/nicolasAguero99/FlyX-project'
  },
  {
    title: 'Tienda LevelUp',
    imageSrc: '/images/LevelUp.jpg',
    description: 'Proyecto académico en el que consiste realizar una tienda de juegos, que cuenta con una base de datos, sección para administradores, usuarios, login/register y carrito.',
    technologies: ['Html', 'Css', 'Bootstrap', 'Php', 'MySql'],
    projectLink: 'http://level-up.rf.gd/',
    codeLink: 'https://github.com/nicolasAguero99/LevelUp-project'
  },
  {
    title: 'Flixplay',
    imageSrc: '/images/Flixplay.jpg',
    description: 'Proyecto académico en el que consiste en realizar una app de películas con su buscador, seleccionar una película en específico y ver sus detalles, empleando una API.',
    technologies: ['Vue', 'API'],
    projectLink: 'https://nicolasaguero99.github.io/Flixplay-project/',
    codeLink: 'https://github.com/nicolasAguero99/Flixplay-project'
  },
  {
    title: 'To Do App',
    imageSrc: '/images/TodoApp.jpg',
    description: 'Proyecto académico que consiste en realizar una todo app que cuenta con su buscador de tareas y sus funciones típicas de agregar, editar y borrar.',
    technologies: ['Vue'],
    projectLink: 'https://nicolasaguero99.github.io/TodoApp-project/',
    codeLink: 'https://github.com/nicolasAguero99/TodoApp-project'
  },
  {
    title: 'Urban Hell',
    imageSrc: '/images/Urban-Hell.jpg',
    description: 'Proyecto académico en el que consiste en una tienda de ropa, con su catálogo de productos y poder agregar al carrito cada uno de estos.',
    technologies: ['Html', 'Css', 'Javascript', 'PWA', 'API'],
    projectLink: 'https://nicolasaguero99.github.io/UrbanHell-project/',
    codeLink: 'https://github.com/nicolasAguero99/UrbanHell-project'
  },
  {
    title: 'Starbucks landing page',
    imageSrc: '/images/Starbucks.jpg',
    description: 'Proyecto académico que consiste en realizar una landing page promocionando la famosa empresa de Starbucks, a su vez contando con una PWA.',
    technologies: ['Html', 'Css', 'Javascript', 'Bootstrap', 'PWA'],
    projectLink: 'https://nicolasaguero99.github.io/Starbucks-project/',
    codeLink: 'https://github.com/nicolasAguero99/Starbucks-project'
  },
  {
    title: 'Havanna landing page',
    imageSrc: '/images/Havanna.jpg',
    description: 'Proyecto académico que consiste en realizar una landing page promocionando la famosa empresa Argentina de Havanna.',
    technologies: ['Html', 'Css', 'Javascript', 'Bootstrap'],
    projectLink: 'https://nicolasaguero99.github.io/Havanna-project/',
    codeLink: 'https://github.com/nicolasAguero99/Havanna-project'
  }
]
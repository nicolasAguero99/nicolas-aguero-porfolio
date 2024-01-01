interface Project {
  title: string
  imageSrc: `/images/${string}`
  description: string
  technologies: Technologies[]
  projectLink: string
  codeLink: string
}

export type Technologies = 'React' | 'React native' | 'Node' | 'Mongo Db' | 'Axios' | 'Jwt' | 'Socket.io' | 'SCSS' | 'Tailwind' | 'Three.js' | 'HTML' | 'CSS' | 'Javascript' | 'PWA' | 'API' | 'Bootstrap' | 'PHP' | 'MySql' | 'Vue' | 'Firebase'

export const projects: Project[] = [
  {
    title: 'Ready',
    imageSrc: '/images/Ready.png',
    description: 'Proyecto académico (tesis). Es una plataforma de gestión de tareas y gamificación para empresas. (Solicitar acceso para ver código)',
    technologies: ['React', 'Node', 'Mongo Db', 'Axios', 'Jwt', 'Socket.io'],
    projectLink: 'https://ready-app-gamma.vercel.app/',
    codeLink: 'https://github.com/nicolasAguero99/Ready-project'
  },
  {
    title: 'Nowly',
    imageSrc: '/images/Nowly.png',
    description: 'Proyecto personal de una aplicación de organización, meditaciones y música para estudio y día a día. (Solicitar acceso para ver el código)',
    technologies: ['React native'],
    projectLink: '',
    codeLink: 'https://github.com/nicolasAguero99/Nowly-project'
  },
  {
    title: 'Task list',
    imageSrc: '/images/Task-List.png',
    description: 'Proyecto personal en el que consiste en una app de lista de tareas o también llamadas "task list" o "todo list"',
    technologies: ['React', 'SCSS'],
    projectLink: 'https://task-list-project-chi.vercel.app/',
    codeLink: 'https://github.com/nicolasAguero99/TaskList-project'
  },
  {
    title: 'Sneak-er',
    imageSrc: '/images/Sneak-Er.png',
    description: 'Proyecto personal de un sitio web de una zapatería la cual ofrece calzado de diferentes marcas',
    technologies: ['React', 'Tailwind', 'Three.js'],
    projectLink: 'https://sneak-er.vercel.app/',
    codeLink: 'https://github.com/nicolasAguero99/SneakEr-project'
  },
  {
    title: 'Fly X',
    imageSrc: '/images/Fly-X.png',
    description: 'Proyecto académico de un sitio de viajes. Es una PWA (donde se utilizó ServiceWorker y Manifest),  basada en una API y un Json local',
    technologies: ['HTML', 'CSS', 'Javascript', 'Tailwind', 'PWA', 'API'],
    projectLink: 'https://nicolasaguero99.github.io/FlyX-project/',
    codeLink: 'https://github.com/nicolasAguero99/FlyX-project'
  },
  {
    title: 'Tienda LevelUp',
    imageSrc: '/images/Level-Up.png',
    description: 'Proyecto académico de una tienda de juegos, que cuenta con una base de datos, sección para administradores, usuarios, login/register y carrito',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySql'],
    projectLink: 'http://level-up.rf.gd/',
    codeLink: 'https://github.com/nicolasAguero99/LevelUp-project'
  },
  {
    title: 'Creatimoon',
    imageSrc: '/images/Creatimoon.png',
    description: 'Proyecto académico de un sitio que ofrece servicios digitales tanto de programación como de diseño. Cuenta con mensajería de atención al cliente y un panel de administrador',
    technologies: ['Vue', 'Firebase'],
    projectLink: 'https://creatimoon-project.vercel.app/',
    codeLink: 'https://github.com/nicolasAguero99/Creatimoon-project'
  },
  {
    title: 'Flixplay',
    imageSrc: '/images/Flixplay.png',
    description: 'Proyecto académico de una plataforma de películas con buscador, y poder ver los detalles de un filme en específico empleando una API',
    technologies: ['Vue', 'API'],
    projectLink: 'https://nicolasaguero99.github.io/Flixplay-project/',
    codeLink: 'https://github.com/nicolasAguero99/Flixplay-project'
  },
  {
    title: 'To Do App',
    imageSrc: '/images/To-Do-App.png',
    description: 'Proyecto académico que consiste en realizar una “ToDo app” que cuenta con su buscador de tareas y sus funciones típicas de agregar, editar y borrar',
    technologies: ['Vue'],
    projectLink: 'https://nicolasaguero99.github.io/TodoApp-project/',
    codeLink: 'https://github.com/nicolasAguero99/TodoApp-project'
  },
  {
    title: 'Urban Hell',
    imageSrc: '/images/Urban-Hell.png',
    description: 'Proyecto académico para una tienda de ropa, con su catálogo de productos y carrito de compras funcional',
    technologies: ['HTML', 'CSS', 'Javascript', 'PWA', 'API'],
    projectLink: 'https://nicolasaguero99.github.io/UrbanHell-project/',
    codeLink: 'https://github.com/nicolasAguero99/UrbanHell-project'
  },
  {
    title: 'Starbucks landing page',
    imageSrc: '/images/Starbucks.png',
    description: 'Proyecto académico que consiste en realizar una landing page promocionando la famosa empresa de Starbucks, a su vez contando con una PWA',
    technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'PWA'],
    projectLink: 'https://nicolasaguero99.github.io/Starbucks-project/',
    codeLink: 'https://github.com/nicolasAguero99/Starbucks-project'
  },
  {
    title: 'Havanna landing page',
    imageSrc: '/images/Havanna.png',
    description: 'Proyecto académico que consiste en realizar una landing page promocionando la famosa empresa Argentina de Havanna',
    technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
    projectLink: 'https://nicolasaguero99.github.io/Havanna-project/',
    codeLink: 'https://github.com/nicolasAguero99/Havanna-project'
  }
]
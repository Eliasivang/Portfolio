
import taskList from "../assets/images/tasks.png"
import moviesWiki from "../assets/images/mb.png"
import devFinder from "../assets/images/definder.png"
import crocheteando from "../assets/images/crocheteando.png"
import controlGastos from "../assets/images/gastos.png"
import weatherApp from "../assets/images/weatherApp.png"
import tictactoe from "../assets/images/tictactoe.png"

export const proyects = [{
    title: "Dev Finder",
    image: devFinder,
    description: "Usamos la API de GitHub para buscar perfiles y obtener su informacion, tal como redes , cantidad de repos, seguidores, etc. Se hace uso de context API y cuenta con Dark Mode.",
    tecnologies: "",
    urlCode:"https://github.com/Eliasivang/DevFinder",
    urlDeploy:"https://dev-finder-8usvif0kg-eliasivang.vercel.app/"
},
{
    title: "Crocheteando",
    image: crocheteando,
    description: "Crocheteando es una pagina pensada para que siga creciendo, a este punto cuenta con un carrito de compras, paginacion y buscador de articulos.Se hace uso de Context API y Local Storage. ",
    tecnologies: "",
    urlCode:"https://github.com/Eliasivang/crocheteando-cart",
    urlDeploy:"https://crocheteando-6uvpkag6k-eliasivang.vercel.app/"
},
{
    title: "Movies Wiki",
    image: moviesWiki,
    description: "Pagina para buscar peliculas y obtener los detalles de las mismas, tal como fecha de estreno, director, etc. Cuenta con un scroll infinito y debounce.",
    tecnologies: "",
    urlCode:"https://github.com/Eliasivang/MoviesWiki",
    urlDeploy:"https://movies-wiki-lzq2u7ezh-eliasivang.vercel.app/"
},
{
    title: "Task List",
    image:  taskList,
    description: "Web donde podremos listar tareas, marcarlas como completadas o eliminarlas. Se hace uso de Local Storage para la persistencia de datos en el navegador.",
    tecnologies: "",
    urlCode:"https://github.com/Eliasivang/Task-list-",
    urlDeploy:"https://task-list-eig.netlify.app/"
},
{
    title: "Control de Gastos",
    image: controlGastos  ,
    description: "En base a un presupuesto inicial ingresado , le iremos restando los gastos ingresados por el usuario y mostrando en pantalla el restante capital del inicial.",
    tecnologies: "",
    urlCode:"",
    urlDeploy:""
},
{
    title: "Weather App",
    image:  weatherApp,
    description: "Pagina simple con el fin de consultar el clima de cualquier parte del mundo mediante Weather API y Axios.",
    tecnologies: "",
    urlCode:"https://github.com/Eliasivang/Weather-App",
    urlDeploy:"https://eig-weather-app.netlify.app/"
},
{
    title: "TIC TAC TOE",
    image: tictactoe,
    description:"En esta web prodremos jugar al clasico tic tac toe, tendremos la opcion de resetear la partida, visualizar los turnos y cuenta con mensajes para el jugador/es que ganen la partida",
    tecnologies:"",
    urlCode: "https://github.com/Eliasivang/tic-tac-toe",
    urlDeploy: "https://tic-tac-97bbb3ycb-eliasivang.vercel.app/"
}]
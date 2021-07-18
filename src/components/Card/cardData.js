import ViewModuleIcon from '@material-ui/icons/ViewModule';
import blogSite from '../../images/blog-site.png';
import movieSearch from '../../images/movie-search.png';
import tabs from '../../images/tabs.png';
import mern from '../../images/mern.png';

const cardData = [
  {
    title: "MERN APP",
    description:
      "A complete MERN project,with Material UI",
    stack: "REACT/MONGODB/EXPRESS/NODE",
    img: mern,
    url: "https://github.com/Maha-Mustafa",
    preview:"https://mern-app-m.netlify.app/",
    icon: <ViewModuleIcon/>
  },
  {
    title: "Movie Search App",
    description:
      "A movie search app build with Reactjs, using moviedb api and css for styling",
    stack: "REACT/CSS",
    img: movieSearch,
    url: "https://github.com/Maha-Mustafa/movie-search-app",
    preview: "https://movie-search-app-mm.netlify.app/",
    icon: <ViewModuleIcon/>
  },
  {
    title: "Blog Site",
    description:
      "An elegant looking and responsive blog site build with HTML & CSS",
    stack: "HTML/CSS",
    img: blogSite,
    url: "https://github.com/Maha-Mustafa/Blog-Page",
    preview:"https://blog-site-mm.netlify.app/",
    icon:<ViewModuleIcon/>
  },
  {
    title: "Tabs-Project",
    description:
      "A mini template that can be used for profile to showcase work experience.",
    stack: "REACT/CSS",
    img: tabs,
    url: "https://github.com/Maha-Mustafa/Tabs-project-React",
    preview:"https://tabs-react-mm.netlify.app/",
    icon:<ViewModuleIcon/>
  },
  
];

export default cardData;
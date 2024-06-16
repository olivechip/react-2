### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  <!-- tool that helps build singe-page applications with client side routing,
  manages navigation and rendering components based on url  -->

- What is a single page application?
  <!-- application that works without reloading the page, content is re-rendered as user interacts with the app -->

- What are some differences between client side and server side routing?
  <!-- client side routing allows for new content to render without reloading the page. server side routing responds with a new html pages as requests are sent. client side routing can be faster than server side due to state being managed on client side - more interactive and dynamic application.-->

- What are two ways of handling redirects with React Router? When would you use each?
  <!-- <Redirect> component or calling .push on the history object, mostly replaced by Navigate component-->

- What are two different ways to handle page-not-found user experiences using React Router? 
  <!-- create a path that redirects to home page (mostly replaced by Navigate component) or render 404 Component page -->

- How do you grab URL parameters from within a component using React Router?
  <!-- useParams hook returns and object with the data -->

- What is context in React? When would you use it?
  <!-- while sharing data across levels was done through propdrilling, context allows for universal data across all levels. create context, provider, then consumption of data in the required component. useful in heavily nested apps with lots of children that may need data from top components. -->

- Describe some differences between class-based components and function
  components in React.
  <!-- classed based components extend from React Component, use render method.
  functional components are defined in plain js functions, return jsx in function body. class uses this.state to manage state and lifecycle methods to manage side effects. functions use hooks like useState and useEffect to manage state. -->

- What are some of the problems that hooks were designed to solve?
  <!-- combines functionality of lifecycle methods into single api, makes state management organized and easier. -->
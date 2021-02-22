import { Router } from '@reach/router';

import Home from '../home';
import AboutPage from '../aboutPage'
import ContactPage from '../contactPage'
const AppRouter = () => {
  return (
    <Router>
      <Home path="/" />
      <AboutPage path='about'/>
      <ContactPage path='contact'/>
    </Router>
  );
};

export default AppRouter;

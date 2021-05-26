import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './globalStyle';
import styled from 'styled-components';

const Section = styled.section`
  overflow-x: hidden;
`



function App() {
  let location = useLocation();
  return (
    <Section>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
        </Switch>
      </AnimatePresence>
    </Section>
  );
}

export default App;
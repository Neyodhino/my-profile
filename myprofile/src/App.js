import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="BisoyeFemi" scroll>
            <Navigation>
                <Link to="/my-profile">My Profile</Link>
                <Link to="/contact-me">Contact Me</Link>
            
            </Navigation>
        </Header>
        <Drawer title="BisoyeFemi">
            <Navigation>
                <Link to="/my-profile">My Profile</Link>
                <Link to="/contact-me">Contact Me</Link>
      
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
    
  );
}

export default App;

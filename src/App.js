import './App.css';
import ReactDOM from "react-dom/client";
import React from 'react';

function App() {
    class Link extends React.Component {
        render() {
            return React.createElement(
                'p',
                null,
                React.createElement(
                    'a',
                    {href: this.props.url},
                    this.props.children));
        }
    }

    const boldReact =
        React.createElement('strong', null, 'React');

    const linkReact =
        React.createElement(Link, {url: '//react.dev'}, boldReact);
    const linkVue =
        React.createElement(Link, {url: '//vuejs.org'}, 'Vue');
    const linkAngular =
        React.createElement(Link, {url: '//angular.io'}, 'Angular');
    const group = React.createElement(React.Fragment, null, linkReact, linkVue, linkAngular);
    const domElement = document.getElementById('root');
    ReactDOM.createRoot(domElement).render(group);
}

export default App;

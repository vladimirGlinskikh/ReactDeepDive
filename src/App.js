import {Component} from "react";
import './App.css';

class MenuItem extends Component {
    render() {
        return (
            <li className="menu-item">
                <a className="menu-link" href={this.props.href}>
                    {this.props.label}
                </a>
            </li>
        )
    }
}

class Menu extends Component {
    render() {
        return (
            <nav className="navbar">
                <h1 className="title">Меню компании</h1>
                <ul className="menu">
                    <MenuItem label="Главная" href="/"/>
                    <MenuItem label="О нас" href="/about"/>
                    <MenuItem label="Блог" href="/blog"/>
                </ul>
            </nav>
        )
    }
}

class App extends Component {
    render() {
        return (
            <main>
                <Menu/>
            </main>
        );
    }
}


export default App;

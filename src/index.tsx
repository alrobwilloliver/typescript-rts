import ReactDOM from 'react-dom';
// import EventComponent from './events/EventComponent';
import UserSearch from './refs/UserSearch';
const App = () => {
    return <UserSearch />
}

ReactDOM.render(<App/>, document.querySelector('#root'));

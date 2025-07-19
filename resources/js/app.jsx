import * as bootstrap from 'bootstrap';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary mb-4 fixed-top" style={{ borderBottom: '4px solid #00bfff' }}>
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img
                            src="/logoempathyr.png"
                            alt="Logo"
                            width="120"
                            height="40"
                            className="me-2"
                            style={{ objectFit: 'contain' }}
                        />
                       
                    </a>
                </div>
            </nav>
            <div className="container mt-5" style={{ paddingTop: '80px'}}>
                <h1>Lista de Tareas</h1>
                <TaskList />
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import * as bootstrap from 'bootstrap';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [editTask, setEditTask] = useState(null);
    const [filter, setFilter] = useState('Todas');
    const [alert, setAlert] = useState('');
    const [orderBy, setOrderBy] = useState('created_at');
    const [orderDir, setOrderDir] = useState('asc');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = () => {
        axios.get('/api/tareas')
            .then(res => setTasks(res.data));
    };

    const filteredTasks = filter === 'Todas'
        ? tasks
        : tasks.filter(task => task.estadotarea === filter);

    // Ordenar tareas por fecha de creación o completado
    const sortedTasks = [...filteredTasks].sort((a, b) => {
        const fieldA = a[orderBy];
        const fieldB = b[orderBy];

        // Si el campo no existe, lo ponemos al final
        if (!fieldA) return 1;
        if (!fieldB) return -1;

        if (orderDir === 'asc') {
            return new Date(fieldA) - new Date(fieldB);
        } else {
            return new Date(fieldB) - new Date(fieldA);
        }
    });

    const handleTaskAdded = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleAddClick = () => {
        setEditTask(null);
        const modalEl = document.getElementById('taskModal');
        if (modalEl) {
            let modal = bootstrap.Modal.getInstance(modalEl);
            if (!modal) {
                modal = new bootstrap.Modal(modalEl);
            }
            modal.show();
        }
    };

    const handleEditClick = (task) => {
        setEditTask(task);
        const modalEl = document.getElementById('taskModal');
        if (modalEl) {
            let modal = bootstrap.Modal.getInstance(modalEl);
            if (!modal) {
                modal = new bootstrap.Modal(modalEl);
            }
            modal.show();
        }
    };

    const handleDeleteClick = (id) => {
        if (window.confirm('¿Seguro que deseas eliminar esta tarea?')) {
            axios.delete(`/api/tareas/${id}`)
                .then(() => {
                    setTasks(tasks.filter(task => task.id !== id));
                    setAlert('La tarea fue eliminada correctamente.');
                    setTimeout(() => setAlert(''), 2000);
                });
        }
    };

    function formatFecha(fecha) {
    if (!fecha) return '';
    return fecha.replace('.000000Z', '').replace('T', ' T');
}

    return (
        <div>
            <h2>Filtrado</h2>
            {alert && <div className="alert alert-success">{alert}</div>}
            {/* Ordenar tareas */}
            <div className='mb-1'>
                <span className="fw-bold">Ordenar tareas por:</span>
            </div>
            <div className="mb-3 d-flex gap-2">
                <select className="form-select w-auto" value={orderBy} onChange={e => setOrderBy(e.target.value)}>
                    <option value="created_at">Fecha de creación</option>
                    <option value="completed_at">Fecha de completado</option>
                </select>
                <select className="form-select w-auto" value={orderDir} onChange={e => setOrderDir(e.target.value)}>
                    <option value="asc">Más antigua primero</option>
                    <option value="desc">Más reciente primero</option>
                </select>
            </div>
            {/* Filtrar tareas por estado */}
            <div className='mb-1'>
                <span className="fw-bold">Filtrar tareas por estado:</span>
            </div>
            <div className="mb-3">
                <select className="form-select w-auto" value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="Todas">Todas</option>
                    <option value="Sin iniciar">Sin iniciar</option>
                    <option value="En Proceso">En Proceso</option>
                    <option value="Completada">Completada</option>
                    <option value="Cancelada">Cancelada</option>
                </select>
            </div>
            <button className="btn btn-success mb-3" onClick={handleAddClick}>
                Agregar Tarea
            </button>
            <TaskForm onTaskAdded={handleTaskAdded} editTask={editTask} />
            <ul className="list-group">
                {sortedTasks.map(task => (
                    <li key={task.id} className="list-group-item">
                        <strong>{task.nombretarea}</strong>
                        <br />
                        <small>{task.descripciontarea}</small>
                        <br />
                        <br />
                        <small>Creada: {formatFecha(task.created_at)}</small>
                        <br />
                        <small>Fecha de la tarea: {task.fechatarea}</small>
                        <br />
                        <span className="me-2">Estado:</span>
                        <select
                            className="form-select form-select-sm d-inline w-auto"
                            value={task.estadotarea}
                            onChange={e => {
                                const nuevoEstado = e.target.value;
                                axios.put(`/api/tareas/${task.id}`, { ...task, estadotarea: nuevoEstado })
                                    .then(() => {
                                        setTasks(tasks.map(t =>
                                            t.id === task.id ? { ...t, estadotarea: nuevoEstado } : t
                                        ));
                                    });
                            }}
                        >
                            <option>Sin iniciar</option>
                            <option>En Proceso</option>
                            <option>Completada</option>
                            <option>Cancelada</option>
                        </select>
                        <button className="btn btn-primary btn-sm mt-2 ms-2" onClick={() => handleEditClick(task)}>
                            Editar
                        </button>
                        <button className="btn btn-danger btn-sm mt-2 ms-2" onClick={() => handleDeleteClick(task.id)}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TaskList;
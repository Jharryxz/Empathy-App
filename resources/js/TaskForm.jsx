import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskForm({ onTaskAdded, editTask }) {
    const [form, setForm] = useState({
        nombretarea: '',
        descripciontarea: '',
        fechatarea: '',
        estadotarea: 'Sin iniciar'
    });

    useEffect(() => {
        if (editTask) {
            setForm({
                nombretarea: editTask.nombretarea,
                descripciontarea: editTask.descripciontarea,
                fechatarea: editTask.fechatarea,
                estadotarea: editTask.estadotarea
            });
        } else {
            setForm({
                nombretarea: '',
                descripciontarea: '',
                fechatarea: '',
                estadotarea: 'Sin iniciar'
            });
        }
    }, [editTask]);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (editTask) {
            axios.put(`/api/tareas/${editTask.id}`, form)
                .then(() => window.location.reload());
        } else {
            axios.post('/api/tareas', form)
                .then(res => {
                    onTaskAdded(res.data);
                    setForm({
                        nombretarea: '',
                        descripciontarea: '',
                        fechatarea: '',
                        estadotarea: 'Sin iniciar'
                    });
                    document.getElementById('closeModalBtn').click();
                });
        }
    };

    return (
        <div className="modal fade" id="taskModal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title">{editTask ? 'Editar Tarea' : 'Agregar Tarea'}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeModalBtn"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control mb-2" name="nombretarea" placeholder="Nombre" value={form.nombretarea} onChange={handleChange} required />
                            <textarea className="form-control mb-2" name="descripciontarea" placeholder="Descripción" value={form.descripciontarea} onChange={handleChange} />
                            <input type="date" className="form-control mb-2" name="fechatarea" value={form.fechatarea} onChange={handleChange} required />
                            <select className="form-control mb-2" name="estadotarea" value={form.estadotarea} onChange={handleChange}>
                                <option>Sin iniciar</option>
                                <option>En Proceso</option>
                                <option>Completada</option>
                                <option>Cancelada</option>
                            </select>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">{editTask ? 'Actualizar' : 'Guardar'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TaskForm;
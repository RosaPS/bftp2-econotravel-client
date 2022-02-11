import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';




const FormAdd = () => {

    const {register, errors, handleSubmit} = useForm();

    const [entradas, setentradas] = useState([]);

    const procesarFormulario = (data, e) => {
        console.log(data);
        setentradas([
            ...entradas,
            data
        ])
        // limpiar campos
        e.target.reset();
    }

    return (
        <Fragment>
            <h1>FORMULARIO</h1>
            <form onSubmit={handleSubmit(procesarFormulario)}>
                <input
                    name="name"
                    ref={
                        register({
                            required: {value:true, message: 'Ingrese título'}
                        })
                    }
                    className="form-control my-2"
                    placeholder="Ingrese título"
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.name?.message}
                </span>



                <input
                    name="imgUrl"
                    ref={
                        register({
                            required: {value:true, message: 'Ingrese Url Imagen'}
                        })
                    }
                    className="form-control my-2"
                    placeholder="Ingrese Url Imagen"
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.imgUrl?.message}
                </span>




                <input
                    name="time"
                    ref={
                        register({
                            required: {value:true, message: 'Ingrese duración'}
                        })
                    }
                    className="form-control my-2"
                    placeholder="Ingrese duración"
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.time?.message}
                </span>






                <input
                    name="price"
                    ref={
                        register({
                            required: {value:true, message: 'Ingrese precio'}
                        })
                    }
                    className="form-control my-2"
                    placeholder="Ingrese precio"
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.price?.message}
                </span>







                <input
                    name="descripcion"
                    ref={
                        register({
                            required: {value:true, message: 'Ingrese descripción'}
                        })
                    }
                    className="form-control my-2"
                    placeholder="Ingrese descripción"
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.descripcion?.message}
                </span>




                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Agregar
                </button>
            </form>
            <ul className="mt-2">
                {
                    entradas.map((item, index) =>
                        <li key={index}>
                            {item.titulo} - {item.descripcion}
                        </li>
                    )
                }
            </ul>
        </Fragment>
    );
}

export default FormAdd;
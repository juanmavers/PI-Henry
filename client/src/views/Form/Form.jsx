import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../redux/actions";
import { useState, useEffect } from "react";
import axios from "axios";
import style from "./Form.module.css"

const Form = () => {
    const dispatch = useDispatch();
    const { types } = useSelector(state => state);

    const [selectedTypes, setSelectedTypes] = useState([]);

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch])

    const [form, setForm] = useState({
        name: "",
        image: "",
        life: "",
        attack: "",
        defense: "",
        speed: "",
        weight: "",
        height: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        image: "",
        life: "",
        attack: "",
        defense: "",
        speed: "",
        weight: "",
        height: ""
    });

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({ ...form, [property]: value });
        validate({ ...form, [property]: value });

    }

    const validate = (form) => {
        let newErrors = errors;
        if (/^[a-z ,.'-]+$/i.test(form.name)) {
            newErrors = { ...newErrors, name: "" }
        } else {
            newErrors = { ...newErrors, name: "Hay un error en el nombre" };
        }
        if (/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.test(form.image)) {
            newErrors = { ...newErrors, image: "" }
        } else {
            newErrors = { ...newErrors, image: "Hay un error en la imagen" };
        }
        if (/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.life)) {
            newErrors = { ...newErrors, life: "" }
        } else {
            newErrors = { ...newErrors, life: "el campo debe ser numérico, utilizando enteros de 0 a 100" }
        }
        if (/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.attack)) {
            newErrors = { ...newErrors, attack: "" }
        } else {
            newErrors = { ...newErrors, attack: "el campo debe ser numérico, utilizando enteros de 0 a 100" }
        }
        if (/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.defense)) {
            newErrors = { ...newErrors, defense: "" }
        } else {
            newErrors = { ...newErrors, defense: "el campo debe ser numérico, utilizando enteros de 0 a 100" }
        }
        if (/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.speed)) {
            newErrors = { ...newErrors, speed: "" }
        } else {
            newErrors = { ...newErrors, speed: "el campo debe ser numérico, utilizando enteros de 0 a 100" }
        }
        if (/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.weight)) {
            newErrors = { ...newErrors, weight: "" }
        } else {
            newErrors = { ...newErrors, weight: "el campo debe ser numérico, utilizando enteros de 0 a 100" }
        }
        if (/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.height)) {
            newErrors = { ...newErrors, height: "" }
        } else {
            newErrors = { ...newErrors, height: "el campo debe ser numérico, utilizando enteros de 0 a 100" }
        }
        setErrors(newErrors);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3001/pokemons", { ...form, types: selectedTypes })
            .then(res => alert("Pokemon created!"))
            .catch(err => alert(err))
    }

    return (
        <form className={style.form} onSubmit={submitHandler}>
            <div>
                <label>Name</label>
                <input type="text" value={form.name} onChange={changeHandler} name="name" />
                <span>{errors.name}</span>
            </div>
            <div>
                <label>Image</label>
                <input type="text" value={form.image} onChange={changeHandler} name="image" />
                <span>{errors.image}</span>
            </div>

            <div>
                <label>Life</label>
                <input type="text" value={form.life} onChange={changeHandler} name="life" />
                <span>{errors.life}</span>
            </div>

            <div>
                <label>Attack</label>
                <input type="text" value={form.attack} onChange={changeHandler} name="attack" />
                <span>{errors.attack}</span>
            </div>

            <div>
                <label>Defense</label>
                <input type="text" value={form.defense} onChange={changeHandler} name="defense" />
                <span>{errors.defense}</span>
            </div>

            <div>
                <label>Speed</label>
                <input type="text" value={form.speed} onChange={changeHandler} name="speed" />
                <span>{errors.speed}</span>
            </div>

            <div>
                <label>Weight</label>
                <input type="text" value={form.weight} onChange={changeHandler} name="weight" />
                <span>{errors.weight}</span>
            </div>

            <div>
                <label>Height</label>
                <input type="text" value={form.height} onChange={changeHandler} name="height" />
                <span>{errors.height}</span>
            </div>

            <div className={style.typesContainer}>
                <label>Select types</label>
                <div className={style.types}>
                    {types.map((type) =>
                        <div key={type.id} className={style.type}>
                            <p className={style.typeName}>{type.name}</p>
                            <input type="checkbox" name={`type-${type.id}`}
                                checked={selectedTypes.some(t => t.id === type.id)}
                                onChange={(e) => {
                                    if (selectedTypes.some(t => t.id === type.id)) {
                                        setSelectedTypes(selectedTypes.filter(t => t.id !== type.id));
                                    } else if (selectedTypes.length < 2) {
                                        setSelectedTypes([...selectedTypes, type]);
                                    } else {
                                        setSelectedTypes([selectedTypes[1], type]);
                                    }
                                }} />
                        </div>
                    )}
                </div>
            </div>

            <button className={style.button} type="submit" disabled={
                form.name === "" ||
                errors.name !== "" ||
                errors.image !== "" ||
                errors.life !== "" ||
                errors.attack !== "" ||
                errors.defense !== "" ||
                errors.speed !== "" ||
                errors.weight !== "" ||
                errors.height !== "" ||
                selectedTypes.length === 0
            }>SUBMIT</button>
        </form>
    )
}

export default Form;
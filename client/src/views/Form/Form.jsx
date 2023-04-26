import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../redux/actions";
import { useState, useEffect } from "react";
import axios from "axios";
import style from "./Form.module.css"

const Form = () => {
    const dispatch = useDispatch();
    const { types } = useSelector(state => state);

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch])

    console.log("types");
    console.log(types);

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
        validate({...form, [property]: value });
        
    }
    
    const validate = (form)=>{
    if(/^[a-z ,.'-]+$/i.test(form.name)){
        setErrors({...errors, name:""})
    } else {
        setErrors({...errors, name:"Hay un error en el nombre"});
    }
    if(/^[a-z ,.'-]+$/i.test(form.image)){
        setErrors({...errors, image:""})
    } else {
        setErrors({...errors, image:"Hay un error en la imagen"});
    }
    if(/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.life)){
        setErrors({...errors, life:""})
    } else {
        setErrors({...errors, life:"el campo debe ser numérico, utilizando enteros de 0 a 100"})
    }
    if(/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.attack)){
        setErrors({...errors, attack:""})
    } else {
        setErrors({...errors, attack:"el campo debe ser numérico, utilizando enteros de 0 a 100"})
    }
    if(/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.defense)){
        setErrors({...errors, defense:""})
    } else {
        setErrors({...errors, defense:"el campo debe ser numérico, utilizando enteros de 0 a 100"})
    }
    if(/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.speed)){
        setErrors({...errors, speed:""})
    } else {
        setErrors({...errors, speed:"el campo debe ser numérico, utilizando enteros de 0 a 100"})
    }
    if(/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.weight)){
        setErrors({...errors, weight:""})
    } else {
        setErrors({...errors, weight:"el campo debe ser numérico, utilizando enteros de 0 a 100"})
    }
    if(/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.height)){
        setErrors({...errors, height:""})
    } else {
        setErrors({...errors, height:"el campo debe ser numérico, utilizando enteros de 0 a 100"})
    }
}

const submitHandler = (event)=>{
    event.preventDefault();
    console.log("types!!!");
    console.log(types);
    console.log(types.slice(0, 2));
    axios.post("http://localhost:3001/pokemons", {...form, types: types.slice(0, 2)})
    .then(res=>alert("Pokemon created!"))
    .catch(err=>alert(err))
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

            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default Form;
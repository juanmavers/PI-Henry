import { useState } from "react";
import axios from "axios";

const Form = () => {

    const [form, setForm] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        weight: "",
        height: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        weight: "",
        height: ""
    });
    
    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        
        validate({...form, [property]: value });
        
        setForm({ ...form, [property]: value });
    }
    
    const validate = (form)=>{
    if(/^[a-z ,.'-]+$/i.test(form.name)){
        setErrors({...errors, name:""})
    } else {
        setErrors({...errors, name:"Hay un error en el nombre"});
    }
    if(/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.hp)){
        setErrors({...errors, hp:""})
    } else {
        setErrors({...errors, hp:"el campo debe ser numérico, utilizando enteros de 0 a 100"})
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
    axios.post("http://localhost:3001/pokemons", form)
    .then(res=>alert(res))
    .catch(err=>alert(err))
}
    
return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Name</label>
                <input type="text" value={form.name} onChange={changeHandler} name="name" />
                {errors.email && <span>{errors.name}</span>}
            </div>

            <div>
                <label>Hp</label>
                <input type="text" value={form.hp} onChange={changeHandler} name="hp" />
                <span>{errors.hp}</span>
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
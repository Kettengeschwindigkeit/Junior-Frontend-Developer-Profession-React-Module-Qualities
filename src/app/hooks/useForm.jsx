import { useState } from "react";

const useForm = (initialState = {}, onSubmit) => {
    const [form, setForm] = useState(initialState);
    const handleChange = (target) => {
        console.log(target);
        setForm((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };
    const handeleSubmit = (e) => {
        e.preventDefault();
        onSubmit?.(form);
    };
    return {form, handleChange, handeleSubmit}
};

export default useForm;

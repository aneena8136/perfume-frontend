"use client"

import React,{useState} from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from './SignIn.module.css'

export default function Register () {
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);

    const router = useRouter();
   

    const handleChange = (e:any) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});

    };
    const handleSubmit = async (e:any) =>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/api/auth/register', formData);
            alert('registration successfull')
            router.push('/login');
        }catch(err:any){
            setError(err.response?.data?.msg || 'Registartion failed ');
        }
    };
return(
    <div className={styles.container}>
       
            <div className={styles.background_image}>
            <div className={styles.card}> 
        
        <h2 className={styles.heading}>Register</h2>
        <form onSubmit={handleSubmit}>
        <div className={styles.input_feild_wrapper}>
        <p className={styles.in_name}>Name</p>
        <input type="text" placeholder="name" className={styles.input_field} name="name" value={formData.name} onChange={handleChange}/>
        <br/>
        <p className={styles.in_name}>Email</p>

        <input type="email" placeholder="email" name="email"  className={styles.input_field}  value={formData.email} onChange={handleChange}/>
        <br/>
        <p className={styles.in_name}>Password</p>
        <div className={styles.password_field}>
        <input type="password" placeholder="password" name="password" className={styles.input_field} value={formData.password} onChange={handleChange}/>
        </div>
        </div>

    <button type="submit" className={styles.sign_up_button}>Register</button>

        </form>
        <p className={styles.text}>Already have an account <a href="/login" className={styles.login}>login</a></p>
        </div>
        </div>
        </div>
    
)
}
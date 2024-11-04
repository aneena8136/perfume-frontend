"use client"

import React, {useState} from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";


export default function Login(){

    const[formData, setFormData] = useState({email:'', password:'',});
    const[error, setError] = useState(null);
    const router= useRouter();

    const handleChange = (e:any) => {
        const {name,value} = e.target;
        setFormData({...formData, [name]:value});

    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/api/auth/login', formData);
            localStorage.setItem('token', response.data.token);
            router.push('/dashboard');
        }catch(err:any){
            setError(err.response?.data?.msg || 'login failed');
        }
    };

    return(
        <div className={styles.body}>
            <div className={styles.background_image}>
                <div className={styles.card}>
                <h2 className={styles.heading}>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                
            <div className={styles.input_feild_wrapper}>
            <p className={styles.in_name}>Email</p>
                <input type="email" placeholder="email" className={styles.input_field} name="email" value={formData.email} onChange={handleChange} />
                <p className={styles.in_name}>Password</p>

                <input type="password" placeholder="password" name="password" className={styles.input_field} value={formData.password} onChange={handleChange}/>
                <button type="submit" className={styles.sign_up_button}>Login</button>
                </div>
            </form>
            </div>
            </div>
        </div>
    )
}
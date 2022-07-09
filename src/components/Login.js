import React from 'react';
import logo from '../img/greenLogo.png'
import lock from '../img/lock.png'
import Swal from 'sweetalert2'
import userLogo from '../img/user.png'
import '../App.css';
import { Link } from "react-router-dom"
//importar servicios
import { apiUrl } from '../services/apirest'
//axios
import axios from 'axios'


const Login = () => {

    const showAdminAlert = () => {
        Swal.fire(
            'Allow',
            'Sesión iniciada ',
            'success'
        )
    }

    return (
        <div class="bg-proyect-green h-screen overflow-hidden flex items-center justify-center">
            <div class="bg-proyect-green lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
                <div class="bg-green-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
                    <img width="56" height="56" viewBox="0 0 24 24" fill="#FFF" src={logo} alt='logo' />
                </div>
                <form class="p-16 md:p-24 w-full" >

                    <div class="flex items-center text-lg mb-6 pl-auto">
                        <img src={userLogo} alt='logo' class="absolute ml-3" viewBox="0 0 24 24" width="24" />
                        <input type="text" name="usuario" class="rounded-lg bg-proyect-green pl-12 py-2 md:py-4 
                                focus:outline-none w-52 placeholder-white text-white text-2xl" placeholder="Username"
                        />
                    </div>


                    <div class="flex items-center text-lg mb-6 pl-auto">
                        <img src={lock} alt='logo' class="absolute ml-3" viewBox="0 0 24 24" width="24" />
                        <input type="password" name="password" class="rounded-lg bg-proyect-green pl-12 py-2 md:py-4 
                                focus:outline-none w-52 placeholder-white text-white text-2xl" placeholder="Password"
                        />
                    </div>
                    <button class="bg-white p-2 md:p-4 text-proyect-green w-full 
                            text-2xl rounded-lg font-sans font-bold" onClick={()=> showAdminAlert()}>
                        <Link to="/Admin">Iniciar Sesión</Link>
                    </button>
                </form>
                <div class="pl-2 pb-2">
                    <button class="bg-orange-500 hover:bg-orange-700 text-white 
                            font-bold py-2 px-4 rounded-full"><Link to="/" >Regresar</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Login


import React from 'react';
import '../App.css';
import { Link } from "react-router-dom"
import logo from '../img/mainLogo.png'
import logo2 from '../img/greenLogo.png'
import question from '../img/question.png'
import Swal from 'sweetalert2'
import lobito from '../img/lobito.ico'
import cris from '../img/cris.ico'
import dav from '../img/david.ico'
import git from '../img/github.png'
import gmail from '../img/gmail.png'
import hm from '../img/hm.png'
import clock from '../img/clock.png'
import calendar from '../img/calendar.png'
import palette from '../img/palette.png'

const Admin = () => {

    const showAdminAlert = () => {
        Swal.fire(
            'Sesion cerrada',
            'Sistema',
            'success'
        )
    }

    return (

        /*Page for promotional information and admin access*/
        <div class="snap-y snap-mandatory h-screen w-full overflow-auto">

            <div id="principal" class="snap-start h-screen w-full">

                <div class="pt-2 pl-2">
                    <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => showAdminAlert()}><Link to="/login">Cerrar sesión</Link></button>
                </div>

                <div className='pl-10 pt-10 flex flex-row'>
                    <p className='text-6xl text-white font-bold'>ScheduleUrDay</p>
                    <img src={logo} className='w-16 h-16' alt='backgroud pic'></img>
                </div>

                <div class="flex items-center justify-center space-x-10">
                    <div class="pt-20 space-x-4 flex">

                        <div class="max-w-sm bg-proyect-green rounded-lg border border-proyect-green shadow-md">
                            <p class="flex items-center justify-center pt-2">
                                <img class="rounded-t-lg w-24 h-24" src={question} alt="Questions pic" />
                            </p>
                            <div class="p-5">
                                <p class="mb-3 font-normal text-white text-2xl">
                                    ¿Comó puedo cambiar el diseño?</p>
                                <p class="mb-3 font-normal text-white text-sm">
                                    Ingresa al apartado de notas, en la pagina principal, para poder
                                    adminitrar colores, tamaños y tipos de letras.
                                </p>
                            </div>
                        </div>

                        <div class="max-w-sm bg-gray-500 rounded-lg border border-gray-500 shadow-md">
                            <p class="flex items-center justify-center pt-2">
                                <img class="rounded-t-lg w-24 h-24" src={question} alt="Questions pic" />
                            </p>
                            <div class="p-5">
                                <p class="mb-3 font-normal text-white text-2xl">
                                    ¿Para que sirven lo modulos en las?</p>
                                <p class="mb-3 font-normal text-white text-sm">
                                    Los modulos nos ayudan a llevar un mejor control de la notas
                                    se pueden administrar las notas en cada modulo a necesidad.
                                </p>
                            </div>
                        </div>

                        <div class="max-w-sm bg-proyect-green rounded-lg border border-proyect-green shadow-md">
                            <p class="flex items-center justify-center pt-2">
                                <img class="rounded-t-lg w-24 h-24" src={question} alt="Questions pic" />
                            </p>
                            <div class="p-5">
                                <p class="mb-3 font-normal text-white text-2xl">
                                    ¿En la parte del calendario como puedo administrar los eventos?</p>
                                <p class="mb-3 font-normal text-white text-sm">
                                    El calendario tiene la opcion de poder elegir por fecha, lo cual abria un panel
                                    para que podamos poner los datos y setear un evento.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="snap-start h-screen w-full bg-green-100">

                <div class="pt-10 pl-16">
                    <img class="w-32 h-28 py-2 px-4" src={logo2} alt="Github Icon" />
                </div>

                <div class="flex items-center justify-center space-x-10">
                    <div class="pt-20 space-x-4 flex">

                        <div class="max-w-sm rounded overflow-hidden shadow-2xl flex">
                            <img class="w-48 h-48 p-4" src={palette} alt="Sunset in the mountains" />
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Personaliza tu panel de actividades</div>
                                <p class="text-gray-700 text-base">
                                    Se capaz de modificar las opciones en tu panel de notas para poder manejarlas de una mejor manera
                                </p>
                            </div>
                        </div>

                        <div class="max-w-sm rounded overflow-hidden shadow-2xl flex">
                            <img class="w-48 h-48 p-2" src={calendar} alt="Sunset in the mountains" />
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Organiza tus fechas</div>
                                <p class="text-gray-700 text-base">
                                    Programa tus eventos o actividades importantes en el calendario, lleva un control de tus prioridades.
                                </p>
                            </div>
                        </div>

                        <div class="max-w-sm rounded overflow-hidden shadow-2xl flex">
                            <img class="w-48 h-48 p-4" src={clock} alt="Sunset in the mountains" />
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Administra tu tiempo</div>
                                <p class="text-gray-700 text-base">
                                    Aprende a manejar tu tiempo de mas comoda para poder llevar un orden en tus actividades diarias.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="snap-start h-screen w-full bg-white">
                <div class="pt-16 pl-44 text-center w-full font-sans text-green-700 flex flex-row">
                    <p class="text-9xl">D</p>
                    <p class="text-4xl pt-16">velopers</p>
                </div>

                <div class="flex items-center justify-center space-x-10">
                    <div class="pt-10 space-x-4 flex">

                        <div class="max-w-sm bg-white rounded-lg ">
                            <div class="w-80 rounded-lg bg-white pt-4">
                                <div class="flex flex-col items-center pb-10">
                                    <img class="mb-3 w-48 h-48 rounded-full shadow-lg border-2 border-green-800" src={lobito} alt="Developer"></img>
                                    <h5 class="mb-1 text-xl font-medium text-green-700 font-bold">Alejandro Ortega</h5>
                                </div>
                            </div>
                        </div>

                        <div class="max-w-sm bg-white rounded-lg">
                            <div class="w-80 rounded-lg bg-white pt-4">
                                <div class="flex flex-col items-center pb-10">
                                    <img class="mb-3 w-48 h-48  rounded-full shadow-lg border-2 border-green-800" src={cris} alt="Developer"></img>
                                    <h5 class="mb-1 text-xl font-medium text-green-700 font-bold">Cristian Hernández</h5>
                                </div>
                            </div>
                        </div>

                        <div class="max-w-sm bg-white rounded-lg">
                            <div class="w-80 rounded-lg bg-white pt-4">
                                <div class="flex flex-col items-center pb-10">
                                    <img class="mb-3 w-48 h-48 rounded-full shadow-lg border-2 border-green-800" src={dav} alt="Developer"></img>
                                    <h5 class="mb-1 text-xl font-medium text-green-700 font-bold">David Moreno</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full h-32 bg-proyect-green flex pt-6">
                    <div class="w-48 flex flex-col pl-32">
                        <img class="w-10 h-10" src={git} alt="Github Icon" />
                        <img class="w-10 h-10" src={gmail} alt="Gmail Icon" />
                    </div>
                    <div class="w-32 flex flex-col pl-2">
                        <p class="text-2xl text-white font-bold">Contactenos</p>
                        <div class="w-32 flex flex-row">
                            <img class="w-10 h-10" src={hm} alt="Phone" />
                            <div class="w-32 flex flex-col pl-2">
                                <p class="text-sm text-white font-bold">7759-8745</p>
                                <p class="text-sm text-white font-bold">7759-8745</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Admin

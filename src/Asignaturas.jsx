import React from 'react'
import './Asignaturas.css'

export default function Asignaturas() {
  return (
<>
    <div id="botones"class="flex flex-col items-center" >
        <a href="/bbdd-apuntes"><button class=""id="nombres-a">Bases de datos</button></a><br/>
        <a href="/programacion-apuntes"><button class=""id="nombres-a">Programación</button></a><br/>
        <a href="/computacionN-apuntes"><button class=""id="nombres-a">Computacion en la nube</button></a><br/>
        <a href="/ingles-apuntes"><button class=""id="nombres-a">Inglés</button></a><br/>
        <a href="/sistemas-apuntes"><button class=""id="nombres-a">Sistemas</button></a>

    </div>
</>
  )
}

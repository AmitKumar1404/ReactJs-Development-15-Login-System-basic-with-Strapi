import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes/Route'



export const App = ()=> {   // FAT ARROW ES6 2015
  return (
    <BrowserRouter>
        <Routes>
            {/*array.map(function(currentValue, index, arr), thisValue)*/}
            {
                routes.map((currentValue,index,arr)=>{
                    return <Route key={index} path={currentValue.path} element={currentValue.element} />
                })
            }
        </Routes>
    </BrowserRouter>
)
}

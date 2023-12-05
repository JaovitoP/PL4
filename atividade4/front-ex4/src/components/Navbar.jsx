import React from "react"

import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="bg-orange-400 flex justify-around">
      <div className="p-5 text-white hover:text-gray-200">
        <Link to="/">Voltar à tela Inicial</Link>
      </div>
      <div className="p-5 text-white hover:text-gray-700">
        <Link to="/clientes">Visualizar cadastro de Clientes</Link>
      </div>
    </nav>
  )
}

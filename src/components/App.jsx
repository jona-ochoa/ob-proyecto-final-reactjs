import React, { useState, useEffect } from "react";
import TaskList from "./lists/TaskList";
import Settings from "./settings/Settings";

/**
 * Funcion anonima para crear  un componente principal
 * @returns {React.Components} Componente principal de nuestra aplicación
 */
const App = () => {

  const [dark, setDark] = useState(false)
  /**
   * Función para cambiar el useEffect
   */

  useEffect(() => {
    const config = JSON.parse(localStorage.getItem('config'));
    setDark(config.theme)
  }, []);

  /**
   * Funcion para intercambiar la variable de estado ligth <-> dark
   */

  const toogleDark = () => setDark(!dark);

  return (
    <div className={`App ${dark ? "dark" : ""}`} >
      <TaskList />
      <hr style={{marginTop: 20, marginBottom: 20}} />
      <Settings toggleDark={toogleDark} />
    </div>
  );
}

export default App;

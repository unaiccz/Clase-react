import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import "../App.css"
function View() {
  const [ex, setEx] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.7.151:8000/clase/api/api/');
      setEx(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching data from API: ' + error.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://192.168.7.151:8000/clase/api/api/${id}/`);
      setEx((prevEx) => prevEx.filter((item) => item.id !== id));
      Swal.fire(`Item ${id} deleted`);
    } catch (error) {
      Swal.fire('Error deleting item: ' + error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect will only run once after the initial render

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3 className='text-center mb-1 mt-1'>Examenes</h3>
      <hr />
      <div id="lista"className='flex flex-row min-h-screen justify-center items-center'>
      <ul className=''>
        {ex.map((item) => (
          <div key={item.id} className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-10'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{item.id-62}</h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Asignatura: {item.asignature} <br />
              Fecha: {item.date}
            </p>
            <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick={() => handleDelete(item.id)}>
              DELETE
            </button>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default View;



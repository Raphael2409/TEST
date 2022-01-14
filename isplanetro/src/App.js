import React, { useEffect, useState } from 'react';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import './Appcss.css';


function App() {
  const url = 'https://api.le-systeme-solaire.net/rest.php/bodies/';
  const [product, setProduct] = useState()
  useEffect(() => {
      axios.get(url)
          .then(response => {
              setProduct(response.data)
          })
  }, [url])

  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [bodies, setBodies]= React.useState(3)
  const updateSelectVal = (e)=>{
    console.warn(e.target.value)
    setBodies(e.target.value)
  }

  return (
    <div className='test'>

      <p>{}</p>
      <p>Rhobs challenge</p>

      <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} />} label="isPlanet"/>
      <div className='bodies'>
        <Select value={bodies} displayEmpty onChange={updateSelectVal}>
        <MenuItem value="" disabled>Choisie un corps stellaire</MenuItem>
          <MenuItem value={1} >test</MenuItem>
          <MenuItem value={2} >lune</MenuItem>
          <MenuItem value={3} >terre</MenuItem>
          <MenuItem value={4} >mars</MenuItem>
      </Select>
      </div>
      <div className='bodies-info'>
        <p>Infos</p>
      </div>
    </div>
  );
}
export default App;

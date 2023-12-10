import React, {useState} from 'react';
import Tree from './components/tree';
import {default_list_values} from './constant/constant'

function App() {
  let newData=[...default_list_values]
  const[initialData, setInitialData]=useState(newData);
  const onDelete = (id:number) => { //removing
    const updateData = initialData.filter((item) => id !== item.id);
    setInitialData(updateData);
    
  }

  return (
    <div className='container'>
    <ul> 
    {initialData.map((node)=><Tree
    key={node.id}
    id={node.id}
    name={node.name}
    items={node.items}
    onDelete={onDelete}/>
    )}
    </ul>
    </div>
  );
}

export default App;

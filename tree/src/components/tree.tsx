import React, {useState, useContext} from 'react';

export interface Node {
    id: number;
    name: string;
    items?: Node[];
  }

export default function Tree(props:Node):JSX.Element {
    const {
        id,
        name,
        items,
      } = props;

      const [state, setState] = useState(props)
      const[pressedEdit,setEdit]=useState(false);
      const[pressedSave,setSave]=useState(false);
   const handleEdit = () => {
        setEdit(!pressedEdit);
        setSave(!pressedSave);
    }

    const handleSave = () => {
      setEdit(!pressedEdit);
      setSave(!pressedSave);
    }
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>):void=>{
setState({
  ...state,
  name: event.target.value, 
})
    }
 const handleReset=()=>{
setState(props)
 }

 const handleAdd=()=>{
return (
<li>
 ele</li>
)
   }
   const handleRemove=()=>{
    setState(props)
     }

      const treeItems = items?.map((node) => {
        if (node.items !== null) {
          return (
            <Tree 
              id={node.id} 
              key={node.id} 
              name={node.name} 
              items={node.items}  />
          )
        }
      });
    return (
<div>
    <li>
        <div>{ pressedEdit?
            <input value={state.name} onChange={handleChange}/>
            :state.name} 
            { pressedEdit?
            <button onClick={handleSave}>Save</button>
            :
            <button onClick={handleEdit}>Edit</button>}
            <button onClick={handleRemove}>Remove</button>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReset}>Reset</button>
        </div>
        <ul>
            {treeItems}
        </ul>
    </li>
</div>
    )
}
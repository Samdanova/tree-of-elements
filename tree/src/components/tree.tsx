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
  const newElement: Node = {
    id: Math.floor(Math.random() * 1000),
    name: `New Element`,
  };
  addElement(id, newElement); // Здесь 1 - id родительского элемента, к которому добавляем новый элемент
   }

   const addElement = (parentId: number, newElement: Node) => {
      if (id === parentId) {
        return {
          ...state,  
          items: items ? [...items, newElement] : [newElement],
        };
      }
      if (items){
        return{
          ...state,
          items: addElement(parentId, newElement, items),
        };
      }
    setState(updatedTreeData);
  };



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
import React, {useState, useContext, useEffect} from 'react';
import {default_list_values} from '../constant/constant'

export interface Node {
    id: number;
    name: string;
    items?: Node[];
    onDelete?: (id:number)=>void;
}

export default function Tree(props : Node): JSX.Element {
    const {id, name, items, onDelete} = props;
    // let copyListValues = [...default_list_values];

    //states
    const [nodes, setNodes] = useState(items || [])
    const [stateProps, setState] = useState({id, name, items})
    const [pressedEdit, setEdit] = useState(false);
    const [pressedSave, setSave] = useState(false);

    //functions
    const handleEdit = () => { //editing
        setEdit(!pressedEdit);
        setSave(!pressedSave);
    }

    const handleSave = () => { //saving changes
        setEdit(!pressedEdit);
        setSave(!pressedSave);
    }
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) : void => { //catch changes
        setState({
            ...stateProps,
            name: event.target.value
        })
    }
    const handleReset = () => { //reset all changes
        setState({id,name,items})
    }

    const handleAdd = () => { //adding element
        const newElement: Node = {
            id: Math.floor(Math.random() * 1000),
            name: `New Element`
        };
        setNodes([
            ...nodes,
            newElement
        ])
    }

    

    const handleRemove = (id:number) => { //removing
      const filteredItems = nodes.filter((item) => id !== item.id);
      setNodes(filteredItems);
      
    }
    //painting tree elements
  const treeItems = nodes
        ?.map((node) =>  {
            if (node.items !== null) {
                return (< Tree id = {
                    node.id
                }
                key = {
                    node.id
                }
                name = {
                    node.name
                }
                items = {
                    node.items
                } 
                onDelete={handleRemove}/>)
            } 
        });
    return (
        <div><li><div> {
            pressedEdit
                ? <input value = {
                    stateProps.name
                }
                onChange = {
                    handleChange
                } />
                : stateProps.name
        } {
            pressedEdit
                ? <button onClick = {
                    handleSave
                } > Save</button>
                : <button onClick = {
                    handleEdit
                } > Edit</button>
        } < button onClick = {()=>onDelete && onDelete(id)}>Remove</button> < button onClick = {
            handleAdd
        } > Add</button> < button onClick = {
            handleReset
        } > Reset</button></div><ul> {
            treeItems
        }</ul></li></div>
    )
}
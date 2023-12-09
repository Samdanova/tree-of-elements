import Tree from './components/tree';
import {default_list_values} from './constant/constant'

function App() {
  return (
    <div>
    <ul> 
    {default_list_values.map((node)=><Tree
    key={node.id}
    id={node.id}
    name={node.name}
    items={node.items}/>
    )}
    </ul>
    </div>
  );
}

export default App;

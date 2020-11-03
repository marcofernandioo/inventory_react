import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default function NameList(props) {
    const [name, setName] = useState('');
    const [nameList, setNameList] = useState([]);

    const onChangeName = (e) => {
        setName(e.target.value); //Lupa yang ini.
    }
    const onAddName = () => {
        const newList = [name, ...nameList];
        // newList.push(name);
        setNameList(newList);
        setName('');
    }

    const onDeleteName = (index) => {
        const newList = [...nameList];
        newList.splice(index, 1);
        setNameList(newList);
    }

    return (
        <div>
            <div> 
                {/* <input type = 'text' placeholder = 'input name' value = {name} onChange = {onChangeName} /> */}
                <form>
                    <TextField label = "Outlined" variant = "outlined" placeholde = "input name" value = {name} onChange = {onChangeName}></TextField>
                    <Button variant = 'contained' color = 'primary' onClick = {onAddName} size = "large">Add Name</Button>
                </form>
                {/* <input type = 'button' value = 'add name' onClick = {onAddName}/> */}
                
            </div>
            <h1>Name List: </h1>
            {
                nameList.map((item, index) => {
                    return (
                        <>
                            <div style = {{display: 'flex', flexDirection: 'row'}}>
                                <h2>{item}</h2>
                                <Button variant = "outlined" color = "secondary" onClick = {() => onDeleteName(index)}>Delete</Button>
                            </div> 
                        </>
                    )
                })
            }
        </div>
    )

}
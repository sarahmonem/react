import { useState } from 'react';
import deleteicon from './delete.png';
import done from './done.png'
function Tasklists(props) {

    const [State, setSate] = useState(props.state);
    const [taskname , settaskname] = useState(props.taskname);

    function finishtask() {
    

if(State == false){
    setSate("true")
    settaskname(taskname +"Done")
    console.log(State);
    
}}
const statedone = <p className="text-decoration-line-through">{taskname} </p >
const statenotdone = <p>{taskname}</p>



    return (


        <li className="d-flex justify-content-between">
            <div className="taskname" >
            {State ? statedone : statenotdone }
              
            </div>
            <div className="taskstate d-flex ">
                <div className="finishTask p-3">
                    <img src={done} width="20px" onClick={finishtask}/>
                </div>
                <div className="deletTask p-3">
                <a href="" onClick={(e) => {
                        e.preventDefault()
                        props.removetask(props.id)
                    }
                    } >
                <img src={deleteicon} width="20px" />
                </a>
                 
                </div>
            </div>


        </li>






    );

}

export default Tasklists;
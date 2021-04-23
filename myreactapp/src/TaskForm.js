import { useState } from 'react';


function TaskForm(props) {
    const [Taskname, setTaskname] = useState('');

    function handlesubmit(e) {
        e.preventDefault();
        props.addtask(Taskname);
        setTaskname("");
    
    }
    function handlechange(e) {
        setTaskname(e.target.value);
    
    }
    
    return (

       


            <div className="taskform d-flex justify-content-center">
                <form onSubmit={handlesubmit}>

                    <input type="text"
                        placeholder="enter task"
                        onChange={handlechange}
                        value={Taskname}
                    />
                    <button type="submit" >Add New Task</button>
                </form>

            </div>
           


    









    );
}

export default TaskForm;
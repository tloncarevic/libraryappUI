import { deleteUser } from "../features/apiCalls"

export default function UsersView ({allUsers, onEdit}) {

    return (
        <div>
            {allUsers.map(user=> (
                <div key={user.id}>
                    <p> 
                        {user.id}: {user.firstName} {user.lastName} ({user.email})
                        &nbsp;
                        <button onClick={()=>{
                            console.log(user.id)
                            onEdit(user.id)
                        }}>Edit</button>
                        &nbsp;
                        <button onClick={()=>{
                            deleteUser(user.id);
                        }}>Delete</button>
                    </p>
                </div>
            ))}
        </div>
    )
}   

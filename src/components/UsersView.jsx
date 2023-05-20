import { deleteUser } from "../features/apiCalls"

export default function UsersView ({allUsers, onEdit}) {

    return (
        <div>
            {allUsers.map(user=> (
                <div key={user.user_id}>
                    <p> 
                        {user.user_id}: {user.firstName} {user.lastName} ({user.email})
                        &nbsp;
                        <button onClick={()=>{
                            console.log(user.user_id)
                            onEdit(user.user_id)
                        }}>Edit</button>
                        &nbsp;
                        <button onClick={()=>{
                            deleteUser(user.user_id);
                        }}>Delete</button>
                    </p>
                </div>
            ))}
        </div>
    )
}   

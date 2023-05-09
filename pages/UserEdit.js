import { deleteUser } from "../features/apiCalls"

export function UserEdit ({users, onEdit}) {
    return <div>
        {users.map(user=> (
            <div key={user.id}>
                <p>
                    {user.id}: {user.firstName} {user.lastName} ({user.email})
                    &nbsp;
                    <button onClick={()=>{
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
}
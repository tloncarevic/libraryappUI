/*

export default function Borrow() {
    const [userOptions, setUserOptions] = useState([]);
    const [bookOptions, setBookOptions] = useState([]);

    useEffect(() => {
        setUserOptions(allUsers.map(user=>{
            console.log(user)
            return { 
              value: user.id,
              label: user.firstName + " " + user.lastName
            }
          })
        )
      }, [allUsers]); 

return (
<>
<h2>
        Borrow Book:
      </h2>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={userOptions[0]}
        placeholder="Select a library user"
        isSearchable={true}
        name="user"
        options={userOptions}
      />
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={bookOptions[0]}//bookOptions
        placeholder="Select a library book"
        isSearchable={true}
        name="user"
        options={userOptions}
      /> 
      <button onClick={async () => {
          await updateUsers({...user});
        }}>Borrow</button>
      

      <h2>
        Return Book:
      </h2>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={userOptions[0]}
        placeholder="Select a library user"
        isSearchable={true}
        name="user"
        options={userOptions}
      /> 
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={bookOptions[0]}//bookOptions
        placeholder="Select a library book"
        isSearchable={true}
        name="user"
        options={userOptions}
      /> 
      <button>Return</button>
</>
);
    }*/

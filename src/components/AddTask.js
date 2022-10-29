export default function AddTask({add}) {
    let description = ""

    function handleChange(event) {
        description = event.target.value
    }
    
    function send() {
        add(initialList => {
            const newTask = {
                id: initialList.length,
                description: description,
                isDone: false
            }
            
            return [...initialList, newTask ]
        })
    }

    function handleClick(event) {
        if (event.key == 'Enter' ) send()
    }

  return (
    <div>
        <input onChange={handleChange} type="text" placeholder="Describe your to do" onKeyUp={handleClick} />
    </div>
  )
}

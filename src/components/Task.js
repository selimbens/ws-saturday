export default function Task({id, description, isDone}) {
  console.log(description)
    return (
    <div>
        <p>{description}</p>
        <input type="checkbox" value={isDone} />
    </div>
  )
}

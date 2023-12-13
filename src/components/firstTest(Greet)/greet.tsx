type GreetProps = {
  name: string
}
const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>Hello Queen!</h1>
      <p>{ props.name}</p>
    </div>
  )
};

export default Greet;

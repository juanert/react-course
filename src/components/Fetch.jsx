import useFetchHook from "../hooks/useFetchHook";

function Fetch(){
    const [data] = useFetchHook("https://jsonplaceholder.typicode.com/todos");

    return (
      <>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </>
    );
}

export default Fetch
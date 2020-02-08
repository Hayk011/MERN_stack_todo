import React from "react";
import "./App.css";
import "materialize-css";
import { listenerCount } from "cluster";
interface Icolection {
  _id: number;
  title: string;
  condidate: boolean;
}

const App = () => {
  const [colection, setColection] = React.useState<Icolection[]>([]);
  React.useEffect(() => {
    fetch("http://localhost:5000/")
      .then(response => response.json())
      .then(data => setColection(data));
  }, []);

  async function sendHandler(id: number) {
    await fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(colection[id])
    }).then(info => console.log(info));
  }

  const changeHandler = (index: number) => {
    const clone = colection;
    console.log(clone);
    console.log("index", index);
    if (clone[index].condidate) {
      clone[index].condidate = false;
      return setColection(clone);
    }
    if (!clone[index].condidate) {
      clone[index].condidate = true;
      return setColection(clone);
    }

  };
  console.log(colection);
  return (
    <div className="container">
      <div className="todo-container">
        {colection.map((item: Icolection, index: number) => (
          <p key={item._id}>
            <label>
              {item.condidate === true ? <input onChange={() => changeHandler(index)} type="checkbox" checked /> :
                <input onChange={() => changeHandler(index)} type="checkbox" />}
              <span>{item.title}</span>
              <input type="hidden" value={item._id} />
            </label>
            <button onClick={() => sendHandler(index)} className="btn primry">Send</button>
          </p>
        ))}
      </div>
    </div>
  );
};
export default App;

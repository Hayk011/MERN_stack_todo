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
  const [check, setCheck] = React.useState<boolean>(false);
  React.useEffect(() => {
    fetch("http://localhost:8000/")
      .then(response => response.json())
      .then(data => setColection(data));
  }, []);

  async function sendHandler(id: number) {
    await fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(colection[id])
    });
  }

  const changeHandler = (index: number) => {
    const clone = colection;
    setCheck(!check);
    if (clone[index].condidate) {
      clone[index].condidate = false;
      return setColection(clone);
    }
    clone[index].condidate = true;
    setColection(clone);
  };
  console.log("colection", colection);
  return (
    <div className="container">
      <div className="todo-container">
        {colection.map((item: Icolection, index: number) => (
          <p key={item._id}>
            <label>
              {item.condidate === true ? (
                <input
                  onChange={() => changeHandler(index)}
                  type="checkbox"
                  checked={true}
                />
              ) : (
                  <input
                    onChange={() => changeHandler(index)}
                    type="checkbox"
                    checked={false}
                  />
                )}
              <span className={item.condidate ? "done" : ""} >{item.title}</span>
              <input type="hidden" value={item._id} />
            </label>
            <button onClick={() => sendHandler(index)} className="btn primry">
              Save
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};
export default App;

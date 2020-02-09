import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Link } from "react-router-dom";
interface IToDo {
    _id: number;
    title: string;
    condidate: boolean;
}
interface Iprops extends RouteComponentProps<{ id: string }> { }
const Edit = (props: Iprops) => {
    const [toDo, setToDo] = React.useState<IToDo>();
    const [value, seetValue] = React.useState("");
    const [update, setUpdate] = React.useState<boolean>(false);
    React.useEffect(() => {
        const id = props.match.params.id || "";
        fetch(`http://localhost:8000/${id}`)
            .then((info) => info.json())
            .then((data) => setToDo(data))
            .catch((err) => console.log(err));
    }, []);
    const sendHandler = async () => {
        if (!value) {
            return;
        }
        setUpdate(!update);
        fetch(`http://localhost:8000/${toDo?._id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ value })
        });
    };
    return (
        <>
            <h1 className="edit-title">Edit ToDo</h1>
            <div className="container" >
                <div className="row">
                    <div className="input-field">
                        <input
                            onChange={(event) => seetValue(event?.target.value)}
                            value={value}
                            type="text"
                            className="validate"
                            name="value" />
                        <label className="active">{toDo?.title}</label>
                    </div>
                </div>
            </div>
            <button onClick={sendHandler} className="btn green"><Link to="/">Save</Link></button>
        </>
    );
};
export default Edit;
import React, {useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('لطفا یک وظیفه وارد کنید');
            return;
        }

        onAdd({ text, day, reminder });

        setText('');
        setDay('');
        setReminder(false);
    };

    return (
        <form className="addd-form" onSubmit= {onSubmit}>
             <div className="form-control">
                <label>Function</label>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    placeholder="Add function"
                />
            </div>
            <div className="form-control">
                <label>Day</label>
                <input
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    type="text"
                    placeholder="Add Day"
                />
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                    type="checkbox"
                />
            </div>
            <input
            type="submit"
            value="submit"
            className="btn btn-block"
            />
        </form>

           
    )
}

export default AddTask

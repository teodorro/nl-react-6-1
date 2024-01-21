import {useState} from "react";
import "../css/main.css";

export default function AddingToolbar({ addClock }) {
  const [name, setName] = useState('');
  const [timezone, setTimezone] = useState('');
  return (
    <>
      <form
        action=""
        className="toolbar-form"
      >
        <div className="name-container">
          <div className="name-label">Название</div>
          <input
            type="text"
            className="name-input"
            placeholder="Type name of the place..."
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="timezone-container">
          <div className="timezone-label">Часовой пояс</div>
          <input
            type="number"
            min={-12}
            max={12}
            className="timezone-input"
            placeholder="Type timezone..."
            value={timezone}
            onChange={e => setTimezone(e.target.value)}
          />
        </div>
        <div className="submit-container">
          <button
            className="button-submit"
            type="submit"
            disabled={name.trim() === '' || timezone === ''}
            onClick={(e) => {
              e.preventDefault();
              addClock(name, timezone)
              setName('');
              setTimezone('');
            }}
          >
            Добавить
          </button>
        </div>
      </form>
    </>
  );
}

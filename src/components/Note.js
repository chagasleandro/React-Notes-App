import { MdDeleteForever } from "react-icons/md";

const Note = () => {
  return (
    <div className="note">
      <span>Hello! This is our first note! Chagas!</span>
      <div className="note-footer">
        <small>11/12/2022</small>
        <MdDeleteForever className="delete-icons" size='1.3em' />
        
      </div>
    </div>
  );
};

export default Note;

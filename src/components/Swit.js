import { dbService } from 'fbase';
import React, { useState } from 'react';

const Swit = ({ switObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newSwit, setNewSwit] = useState(switObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm('Are you sure you want to delete this swit?');
    if (ok) {
      await dbService.doc(`swits/${switObj.id}`).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`swits/${switObj.id}`).update({
      text: newSwit,
    });
    setEditing(false);
  }
  const onChange = (event) => {
    const { target: { value } } = event;
    setNewSwit(value);
  }
  return (
    <li className='swit'>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Edit your swit" value={newSwit} required onChange={onChange}/>
            <input type="submit" value="Update Swit" />
          </form>
          <button type="button" onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <span className='text'>{switObj.text}</span>
          {isOwner && (
            <>
              <button type="button" className="edit"onClick={toggleEditing}>Edit Swit</button>
              <button type="button" className="del" onClick={onDeleteClick}>Delete Swit</button>
            </>
          )}
        </>
      )}
    </li>
  );
};

export default Swit;
import React, { useState, useEffect } from 'react';

function Note() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');

  useEffect(() => {
    loadNotesFromFile();
  }, []);

  const loadNotesFromFile = async () => {
    try {
      const fileHandle = await window.showOpenFilePicker();
      const file = await fileHandle[0].getFile();
      const fileContents = await file.text();
      if (fileContents) {
        setNotes(JSON.parse(fileContents));
      }
    } catch (error) {
      console.error('Error loading notes from file:', error);
    }
  };

  const saveNotesToFile = async () => {
    try {
      const fileHandle = await window.showSaveFilePicker();
      const writable = await fileHandle.createWritable();
      await writable.write(JSON.stringify(notes));
      await writable.close();
    } catch (error) {
      console.error('Error saving notes to file:', error);
    }
  };

  const addNote = () => {
    if (currentNote.trim() !== '') {
      setNotes([...notes, currentNote]);
      setCurrentNote('');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Notes</h1>
      <div className="mb-4">
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-4 py-2"
          placeholder="Enter your note"
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={addNote}
      >
        Add Note
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded ml-2"
        onClick={saveNotesToFile}
      >
        Save Notes
      </button>
      <ul className="mt-6">
        {notes.map((note, index) => (
          <li
            key={index}
            className="border border-gray-300 rounded px-4 py-2 mb-4 flex justify-between items-center"
          >
            <span>{note}</span>
            <button
              className="text-red-500"
              onClick={() => deleteNote(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Note;

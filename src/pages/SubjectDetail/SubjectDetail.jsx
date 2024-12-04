import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { subjects } from "../../data/subjects";
import FileUpload from "../../components/FileUpload/FileUpload";
import FilePreview from "../../components/FilePreview/FilePreview";
import "./SubjectDetail.css";

function SubjectDetail() {
  const { id } = useParams();
  const subject = subjects.find((discipline) => discipline.id === id);
  const [newNote, setNewNote] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [notes, setNotes] = useState(subject ? subject.notes : []);

  useEffect(() => {
    if (subject) {
      setNotes(subject.notes); // Atualiza as notas quando a disciplina for carregada
    }
  }, [subject]);

  if (!subject) {
    return <div className="subject-detail">Disciplina não encontrada</div>;
  }

  const handleAddNote = (e) => {
    e.preventDefault();
    if (newNote.trim()) {
      const noteId = uuidv4();
      const note = {
        id: noteId,
        idSubject: id,
        content: newNote,
        date: new Date().toLocaleDateString(),
        file: selectedFile,
      };

      // Atualiza o estado de notas
      setNotes((prevNotes) => [...prevNotes, note]);
      saveNoteStorage();

      setNewNote("");
      setSelectedFile(null);
    }
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleDeleteNote = (noteId) => {
    // Remove a nota do estado de notas
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));

    // Se a nota tiver um arquivo associado, exclua-o do armazenamento de arquivos
    const note = notes.find((note) => note.id === noteId);
    if (note && note.file) {
      fileStorage.delete(noteId);
    }
  };

  const handleDownloadFile = (noteId) => {
    const file = fileStorage.get(noteId);
    if (file) {
      const link = document.createElement("a");
      link.href = file.data;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <div className="subject-detail">
        <h1>{subject.name}</h1>

        <div className="subject-info">
          <p>
            <strong>Professor:</strong> {subject.professor}
          </p>
          <p>
            <strong>Descrição:</strong> {subject.description}
          </p>
        </div>

        <div className="notes-section">
          <h2>
            <span>Notas de Aula</span>
            {notes.length > 0 && <span className="notes-count">({notes.length})</span>}
          </h2>

          <form onSubmit={handleAddNote} className="add-note-form">
            <textarea value={newNote} onChange={(e) => setNewNote(e.target.value)} placeholder="Digite sua nota de aula..." />

            <div className="form-actions">
              <FileUpload onFileSelect={handleFileSelect} />
              <button type="submit">Adicionar Nota</button>
            </div>

            {selectedFile && <FilePreview file={selectedFile} onRemove={handleRemoveFile} />}
          </form>

          <div className="notes-list">
            {notes.length === 0 ? (
              <div className="empty-notes">
                <p>Nenhuma nota adicionada ainda</p>
                <p>Comece adicionando sua primeira nota!</p>
              </div>
            ) : (
              notes.map((note) => (
                <div key={note.id} className="note-card">
                  <p className="note-content">{note.content}</p>
                  {note.file && (
                    <div className="note-file">
                      <FilePreview file={note.file} onRemove={() => {}} />
                      <div className="file-actions">
                        <button onClick={() => handleDownloadFile(note.id)} className="download-button">
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="botton-card">
                    <span className="note-date">{note.date}</span>
                    <button className="delete-note" onClick={() => handleDeleteNote(note.id)}>
                      Deletar nota
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SubjectDetail;

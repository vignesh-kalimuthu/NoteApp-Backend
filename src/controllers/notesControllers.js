import Note from "../models/note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({
      title,
      content,
    });
    await newNote.save();
    res.status(201).json({ message: "Note created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}

export function updateNote(req, res) {
  res.status(200).send("Updated a note successfully");
}

export function deleteNote(req, res) {
  res.status(200).send("Deleted a note successfully");
}

import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you Sure?")) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");

    setNotes(data);
  };

  console.log(notes);

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome Back Satyam...">
      <Link to="createnote">
        <Button style={{ marginLeft: "10" }} size="lg">
          Create New Note
        </Button>
      </Link>
      <br /> <br />
      {notes.map((note) => (
        <Accordion key={note._id}>
          <Card style={{ marginTop: "10" }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: "1",
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: "10",
                }}
              >
                <Accordion.Item eventKey="0" variant="link">
                  <Accordion.Header style={{ fontSize: "1.3rem" }}>
                    {note.title}
                  </Accordion.Header>
                </Accordion.Item>
              </span>
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Item eventKey="0">
              {/* <Accordion.Header style={{ padding: "1rem" }}>
                <h6>{note.count}</h6>
              </Accordion.Header> */}

              <Accordion.Body>
                <br />
                <h5 style={{ fontFamily: "Georgia" }}>
                  <Badge
                    style={{
                      padding: "1rem",
                      border: "1px solid #1c1c50",
                      borderRadius: "10px",
                      marginLeft: "20px",
                      variant: "success",
                      fontSize: "0.8rem",
                      color: "whitesmoke",
                    }}
                  >
                    Category - {note.category}
                  </Badge>
                </h5>
                <blockquote className="blockquote mb-0">
                  <p style={{ padding: "0.5rem" }}>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created On - Date
                  </footer>
                </blockquote>
              </Accordion.Body>
            </Accordion.Item>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CreateBookList from "./CreateBookList";
import BookTable from "./BookTable";

function BookList() {
  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setBookId(id);
  };

  return (
    <div className="card-body bg-slate-50">
        <div className="card bg-teal-200">
          <div className="text-center text-4xl font-semibold">Book List</div>
          <div className="text-center">Lots of book</div>
        </div>

        <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <CreateBookList id={bookId} setBookId={setBookId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BookTable getBookId={getBookIdHandler} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BookList;
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
  Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/litera/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faHeading,
  faParagraph,
  faCode,
  faUnderline,
  faBackward,
  faTrash,
  faCopy,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { en } from "../translations/en";
import { vi } from "../translations/vi";

const translations = {
  en,
  vi,
};

const TextManipulator = () => {
  const [text, setText] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isError, setIsError] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  // Text transformation functions remain the same
  const toUpperCase = () => setText(text.toUpperCase());
  const toLowerCase = () => setText(text.toLowerCase());
  const toTitleCase = () => {
    setText(
      text.toLowerCase().replace(/(^|\s)\w/g, (letter) => letter.toUpperCase())
    );
  };
  const toSentenceCase = () => {
    setText(
      text
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s*\w)/g, (letter) => letter.toUpperCase())
    );
  };
  const toCamelCase = () => {
    setText(
      text
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
        .replace(/^./, (str) => str.toLowerCase())
    );
  };
  const toSnakeCase = () => {
    setText(text.toLowerCase().replace(/\s+/g, "_"));
  };
  const reverseText = () => {
    setText(text.split("").reverse().join(""));
  };
  const clearText = () => setText("");

  const copyText = () => {
    if (text.trim() === "") {
      setIsError(true);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        setIsError(false);
      }, 3000);
    } else {
      navigator.clipboard.writeText(text);
      setIsError(false);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;

  return (
    <Container className="my-5">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h2>{t.title}</h2>
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-language">
              <FontAwesomeIcon icon={faGlobe} /> {t.language}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setLanguage("en")}>
                {t.english}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setLanguage("vi")}>
                {t.vietnamese}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3 position-relative">
              <Form.Control
                as="textarea"
                rows={5}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={t.placeholder}
              />
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={copyText}
                className="position-absolute"
                style={{ top: "10px", right: "10px" }}
                title={t.copyButton}
              >
                <FontAwesomeIcon icon={faCopy} />
              </Button>
            </Form.Group>

            {showAlert && (
              <Alert
                variant={isError ? "danger" : "success"}
                onClose={() => {
                  setShowAlert(false);
                  setIsError(false);
                }}
                dismissible
              >
                {isError ? t.copyError : t.copySuccess}
              </Alert>
            )}

            <Row className="mb-3">
              <Col xs={6} md={3} className="mb-2 d-flex flex-column h-100 gx-3">
                <Button
                  variant="primary"
                  onClick={toUpperCase}
                  className="d-flex flex-column h-100 w-100 align-items-center"
                >
                  <FontAwesomeIcon icon={faArrowUp} />
                  {t.uppercase}
                </Button>
              </Col>
              <Col xs={6} md={3} className="mb-2 d-flex flex-column h-100 gx-3">
                <Button
                  variant="primary"
                  onClick={toLowerCase}
                  className="d-flex flex-column h-100 w-100 align-items-center"
                >
                  <FontAwesomeIcon icon={faArrowDown} />
                  {t.lowercase}
                </Button>
              </Col>
              <Col xs={6} md={3} className="mb-2 d-flex flex-column h-100 gx-3">
                <Button
                  variant="primary"
                  onClick={toTitleCase}
                  className="d-flex flex-column h-100 w-100 align-items-center"
                >
                  <FontAwesomeIcon icon={faHeading} />
                  {t.titleCase}
                </Button>
              </Col>
              <Col xs={6} md={3} className="mb-2 d-flex flex-column h-100 gx-3">
                <Button
                  variant="primary"
                  onClick={toSentenceCase}
                  className="d-flex flex-column h-100 w-100 align-items-center"
                >
                  <FontAwesomeIcon icon={faParagraph} />
                  {t.sentenceCase}
                </Button>
              </Col>
              <Col xs={6} md={3} className="mb-2 d-flex flex-column h-100 gx-3">
                <Button
                  variant="primary"
                  onClick={toCamelCase}
                  className="d-flex flex-column h-100 w-100 align-items-center"
                >
                  <FontAwesomeIcon icon={faCode} />
                  {t.camelCase}
                </Button>
              </Col>
              <Col xs={6} md={3} className="mb-2 d-flex flex-column h-100 gx-3">
                <Button
                  variant="primary"
                  onClick={toSnakeCase}
                  className="d-flex flex-column h-100 w-100 align-items-center"
                >
                  <FontAwesomeIcon icon={faUnderline} />
                  {t.snakeCase}
                </Button>
              </Col>
              <Col xs={6} md={3} className="mb-2 d-flex flex-column h-100 gx-3">
                <Button
                  variant="primary"
                  onClick={reverseText}
                  className="d-flex flex-column h-100 w-100 align-items-center"
                >
                  <FontAwesomeIcon icon={faBackward} />
                  {t.reverseText}
                </Button>
              </Col>
              <Col xs={6} md={3} className="mb-2 d-flex flex-column h-100 gx-3">
                <Button
                  variant="danger"
                  onClick={clearText}
                  className="d-flex flex-column h-100 w-100 align-items-center"
                >
                  <FontAwesomeIcon icon={faTrash} />
                  {t.clearText}
                </Button>
              </Col>
            </Row>

            <Card.Footer className="text-muted">
              <Row>
                <Col>
                  {t.words}: {wordCount}
                </Col>
                <Col>
                  {t.characters}: {charCount}
                </Col>
                <Col>
                  {t.charactersNoSpaces}: {text.replace(/\s/g, "").length}
                </Col>
              </Row>
            </Card.Footer>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TextManipulator;

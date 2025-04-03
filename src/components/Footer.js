import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-dark pt-3 pb-1 mt-5">
      <Container>
        <span className="text-center mx-auto d-block">
          &copy; {currentYear}{" "}
          <a
            className="text-dark font-weight-bold text-decoration-none"
            href="https://tungpham42.github.io"
            target="_blank"
            rel="noreferrer"
          >
            Phạm Tùng
          </a>
          {", "}
          <a
            href="https://github.com/tungpham42/text-case"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark text-decoration-none"
          >
            <FontAwesomeIcon icon={faGithub} className="me-1" />
            MIT License
          </a>
        </span>
      </Container>
    </footer>
  );
};

export default Footer;

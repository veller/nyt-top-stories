import React from "react";
import { Container } from "./SectionNav.styles";

function SectionNav({ setQuery }) {
  const sections = ["science", "technology", "health", "politics", "world"];

  return (
    <>
      <Container>
        {sections.map(section => (
          <ul key={section}>
            <li onClick={() => setQuery(section)}>{section}</li>
          </ul>
        ))}
      </Container>
    </>
  );
}

export default SectionNav;

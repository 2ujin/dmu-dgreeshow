import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Text = styled.div`
  b {
    color: #f28542;
  }
`;

const Typewriter = ({ text, delay }: any) => {
  text = "<b>공간</b>에는 <b>힘</b>이 있다";
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <Text dangerouslySetInnerHTML={{ __html: currentText }}></Text>;
};

export default Typewriter;

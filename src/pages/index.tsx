import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #12545f;
  color: #efefef;
  padding: 4px 8px;
`;

const InputText = styled.input`
  border: solid 1px #ccc;
  border-radius: 12px;
  padding: 4px 8px;
`;

function Text({ text }: { text: string }) {
  return <span>{text}</span>;
}

function Loader({ isLoading }: { isLoading: boolean }) {
  return <span>{isLoading ? "Carregando..." : "Carregado!"}</span>;
}

const initialIsLoading = true;
const initialText = "Texto inicial";

const MemoizedText = React.memo(Text);

const numbers = Array.from({ length: 5 }, (_, index) => index);

export default function Index() {
  const [isLoading, setIsLoading] = React.useState(initialIsLoading);
  const [text, setText] = React.useState(initialText);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  React.useEffect(() => {
    if (isLoading === false) {
      setText("Terminou de carregar");
    }
  }, [isLoading]);

  return (
    <div>
      <ul>
        {numbers.map((n) => (
          <li>{n.toString()}</li>
        ))}
      </ul>
      <InputText
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <MemoizedText text={text} />
      <Button>teste</Button>
      <Loader isLoading={isLoading} />
    </div>
  );
}

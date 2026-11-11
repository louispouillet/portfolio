import { Fragment, type ReactNode } from "react";

const TOKEN_PATTERN = /(\*\*[^*]+\*\*|\{\w+\})/;
const INSERT_PATTERN = /^\{(\w+)\}$/;
const HIGHLIGHT_MARKER = "**";

type RichTextProps = {
  text: string;
  highlightClassName: string;
  inserts?: Record<string, ReactNode>;
};

const RichText = ({ text, highlightClassName, inserts }: RichTextProps) => (
  <>
    {text.split(TOKEN_PATTERN).map((part, index) => {
      if (part.startsWith(HIGHLIGHT_MARKER) && part.endsWith(HIGHLIGHT_MARKER)) {
        return (
          <span key={index} className={highlightClassName}>
            {part.slice(HIGHLIGHT_MARKER.length, -HIGHLIGHT_MARKER.length)}
          </span>
        );
      }
      const insertName = INSERT_PATTERN.exec(part)?.[1];
      return <Fragment key={index}>{insertName === undefined ? part : (inserts?.[insertName] ?? part)}</Fragment>;
    })}
  </>
);

export default RichText;

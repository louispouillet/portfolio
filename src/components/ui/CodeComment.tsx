type CodeCommentProps = {
  text: string;
  className?: string;
};

const CodeComment = ({ text, className }: CodeCommentProps) => (
  <p className={`slide-up delay-1 max-w-full font-mono text-sm italic text-comment sm:text-lg lg:text-base ${className ?? ""}`}>{text}</p>
);

export default CodeComment;

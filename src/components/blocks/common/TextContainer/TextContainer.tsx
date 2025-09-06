export const TextContainer: React.FC<{
  classNames: string;
  textItem: {
    color?: string;
    id?: string;
    text?: string;
  };
}> = ({ classNames, textItem }) => {
  return (
    <div
      className={classNames ?? ""}
      style={{
        color: textItem?.color ?? "",
      }}
      id={textItem?.id ?? ""}
    >
      {textItem?.text || ""}
    </div>
  );
};

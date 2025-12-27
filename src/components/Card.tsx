interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div
      className={"shadow-2xl bg-white rounded-lg w-full py-8 max-w-6xl mx-auto"}
    >
      {children}
    </div>
  );
};

export default Card;

export const Quote = () => {
  const content =
    "The cost of being wrong is less than the cost of doing nothing";
  const from = "Seth Godin";
  return (
    <div className="col-span-1 md:col-span-2 max-h-44">
      <h3>{content}</h3>
      <h4> - {from}</h4>
    </div>
  );
};

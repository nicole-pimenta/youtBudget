const Card = ({ description, type, value }) => {
  console.log(description);
  return (
    <>
      <div>
        <p>{description}</p>
        <p>{type}</p>
        <p>{value}</p>
      </div>
    </>
  );
};

export default Card;

const SavedLocation = ({ lastLocationSearched: lastLocationSearched }) => {
  const namesOnly = new Set([...lastLocationSearched]);
  return (
    <div className="saved-location">
      {namesOnly.forEach((names) => {
        return <p>{names}</p>;
      })}
    </div>
  );
};

export default SavedLocation;

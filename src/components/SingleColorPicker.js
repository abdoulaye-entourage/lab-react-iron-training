export const SingleColorPicker = ({ color, value, onchange }) => {
  function handleInputChange(event) {
    onchange(color, event.target.value);
  }

  return (
    <>
      <input
        type="number"
        min="0"
        max="255"
        value={value}
        onChange={handleInputChange}
      />
    </>
  );
};
export default SingleColorPicker;

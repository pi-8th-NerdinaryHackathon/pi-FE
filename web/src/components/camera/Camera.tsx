function Camera() {
  return (
    <>
      <input
        className="h-20 w-20 rounded-2xl bg-amber-300"
        type="file"
        accept="image/*"
        capture="environment"
      />
      <input
        className="h-20 w-20 rounded-2xl bg-black"
        type="file"
        accept="image/*"
      />
    </>
  );
}
export default Camera;

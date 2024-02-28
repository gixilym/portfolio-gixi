function Background() {
  return (
    <>
      <script src="https://unpkg.com/@h0rn0chse/night-sky/dist/bundle.min.js"></script>
      <night-sky
        id="background"
        layers="4"
        density="30"
        velocity="50"
        starcolor="#fff"
      />
    </>
  );
}

export default Background;

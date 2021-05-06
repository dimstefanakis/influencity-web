function Blob({ style = {}, color = '#FFD29B' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '100%', ...style }} viewBox="0 0 200 200">
      <path
        fill={color}
        d="M144.3 59.5c12.1 8.3 20.3 24.4 22.1 42.3 1.8 17.8-2.9 37.5-15 46.7-12.1 9.2-31.8 8-47.6 4.2s-27.7-10.3-36.9-19.6c-9.2-9.2-15.7-21.1-21-38.4-5.3-17.2-9.3-39.7-.1-48 9.2-8.4 31.7-2.6 51 .6s35.4 3.8 47.5 12.2z"
      />
    </svg>
  );
}

export default Blob;

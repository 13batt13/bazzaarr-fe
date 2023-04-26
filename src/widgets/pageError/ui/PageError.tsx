export default function PageError() {
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div>
      <h2>Unexpected Error</h2>
      <p>
        <button onClick={reloadPage} type="button">
          Reload the page
        </button>
      </p>
    </div>
  );
}

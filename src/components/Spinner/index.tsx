import ClipLoader from 'react-spinners/ClipLoader';

function Spinner() {
  return (
    <div className="fixed left-1/2 top-1/2">
      <ClipLoader
        color={'#eb6900'}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;

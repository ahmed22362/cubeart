
import Alert from 'react-bootstrap/Alert';

function Alertt() {
  return (
    <>
      {[
        'success',
        'danger',
       
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}

export default Alertt;
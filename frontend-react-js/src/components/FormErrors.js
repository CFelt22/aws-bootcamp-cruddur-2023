import './FormErrors.css';
import FormErrorItem from 'components/FormErrorItem';

export default function FormErrors(props) {
  let el_errors = null;

  if (Array.isArray(props.errors) && props.errors.length > 0) {
    el_errors = (
      <div className='errors'>
        {props.errors.map(err_code => (
          <FormErrorItem err_code={err_code} key={err_code} />
        ))}
      </div>
    );
  }

  return (
    <div className='errorsWrap'>
      {el_errors}
    </div>
  );
}

import { useStoreMap } from 'effector-react';
import { TextField } from '@mui/material';

const Field = ({name, type, label, store, setField}) => {
  const value = useStoreMap({
    store: store, // take $form's state
    keys: [name], // watch for changes of `name`
    fn: values => values[name] || '', // retrieve data from $form's state in this way (note: there will be an error, if undefined is returned)
  })

  const handleChange = setField.prepend(e => ({
    key: e.target.name,
    value: e.target.value,
  }))

  return (
    <TextField
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
    />
  )
}

export default Field
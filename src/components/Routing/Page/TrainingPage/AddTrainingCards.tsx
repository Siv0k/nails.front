import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';
import Field from '../../../Field';
import { createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';

const submitted = createEvent()
const setField = createEvent()

const $form = createStore({}).on(setField, (s, {key, value}) => ({
  ...s,
  [key]: value,
}))

// sample({
//   clock: submitted,
//   source: $form,
//   target: sendFormFx,
// })

const AddTrainingCards = () => {
  const form = useStore($form);
  const [open, setOpen] = useState(false);

  const handleAddCard = () => {
    setOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault
    console.log(form)
  }

  return <>
    <Button onClick={handleAddCard} color='primary' variant='contained'>Добавить карточку</Button>
    <Dialog open={open}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Добавить карту обучения</DialogTitle>
        <DialogContent>
          <Field name="title" setField={setField} store={$form}/>
        </DialogContent>
        <DialogActions>
          <Button type='submit'>Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  </>;
};

export default AddTrainingCards;
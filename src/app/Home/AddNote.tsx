import React, {useEffect, useState, useRef} from 'react';
import {Container, Wrap, Input, Button, DatePicker} from 'src/common';
import {API} from 'lib/services';
import {BUTTON_TYPES, TOAST_TYPES} from 'lib/enums';
import {useAppProvider} from 'src/contexts/AppContext';
import {SPINNER_TYPE, PickerRefDefVal} from 'lib/constants';
import {formInitialValues, isFormValid} from './helper';
import {Toast, formatDate} from 'lib/functions';
import {PickerProps, NotesProps} from 'lib/types';
import {useTodo} from 'src/contexts/TodoContext';

const LendAndBorrow = ({route}: any) => {
  const {setTodo} = useTodo();
  const pickerRef = useRef<PickerProps>(PickerRefDefVal);
  const [state, setState] = useState<NotesProps>(
    route.params?.transaction ? route.params?.note : formInitialValues,
  );
  const {authData, setSpinner} = useAppProvider();
  const [valid, setValid] = useState(BUTTON_TYPES.DISABLED);

  const addNote = async () => {
    setSpinner({status: true, type: SPINNER_TYPE.SUBMITTING});
    const response = await API('/note', {
      method: 'POST',
      body: {
        ...state,
        personId: authData?.id,
        dateTime: formatDate(new Date()),
      },
    });
    if (response.success) {
      setTodo(response.data as NotesProps);
      setState(formInitialValues);
    }
    Toast(
      response.message,
      response.success ? TOAST_TYPES.SUCCESS : TOAST_TYPES.ERROR,
    );
    setSpinner({status: false});
  };

  useEffect(() => {
    isFormValid(state)
      ? setValid(BUTTON_TYPES.PRIMARY)
      : setValid(BUTTON_TYPES.DISABLED);
  }, [state]);

  return (
    <Container scroll>
      <Wrap autoMargin={false}>
        <Input
          label="Title"
          onChange={title => setState({...state, title})}
          value={state.title}
          placeholder="Person Name"
        />
        <Input
          label="Dscription"
          onChange={description => setState({...state, description})}
          value={state.description}
          placeholder="Note can contain maxium 300 words only."
          multiline
          maxLength={300}
        />
        <Input
          label="Date"
          onFocus={() => pickerRef.current.show()}
          value={state.date}
          placeholder="Date"
        />

        <Wrap>
          <Button
            title="Save"
            onPress={addNote}
            type={valid !== BUTTON_TYPES.DISABLED ? 'primary' : 'disabled'}
          />
        </Wrap>
      </Wrap>
      <DatePicker
        customRef={pickerRef}
        onConfirm={date => setState({...state, date})}
      />
    </Container>
  );
};

export default LendAndBorrow;

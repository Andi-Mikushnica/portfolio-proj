'use client';
import { useState } from 'react'
import Form from './Form';
import ErrorUI from './ErrorUI';
import SuccessUI from './SuccessUI';
import { FormStateType } from '@/lib/formUtils/formConstants';

function FormOutcome() {
    const [formState, setFormState] = useState<FormStateType>('incomplete');

    if (formState === 'success') {
        return <SuccessUI formState={formState} setFormState={setFormState}/>
    }

    if (formState === 'error') {
        return <ErrorUI formState={formState} setFormState={setFormState} />
    }

    return <Form formState={formState} setFormState={setFormState} />

}

export default FormOutcome

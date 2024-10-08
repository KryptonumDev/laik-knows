import { createSubscriber } from '../../../../actions';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { REGEX } from '@/global/constants';
import { FormStatusTypes } from '@/global/types';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import FormState from '@/components/ui/FormState';
import Input from '@/components/ui/Input';
import styles from './DetailsAccordion.module.scss';

type FormTypes = {
  heading: JSX.Element;
  paragraph: JSX.Element;
  cta: string;
  isOpen: boolean;
  privacyLink: string;
  email: string;
};

export default function Form({ heading, paragraph, cta, isOpen, privacyLink, email }: FormTypes) {
  const formStateData = {
    errorState: {
      heading: 'Nie udało się dodać maila',
      paragraph: (
        <>
          Podczas przesyłania informacji pojawił się problem z serwerem. Jeśli problem się powtórzy napisz na
          adres:&nbsp;
          <a href={`mailto:${email}`} className='link' target='_blank' rel='noreferrer'>
            {email}
          </a>
        </>
      ),
    },
    successState: {
      heading: 'Dziękuję za dodanie adresu e-mail',
      paragraph: 'Wkrótce na twój adres e-mail zostanie wysłana wiadomość z pierwszą darmową lekcją',
    },
  };

  const [status, setStatus] = useState<FormStatusTypes>({ sending: false, success: undefined });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({ mode: 'onTouched' });

  const onSubmit = async (data: FieldValues) => {
    setStatus({ sending: true, success: undefined });
    const status = await createSubscriber({ email: data.email, legal: data.legal });
    setStatus({ sending: false, success: status.success });
    reset();
  };

  const emailValue = watch('email');
  const tabIndex = isOpen && !status.sending && status.success === undefined ? 0 : -1;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='contact-box'>
      <header>
        {heading}
        {paragraph}
      </header>
      <Input
        disabled={status.sending}
        type='email'
        tabIndex={tabIndex}
        label='E-mail'
        register={register('email', {
          required: { value: true, message: 'Adres e-mail jest wymagany' },
          pattern: {
            value: REGEX.email,
            message: 'Nieprawidłowy format',
          },
        })}
        filled={emailValue}
        errors={errors}
      />
      <Checkbox
        disabled={status.sending}
        tabIndex={tabIndex}
        className={styles.checkbox}
        label={
          <>
            Akceptuję{' '}
            <a tabIndex={tabIndex} href={privacyLink} target='_blank' rel='noreferrer' className='link'>
              politykę prywatności
            </a>
          </>
        }
        register={register('legal', {
          required: { value: true, message: 'Zgoda jest wymagana' },
        })}
        errors={errors}
      />
      <Button tabIndex={tabIndex}>{cta}</Button>
      <FormState {...formStateData} isSuccess={status.success} setStatus={setStatus} isLoading={status.sending} />
    </form>
  );
}

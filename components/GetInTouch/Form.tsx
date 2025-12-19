"use client";
import {zodResolver} from '@hookform/resolvers/zod'
import {FieldValues, useForm, useWatch} from 'react-hook-form'
import { useMutation } from '@tanstack/react-query';
import { FormStateType, TmessageSchema, messageSchema } from '@/lib/formUtils/formConstants';
import { Checkbox } from '../ui/checkbox';
import { Dispatch, SetStateAction } from 'react';
import { Spinner } from '../ui/spinner';
import ErrorUI from './ErrorUI';
import { Link } from 'lucide-react';
import SuccessUI from './SuccessUI';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
    setValue,
    setError
  } = useForm<TmessageSchema>({
    resolver: zodResolver(messageSchema), 
    defaultValues: { consent: false }
  });

  const mutation = useMutation({
    mutationFn: async (data: FieldValues) => {
      const res = await fetch("/api/message", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const resData = await res.json();

      if (resData.errors) {
        const errors = resData.errors;
        if (errors.email) {
          setError("email", {
            type: "server",
            message: errors.email,
          })
          throw new Error("Validation errors")
        }
        else if (errors.name) {
          setError("name", {
            type: "server",
            message: errors.name,
          })
        } else alert("An error occurred. Please try again.");
      }
      return resData;
    },
  })

  const onSubmit =  (data: FieldValues) => {
    mutation.mutate(data)
    reset();
  }

  const consentState = watch('consent');

  if (mutation.isError) return <ErrorUI message={`${mutation.error.message} :(`}/>
  if (mutation.isSuccess) return <SuccessUI />

  return (
    <div className='h-full'> 
        <form onSubmit={handleSubmit(onSubmit)} className='h-full' >
          <div className="flex flex-col text-gray-100 justify-between h-full items-center
        p-10 bg-linear-to-b rounded-md from-gray-950 ">
            <div className="w-full bg-linear-to-l from-blue-600 to-purple-600 py-4 rounded-md">
              <h1 className=' text-2xl text-center font-bold'>
                Send me a message!
              </h1>
            </div>
            <div className='w-full mt-4'>
              <label className='block mb-1 text-sm'>Name</label>
              <input
                {...register('name', {required: true})}
                type='text'
                placeholder='Enter your name.'
                className='w-full bg-gray-800 text-gray-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600'
              />
              <p className='h-5 text-red-500 text-sm mt-1'>{errors.name ? `${errors.name.message}` : '\u00A0'}</p>
            </div>
            <div className='w-full mt-2'>
              <label className='block mb-1 text-sm'>Email</label>
              <input
                {...register('email', {required: true})}
                type='email'
                placeholder='Enter your email.'
                className='w-full bg-gray-800 text-gray-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600'
              />
              <p className='h-5 text-red-500 text-sm mt-1'>{errors.email ? `${errors.email.message}` : '\u00A0'}</p>
            </div>
            <div className='w-full mt-2'>
              <label className='block mb-1 text-sm'>Message</label>
              <textarea
                {...register('message', {required: true})}
                placeholder='Please enter a message.'
                rows={5}
                className='w-full bg-gray-800 text-gray-100 px-3 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-600'
              />
              <p className='h-5 text-red-500 text-sm mt-1'>{errors.message ? `${errors.message.message}` : '\u00A0'}</p>
            </div>
            <div>
              <Checkbox {...register('consent', {required: true})} onClick={() => setValue('consent', !consentState)} />
              <span className='ml-3'>I agree to the collection and storage of my personal information for the purpose of responding to my message.</span>
              {errors.consent && (
                <p className='h-5 text-red-500 text-sm mt-1'>{errors.consent.message}</p>
              )}
            </div>
          
            {mutation.isPending ? <Spinner />: (
              <button disabled={mutation.isPending} type="submit" className="bg-purple-600 py-2 px-6 rounded-md cursor-pointer hover:bg-purple-800">
                Submit
              </button>
            )}
          </div>
        </form>
    </div>
    )}
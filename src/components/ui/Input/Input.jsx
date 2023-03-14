import React from 'react';
import { Typography } from '../Typography';
import './Input.css';
export const Input = ({
  name,
  label,
  register,
  errors,
  required,
  type,
  validationSchema,
  hideErrors = false,
  useLabel = false,
  className = '',
}) => {
  return (
    <div className={`form-control-input min-h-[56px] ${className}`}>
      {useLabel && (
        <label htmlFor={name}>
          {label}
          {required && '*'}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={`${label} ${required && '*'}`}
        className="min-w-0 flex-auto rounded-md border-0 bg-secondary px-3.5 py-1 text-white shadow-sm ring-1 ring-inset ring-white/10  sm:text-sm sm:leading-6"
        {...register(name, validationSchema)}
      />
      {!hideErrors && (
        <div>
          {errors && errors[name]?.type === 'required' && (
            <Typography size="sm" className=" text-red-700  font-bold">
              {errors[name]?.message}
            </Typography>
          )}
        </div>
      )}
    </div>
  );
};

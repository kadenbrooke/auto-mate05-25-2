import { createContext, useContext, useState, ReactNode } from 'react';

interface FormContextType {
  setMessage: (message: string) => void;
  message: string;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState('');

  return (
    <FormContext.Provider value={{ message, setMessage }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
}
import { Controller, useFormContext } from 'react-hook-form';
import { Form, TimePicker } from 'antd';

type TPHDatePicker = {
  name: string;
  label: string;
};

const PHTimePicker = ({ name, label }: TPHDatePicker) => {
  const { control } = useFormContext();
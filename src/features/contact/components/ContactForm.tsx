import React from 'react';
import { useContact } from '@/features/contact/hooks';

type Props = React.HTMLAttributes<HTMLDivElement>;

export const ContactForm: React.FC<Props> = ({ ...divHTMLAttributes }: Props): JSX.Element => {
  const { name, onChangeName, email, onChangeEmail, content, onChangeContent, onSubmit } =
    useContact();

  return (
    <div
      {...divHTMLAttributes}
      className=''
    >
      <form
        className='flex flex-col gap-8'
        onSubmit={(event) => {
          event?.preventDefault();
          onSubmit();
        }}
      >
        <label
          htmlFor='name'
          className='block text-base font-medium text-gray-700'
        >
          {' '}
          お名前
          <input
            id='name'
            name='name'
            type='name'
            autoComplete='name'
            maxLength={64}
            enterKeyHint='next'
            required={true}
            placeholder='プエンテット 太郎'
            title='正しい名前を入力してください。'
            value={name}
            onChange={(event) => onChangeName(event.target.value)}
            className='mt-4 w-full rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-neutral-600 transition duration-500 ease-in-out placeholder:text-gray-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
          />
        </label>

        <label
          htmlFor='email'
          className='block text-base font-medium text-gray-700'
        >
          {' '}
          返信先メールアドレス
          <input
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            maxLength={64}
            enterKeyHint='next'
            required={true}
            placeholder='example@fc-puentet.com'
            title='正しいメールアドレスを入力してください。'
            value={email}
            onChange={(event) => onChangeEmail(event.target.value)}
            className='mt-4 w-full rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-neutral-600 transition duration-500 ease-in-out placeholder:text-gray-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
          />
        </label>

        <label
          htmlFor='body'
          className='block text-base font-medium text-gray-700'
        >
          {' '}
          お問い合わせ内容
          <textarea
            id='body'
            name='body'
            maxLength={1024}
            required={true}
            title='お問い合わせ内容を入力してください。'
            value={content}
            rows={12}
            onChange={(event) => onChangeContent(event.target.value)}
            className='mt-4 h-auto w-full rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-neutral-600 transition duration-500 ease-in-out placeholder:text-gray-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
          />
        </label>

        <button
          type='submit'
          className='mx-auto mt-8 flex w-full select-none items-center justify-center rounded border-0 bg-blue-500 py-2 px-8 text-lg text-white hover:bg-blue-600 focus:outline-none'
        >
          お問い合わせを送信する
        </button>
      </form>
    </div>
  );
};

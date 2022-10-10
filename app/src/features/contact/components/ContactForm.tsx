import React from 'react';
import { ContactSendState } from '@/features/contact';
import { useContact } from '@/features/contact/hooks';

type Props = {
  category?: string | string[];
};

export const ContactForm: React.FC<Props> = ({ category: categoryId }: Props): JSX.Element => {
  const {
    categories,
    category,
    onChangeCategory,
    name,
    onChangeName,
    email,
    onChangeEmail,
    content,
    onChangeContent,
    sendState,
    onSubmit,
  } = useContact(categoryId);

  const resolveSendButtonText: (state: ContactSendState) => string = (state) => {
    switch (state) {
      case 'preparing':
        return 'お問い合わせに必要な情報を取得中です...';
      case 'ready':
        return 'お問い合わせを送信する';
      case 'sending':
        return 'お問い合わせを送信中です';
      case 'sent':
        return 'お問い合わせを送信しました';
    }
  };

  return (
    <div className=''>
      <form
        className='flex flex-col gap-8'
        onSubmit={(event) => {
          event?.preventDefault();
          onSubmit();
        }}
      >
        <label
          htmlFor='category'
          className='block text-base font-medium text-gray-700'
        >
          {' '}
          お問い合わせ種類
          <select
            id='category'
            name='category'
            required={true}
            value={category?.id}
            onChange={(event) => onChangeCategory(event.target.value)}
            className="mt-4 w-full rounded-lg border border-transparent bg-gray-50 px-5 py-3 font-['Noto_Sans_JP'] text-base text-neutral-600 transition duration-500 ease-in-out placeholder:text-gray-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
          >
            {categories &&
              categories.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                >
                  {category.name}
                </option>
              ))}
          </select>
        </label>

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
            className="mt-4 w-full rounded-lg border border-transparent bg-gray-50 px-5 py-3 font-['Noto_Sans_JP'] text-base text-neutral-600 transition duration-500 ease-in-out placeholder:text-gray-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
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
            className="mt-4 w-full rounded-lg border border-transparent bg-gray-50 px-5 py-3 font-['Noto_Sans_JP'] text-base text-neutral-600 transition duration-500 ease-in-out placeholder:text-gray-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
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
            className="mt-4 h-auto w-full rounded-lg border border-transparent bg-gray-50 px-5 py-3 font-['Noto_Sans_JP'] text-base text-neutral-600 transition duration-500 ease-in-out placeholder:text-gray-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
          />
        </label>

        <button
          type='submit'
          className='mx-auto mt-8 flex w-full select-none items-center justify-center rounded border-0 bg-blue-500 py-2 px-8 text-lg text-white transition-all hover:bg-blue-600 focus:outline-none'
        >
          <svg
            className='mr-8'
            xmlns='http://www.w3.org/2000/svg'
            height='40'
            fill='currentColor'
            width='40'
          >
            <path d='M5 33.333V6.667L36.667 20Zm2.792-4.25L29.458 20 7.792 10.833v6.625L17.833 20 7.792 22.5Zm0 0v-18.25V22.5Z' />
          </svg>
          {resolveSendButtonText(sendState)}
        </button>
      </form>
    </div>
  );
};

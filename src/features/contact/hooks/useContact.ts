import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';

type FeedState = {
  name: string;
  onChangeName: (value: string) => void;
  email: string;
  onChangeEmail: (value: string) => void;
  content: string;
  onChangeContent: (value: string) => void;
  onSubmit: () => void;
};

export const useContact = (initEmail?: string, initBody?: string): FeedState => {
  const [name, setName] = useState('');
  const onChangeName = (value: string) => {
    setName(value);
  };

  const [email, setEmail] = useState(initEmail ?? '');
  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  const [content, setContent] = useState(initBody ?? '');
  const onChangeContent = (value: string) => {
    setContent(value);
  };

  const onSubmit = () => {
    // TODO: implementation
    void (async function () {
      await supabaseClient.from('contact').insert(
        {
          name,
          email,
          content,
        },
        { returning: 'minimal' },
      );
    })();
  };

  return {
    name,
    onChangeName,
    email,
    onChangeEmail,
    content,
    onChangeContent,
    onSubmit,
  };
};

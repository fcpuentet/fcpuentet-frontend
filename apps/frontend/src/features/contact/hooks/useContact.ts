import { useCallback, useMemo, useState } from 'react';
import { ContactCategory, ContactSendState, ContactTemplate } from '@/features/contact';
import { supabase } from '@/utils';

type ContactState = {
  categories?: ContactCategory[];
  category?: ContactCategory;
  onChangeCategory: (categoryId: string) => void;
  name: string;
  onChangeName: (value: string) => void;
  email: string;
  onChangeEmail: (value: string) => void;
  content: string;
  onChangeContent: (value: string) => void;
  sendState: ContactSendState;
  onSubmit: () => void;
};

export const useContact = (initCategoryId?: string | string[]): ContactState => {
  const [sendState, setSendState] = useState<ContactSendState>('preparing');

  const [templates, setTemplates] = useState<ContactTemplate[]>();
  const [categories, setCategories] = useState<ContactCategory[]>();
  const [category, setCategory] = useState<ContactCategory>();
  const onChangeCategory = (categoryId: string) => {
    const selectedCategory = categories?.find((category) => category.id === categoryId);
    setCategory(selectedCategory);

    if (!selectedCategory?.templateId) {
      return;
    }
    const template = templates?.find((template) => template.id === selectedCategory.templateId);
    if (template) {
      setContent(template.content);
    }
  };

  const [name, setName] = useState('');
  const onChangeName = (value: string) => {
    setName(value);
  };

  const [email, setEmail] = useState('');
  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  const [content, setContent] = useState('');
  const onChangeContent = (value: string) => {
    setContent(value);
  };

  const fetchTemplates = async () => {
    const { data: templateList, error } = await supabase
      .from('contact_templates')
      .select('id, content')
      .is('deleted_at', null);

    if (error) {
      return {
        templates: undefined,
        error,
      };
    }

    const templates = templateList?.map<ContactTemplate>((value) => {
      return {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access
        id: `${value.id}`,
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access
        content: `${value.content}`,
      };
    });

    return {
      templates,
      error: null,
    };
  };

  const fetchCategories = async () => {
    const { data: categoryList, error } = await supabase
      .from('contact_categories')
      .select('id, name, template_id')
      .is('deleted_at', null)
      .order('sort', { ascending: true })
      .order('created_at', { ascending: false });

    if (error) {
      return {
        categories: undefined,
        error,
      };
    }

    const categories = categoryList?.map<ContactCategory>((value) => {
      return {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access
        id: `${value.id}`,
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access
        name: `${value.name}`,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access
        templateId: `${value.template_id}`,
      };
    });

    return {
      categories,
      error: null,
    };
  };

  useMemo(() => {
    void (async function () {
      const { templates, error: templateError } = await fetchTemplates();
      if (templateError) {
        return;
      }
      setTemplates(templates);

      const { categories, error: categoriesError } = await fetchCategories();
      if (categoriesError) {
        return;
      }
      setCategories(categories);
      setSendState('ready');
      if (categories === undefined || categories.length === 0) {
        return;
      }

      const firstCategory =
        categories.find((category) => category.id === initCategoryId) ?? categories[0];
      setCategory(firstCategory);

      if (!firstCategory.templateId) {
        return;
      }
      const template = templates?.find((template) => template.id === firstCategory.templateId);
      if (template) {
        setContent(template.content);
      }
    })();
  }, []);

  useCallback(() => {
    if (!categories) {
      return;
    }

    const firstCategory = categories.find((category) => category.id === initCategoryId);
    setCategory(firstCategory);

    if (!firstCategory?.templateId) {
      return;
    }
    const template = templates?.find((template) => template.id === firstCategory.templateId);
    if (template) {
      setContent(template.content);
    }
  }, [initCategoryId]);

  const reset = () => {
    setName('');
    setEmail('');
    setContent('');
  };

  const onSubmit = () => {
    setSendState('sending');

    void (async function () {
      await supabase.from('contact').insert({
        name,
        category_id: category?.id,
        email,
        content,
      });

      setSendState('sent');
      reset();
    })();
  };

  return {
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
  };
};

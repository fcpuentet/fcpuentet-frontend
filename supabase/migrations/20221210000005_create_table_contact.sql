-- This script was generated by the Schema Diff utility in pgAdmin 4
-- For the circular dependencies, the order in which Schema Diff writes the objects is not very sophisticated
-- and may require manual changes to the script to ensure changes are applied in the correct order.
-- Please report an issue for any failure with the reproduction steps.

--
-- お問い合わせテンプレート
--
CREATE TABLE IF NOT EXISTS public.contact_templates
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    name character varying(128) COLLATE pg_catalog."default" NOT NULL,
    content text COLLATE pg_catalog."default" NOT NULL DEFAULT ''::text,
    CONSTRAINT contact_templates_pkey PRIMARY KEY (id)
)

    TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.contact_templates
    OWNER to postgres;

ALTER TABLE IF EXISTS public.contact_templates
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.contact_templates TO anon;

GRANT ALL ON TABLE public.contact_templates TO authenticated;

GRANT ALL ON TABLE public.contact_templates TO postgres;

GRANT ALL ON TABLE public.contact_templates TO service_role;
CREATE POLICY "Enable read access for all users"
    ON public.contact_templates
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING (true);

--
-- お問い合わせカテゴリ
--
CREATE TABLE IF NOT EXISTS public.contact_categories
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    name character varying(128) COLLATE pg_catalog."default" NOT NULL,
    template_id uuid,
    sort bigint NOT NULL,
    CONSTRAINT contact_categories_pkey PRIMARY KEY (id),
    CONSTRAINT contact_categories_template_id_fkey FOREIGN KEY (template_id)
        REFERENCES public.contact_templates (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT contact_categories_template_id_fkey1 FOREIGN KEY (template_id)
        REFERENCES public.contact_templates (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE SET NULL
)

    TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.contact_categories
    OWNER to postgres;

ALTER TABLE IF EXISTS public.contact_categories
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.contact_categories TO authenticated;

GRANT ALL ON TABLE public.contact_categories TO anon;

GRANT ALL ON TABLE public.contact_categories TO service_role;

GRANT ALL ON TABLE public.contact_categories TO postgres;
CREATE POLICY "Enable read access for all users"
    ON public.contact_categories
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING (true);

--
-- お問い合わせ内容
--
CREATE TABLE IF NOT EXISTS public.contact
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    closed_at timestamp with time zone,
    category_id uuid,
    email character varying(128) COLLATE pg_catalog."default" NOT NULL,
    content text COLLATE pg_catalog."default" NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT contact_pkey PRIMARY KEY (id),
    CONSTRAINT contact_category_id_fkey FOREIGN KEY (category_id)
        REFERENCES public.contact_categories (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.contact
    OWNER to postgres;

ALTER TABLE IF EXISTS public.contact
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.contact TO anon;

GRANT ALL ON TABLE public.contact TO authenticated;

GRANT ALL ON TABLE public.contact TO postgres;

GRANT ALL ON TABLE public.contact TO service_role;
CREATE POLICY "Enable insert for everyone"
    ON public.contact
    AS PERMISSIVE
    FOR INSERT
    TO public
    WITH CHECK (true);
CREATE POLICY "Enable read access to authenticated users only"
    ON public.contact
    AS PERMISSIVE
    FOR SELECT
    TO authenticated
    USING (true);

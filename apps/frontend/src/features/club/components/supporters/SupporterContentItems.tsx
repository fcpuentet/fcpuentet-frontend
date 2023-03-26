import Link from 'next/link';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SupportersProps {}

export const SupporterContentItems: React.FC<SupportersProps> = (): JSX.Element => {
  return (
    <section className=''>
      <h2 className='mt-8 mb-6 cursor-default underline decoration-blue-500 underline-offset-[12px]'>
        Want to be a supporter?
      </h2>
      <p className='mb-6'>
        あなたもサポーターの一員になってみませんか？
        <br />
        いくつかのプランの中から選択できます。
      </p>

      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-6 md:flex-row'>
          {/* JACK */}
          <div className='block flex-1 rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
            <h3 className='mb-2 cursor-default text-center tracking-tight text-gray-900'>JACK</h3>
            <p className='my-6 text-center text-lg'>1 万円</p>
            <ul className='list-inside list-disc space-y-2'>
              <li>アクリルキーホルダー</li>
              <li>スポンサー企業商品券 2,000 円分</li>
            </ul>
          </div>

          {/* QUEEN */}
          <div className='block flex-1 rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
            <h3 className='mb-2 cursor-default text-center tracking-tight text-gray-900'>QUEEN</h3>
            <p className='my-6 text-center text-lg'>3 万円</p>
            <ul className='list-inside list-disc space-y-2'>
              <li className=''>
                オリジナル T シャツプレゼント
                <ul className='list-inside list-disc pl-5'>
                  <li>背番号 12 番</li>
                </ul>
              </li>
              <li>アクリルキーホルダー</li>
              <li>スポンサー企業商品券 2,000 円分</li>
            </ul>
          </div>

          {/* KING */}
          <div className='block flex-1 rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
            <h3 className='mb-2 cursor-default text-center tracking-tight text-gray-900'>KING</h3>
            <p className='my-6 text-center text-lg'>5 万円</p>
            <ul className='list-inside list-disc space-y-2'>
              <li>
                オーセンティックユニフォーム
                <ul className='list-inside list-disc pl-5'>
                  <li>名入れ可能</li>
                  <li>好きな背番号可能</li>
                </ul>
              </li>
              <li>アクリルキーホルダー</li>
              <li>スポンサー企業商品券 2,000 円分</li>
            </ul>
          </div>
        </div>

        <span className='select-none text-center text-3xl'>＋</span>

        {/* JOKER */}
        <div className='block flex-1 rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
          <h3 className='mb-2 cursor-default text-center tracking-tight text-gray-900'>JOKER</h3>
          <p className='my-6 text-center text-lg'>1,000 円からの寄付</p>
        </div>

        <div className='flex flex-col items-center gap-8 pt-8 md:pt-16'>
          <p className='text-center'>サポーターの申込みは下記のフォームよりお送りください</p>
          <Link
            href='/contact'
            className='w-full max-w-xl rounded border border-blue-500 py-4 text-center font-bold text-blue-500 outline-none transition-all duration-100 ease-linear hover:bg-blue-500 hover:text-white focus:outline-none active:bg-blue-600'
          >
            お問い合わせフォーム
          </Link>
        </div>
      </div>
    </section>
  );
};

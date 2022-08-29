export const TwitterTimeline = (): JSX.Element => {
  return (
    <>
      <a
        className='twitter-timeline'
        href='https://twitter.com/FCPUENTET?ref_src=twsrc%5Etfw'
      >
        Tweets by FCPUENTET
      </a>
      <script
        async
        src='https://platform.twitter.com/widgets.js'
        charSet='utf-8'
      ></script>
    </>
  );
};

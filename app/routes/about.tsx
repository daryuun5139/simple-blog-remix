type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex h-full w-full cursor-default items-center justify-center">
      <div className="flex h-full w-[90%] flex-col items-center justify-center sm:w-full lg:flex-row">
        <div className="flex justify-center py-5">
          <img
            src="./IMG_0101.JPG"
            alt="sample"
            className="aboutImg h-[300px] w-[300px] lg:h-[400px] lg:w-[400px]"
          />
        </div>
        <div className="flex flex-col  justify-center rounded-md border-2 border-[#3F3F45] px-4 py-8 lg:py-16">
          <p className="sm:text-md pb-5 text-sm leading-7">
            当ブログをご覧いただきありがとうございます。
            <br />
            学習内容の発信用、および技術をいじくる用に当ブログを運営しています。
            <br />
            このブログはRemix、microCMSで作成しています。
            <br />
            他のフレームワークでも同じようなものを作る予定です。
          </p>
          <p className="sm:text-md text-sm">主な技術：React, Next.js, Remix, Typescript etc</p>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";

import { Line, List, Text } from "components";

type CameleonDashboardTableProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "no"
  | "sitetitle"
  | "link"
  | "totalclicks"
  | "referrertype"
  | "one"
  | "stackoverflow"
  | "httpsstackov"
  | "onehundredtwenty"
  | "nofollownoopeneOne"
  | "two"
  | "youtube"
  | "httpswwwyou"
  | "p14522"
  | "nofollow"
  | "three"
  | "github"
  | "httpsgithub"
  | "thirtysix"
  | "nofollow1"
  | "four"
  | "goshwilliam"
  | "httpsgwillia"
  | "fivehundredeighty"
  | "ugc"
  | "five"
  | "stackoverflow1"
  | "httpsstackov1"
  | "onehundredtwelve"
  | "nofollownoopeneone1"
  | "six"
  | "stackoverflow2"
  | "httpsstackov2"
  | "four1"
  | "nofollownoopeneone2"
  | "seven"
  | "stackoverflow3"
  | "httpsstackov3"
  | "fiftyone"
  | "nofollownoopeneone3"
  | "eight"
  | "stackoverflow4"
  | "httpsstackov4"
  | "sixtyeight"
  | "nofollownoopeneone4"
> &
  Partial<{
    no: string;
    sitetitle: string;
    link: string;
    totalclicks: string;
    referrertype: string;
    one: string;
    stackoverflow: string;
    httpsstackov: JSX.Element | string;
    onehundredtwenty: string;
    nofollownoopeneOne: string;
    two: string;
    youtube: string;
    httpswwwyou: JSX.Element | string;
    p14522: string;
    nofollow: string;
    three: string;
    github: string;
    httpsgithub: JSX.Element | string;
    thirtysix: string;
    nofollow1: string;
    four: string;
    goshwilliam: string;
    httpsgwillia: JSX.Element | string;
    fivehundredeighty: string;
    ugc: string;
    five: string;
    stackoverflow1: string;
    httpsstackov1: JSX.Element | string;
    onehundredtwelve: string;
    nofollownoopeneone1: string;
    six: string;
    stackoverflow2: string;
    httpsstackov2: JSX.Element | string;
    four1: string;
    nofollownoopeneone2: string;
    seven: string;
    stackoverflow3: string;
    httpsstackov3: JSX.Element | string;
    fiftyone: string;
    nofollownoopeneone3: string;
    eight: string;
    stackoverflow4: string;
    httpsstackov4: JSX.Element | string;
    sixtyeight: string;
    nofollownoopeneone4: string;
  }>;

const CameleonDashboardTable: React.FC<CameleonDashboardTableProps> = (
  props,
) => {
  return (
    <>
      <List className={props.className} orientation="vertical">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1004px] w-full">
            <div className="flex flex-1 flex-col items-center justify-start p-2.5 w-full">
              <Text
                className="text-base text-blue_gray-600 tracking-[-0.32px] w-auto"
                size="txtInterRegular16Bluegray600"
              >
                {props?.no}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[269px]">
              <Text
                className="text-base text-blue_gray-600 tracking-[-0.32px] w-auto"
                size="txtInterRegular16Bluegray600"
              >
                {props?.sitetitle}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[259px]">
              <Text
                className="text-base text-blue_gray-600 tracking-[-0.32px] w-auto"
                size="txtInterRegular16Bluegray600"
              >
                {props?.link}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start p-2.5 w-[123px]">
              <Text
                className="text-base text-blue_gray-600 tracking-[-0.32px] w-auto"
                size="txtInterRegular16Bluegray600"
              >
                {props?.totalclicks}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pl-2.5 pr-[17px] py-2.5 w-[308px]">
              <Text
                className="text-base text-blue_gray-600 tracking-[-0.32px] w-auto"
                size="txtInterRegular16Bluegray600"
              >
                {props?.referrertype}
              </Text>
            </div>
          </div>
          <Line className="bg-blue_gray-600_6c h-px w-[99%]" />
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1004px] w-full">
            <div className="flex flex-1 flex-col items-center justify-start p-2.5 w-full">
              <Text
                className="text-base text-blue_gray-200 tracking-[-0.32px] w-auto"
                size="txtInterRegular16Bluegray200"
              >
                {props?.one}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[269px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.stackoverflow}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[259px]">
              {props?.httpsstackov}
            </div>
            <div className="flex flex-col items-start justify-start p-2.5 w-[123px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.onehundredtwenty}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pl-2.5 pr-[17px] py-2.5 w-[308px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.nofollownoopeneOne}
              </Text>
            </div>
          </div>
          <Line className="bg-blue_gray-600_6c h-px w-[99%]" />
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1004px] w-full">
            <div className="flex flex-1 flex-col items-center justify-start p-2.5 w-full">
              <Text
                className="text-base text-blue_gray-200 tracking-[-0.32px] w-auto"
                size="txtInterRegular16Bluegray200"
              >
                {props?.two}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[269px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.youtube}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[259px]">
              {props?.httpswwwyou}
            </div>
            <div className="flex flex-col items-start justify-start p-2.5 w-[123px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.p14522}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pl-2.5 pr-[17px] py-2.5 w-[308px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.nofollow}
              </Text>
            </div>
          </div>
          <Line className="bg-blue_gray-600_6c h-px w-[99%]" />
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1004px] w-full">
            <div className="flex flex-1 flex-col items-center justify-start p-2.5 w-full">
              <Text
                className="text-base text-blue_gray-200 tracking-[-0.32px] w-auto"
                size="txtInterRegular16Bluegray200"
              >
                {props?.three}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[269px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.github}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[259px]">
              {props?.httpsgithub}
            </div>
            <div className="flex flex-col items-start justify-start p-2.5 w-[123px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px]"
                size="txtInterRegular14Bluegray200"
              >
                {props?.thirtysix}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pl-2.5 pr-[17px] py-2.5 w-[308px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.nofollow1}
              </Text>
            </div>
          </div>
          <Line className="bg-blue_gray-600_6c h-px w-[99%]" />
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1004px] w-full">
            <div className="flex flex-1 flex-col items-center justify-start p-2.5 w-full">
              <Text
                className="text-base text-blue_gray-200 tracking-[-0.32px] w-auto"
                size="txtInterRegular16Bluegray200"
              >
                {props?.four}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[269px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.goshwilliam}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[259px]">
              {props?.httpsgwillia}
            </div>
            <div className="flex flex-col items-start justify-start p-2.5 w-[123px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.fivehundredeighty}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pl-2.5 pr-[17px] py-2.5 w-[308px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.ugc}
              </Text>
            </div>
          </div>
          <Line className="bg-blue_gray-600_6c h-px w-[99%]" />
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1004px] w-full">
            <div className="flex flex-1 flex-col items-center justify-start p-2.5 w-full">
              <Text
                className="text-base text-blue_gray-200 tracking-[-0.32px] w-auto"
                size="txtInterRegular16Bluegray200"
              >
                {props?.five}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[269px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.stackoverflow1}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[259px]">
              {props?.httpsstackov1}
            </div>
            <div className="flex flex-col items-start justify-start p-2.5 w-[123px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.onehundredtwelve}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pl-2.5 pr-[17px] py-2.5 w-[308px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.nofollownoopeneone1}
              </Text>
            </div>
          </div>
          <Line className="bg-blue_gray-600_6c h-px w-[99%]" />
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1004px] w-full">
            <div className="flex flex-1 flex-col items-center justify-start p-2.5 w-full">
              <Text
                className="text-base text-blue_gray-200 tracking-[-0.32px] w-auto"
                size="txtInterRegular16Bluegray200"
              >
                {props?.six}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[269px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.stackoverflow2}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[259px]">
              {props?.httpsstackov2}
            </div>
            <div className="flex flex-col items-start justify-start p-2.5 w-[123px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.four1}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pl-2.5 pr-[17px] py-2.5 w-[308px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.nofollownoopeneone2}
              </Text>
            </div>
          </div>
          <Line className="bg-blue_gray-600_6c h-px w-[99%]" />
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1004px] w-full">
            <div className="flex flex-1 flex-col items-center justify-start p-2.5 w-full">
              <Text
                className="text-base text-blue_gray-200 tracking-[-0.32px] w-auto"
                size="txtInterRegular16Bluegray200"
              >
                {props?.seven}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[269px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.stackoverflow3}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[259px]">
              {props?.httpsstackov3}
            </div>
            <div className="flex flex-col items-start justify-start p-2.5 w-[123px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.fiftyone}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pl-2.5 pr-[17px] py-2.5 w-[308px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.nofollownoopeneone3}
              </Text>
            </div>
          </div>
          <Line className="bg-blue_gray-600_6c h-px w-[99%]" />
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1004px] w-full">
            <div className="flex flex-1 flex-col items-center justify-start p-2.5 w-full">
              <Text
                className="text-base text-blue_gray-200 tracking-[-0.32px] w-auto"
                size="txtInterRegular16Bluegray200"
              >
                {props?.eight}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[269px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.stackoverflow4}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[259px]">
              {props?.httpsstackov4}
            </div>
            <div className="flex flex-col items-start justify-start p-2.5 w-[123px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px]"
                size="txtInterRegular14Bluegray200"
              >
                {props?.sixtyeight}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pl-2.5 pr-[17px] py-2.5 w-[308px]">
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14Bluegray200"
              >
                {props?.nofollownoopeneone4}
              </Text>
            </div>
          </div>
          <Line className="bg-blue_gray-600_6c h-px w-[99%]" />
        </div>
      </List>
    </>
  );
};

CameleonDashboardTable.defaultProps = {
  no: "No",
  sitetitle: "Site title",
  link: "Link",
  totalclicks: "Total clicks",
  referrertype: "Referrer type",
  one: "1.",
  stackoverflow: "Stack Overflow",
  httpsstackov: (
    <Text
      className="text-blue-A700 text-sm tracking-[-0.28px] w-auto"
      size="txtInterRegular14BlueA700"
    >
      <span className="text-blue-A700 font-inter text-left font-normal">
        https://stackoverflow.com/ques
      </span>
      <span className="text-blue-A700 font-inter text-left font-normal">
        tion/..
      </span>
    </Text>
  ),
  onehundredtwenty: "120",
  nofollownoopeneOne: "nofollow, noopener",
  two: "2",
  youtube: "Youtube",
  httpswwwyou: (
    <Text
      className="text-blue-A700 text-sm tracking-[-0.28px] w-auto"
      size="txtInterRegular14BlueA700"
    >
      <span className="text-blue-A700 font-inter text-left font-normal">
        https://www.youtube.com/
      </span>
      <span className="text-blue-A700 font-inter text-left font-normal">
        ?v=7wB1j..
      </span>
    </Text>
  ),
  p14522: "14,522",
  nofollow: "nofollow",
  three: "3.",
  github: "Github",
  httpsgithub: (
    <Text
      className="text-blue-A700 text-sm tracking-[-0.28px] w-auto"
      size="txtInterRegular14BlueA700"
    >
      <span className="text-blue-A700 font-inter text-left font-normal">
        https://github.com/a
      </span>
      <span className="text-blue-A700 font-inter text-left font-normal">
        ndrew/tabler-x..
      </span>
    </Text>
  ),
  thirtysix: "36",
  nofollow1: "nofollow",
  four: "4.",
  goshwilliam: "Gosh William",
  httpsgwillia: (
    <Text
      className="text-blue-A700 text-sm tracking-[-0.28px] w-auto"
      size="txtInterRegular14BlueA700"
    >
      <span className="text-blue-A700 font-inter text-left font-normal">
        https://gwilliam.co/b
      </span>
      <span className="text-blue-A700 font-inter text-left font-normal">
        log/capture-fro..
      </span>
    </Text>
  ),
  fivehundredeighty: "580",
  ugc: "ugc",
  five: "5.",
  stackoverflow1: "Stack Overflow",
  httpsstackov1: (
    <Text
      className="text-blue-A700 text-sm tracking-[-0.28px] w-auto"
      size="txtInterRegular14BlueA700"
    >
      <span className="text-blue-A700 font-inter text-left font-normal">
        https://stackoverflow.com/ques
      </span>
      <span className="text-blue-A700 font-inter text-left font-normal">
        tion/..
      </span>
    </Text>
  ),
  onehundredtwelve: "112",
  nofollownoopeneone1: "nofollow, noopener",
  six: "6.",
  stackoverflow2: "Stack Overflow",
  httpsstackov2: (
    <Text
      className="text-blue-A700 text-sm tracking-[-0.28px] w-auto"
      size="txtInterRegular14BlueA700"
    >
      <span className="text-blue-A700 font-inter text-left font-normal">
        https://stackoverflow.com/ques
      </span>
      <span className="text-blue-A700 font-inter text-left font-normal">
        tion/..
      </span>
    </Text>
  ),
  four1: "4",
  nofollownoopeneone2: "nofollow, noopener",
  seven: "7.",
  stackoverflow3: "Stack Overflow",
  httpsstackov3: (
    <Text
      className="text-blue-A700 text-sm tracking-[-0.28px] w-auto"
      size="txtInterRegular14BlueA700"
    >
      <span className="text-blue-A700 font-inter text-left font-normal">
        https://stackoverflow.com/ques
      </span>
      <span className="text-blue-A700 font-inter text-left font-normal">
        tion/..
      </span>
    </Text>
  ),
  fiftyone: "51",
  nofollownoopeneone3: "nofollow, noopener",
  eight: "8.",
  stackoverflow4: "Stack Overflow",
  httpsstackov4: (
    <Text
      className="text-blue-A700 text-sm tracking-[-0.28px] w-auto"
      size="txtInterRegular14BlueA700"
    >
      <span className="text-blue-A700 font-inter text-left font-normal">
        https://stackoverflow.com/ques
      </span>
      <span className="text-blue-A700 font-inter text-left font-normal">
        tion/..
      </span>
    </Text>
  ),
  sixtyeight: "68",
  nofollownoopeneone4: "nofollow, noopener",
};

export default CameleonDashboardTable;

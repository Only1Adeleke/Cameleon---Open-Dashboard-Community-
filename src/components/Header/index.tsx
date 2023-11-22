import React from "react";

import { Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-gray-900_02 flex flex-row gap-[275px] items-start justify-start mb-1 px-3 py-[11px] rounded-lg w-auto sm:w-full">
          <Text
            className="text-blue_gray-700 text-sm w-auto"
            size="txtInterRegular14Bluegray700"
          >
            Search...
          </Text>
          <Img
            className="h-4 w-4"
            src="images/img_iconlylightsearch.svg"
            alt="iconlylightsear"
          />
        </div>
        <ul className="flex flex-row gap-10 sm:hidden items-start justify-start mb-3.5 md:ml-[0] ml-[41px] md:mt-0 mt-[11px] w-auto common-row-list">
          <li>
            <Text
              className="text-blue_gray-200 text-sm tracking-[-0.28px]"
              size="txtInterRegular14Bluegray200"
            >
              Analytics
            </Text>
          </li>
          <li>
            <Text
              className="hover:text-blue_gray-200 text-blue_gray-600 text-sm tracking-[-0.28px]"
              size="txtInterRegular14Bluegray600"
            >
              Earnings
            </Text>
          </li>
          <li>
            <Text
              className="hover:text-blue_gray-200 text-blue_gray-600 text-sm tracking-[-0.28px]"
              size="txtInterRegular14Bluegray600"
            >
              Ads Experiments
            </Text>
          </li>
        </ul>
        <Img
          className="h-5 mb-2.5 md:ml-[0] ml-[134px] md:mt-0 mt-[13px] w-5"
          src="images/img_iconlybulknotification.svg"
          alt="notif"
        />
        <div className="flex flex-col items-center justify-start ml-5 md:ml-[0] md:mt-0 mt-0.5 w-[19%] md:w-full">
          <div className="flex flex-row gap-4 items-start justify-between w-full">
            <div className="bg-light_blue-A200 flex flex-col h-10 items-center justify-start pt-[5px] rounded-[50%] w-10">
              <div className="h-[35px] relative w-full">
                <Img
                  className="h-[35px] m-auto rounded-[50%] w-full"
                  src="images/img_7309690.png"
                  alt="7309690"
                />
                <div className="absolute bg-green-A400 bottom-[11%] h-2 right-[0] rounded-[50%] w-2"></div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[73%]">
              <Text
                className="text-[10px] text-blue_gray-600 uppercase"
                size="txtInterRegular10"
              >
                Welcome
              </Text>
              <div className="flex flex-row items-start justify-evenly mt-0.5 w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-base text-blue_gray-200"
                    size="txtInterSemiBold16"
                  >
                    Daniel Estasmos
                  </Text>
                </div>
                <div className="flex flex-col h-4 items-center justify-start mt-[3px] w-4">
                  <Img
                    className="h-4 w-4"
                    src="images/img_iconlyboldarrow.svg"
                    alt="iconlyboldarrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;

import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const CameleonComingSoonPage: React.FC = () => {
  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_iconlybulkcategory.svg"
          alt="iconlybulkcateg"
        />
      ),
      label: "Dashboard",
      href: "/cameleondashboard",
      active: window.location.pathname === "/cameleondashboard",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_iconlybulkmessage.svg"
          alt="iconlybulkmessa"
        />
      ),
      label: "Messages",
      suffix: (
        <Text className="bg-blue_gray-900 font-medium justify-center px-1.5 rounded-[10px] text-[13px] text-light_blue-A200 tracking-[-0.52px] w-12">
          3 new
        </Text>
      ),
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_iconlybulkpaper.svg"
          alt="iconlybulkpaper"
        />
      ),
      label: "Reports",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_iconlybulknotification.svg"
          alt="iconlybulknotif"
        />
      ),
      label: "Notifications",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_iconlybulkwallet.svg"
          alt="iconlybulkwalle"
        />
      ),
      label: "Invoices",
      suffix: (
        <Text className="bg-red-600_01 font-medium justify-center px-1.5 rounded-[10px] text-[13px] text-white-A700 tracking-[-0.52px] w-[35px]">
          10+
        </Text>
      ),
    },
  ];

  return (
    <>
      <div className="bg-gray-900 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[290px] bg-gray-900_01 border-indigo-50_14 border-r border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div
          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[1321px] items-center justify-start p-5 md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group1.svg')" }}
        >
          <div className="flex flex-col items-start justify-start mb-[694px] w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[87px] w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-200 tracking-[-0.64px]"
                size="txtInterSemiBold32"
              >
                Customers
              </Text>
              <Input
                name="searchbox"
                placeholder="SEARCH..."
                className="leading-[normal] p-0 placeholder:text-blue_gray-700 text-left text-sm tracking-[0.42px] w-full"
                wrapClassName="flex sm:flex-1 w-[219px] sm:w-full"
                suffix={
                  <Img
                    className="h-4 ml-[35px] my-px"
                    src="images/img_iconlylightsearch.svg"
                    alt="Iconly/Light/Search"
                  />
                }
              ></Input>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-9 w-auto md:w-full">
              <List
                className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[62%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col items-start justify-start w-[71px]">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-base text-center tracking-[0.48px] w-full"
                    shape="square"
                    color="gray_900_05"
                    size="md"
                  >
                    No
                  </Button>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                      size="txtInterMedium18"
                    >
                      1
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                      size="txtInterMedium18"
                    >
                      2
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                      size="txtInterMedium18"
                    >
                      3
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                      size="txtInterMedium18"
                    >
                      4
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                      size="txtInterMedium18"
                    >
                      5
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[301px]">
                  <Text
                    className="bg-gray-900_05 justify-center pl-6 pr-[35px] sm:px-5 py-[15px] text-base text-blue_gray-200 tracking-[0.48px] w-full"
                    size="txtInterMedium16"
                  >
                    NAME
                  </Text>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                      size="txtInterMedium18"
                    >
                      Michael Owen
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                      size="txtInterMedium18"
                    >
                      Darwin Nunez
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                      size="txtInterMedium18"
                    >
                      Firmino Anderson
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                      size="txtInterMedium18"
                    >
                      Joe Henderson
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                      size="txtInterMedium18"
                    >
                      Arnold Po
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-base text-center tracking-[0.48px] w-[82px]"
                    shape="square"
                    color="gray_900_05"
                    size="md"
                  >
                    AGE
                  </Button>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px]"
                      size="txtInterMedium18"
                    >
                      24
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px]"
                      size="txtInterMedium18"
                    >
                      25
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px]"
                      size="txtInterMedium18"
                    >
                      24
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px]"
                      size="txtInterMedium18"
                    >
                      28
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px]"
                      size="txtInterMedium18"
                    >
                      22
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[219px]">
                  <Text
                    className="bg-gray-900_05 justify-center pl-6 pr-[35px] sm:px-5 py-[15px] text-base text-blue_gray-200 tracking-[0.48px] w-full"
                    size="txtInterMedium16"
                  >
                    JOINED
                  </Text>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                      size="txtInterMedium18"
                    >
                      November 25, 2022
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                      size="txtInterMedium18"
                    >
                      November 25, 2022
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                      size="txtInterMedium18"
                    >
                      November 26, 2022
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                      size="txtInterMedium18"
                    >
                      November 26, 2022
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                    <Text
                      className="text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                      size="txtInterMedium18"
                    >
                      November 27, 2022
                    </Text>
                  </div>
                </div>
              </List>
              <div className="flex flex-col h-[324px] md:h-auto items-start justify-start w-auto">
                <Text
                  className="bg-gray-900_05 justify-center pl-6 pr-[35px] sm:px-5 py-[15px] text-base text-blue_gray-200 tracking-[0.48px] w-full"
                  size="txtInterMedium16"
                >
                  STATUS
                </Text>
                <div className="flex flex-col h-full items-center justify-center sm:px-5 px-6 py-4 w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[72px] text-center text-lg tracking-[0.18px]"
                    color="green_A400_19"
                    size="xs"
                  >
                    Active
                  </Button>
                </div>
                <div className="flex flex-col h-full items-center justify-center sm:px-5 px-6 py-4 w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[72px] text-center text-lg tracking-[0.18px]"
                    color="green_A400_19"
                    size="xs"
                  >
                    Active
                  </Button>
                </div>
                <div className="flex flex-col h-full items-center justify-center sm:px-5 px-6 py-4 w-full">
                  <Text
                    className="bg-red-500_19 justify-center pt-1.5 px-2 rounded text-lg text-red-500 tracking-[0.18px] w-auto"
                    size="txtInterMedium18Red500"
                  >
                    Pending
                  </Text>
                </div>
                <div className="flex flex-col h-full items-center justify-center sm:px-5 px-6 py-4 w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[72px] text-center text-lg tracking-[0.18px]"
                    color="green_A400_19"
                    size="xs"
                  >
                    Active
                  </Button>
                </div>
                <div className="flex flex-col h-full items-center justify-center sm:px-5 px-6 py-4 w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[72px] text-center text-lg tracking-[0.18px]"
                    color="green_A400_19"
                    size="xs"
                  >
                    Active
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="bg-gray-900_05 justify-center pl-6 pr-[35px] sm:px-5 py-[15px] text-base text-blue_gray-200 tracking-[0.48px] w-full"
                  size="txtInterMedium16"
                >
                  EMAIL
                </Text>
                <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                  <a
                    href="mailto:elizabethcass@gmail.com"
                    className="font-medium text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>owencass@gmail.com</Text>
                  </a>
                </div>
                <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                  <a
                    href="mailto:elizabethcass@gmail.com"
                    className="font-medium text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>nunezcass@gmail.com</Text>
                  </a>
                </div>
                <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                  <Text
                    className="text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                    size="txtInterMedium18"
                  >
                    firminocass@gmail.com
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                  <Text
                    className="text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                    size="txtInterMedium18"
                  >
                    hendersoncass@gmail.com
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-4 w-full">
                  <Text
                    className="text-blue_gray-200 text-lg tracking-[0.18px] w-auto"
                    size="txtInterMedium18"
                  >
                    arnoldpocass@gmail.com
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start md:ml-[0] ml-[95px] mt-[22px] w-1/4 md:w-full">
              <Button className="cursor-pointer font-medium leading-[normal] min-w-[32px] rounded-md text-base text-center tracking-[0.16px]">
                1
              </Button>
              <Button
                className="cursor-pointer font-medium h-[35px] leading-[normal] ml-2 rounded-md text-base text-center tracking-[0.16px] w-[34px]"
                variant="outline"
              >
                2
              </Button>
              <Button
                className="cursor-pointer font-medium h-[35px] leading-[normal] ml-2 rounded-md text-base text-center tracking-[0.16px] w-[35px]"
                variant="outline"
              >
                3
              </Button>
              <Button
                className="cursor-pointer font-medium h-[35px] leading-[normal] ml-2 rounded-md text-base text-center tracking-[0.16px] w-[35px]"
                variant="outline"
              >
                4
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[43px] ml-[67px] rounded-md text-base text-center tracking-[0.16px]"
                variant="outline"
              >
                10
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CameleonComingSoonPage;

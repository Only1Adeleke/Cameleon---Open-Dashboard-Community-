import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

type Sidebar1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;
type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const Sidebar1: React.FC<Sidebar1Props> = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

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
        <Text className="bg-blue_gray-900 font-inter font-medium justify-center px-1.5 rounded-[10px] text-[13px] text-light_blue-A200 tracking-[-0.52px] w-12">
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
        <Text className="bg-red-600_01 font-inter font-medium justify-center px-1.5 rounded-[10px] text-[13px] text-white-A700 tracking-[-0.52px] w-[35px]">
          10+
        </Text>
      ),
    },
  ];

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <Img
          className="h-16 mt-10 mx-auto"
          src="images/img_logo.svg"
          alt="logo"
        />
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              gap: "12px",
              color: "#adb2cc",
              fontWeight: 500,
              fontSize: "14px",
              fontFamily: "Inter",
              paddingLeft: "28px",
              paddingRight: "28px",
              [`&:hover, &.ps-active`]: { color: "#41baff" },
            },
          }}
          className="flex flex-col items-center justify-start mb-7 mt-[47px] md:pr-10 sm:pr-5 pr-[54px] w-[82%]"
        >
          <div className="flex flex-col gap-[15px] items-center justify-start w-full">
            <Text
              className="text-[10px] text-blue_gray-600 uppercase"
              size="txtInterRegular10"
            >
              Main Menu
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
          </div>
          <Line className="bg-blue_gray-600_87 h-px mt-10 w-full" />
          <div className="flex flex-col gap-3.5 items-center justify-start mt-[35px] w-full">
            <Text
              className="text-[10px] text-blue_gray-600 uppercase"
              size="txtInterRegular10"
            >
              WORKS
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <MenuItem
                icon={
                  <Img
                    className="h-full w-5"
                    src="images/img_iconlybulkbookmark.svg"
                    alt="iconlybulkbookm"
                  />
                }
              >
                <Text className="mt-0.5 tracking-[-0.14px] w-auto">
                  Bookmarks
                </Text>
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    className="h-5 w-5"
                    src="images/img_iconlybulkvideo.svg"
                    alt="iconlybulkvideo"
                  />
                }
              >
                <Text className="tracking-[-0.14px] w-auto">Conferences</Text>
              </MenuItem>
            </div>
          </div>
          <Line className="bg-blue_gray-600_87 h-px mt-10 w-full" />
          <div className="flex flex-col gap-[15px] items-center justify-start mt-[35px] w-full">
            <Text
              className="text-[10px] text-blue_gray-600 uppercase"
              size="txtInterRegular10"
            >
              OPTIONS
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <MenuItem
                icon={
                  <Img
                    className="h-5 w-5"
                    src="images/img_iconlybulksetting.svg"
                    alt="iconlybulksetti"
                  />
                }
              >
                <Text className="mt-[3px] tracking-[-0.14px] w-auto">
                  Settings
                </Text>
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    className="h-5 w-5"
                    src="images/img_iconlybulkinfo.svg"
                    alt="iconlybulkinfo"
                  />
                }
              >
                <Text className="tracking-[-0.14px] w-auto">About</Text>
              </MenuItem>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[562px] w-full">
            <MenuItem
              icon={
                <Img
                  className="h-5 w-5"
                  src="images/img_lucidesunmoon.svg"
                  alt="lucidesunmoon"
                />
              }
            >
              <Text className="text-[10px] text-blue_gray-600 uppercase w-auto">
                Light Mode
              </Text>
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;

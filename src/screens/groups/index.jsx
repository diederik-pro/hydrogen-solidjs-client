import { FaSolidPlus } from "solid-icons/fa";
import { BsPlusSquareDotted } from 'solid-icons/bs'
import { BiSolidGroup } from 'solid-icons/bi'
import { HiSolidUserGroup } from 'solid-icons/hi'
import { NavLink, Outlet } from "solid-app-router";
import { For } from "solid-js";
export default function GroupsLayout() {
  return (
    <div>
      <ul className="px-2 sm:px-4 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 md:hidden">
        <For each={tabs}>
          {(tab) => (
            <li>
              <NavLink
                href={tab.href}
                className="flex items-center justify-between  py-2 px-2 rounded-lg dark:text-white"
                end={tab.end}
                activeClass="bg-blue-200 dark:bg-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex place-items-center p-2 bg-blue-500 rounded-full text-white text-xl">
                    {tab.icon()}
                  </div>
                  <p>{tab.name}</p>
                </div>
              </NavLink>
            </li>
          )}
        </For>
      </ul>

      <div
        className={`h-screen fixed top-14 md:w-1/4 xl:w-1/5 hidden py-4 md:block left-0 bg-white dark:bg-gray-800 shadow border-r dark:border-gray-700 dark:text-white px-2`}
      >
        <h2 class="font-semibold text-2xl">Groups</h2>

        <ul className="mt-4">
          <For each={tabs}>
            {(tab) => (
              <li>
                <NavLink
                  href={tab.href}
                  className="flex items-center justify-between  py-2 px-2 rounded-lg"
                  end={tab.end}
                  activeClass="bg-blue-100 dark:bg-gray-700"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex place-items-center p-2 bg-blue-500 rounded-full text-white text-xl">
                      {tab.icon()}
                    </div>
                    <p>{tab.name}</p>
                  </div>
                </NavLink>
              </li>
            )}
          </For>
        </ul>
      </div>

      <div className="w-full md:w-3/4 xl:w-4/5 ml-auto dark:text-white">
        <Outlet />
      </div>
    </div>
  );
}

const tabs = [
  {
    name: "All Groups",
    href: "",
    icon: () => <BiSolidGroup />,
    end: true,
  },

  {
    name: "Discover",
    href: "discover",
    icon: () => <HiSolidUserGroup />,
    end: false,
  },
  {
    name: "Create New Group",
    href: "create",
    icon: () => <BsPlusSquareDotted />,
    end: false,
  },
];
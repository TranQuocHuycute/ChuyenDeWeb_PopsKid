import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Episode = [
  { id: 1, name: 'tap 1' },
  { id: 2, name: 'Mùa 2 - 2022 (Hoạt Hình)' },
  { id: 3, name: 'Mùa 1: Tập 1 - 50' },
]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Option() {
  const [optionValue, setOptionValue] = useState(0)
  console.log(optionValue)
  const handleOptions = (id, name) => {
    setOptionValue({ id: id, name: name })
  }

  return (
    <Menu
      as="div"
      className="relative flex  md:text-left md:w-full md:mb-5 mb-5 "
    >
      <Menu.Button className=" flex ml-5 md:inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 md:text-sm md:font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none ">
        {optionValue == 0 ? Episode[0].name : optionValue.name}
        <ChevronDownIcon className="-mr-1 ml-5 h-5 w-5" aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute  top-11 left-5 z-10 origin-top-right md:w-full bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {Episode.map((i) => (
              <Menu.Item key={i.id}>
                {optionValue.id == i.id ? (
                  <a
                    href="#"
                    onClick={() => handleOptions(i.id, i.name)}
                    className="block px-4 py-2 text-[#ea6016] border-b-2 border-[#ea6016] mx-1 p-4 text-lg"
                  >
                    {i.name}
                  </a>
                ) : (
                  <a
                    href="#"
                    onClick={() => handleOptions(i.id, i.name)}
                    className="block px-4 py-2  mx-1 p-4 text-lg"
                  >
                    {i.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

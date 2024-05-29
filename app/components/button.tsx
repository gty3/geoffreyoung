export function ButtonLight({ children, ...props}: any) {
  return (
    <button
    {...props}
    type="button"
    className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
    data-hs-overlay="#hs-focus-custom-modal"
  >
    {children}
  </button>
  )
}

export function ButtonDark({ children, ...props}: any) {
  return (
    <button
    {...props}
    type="button"
    className="inline-flex bg-[#27272a] text-[#67676d] justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
    data-hs-overlay="#hs-focus-custom-modal"
  >
    {children}
  </button>
  )
}
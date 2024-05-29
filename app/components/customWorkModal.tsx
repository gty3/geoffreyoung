"use client"

import { useEffect, useRef } from "react"

export default function CustomWorkModal() {
  const emailRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    //@ts-ignore
    import("preline")
  }, [])

  const submitEmail = async () => {
    console.log(emailRef.current)

    if (!emailRef.current || !nameRef.current || !descriptionRef.current) {
      return
    }

    
    const emailSubmitted = await fetch("/api/customRequest", {
      method: "POST",
      body: JSON.stringify({
        email:  emailRef.current.value,
        name: nameRef.current.value,
        description: descriptionRef.current.value,
      })
    })
    console.log(emailSubmitted)
  }

  return (
    <>
      <button
        type="button"
        className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
        data-hs-overlay="#hs-focus-custom-modal"
      >
        Contact for custom work
        <svg
          className="w-2.5 h-2.5"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div
        id="hs-focus-custom-modal"
        className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                  Got something in mind?
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  We can build your custom animation
                </p>
              </div>

              <div className="mt-5">
                <form onSubmit={submitEmail}>
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        // for="email"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Name
                      </label>
                      <div className="relative">
                        <input
                        ref={nameRef}
                          // type="email"
                          // id="email"
                          // name="email"
                          className="py-3 px-4 block w-full border-gray-200 focus:outline-gray-500 outline outline-1 outline-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                          required
                          // aria-describedby="email-error"
                        ></input>
                        <div className="hidden absolute inset-y-0 right-0 items-center pointer-events-none pr-3">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      {/* <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="email-error"
                      >
                        Please include a valid email address so we can get back
                        to you
                      </p> */}
                    </div>
                    <div>
                      <label
                        // for="email"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Email address
                      </label>
                      <div className="relative">
                        <input
                        ref={emailRef}
                          type="email"
                          id="email"
                          name="email"
                          className="py-3 px-4 block w-full border-gray-200 focus:outline-gray-500 outline outline-1 outline-gray-200 rounded-md  focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                          required
                          aria-describedby="email-error"
                        ></input>
                        <div className="hidden absolute inset-y-0 right-0 items-center pointer-events-none pr-3">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="email-error"
                      >
                        Please include a valid email address so we can get back
                        to you
                      </p>
                    </div>
                    <div>
                      <label
                        // for="email"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Describe what you&apos;re looking for
                      </label>
                      <div className="relative">
                        <textarea
                        ref={descriptionRef}
                          rows={3}
                          // type="email"
                          // id="email"
                          // name="email"
                          className="py-3 px-4 block w-full border-gray-200 focus:outline-gray-500 outline outline-1 outline-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                          required
                          aria-describedby="email-error"
                        ></textarea>
                        <div className="hidden absolute inset-y-0 right-0 items-center pointer-events-none pr-3">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="email-error"
                      >
                        Please include a valid email address so we can get back
                        to you
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      // onClick={notifyMeHandler}
                    >
                      Get a quote{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

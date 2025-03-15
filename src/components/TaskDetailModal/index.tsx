import { useRef } from "react"
import Modal from "../Modal"

export default function TaskDetailModal({ open, onClose }: { open: boolean, onClose: () => void}) {

  const ref = useRef<HTMLDivElement>(null)

  const info = true

  return (
    <Modal open={open}>
      <div
        className="flex w-screen h-full justify-center items-start"
        onClick={(e) => (!ref.current?.contains(e.target as Node)) ? onClose() : ''}
      >
        {
          info ?
            <div className={`flex w-screen h-full justify-center items-start py-12 ${open ? 'overflow-auto' : 'overflow-hidden'}`}>
              <div className="flex flex-col w-[85%] lg:w-1/2 h-auto py-8 bg-white rounded-lg " ref={ref}>
                <div className="flex text-black justify-center items-center">
                  Click outside to exit
                </div>
              </div>
            </div> :

            <div className={`flex w-screen h-full justify-center items-start py-12 ${open ? 'overflow-auto' : 'overflow-hidden'}`}>
              <div className="flex flex-col w-[85%] lg:w-1/2 h-auto p-8 bg-white rounded-lg " ref={ref}>
                
              <div className="max-w-sm animate-pulse">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
              </div>
              </div>
            </div>
        }
      </div>
    </Modal>
    )
}
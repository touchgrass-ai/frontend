import { useEffect, useRef } from "react"
import Modal from "../Modal"
import { motion } from "motion/react"
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

export default function TaskDetailModal({ open, onClose }: { open: boolean, onClose: () => void}) {

  const ref = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const info = true

  const taskType = "breakfast" // attraction
  const taskDetail = "Lune Crossainterie"
  const rewardType = "exp" // or currency or bonus
  const reward = 250
  const completionCriteria = "photo"

  const taskLocation = [] // lon, lat
  const userLocation: unknown = []

  useEffect(() => {
    // Call the element loader only on the client side
    if (typeof window !== 'undefined') {
      defineCustomElements(window);
    }
  }, []);

  const createTaskTitle = (taskType: string, taskDetail: string) => {
    
    let title = ""
    
    if (['breakfast', 'lunch', 'dinner'].includes(taskType)) {
      title = "Eat at"
    } else if (taskType === 'attraction') {
      title = "Visit"
    }

    return (title + " " + taskDetail)
  }

  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      saveToGallery: false,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri
    });
  
    if (imgRef.current && image.webPath) {
      imgRef.current.src = image.webPath
    }
  };

  const onSubmit = () => {

  }

  return (
    <Modal open={open}>
      <div
        className="flex w-screen h-full justify-center items-start"
        onClick={(e) => (!ref.current?.contains(e.target as Node)) ? onClose() : ''}
      >
        <div className={`flex w-screen h-full justify-center items-start py-12 ${open ? 'overflow-auto' : 'overflow-hidden'}`}>
          <div className="flex flex-col w-[85%] lg:w-1/2 h-auto bg-white rounded-lg p-5 text-black space-y-2" ref={ref}>
            <div className="font-bold text-2xl">
              {createTaskTitle(taskType, taskDetail)}
            </div>
            <div className="text-lg">Task type: {taskType}</div>
            <div className="text-lg">Completion criteria: {completionCriteria}</div>
            <motion.div
              className="flex justify-center items-center rounded-lg w-32 h-12 bg-[#F50B57] text-white my-2"
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
              onClick={takePhoto}
            >
              Take a photo
            </motion.div>
            <img ref={imgRef} className="flex justify-center items-center rounded-lg" />
            <motion.button
              disabled={true}
              className="flex justify-center items-center rounded-lg w-32 h-12 bg-[#F50B57] text-white my-2"
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
              onClick={onSubmit}
            >
              Submit
            </motion.button>
          </div>
        </div>
      </div>
    </Modal>
    )
}
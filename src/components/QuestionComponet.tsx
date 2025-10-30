import { useState } from "react";
import type { QuestionType } from "../types/QuestionType";

interface QuestionComponetProps {
  ques: QuestionType;
}

const QuestionComponet = ({ ques }: QuestionComponetProps) => {
  const [icon, setIcon] = useState<boolean>(false)

  return (
    <div className="flex flex-col gap-1">
      <div className="flex p-2 px-4 bg-[#2d2d2d] text-white justify-between">
        <div className="flex flex-col">
          <p>{ques.question}</p>
        </div>
        <div onClick={() => {
          setIcon(!icon)
        }}>{icon ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
          }
        </div>
      </div>
      <p className={`flex p-2 px-4 bg-[#2d2d2d] text-white justify-between ${icon ? "block" : "hidden"}`}>
        {ques.answer}</p>
    </div>

  )
}

export default QuestionComponet

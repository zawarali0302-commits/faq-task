import { useState } from "react";
import type { QuestionType } from "../types/QuestionType"
import QuestionComponet from "./QuestionComponet"
interface FaqComponentProps {
    questionsList: QuestionType[];
}
const FaqComponent = ({ questionsList }: FaqComponentProps) => {
    const [list, setList] = useState<QuestionType[]>(questionsList)

    return (
        <div className="flex flex-col bg-black p-4 gap-2">
            <h1 className="font-bold text-4xl text-white">Frequently Asked Questions</h1>
            {list.map((q) =>
                <ul>
                    <li key={q.id} className="flex flex-col gap-2"><QuestionComponet ques={q} /></li>
                </ul>
            )}
        </div>
    )
}

export default FaqComponent

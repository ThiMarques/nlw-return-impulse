import { useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CLoseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null)

    const feedbackTypeInfo = feedbackTypes[feedbackTypes];

  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu comentário</span>

        <CLoseButton/>
      </header>

      <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 "
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button> 
          )
        }) }
      </div>
    </>
  )
}
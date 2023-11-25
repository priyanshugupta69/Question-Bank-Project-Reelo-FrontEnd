const QuestionCard = ({keyIndex , question}) => {
   console.log(keyIndex)
    return (
      <div className="max-w-md my-10 mx-auto bg-white rounded-md overflow-hidden shadow-md">
        <div className="p-4">
          <div className="flex justify-between">
            <div className="text-left">
              <p className="text-sm"></p>
            </div>
            <div className="text-right">
              <p className="text-sm">Difficulty: {question.difficulty}</p>
              <p className="text-sm">Mark: {question.mark}</p>
              <p className="text-sm">Subject: {question.subject}</p>
              <p className="text-sm">Topic: {question.topic}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-base">{keyIndex+1}:{question.question.split(':')[1]}</p>
          </div>
        </div>
      </div>
    );
  };
export default QuestionCard
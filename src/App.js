import { useEffect, useState } from "react";
import QuestionCard from "./quesCard";
import axios from "axios"
function App() {
  const totalMark = 100;
  const PercentDIf = {
    Easy: 30,
    Medium: 30,
    Hard: 40
  };
  const [serverResponse, setServerResponse] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/getQuestionPaper?totalMark=${totalMark}&easy=${PercentDIf.Easy}&medium=${PercentDIf.Medium}&hard=${PercentDIf.Hard}`)
        setServerResponse(res.data)

      } catch (err) {
        console.log(err)
      }

    }
    getData()

  }, [])
  return (
    <div className="App bg-slate-600">
      <h1 className="text-center text-lg text-slate-200">Question Paper</h1>
      <div className="questionPaper">
        {serverResponse.map((question, index) => {
          return <QuestionCard keyIndex={index} question={question} />
        })}
      </div>

    </div>
  );
}

export default App;

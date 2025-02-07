import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import QuestionList from './QuestionList'
import { fetchQuizQuestions } from '../../../redux/store/actionCreators/actionCreators'

const Quiz = () => {
  const { quizQuestions, isLoading, error } = useSelector(
    (state) => state.quizQuestionsReducer
  )
  const dispatch = useDispatch()
  const [click, setClick] = useState(0)

  useEffect(() => {
    dispatch(fetchQuizQuestions())
  }, [click])

  const handleClickToFetch = () => {
    setClick((prev) => prev + 1)
  }

  if (error) {
    return <h3>{error}</h3>
  } else {
    return (
      <>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <div>
            <QuestionList
              reFetch={handleClickToFetch}
              questionsData={quizQuestions}
            />
          </div>
        )}
      </>
    )
  }
}

export default Quiz

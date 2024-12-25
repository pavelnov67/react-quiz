import { useState } from 'react'
import BlitzQuestion from './BlitzQuestion'
import styles from '../../ui.module.css'

const BlitzTheme = ({ title, id }) => {
  const [isActive, setIsActive] = useState(false)

  const blitzQuestions1 = [
    {
      id: 3,
      title: 'Это тестовый вопрос №1?',
      theme_id: 1,
      answer: 'это ответ на тестовый вопрос №1',
    },
    {
      id: 4,
      title: 'Это тестовый вопрос №2?',
      theme_id: 1,
      answer: 'Ответ на тестовый вопрос №2',
    },
  ]
  const blitzQuestions2 = [
    {
      id: 1,
      title: 'Как сильно меня заебали корсы?',
      theme_id: 2,
      answer: 'Меня рвёт уже поносом',
    },
    {
      id: 2,
      title: 'Хули тут так мало?',
      theme_id: 2,
      answer: 'На пенёк не садился',
    },
  ]

  const toggleButton = (idx) => {
    let questionList = []
    if (idx === 1) {
      questionList = blitzQuestions1
    } else {
      questionList = blitzQuestions2
    }
    return questionList
  }

  const handleButton = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={styles.blitz_theme_container}>
      <button className={styles.start_quiz_btn} onClick={handleButton}>
        {title}
      </button>
      {isActive && (
        <div>
          {toggleButton(id).map((question) => (
            <BlitzQuestion key={question.id} {...question} />
          ))}
        </div>
      )}
    </div>
  )
}

export default BlitzTheme

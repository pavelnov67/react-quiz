import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { fetchThemes } from '../../../redux/store/actionCreators/actionCreators';
import { base_URL } from '../../../variables/vars';
import styles from './blitz.module.css';
import BlitzQuestionsContainer from './BlitzQuestionsContainer';

const BlitzThemeItemContainer = ({ id, title, description, reFetchThemes }) => {
  const [questionData, setQuestionData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10; // Количество вопросов на странице

  const dispatch = useDispatch();

  const fetchQuestionsData = async (id, page = 1) => {
    const offset = (page - 1) * limit;
    try {
      const data = await axios.get(`${base_URL}/game/blitz.questions_list`, {
        params: {
          theme_id: id,
          limit: limit,
          offset: offset,
        },
      });
      setQuestionData(data.data.data.questions);
      setTotalPages(Math.ceil(data.data.data.total / limit));
      setIsActive(!isActive);
    } catch (err) {
      if (err.response?.status === 404) {
        toast.error('В данной теме нет вопросов');
      } else {
        toast.error(err.message);
      }
    }
  };

  const handleDelete = async (id) => {
    const instance = axios.create({
      timeout: 5000,
      headers: {
        accept: 'application/json',
      },
    });
    try {
      await instance.delete(
        `${base_URL}/game/blitz.themes_delete_by_id?theme_id=${id}`
      );
      dispatch(fetchThemes());
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const handleIsActive = (id) => {
    setIsActive(!isActive);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchQuestionsData(id, newPage);
  };

  return (
    <div className={styles.blitz_container}>
      <ToastContainer position="bottom-right" autoClose={2000} />
      <div className={styles.blitz_container}>
        {isActive ? (
          <>
            <BlitzQuestionsContainer
              questionData={questionData}
              reFetchQuestions={() => fetchQuestionsData(id, currentPage)}
              themeId={id}
              title={title}
            />
            <div className={styles.pagination}>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Назад
              </button>
              <span>
                Страница {currentPage} из {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Вперед
              </button>
            </div>
          </>
        ) : (
          <div className={styles.theme_item_container}>
            <div className={styles.blitz_theme_container}>
              <h3>
                Тема №{id}: {title}
              </h3>
              <p>Описание: {description}</p>
              <div className={styles.theme_item_btns_container}>
                <button
                  className={styles.edit_btn}
                  type="button"
                  onClick={() => fetchQuestionsData(id)}
                >
                  Редактировать
                </button>
                <button
                  className={styles.delete_btn}
                  type="button"
                  onClick={() => handleDelete(id)}
                >
                  Удалить тему
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {isActive && (
        <div className={styles.theme_item_btns_container}>
          <button
            className={styles.start_quiz_btn}
            type="button"
            onClick={handleIsActive}
          >
            Назад к темам
          </button>
        </div>
      )}
    </div>
  );
};

export default BlitzThemeItemContainer;

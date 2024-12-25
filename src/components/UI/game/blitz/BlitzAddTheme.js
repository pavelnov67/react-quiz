import { useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { base_URL } from '../../../variables/vars'

const BlitzAddTheme = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    onSubmit: (values) => {
      const instance = axios.create({
        timeout: 5000,
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      try {
        instance.post(`${base_URL}/game/blitz.themes_add`, values)
      } catch (err) {
        console.log(err.message)
      }
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Название темы</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <label htmlFor="description">Описание темы</label>
      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      <button type="submit">Сохранить</button>
    </form>
  )
}

export default BlitzAddTheme

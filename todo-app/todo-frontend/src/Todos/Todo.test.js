import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

describe('Testing Todo-app', () => {
  test('False', () => {
    const todo = { text: 'Change bedsheets', done: false }
    render(<Todo todo={todo} />)
    const todoText = screen.getByText('Thing to do: Change bedsheets')
    const doneText = screen.getByText('Done? No')
    expect(todoText).toBeDefined()
    expect(doneText).toBeDefined()
  })

  test('True', () => {
    const todo = { text: 'Change bedsheets', done: true }
    render(<Todo todo={todo} />)

    const doneText = screen.getByText('Done? Yes')

    expect(doneText).toBeDefined()
  })
})

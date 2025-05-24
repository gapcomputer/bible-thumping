import { describe, it, expect } from 'vitest'
import { hello } from './index'

describe('Multi-Agent Chatbot Platform', () => {
  it('returns a greeting', () => {
    expect(hello()).toBe('Hello, Multi-Agent Chatbot Platform!')
  })
})
import React from 'react'
import { render, screen } from '@testing-library/react'

import PostsList from './PostsList'

describe('PostsList component', () => {
  it('renders a ul', () => {
    render(<PostsList />)
    let list = screen.getByRole('list')

    expect(list).not.toBeNull()
  })
})

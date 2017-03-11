import 'react-native'
import React from 'react'
import Index from '../index.ios.js'
import configureMockStore from 'redux-mock-store' // mock store
import thunk from 'redux-thunk'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

xit('renders correctly', () => {
  fetch.mockResponse(JSON.stringify({ todos: [] }));

  const tree = renderer.create(
    <Index />
  )
})

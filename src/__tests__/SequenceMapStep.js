
import React from 'react'
import { shallow } from 'enzyme'
import { SequenceMapStep, LinkBlock, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', () => {
  wrapper = shallow(<SequenceMapStep />)
  inner = wrapper.first().shallow()
})

test('is a LinkBlock', () => {
  expect(inner.is(LinkBlock)).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('SequenceMapStep')
})

test('accepts custom className props', () => {
  wrapper = shallow(<SequenceMapStep className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('SequenceMapStep foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<SequenceMapStep style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<SequenceMapStep />, {
    context: {
      rebass: {
        SequenceMapStep: {
          marginLeft: 0
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  expect(inner.props().style.marginLeft).toBe(0)
})

test('style props override context styles', () => {
  wrapper = shallow(
    <SequenceMapStep
      color='blue'
      style={{
      color: 'tomato'
    }} />, {
    context: {
      rebass: {
        Arros: {
          color: 'magenta'
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

// import { expect } from 'chai'
// import { shallowMount } from '@vue/test-utils'
// import Form1 from '../src/components/Form1.vue'
const shallowMount = require('@vue/test-utils')
const Form1 = require('../src/components/Form1.vue')

describe('Form1.vue', () => {
  it('フォーム１', () => {
    const form1 = shallowMount(Form1)
    form1.find('#store').trigger('click')
    
    // expect(form1.find('div').text()).contains('1')
  })
})
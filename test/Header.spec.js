import { mount } from '@vue/test-utils'
import header from '@/components/Header.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(header)
    expect(wrapper.vm).toBeTruthy()
  })
})

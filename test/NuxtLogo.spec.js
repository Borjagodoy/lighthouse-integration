import { mount } from '@vue/test-utils'
import NuxtLogo from '@/components/Header.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Header)
    expect(wrapper.vm).toBeTruthy()
  })
})

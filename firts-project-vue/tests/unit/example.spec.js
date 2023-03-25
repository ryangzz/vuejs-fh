import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue';
describe('Primer test', () => {
  test('Un Numero debe ser mayor a 10', () => {
    const data = 102 + 2;
    
    // expect(data).toMatch(msg)
    expect(data).toBeGreaterThan(102)
  })
})

import {describe,it,expect} from 'vitest'
import Button from './Button.vue'
import {mount} from '@vue/test-utils'
describe("Button.vue",()=>{
  it("should has the correct type class when type prop is set", () => {
    const types = ["primary", "success", "warning", "danger", "info"];
    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: { type: type as any },
      });
      expect(wrapper.classes()).toContain(`zz-button--${type}`);
    });
  });
})
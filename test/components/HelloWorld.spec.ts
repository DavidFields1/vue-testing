import { describe, expect, test, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import Component from '../../src/components/HelloWorld.vue';

describe("Counter tests", () => {
    let wrapper = mount(Component)

    beforeEach(() => {
        wrapper = mount(Component)
    })
    
    test("should start counter at 0", () => {
        const incrementButton = wrapper.find('[data-test="incrementButton"]')
        expect(incrementButton.text()).toBe("count is 0")
    });
    test("should increment counter", async () => {
        const incrementButton = wrapper.find('[data-test="incrementButton"]')
        
        await incrementButton.trigger('click')
        expect(incrementButton.text()).toBe("count is 1")
    });
})
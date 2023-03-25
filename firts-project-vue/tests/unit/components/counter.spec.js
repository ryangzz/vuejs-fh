import { shallowMount } from "@vue/test-utils";
import Counter from '@/components/Counter.vue';

describe("Counter Component", ()=>{
  let wrapper;

  beforeEach(()=>{
    wrapper = shallowMount(Counter);
  })
  test("Comprobate Snapshot of the component", ()=>{
    expect(wrapper.html()).toMatchSnapshot();
  })
  test("Validate value Counter default", ()=>{
    expect(wrapper.find('h2')).toBeTruthy();
    const h2Value = wrapper.find("h2").text();
    expect(h2Value).toBe("Hola soy el contador");
  })
  test("el valor de counter por defecto de  100", ()=>{
    expect(wrapper.find('[data-id="counter"]')).toBeTruthy();
    const pValue  = wrapper.find('[data-id="counter"]').text();
    expect(pValue).toBe("1");
  })

  test("debe incrementar 1 y decrementar dos el counter", async ()=>{
    const [incrementar, descementar] = wrapper.findAll("button");
    await incrementar.trigger("click");
    let pValue = wrapper.find('[data-id="counter"]').text();
    expect(pValue).toBe("2");
    await descementar.trigger("click");
    await descementar.trigger("click");
    pValue = wrapper.find('[data-id="counter"]').text();
    expect(pValue).toBe("0");

  })

  test("evaluando los props counter", ()=>{
    const { start } = wrapper.props();
    let value = wrapper.find('[data-id="counter"]').text()*1;
    expect(start).toBe(value);
  })

  test("evaluando titulo contexto", ()=>{
    const title = "Hola soy el contador";
    const wrapper = shallowMount(Counter, {
      props:{
        title
      }
    });
    console.log(wrapper.find("h2").text(), title);
    expect(wrapper.find("h2").text()).toBe(title)
  });
});
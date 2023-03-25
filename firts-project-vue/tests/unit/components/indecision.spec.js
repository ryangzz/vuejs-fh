import { shallowMount } from "@vue/test-utils";
import Indecision from '@/components/Indecision.vue';
import { Promise } from "core-js";

describe("Indecision Component", ()=>{
  let wrapper;
  let spyLog;
  global.fetch  = jest.fn(()=> Promise.resolve({
    json:()=>Promise.resolve({
      answer:"Si!",
      forced:false,
      image:"https://yesno.wtf/assets/yes/2.gif"
    })
  }))
  beforeEach(()=>{
    wrapper = shallowMount(Indecision);
    spyLog  = jest.spyOn(console, 'log');
    jest.clearAllMocks();
  });

  test("creando match con el snapshot", ()=>{
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Validad que un spy se ejecute una vez", async()=>{
    const spyAnswer = jest.spyOn(wrapper.vm, 'getAnswer');
    const input = wrapper.find("input");
    await input.setValue("Hola Mundo?");
    expect(spyLog).toHaveBeenCalledTimes(1);
    expect(spyAnswer).toHaveBeenCalled();
  })

  test("pruebas en getAnswer", async ()=>{
    await wrapper.vm.getAnswer();
    const img = wrapper.find('img');
    expect(img.exists()).toBeTruthy();
    expect(wrapper.vm.image).toBe("https://yesno.wtf/assets/yes/2.gif");
    expect(wrapper.vm.answer).toBe("Si!");
  })

  test("pruebas en getAnswer si falla", async()=>{
    fetch.mockImplementationOnce(()=>Promise.reject("API is Down"));
    await wrapper.vm.getAnswer();
    const img = wrapper.find("img");
    expect(img.exists()).toBeFalsy();
    expect(wrapper.vm.answer).toBe("No se pudo cargar Api");
  })
})
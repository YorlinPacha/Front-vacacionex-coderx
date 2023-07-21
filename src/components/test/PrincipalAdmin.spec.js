import { mount } from '@vue/test-utils';
import PrincipalAdmin from '@/components/PrincipalAdmin.vue';


describe('Empezar a testear PrincipalAdmin.vue', () => {
  it('Prueba si el componente PrincipalAdmin se renderiza correctamente', () => {
    const wrapper = mount(PrincipalAdmin, {
      propsData: {
        ID: 1,
        Name: 'Jorge',
        Position: 'user',
        Senority: '05/12/2019'
      }
    });
    expect(wrapper.exists()).toBeTruthy();
  });
});
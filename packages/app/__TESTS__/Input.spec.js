import Input from '../components/Input';

describe('Input', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Input />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

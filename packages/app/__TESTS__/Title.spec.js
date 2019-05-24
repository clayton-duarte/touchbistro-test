import Title from '../components/Title';

describe('Title', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Title />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

import Home from '../pages';

describe('Home', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Home />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

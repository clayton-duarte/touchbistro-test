import Home from '../pages';

describe('Home', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Home />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

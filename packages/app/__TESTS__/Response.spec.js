import Response from '../components/Response';

describe('Response', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Response />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with elements inside', () => {
    const wrapper = render(
      <Response response={[12, 23, 34]} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

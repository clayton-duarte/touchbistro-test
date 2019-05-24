import Container from '../components/Container';

describe('Container', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Container />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

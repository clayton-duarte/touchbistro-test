import Button from '../components/Button';

describe('Button', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Button />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

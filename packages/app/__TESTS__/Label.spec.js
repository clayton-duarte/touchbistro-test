import Label from '../components/Label';

describe('Label', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Label />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

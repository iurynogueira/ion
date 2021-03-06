import { fireEvent, render, screen } from '@testing-library/angular';
import { TabComponent, TabSize, Direction } from './tab.component';

const defaultName = 'MinhaTab';

const sut = async (customProps?: {
  label: string;
  tabSize?: TabSize;
  disabled?: boolean;
  direction?: Direction;
}) => {
  await render(TabComponent, {
    componentProperties: customProps || {
      label: defaultName,
    },
  });
};

describe('TabComponent', () => {
  it.each(['about', 'profile'])(
    'should render label %s',
    async (tabName: string) => {
      await sut({ label: tabName });
      expect(screen.getAllByText(tabName)).toHaveLength(1);
    }
  );

  it.each(['sm', 'md', 'lg'])(
    'should render with correct size %s',
    async (size: TabSize) => {
      await sut({ label: 'Tab', tabSize: size });
      expect(screen.getByText('Tab')).toHaveClass('tab-' + size);
    }
  );

  it.each(['bottom', 'top', 'right', 'left'])(
    'should render with correct border direction %s',
    async (direction: Direction) => {
      await sut({ label: 'Tab', direction: direction });
      expect(screen.getByText('Tab')).toHaveClass('border-' + direction);
    }
  );

  it('should click on tab', async () => {
    await sut();
    const myTab = screen.getByText(defaultName);
    fireEvent.click(myTab);
    expect(myTab).toHaveClass('tab-selected');
  });

  it('should render tab without disabled by default', async () => {
    await sut();
    expect(screen.getByText(defaultName)).toBeEnabled();
  });

  it('should render tab disabled', async () => {
    await sut({ label: defaultName, disabled: true });
    expect(screen.getByText(defaultName)).toBeDisabled();
  });
});

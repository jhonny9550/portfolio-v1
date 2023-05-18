import { render, screen } from '@testing-library/react';
import Drawer from '../../app/components/Drawer';
import '@testing-library/jest-dom';

describe('Drawer', () => {
  it('Should render drawer inside screen', () => {
    render(<Drawer open={true} />);

    const drawer = screen.getByTestId('drawer');
    expect(drawer).toHaveClass('translate-x-0');
  });

  it('Should render drawer outside screen', () => {
    render(<Drawer open={false} />);

    const drawer = screen.getByTestId('drawer');
    expect(drawer).toHaveClass('translate-x-full');
  });
});

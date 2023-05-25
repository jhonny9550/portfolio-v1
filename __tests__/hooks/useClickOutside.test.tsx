import { fireEvent, render, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';
import useOnClickOutside from '@/app/hooks/useClickOutside';
import { createRef } from 'react';

describe('useClickOutside', () => {
  it('should call outside click handler when clicking outside', () => {
    const handler = jest.fn();
    const ref = createRef<HTMLDivElement>();
    render(<div ref={ref} />);

    renderHook(() => useOnClickOutside(ref, handler));
    fireEvent.mouseDown(document);

    expect(handler).toHaveBeenCalled();
  });

  it('should not call click handler when clicking inside wrapper', () => {
    const handler = jest.fn();
    const ref = createRef<HTMLDivElement>();
    render(<div ref={ref} />);

    renderHook(() => useOnClickOutside(ref, handler));
    fireEvent.mouseDown(ref.current as HTMLElement);

    expect(handler).not.toHaveBeenCalled();
  });
});

import { render, screen } from '@testing-library/react';
import { Counter } from './counter';


describe('Counter', () => {
    it('test it render correctly', () => {
        render(<Counter />);

        const counterElement = screen.getByRole('heading');

        expect(counterElement).toBeInTheDocument();

        const incrementButton = screen.getByRole('button', {
            name: "Increment"
        });
        expect(incrementButton).toBeInTheDocument();
    });


    test('render a count to 0', () => {
        render(<Counter />);

        const counterElement = screen.getByRole("heading");

        expect(counterElement).toHaveTextContent(0);
    })
})

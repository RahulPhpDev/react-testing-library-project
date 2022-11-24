import { fireEvent, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Counter } from './counter';


describe('Counter', () => {

    // beforeEach( () => {
    //     render(<Counter />);
    // })
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
    });

    test('increase counter after click button', async() => {
       user.setup();
        render(<Counter />);
        const incrementButton  =   screen.getByRole("button", {
            name: "Increment"
        });
       await user.click(incrementButton);
       const counterElement = screen.getByRole("heading");
       expect(counterElement).toHaveTextContent('1');
    });

    test('render input type for set count', () => {
        render( <Counter />);
        
        const inputNode = screen.getByRole('textbox');
        expect(inputNode).toBeInTheDocument();
    });

    test('render a set button', () => {
        render(<Counter />);

        const buttonRole = screen.getByRole('button', {
            name: 'Set'
        });

        expect(buttonRole).toBeInTheDocument();
    });

    test('set by 10 after have value in input and click set button' , async() => {
        user.setup();
        render(<Counter />);
        const inputNode = screen.getByRole('textbox');
        const inputValue = '10';
      await  user.type(inputNode, inputValue)
        // fireEvent.change(inputNode, {target: {value: 10}});
        expect(inputNode).toHaveValue(inputValue);

        const buttonElement = screen.getByRole('button', {
            name: /set/i
        })
        expect(buttonElement).toBeInTheDocument();
        await user.click(buttonElement);
        const counterElement = screen.getByRole("heading");
       expect(counterElement).toHaveTextContent(inputValue);



    });

})

import { render , screen } from '@testing-library/react';

import  Skills  from './skills';

describe('Skills', () => {
 const skills = ['HTML', 'JS', 'React', 'VUE'];

    test("render correctly", () => {
        render( <Skills skills ={skills} /> )
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    });

    it("renders a list of skills", () => {
        render( <Skills skills ={skills} /> );
        const listItem = screen.getAllByRole('listitem');
        expect(listItem).toHaveLength(skills.length);
    });

    it('render login Button', () => {
        render( <Skills skills ={skills} /> );
        const loginButtonElement = screen.getByRole('button', {
            name: 'Login'
        });
        expect(loginButtonElement).toBeInTheDocument();
    });

    it('start learning button is eventually displayed', async () => {
        render(<Skills skills={skills} />)
        const startLearningButton  = await screen.findByRole('button',
                                            {name: 'Start Learning'}, 
                                            {timeout: 2000}
                                        );
        expect(startLearningButton).toBeInTheDocument();
    });
});
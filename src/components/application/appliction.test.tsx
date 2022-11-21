import { render, screen } from "@testing-library/react";
import Application from "./application";

describe('Application  render', () => {
    test('render correctly', () => {
        render(<Application />);

        const pageHeading = screen.getByRole('heading', {
            name: 'Job application form'
        });
        expect(pageHeading).toBeInTheDocument();

        const nameElement = screen.getByRole('textbox', {
            name:"Name"
        });
        expect(nameElement).toBeInTheDocument();

        const jobLocation = screen.getByRole('combobox');
        expect(jobLocation).toBeInTheDocument();

        const termElement = screen.getByRole('checkbox');
        expect(termElement).toBeInTheDocument();


        
        const submitButtonElement = screen.getByRole('button');
        expect(submitButtonElement).toBeInTheDocument();

    });
});
import { render, screen, waitFor } from "@testing-library/react"
import TestingStateChange from "../components/TestingStateChange"
import userEvent from '@testing-library/user-event'

test("Testing page load", () => {
    render(<TestingStateChange/>)

    expect(screen.getByText(/page loaded/i)).toBeInTheDocument();
})

test("Toggle text visible", async () => {
    render(<TestingStateChange/>);
    await userEvent.click(screen.getByText(/toggle text/i));
    expect(screen.getByText(/text visible/i)).toBeInTheDocument();
})

test("Button disabled on click", async () => {
    render(<TestingStateChange/>)
    await userEvent.click(screen.getByText(/toggle button disabled/i));
    expect(screen.getByText(/toggle text/i)).toBeDisabled();
})

test("Element added to the list", async () => {
    render(<TestingStateChange/>)
    expect(screen.getAllByTestId('record').length).toBe(3);

    await userEvent.click(screen.getByText(/add to list/i));
    expect(screen.getAllByTestId('record').length).toBe(4);

    expect(screen.getByText(/abhinav/i)).toBeInTheDocument();
})

test("Element removed from list", async () => {
    render(<TestingStateChange/>)
    await userEvent.click(screen.getByText(/remove from list/i));
    expect(screen.getAllByTestId('record').length).toBe(2);
})


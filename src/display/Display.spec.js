// Test away!
import React from "react"
import { render } from "@testing-library/react"
import Display from "./Display"
import "@testing-library/jest-dom/extend-expect"

test("Display renders", ()=>{
    expect(render(<Display/>)).toMatchSnapshot();
})
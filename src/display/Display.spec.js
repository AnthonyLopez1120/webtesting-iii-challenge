// Test away!
import React from "react"
import { render } from "@testing-library/react"
import Display from "./Display"
import "@testing-library/jest-dom/extend-expect"

test("Display renders", ()=>{
    expect(render(<Display/>)).toMatchSnapshot();
})

test("Default setting is unlocked/open", ()=>{
    const { getByText } = render(<Display/>)
    getByText(/unlocked/i)
    getByText(/open/i)
})

test("Display if its open||closed and locked||unlocked",() =>{
    const { getByText } = render(<Display/>)
    getByText(/unlocked/i)||getByText(/locked/i)
    getByText(/open/i)||getByText(/closed/i)
})

test("Display 'closed' if closed prop is true " ,() =>{
    const { getByText } = render(<Display closed={true}/>)
    getByText(/closed/i)
})

test("Display 'open' if closed prop is false", ()=>{
    const { getByText } = render(<Display closed={false}/>)
    getByText(/open/i)
})

test("green-led class is used if open", ()=>{
    const { queryByText } = render(<Display closed={false}/>)
    const open = queryByText(/open/i)
    expect(open).toHaveClass("green-led")
})

test("red-led class is used if closed", ()=>{
    const { queryByText } = render(<Display closed={true}/>)
    const closed = queryByText(/closed/i)
    expect(closed).toHaveClass("red-led")
})

test("red-led class is used if locked",() =>{
    const { queryByText } = render(<Display locked={true}/>)
    const locked = queryByText(/locked/i)
    expect(locked).toHaveClass("red-led")
})
test("green-led class is used if unlocked",() =>{
    const { queryByText } = render(<Display locked={false}/>)
    const unlocked = queryByText(/unlocked/i)
    expect(unlocked).toHaveClass("green-led")
})
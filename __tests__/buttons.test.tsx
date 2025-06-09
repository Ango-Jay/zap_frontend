import { PrimaryButton } from '@/components/Buttons/PrimaryButton'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'


describe("button test", ()=>{
    test("priary button displays", ()=>{
     render(
        <PrimaryButton text='create' />
     );
     const button = screen.getByRole("button", {
        name: /create/i
     })
     expect(button).toBeTruthy()
    })
})
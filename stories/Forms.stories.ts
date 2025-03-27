import type {Meta, StoryObj} from '@storybook/html'

type FormsArgs = {};

const meta: Meta<FormsArgs> = {
    title: 'Base/Formularios',
    render: () => {
        const form = document.createElement('form')
        form.innerHTML =
            '<div class="mb-4">' +
            '<label for="exampleInputEmail1" class="at-label">Email address</label>' +
            '<input type="email" class="at-form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Placeholder text">' +
            '<div id="emailHelp" class="at-form-control-description">We\'ll never share your email with anyone else.</div>' +
            '</div>' +
            '<div class="mb-4">' +
            '<label for="exampleInputPassword1" class="at-label">Password</label>' +
            '<input type="password" class="at-form-control" id="exampleInputPassword1">' +
            '</div>' +
            '<div class="mb-4">' +
            '<label for="exampleFormControlTextarea1" class="at-label">Example textarea</label>' +
            '<textarea class="at-form-control is-textarea" id="exampleFormControlTextarea1" rows="3"></textarea>' +
            '</div>' +
            '<div class="md:flex md:gap-4">' +
            '<div class="md:w-1/2 mb-4">' +
            '<label for="disabledInput" class="at-label">Disabled input</label>' +
            '<input type="text" class="at-form-control" id="disabledInput" disabled>' +
            '</div>' +
            '<div class="md:w-1/2 mb-4">' +
            '<label for="readonlyInput" class="at-label">Readonly input</label>' +
            '<input type="text" class="at-form-control" id="readonlyInput" disabled readonly>' +
            '</div>' +
            '</div>' +
            '<div class="mb-4">' +
            '<label for="staticEmail" class="at-label">Readonly plain text</label>' +
            '<input type="text" readonly class="at-form-control is-plaintext" id="staticEmail" value="email@example.com">' +
            '</div>' +
            '<div class="mb-4">' +
            '<label for="formFile" class="at-label">File input</label>' +
            '<input class="at-form-control" type="file" id="formFile">' +
            '</div>' +
            '<div class="mb-4">' +
            '<label for="exampleColorInput" class="at-label">Color picker</label>' +
            '<input type="color" class="at-form-control is-color" id="exampleColorInput" value="#0000FF" title="Choose your color">' +
            '</div>' +
            '<div class="mb-4">' +
            '<label for="exampleDataList" class="at-label">Datalist</label>' +
            '<input class="at-form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">' +
            '<datalist id="datalistOptions">' +
            '<option value="Santiago de Compostela">' +
            '<option value="A Coruña">' +
            '<option value="Vigo">' +
            '<option value="Lugo">' +
            '<option value="Ourense">' +
            '<option value="Pontevedra">' +
            '</datalist>' +
            '</div>' +
            '<div class="mb-4">' +
            '<label for="exampleSelect" class="at-label">Select</label>' +
            '<select class="at-form-control is-select" id="exampleSelect">' +
            '<option selected>Open this select menu</option>' +
            '<option value="1">One</option>' +
            '<option value="2">Two</option>' +
            '<option value="3">Three</option>' +
            '</select>' +
            '</div>' +
            '<div class="md:flex md:gap-4">' +
            '<div class="md:w-1/3 mb-4">' +
            '<input class="at-form-control is-check" type="checkbox" value="" id="flexCheckDefault">' +
            '<label class="at-label" for="flexCheckDefault">Checkbox</label>' +
            '</div>' +
            '<div class="md:w-1/3 mb-4">' +
            '<input class="at-form-control is-check" type="radio" name="flexRadioDefault" id="flexRadioDefault1">' +
            '<label class="at-label" for="flexRadioDefault1">Radio</label>' +
            '</div>' +
            '</div>' +
            '<div class="mb-4">' +
            '<label for="customDate1" class="at-label">Date</label>' +
            '<input type="date" class="at-form-control" id="customDate1">' +
            '</div>' +
            '<fieldset class="ml-fieldset mb-4">' +
            '<legend>Validation</legend>' +
            '<div class="mb-4">' +
            '<label for="exampleInputEmail2" class="at-label">Email address</label>' +
            '<input type="email" class="at-form-control is-invalid" id="exampleInputEmail2" aria-describedby="emailHelp2 emailValidation2" value="email@test.com">' +
            '<div id="emailHelp2" class="at-form-control-description">We\'ll never share your email with anyone else.</div>' +
            '<div id="emailValidation2" class="at-form-control-description is-invalid">The provided email is not valid.</div>' +
            '</div>' +
            '<div class="mb-4">' +
            '<label for="exampleInputPassword2" class="at-label">Password</label>' +
            '<input type="password" class="at-form-control is-valid" id="exampleInputPassword2" aria-describedby="passwordValidation2">' +
            '<div id="passwordValidation2" class="at-form-control-description is-valid">The provided password is valid.</div>' +
            '</div>' +
            '</fieldset>' +
            '<button type="submit" class="at-button is-primary">Submit</button>'

        return form
    },
    argTypes: {},
    args: {},
}

export default meta

type Story = StoryObj<FormsArgs>;

export const Single: Story = {
    args: {},
}

import type {Meta, StoryObj} from '@storybook/html'

type FormsArgs = {};

const meta: Meta<FormsArgs> = {
    title: 'Base/Formularios',
    render: () => {
        const form = document.createElement('form')
        form.innerHTML =
            '<div class="mb-4">' +
            '<label for="exampleInputEmail1" class="at-small">Email address</label>' +
            '<input type="email" class="block w-full" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Placeholder text">' +
            '<div id="emailHelp" class="at-small">We\'ll never share your email with anyone else.</div>' +
            '</div>' +
            '<div class="mb-4">' +
            '<label for="exampleInputPassword1" class="at-small">Password</label>' +
            '<input type="password" class="block w-full" id="exampleInputPassword1">' +
            '</div>' +
            '<div class="mb-4">' +
            '<label for="exampleFormControlTextarea1" class="at-small">Example textarea</label>' +
            '<textarea class="block w-full" id="exampleFormControlTextarea1" rows="3"></textarea>' +
            '</div>' +
            '<div class="md:flex md:gap-4">' +
            '<div class="md:w-1/2 mb-4">' +
            '<label for="disabledInput" class="at-small">Disabled input</label>' +
            '<input type="text" class="block w-full" id="disabledInput" disabled>' +
            '</div>' +
            '<div class="md:w-1/2 mb-4">' +
            '<label for="readonlyInput" class="at-small">Readonly input</label>' +
            '<input type="text" class="block w-full" id="readonlyInput" disabled readonly>' +
            '</div>' +
            '</div>' +
            '<div class="mb-4">' +
            '<label for="formFile" class="at-small">File input</label>' +
            '<input class="form-input block w-full" type="file" id="formFile">' +
            '</div>' +
            '<div class="mb-4">' +
            '<label for="exampleColorInput" class="at-small">Color picker</label>' +
            '<input type="color" class="h-10 w-10 p-2" id="exampleColorInput" value="#0000FF" title="Choose your color">' +
            '</div>' +
            '<div class="mb-4">' +
            '<label for="exampleDataList" class="at-small">Datalist</label>' +
            '<input class="block w-full" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">' +
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
            '<label for="exampleSelect" class="at-small">Select</label>' +
            '<select class="block w-full" id="exampleSelect">' +
            '<option selected>Open this select menu</option>' +
            '<option value="1">One</option>' +
            '<option value="2">Two</option>' +
            '<option value="3">Three</option>' +
            '</select>' +
            '</div>' +
            '<div class="md:flex md:gap-4">' +
            '<div class="md:w-1/3 mb-4">' +
            '<input class="mr-1" type="checkbox" value="" id="flexCheckDefault">' +
            '<label class="at-small" for="flexCheckDefault">Checkbox</label>' +
            '</div>' +
            '<div class="md:w-1/3 mb-4">' +
            '<input class="mr-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="1">' +
            '<label class="at-small" for="flexRadioDefault1">Radio 1</label>' +
            '</div>' +
            '<div class="md:w-1/3 mb-4">' +
            '<input class="mr-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="2">' +
            '<label class="at-small" for="flexRadioDefault2">Radio 2</label>' +
            '</div>' +
            '</div>' +
            '<div class="mb-4">' +
            '<label for="customDate1" class="at-small">Date</label>' +
            '<input type="date" class="block w-full" id="customDate1">' +
            '</div>' +
            '<fieldset class="ml-fieldset mb-4">' +
            '<legend>Validation</legend>' +
            '<div class="mb-4">' +
            '<label for="exampleInputEmail2" class="at-small">Email address</label>' +
            '<input type="email" class="block w-full border-danger" id="exampleInputEmail2" aria-describedby="emailHelp2 emailValidation2" value="email@test.com">' +
            '<div id="emailHelp2" class="at-small">We\'ll never share your email with anyone else.</div>' +
            '<div id="emailValidation2" class="at-small text-danger">The provided email is not valid.</div>' +
            '</div>' +
            '<div class="mb-4">' +
            '<label for="exampleInputPassword2" class="at-small">Password</label>' +
            '<input type="password" class="block w-full border-success" id="exampleInputPassword2" aria-describedby="passwordValidation2">' +
            '<div id="passwordValidation2" class="text-success">The provided password is valid.</div>' +
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

import type { Meta, StoryObj } from '@storybook/html'

type FormsArgs = {};

const meta: Meta<FormsArgs> = {
  title: 'Base/Formularios',
  render: () => {
    const form = document.createElement('form')
    form.innerHTML =
      '<div class="has-margin-bottom-2">' +
      '<label for="exampleInputEmail1" class="form-label">Email address</label>' +
      '<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">' +
      '<div id="emailHelp" class="form-text">We\'ll never share your email with anyone else.</div>' +
      '</div>' +
      '<div class="has-margin-bottom-2">' +
      '<label for="exampleInputPassword1" class="form-label">Password</label>' +
      '<input type="password" class="form-control" id="exampleInputPassword1">' +
      '</div>' +
      '<div class="has-margin-bottom-2">' +
      '<label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>' +
      '<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>' +
      '</div>' +
      '<div class="row">' +
      '<div class="col-lg-6 has-margin-bottom-2">' +
      '<label for="disabledInput" class="form-label">Disabled input</label>' +
      '<input type="text" class="form-control" id="disabledInput" disabled>' +
      '</div>' +
      '<div class="col-lg-6 has-margin-bottom-2">' +
      '<label for="readonlyInput" class="form-label">Readonly input</label>' +
      '<input type="text" class="form-control" id="readonlyInput" disabled readonly>' +
      '</div>' +
      '</div>' +
      '<div class="has-margin-bottom-2">' +
      '<label for="staticEmail" class="col-form-label">Readonly plain text</label>' +
      '<input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">' +
      '</div>' +
      '<div class="has-margin-bottom-2">' +
      '<label for="formFile" class="form-label">File input</label>' +
      '<input class="form-control" type="file" id="formFile">' +
      '</div>' +
      '<div class="has-margin-bottom-2">' +
      '<label for="exampleColorInput" class="form-label">Color picker</label>' +
      '<input type="color" class="form-control form-control-color" id="exampleColorInput" value="#0000FF" title="Choose your color">' +
      '</div>' +
      '<div class="has-margin-bottom-2">' +
      '<label for="exampleDataList" class="form-label">Datalist</label>' +
      '<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">' +
      '<datalist id="datalistOptions">' +
      '<option value="Santiago de Compostela">' +
      '<option value="A Coruña">' +
      '<option value="Vigo">' +
      '<option value="Lugo">' +
      '<option value="Ourense">' +
      '</datalist>' +
      '</div>' +
      '<div class="has-margin-bottom-2">' +
      '<label for="exampleSelect" class="form-label">Select</label>' +
      '<select class="form-select" id="exampleSelect">' +
      '<option selected>Open this select menu</option>' +
      '<option value="1">One</option>' +
      '<option value="2">Two</option>' +
      '<option value="3">Three</option>' +
      '</select>' +
      '</div>' +
      '<div class="row">' +
      '<div class="col-lg-4 has-margin-bottom-2">' +
      '<div class="form-check">' +
      '<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">' +
      '<label class="form-check-label" for="flexCheckDefault">Checkbox</label>' +
      '</div>' +
      '</div>' +
      '<div class="col-lg-4 has-margin-bottom-2">' +
      '<div class="form-check">' +
      '<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">' +
      '<label class="form-check-label" for="flexRadioDefault1">Radio</label>' +
      '</div>' +
      '</div>' +
      '<div class="col-lg-4 has-margin-bottom-2">' +
      '<div class="form-check form-switch">' +
      '<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">' +
      '<label class="form-check-label" for="flexSwitchCheckDefault">Switch checkbox</label>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="has-margin-bottom-2">' +
      '<label for="customRange1" class="form-label">Range</label>' +
      '<input type="range" class="form-range" id="customRange1">' +
      '</div>' +
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

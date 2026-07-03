---
layout: "../../../../../../layouts/Blog.astro"
title: "Cheatsheet"
date: "2026-07-02"
tags: ["development", "javascript", "react", "Testing", "Cheatsheet" ]
--- 

Simple and complete cheat sheet
Find the PDF version here

## render a component

``` js
import { render } from '@testing-library/react'

const result = render(<MyComponent />)
```

## search the DOM

- get[ByRole](https://testing-library.com/docs/queries/byrole/)

``` js
import { screen, render } from '@testing-library/react'

render(
  <label>
    Remember Me <input type="checkbox" />
  </label>,
)

const checkboxInput = screen.getByRole('checkbox' , {
  name: /remember me/i,
})
```

[getByRole method](https://workiva.github.io/react_testing_library/rtl.react/RenderResult/getByRole.html)


## interact with element

``` js
import { userEvent } from '@testing-library/react'

// userEvent simulates advanced browser interactions like
// clicks, type, uploads, tabbing etc
// Click on a button

userEvent.click(screen.getByRole('button'))

// Types HelloWorld in a text field
userEvent.type(screen.getByRole('textbox'), 'Hello World')
```

## screen

`debug(element)`|Pretty print the DOM
`...queries`|Functions to query the DOM

## search variants|(result)

getBy|Element or Error
getAllBy|Element[] or Error
queryBy|Element or null
queryAllBy|Element[] or []
findBy|Promise<Element> or Promise<rejection>
findAllBy|Promise<Element[]> or Promise<rejection>

search types|(result)
---|---
Role|`<div role='dialog'>...</div>`
LabelText|`<label for="element" />`
PlaceholderText|`<input placeholder="username" />`
Text|`<a href='/about'>About</a>`
DisplayValue|`<input value="display value" />`
AltText|`<img alt="movie poster" />`
Title|`<span title='Delete' />` or `<title />`
TestId|`<input data-testid='username-input' />`

## text matches

``` js
render(<label>Remember Me <input type="checkbox" /></label>)

screen.getByRole('checkbox', {name: /remember me/i}) // ✅
screen.getByRole('checkbox', {name: 'remember me'}) // ❌
screen.getByRole('checkbox', {name: 'Remember Me'}) // ✅

// other queries accept text matches as well
// the text match argument can also be a function
screen.getByText((text, element) => {/* return true/false
*/})
```

## wait for appearance

``` js
test('movie title appears', async () => {
  render(<Movie />)

  // the element isn't available yet, so wait for it:
  const movieTitle = await screen.findByText(
    /the lion king/i,
  )

  // the element is there but we want to wait for it
  // to be removed
  await waitForElementToBeRemoved(() =>
    screen.getByLabelText(/loading/i),
  )

  // we want to wait until an assertion passes
  await waitFor(() =>
    expect(mockFn).toHaveBeenCalledWith('some arg'),
  )
})
```

render|options
---|---
hydrate|if true, will render with ReactDOM.hydrate
wrapper|React component which wraps the passed ui

All credit goes to [React Testing Library](https://testing-library.com/) [Github](https://github.com/testing-library)
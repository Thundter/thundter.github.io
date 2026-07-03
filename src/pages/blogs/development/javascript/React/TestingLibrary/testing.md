---
layout: "../../../../../../layouts/Blog.astro"
title: "Testing"
date: "2026-07-02"
tags: ["development", "javascript", "react", "Testing" ]
--- 

[RenderResult class](https://workiva.github.io/react_testing_library/rtl.react/RenderResult-class.html)
 > [findByText method](https://workiva.github.io/react_testing_library/rtl.react/RenderResult/findByText.html)

## [React Testing Library (RTL)](https://testing-library.com/)

### [`logRoles`](https://testing-library.com/docs/dom-testing-library/api-accessibility/#logroles)

``` js
import {logRoles} from '@testing-library/dom'

const nav = document.createElement('nav')
nav.innerHTML = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>`

logRoles(nav)
```

##### output

``` text
navigation:
<nav />
--------------------------------------------------
list:
<ul />
--------------------------------------------------
listitem:
<li />
<li />
--------------------------------------------------
```

[Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

### [`fireEvent`](https://testing-library.com/docs/dom-testing-library/api-events/#fireevent)

### [`async` Methods](https://testing-library.com/docs/dom-testing-library/api-async/)

## [Medium](https://medium.com/)

[Jest testing — mocking child components to make your unit tests more concise](https://medium.com/@taylormclean15/jest-testing-mocking-child-components-to-make-your-unit-tests-more-concise-18691ef6a0c2)

## To Document

[Writing tests with `userEvent`](https://testing-library.com/docs/user-event/intro/#writing-tests-with-userevent)

[About Queries](https://testing-library.com/docs/queries/about/#findby)


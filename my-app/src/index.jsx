import {createRoot} from 'react-dom/client'
import { createElement } from 'react'

const root = createRoot(document.getElementById("root"))
function ReactElement() {
  return (
    <>
<h1>Hello, World! </h1>
<p>A new line in reactor...</p>
  <ul>
    <li>Super popular Js</li>
    <li>Will Help me be even more emplayable</li>
    <li>React has a very nice logo</li>
  </ul>
    </>
  )
}

root.render(
  <ReactElement />
)

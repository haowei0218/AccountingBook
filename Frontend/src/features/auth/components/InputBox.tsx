import React, {
  type HTMLInputTypeAttribute,
  type ChangeEventHandler,
} from 'react'

function InputBox({
  cssStyle,
  placeholderContent,
  inputType,
  eventListenerFn,
}: {
  cssStyle: string
  placeholderContent: string
  inputType: HTMLInputTypeAttribute
  eventListenerFn: ChangeEventHandler<HTMLInputElement>
}) {
  return (
    <input
      type={inputType}
      placeholder={placeholderContent}
      className={cssStyle}
      onChange={eventListenerFn}
    />
  )
}

export default InputBox

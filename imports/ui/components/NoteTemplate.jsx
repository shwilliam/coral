import React, { useState, useMemo, useCallback } from 'react'
import { createEditor, Editor } from 'slate'
import isHotkey from 'is-hotkey'
import { useSlate, Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history'
import { Button, Icon, Toolbar } from './SlateComponents'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']

const NoteTemplate = () => {
  const [value, setValue] = useState(initialValue)
  const [selection, setSelection] = useState(null)
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])

  const editor = useMemo(() => withHistory(withRichText(withReact(createEditor()))), [])

  return (

    <Slate
      editor={editor}
      value={value}
      selection={selection}
      onChange={(value, selection) => {
        setValue(value)
        setSelection(selection)
      }}
    >
      <Toolbar>
        <MarkButton format="bold" icon="format_bold" />
        <MarkButton format="italic" icon="format_italic" />
        <MarkButton format="underline" icon="format_underlined" />
        <MarkButton format="code" icon="code" />
        <BlockButton format="heading-one" icon="looks_one" />
        <BlockButton format="heading-two" icon="looks_two" />
        <BlockButton format="block-quote" icon="format_quote" />
        <BlockButton format="numbered-list" icon="format_list_numbered" />
        <BlockButton format="bulleted-list" icon="format_list_bulleted" />
      </Toolbar>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={event => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event)) {
              event.preventDefault()
              const mark = HOTKEYS[hotkey]
              editor.exec({
                type: 'format_text',
                properties: { [mark]: true },
              })
            }
          }
        }}
      />
    </Slate>
  )
}

const withRichText = editor => {
  const { exec } = editor

  editor.exec = command => {
    if (command.type === 'format_block') {
      const { format } = command
      const isActive = isBlockActive(editor, format)
      const isList = LIST_TYPES.includes(format)

      for (const f of LIST_TYPES) {
        Editor.unwrapNodes(editor, { match: { type: f }, split: true })
      }

      Editor.setNodes(editor, {
        type: isActive ? 'paragraph' : isList ? 'list-item' : format,
      })

      if (!isActive && isList) {
        Editor.wrapNodes(editor, { type: format, children: [] })
      }
    } else {
      exec(command)
    }
  }

  return editor
}


const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: { type: format },
    mode: 'all',
  })

  return !!match
}

// TODO fix isMarkActive to work
const isMarkActive = (editor, format) => {
  const marks = Editor.marks && Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>
    case 'list-item':
      return <li {...attributes}>{children}</li>
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>
    default:
      return <p {...attributes}>{children}</p>
  }
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        editor.exec({ type: 'format_block', format })
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

const MarkButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        editor.exec({ type: 'format_text', properties: { [format]: true } })
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )

}

const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'Hey dude ' },
      { text: 'are', bold: true },
      { text: ' you, ' },
      { text: 'lost', italic: true },
      { text: ' or what? ' },
    ],
  },
]

export default NoteTemplate
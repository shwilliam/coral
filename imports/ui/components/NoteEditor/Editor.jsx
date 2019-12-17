import React, {useState, useEffect, useMemo, useCallback} from 'react'
import {createEditor, Editor as SlateEditor} from 'slate'
import isHotkey from 'is-hotkey'
import {useSlate, Slate, Editable, withReact} from 'slate-react'
import {withHistory} from 'slate-history'
import {Button, Toolbar} from './Editor.styles'
import {loadCSS} from 'fg-loadcss'
import {Icon} from 'antd'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']

const Editor = ({value, onChange, ...props}) => {
  const [selection, setSelection] = useState(null)
  const renderElement = useCallback(
    props => <Element {...props} />,
    [],
  )
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])

  const editor = useMemo(
    () => withHistory(withRichText(withReact(createEditor()))),
    [],
  )

  return (
    <Slate
      editor={editor}
      value={value}
      selection={selection}
      onChange={(value, selection) => {
        onChange(value)
        setSelection(selection)
      }}
      {...props}
    >
      <Toolbar>
        <MarkButton format="bold" icon="bold" />
        <MarkButton format="italic" icon="italic" />
        <MarkButton format="underline" icon="underline" />
        <MarkButton format="code" icon="" />
        <BlockButton format="heading-one" icon={'fas fa-heading'} />
        <BlockButton format="heading-two" icon={'fas fa-heading'} />
        <BlockButton
          format="block-quote"
          icon={'fas fa-quote-right'}
        />
        <BlockButton format="numbered-list" icon={'fas fa-list-ol'} />
        <BlockButton format="bulleted-list" icon={'fas fa-list-ul'} />
      </Toolbar>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="What's on your mind?"
        spellCheck
        autoFocus
        onKeyDown={event => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event)) {
              event.preventDefault()
              const mark = HOTKEYS[hotkey]
              editor.exec({
                type: 'format_text',
                properties: {[mark]: true},
              })
            }
          }
        }}
      />
    </Slate>
  )
}

const withRichText = editor => {
  const {exec} = editor

  editor.exec = command => {
    if (command.type === 'format_block') {
      const {format} = command
      const isActive = isBlockActive(editor, format)
      const isList = LIST_TYPES.includes(format)

      for (const f of LIST_TYPES) {
        SlateEditor.unwrapNodes(editor, {
          match: {type: f},
          split: true,
        })
      }

      SlateEditor.setNodes(editor, {
        type: isActive ? 'paragraph' : isList ? 'list-item' : format,
      })

      if (!isActive && isList) {
        SlateEditor.wrapNodes(editor, {type: format, children: []})
      }
    } else {
      exec(command)
    }
  }

  return editor
}

const isBlockActive = (editor, format) => {
  const [match] = SlateEditor.nodes(editor, {
    match: {type: format},
    mode: 'all',
  })

  return !!match
}

// TODO fix isMarkActive to work
const isMarkActive = (editor, format) => {
  const marks = SlateEditor.marks && SlateEditor.marks(editor)
  return marks ? marks[format] === true : false
}

const Element = ({attributes, children, element}) => {
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

const Leaf = ({attributes, children, leaf}) => {
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

const BlockButton = ({format, icon}) => {
  const editor = useSlate()
  useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    )
  }, [])
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        editor.exec({type: 'format_block', format})
      }}
    >
      <Icon type={icon} style={{color: '696969'}} />
    </Button>
  )
}

const MarkButton = ({format, icon}) => {
  const editor = useSlate()
  useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    )
  }, [])
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        editor.exec({
          type: 'format_text',
          properties: {[format]: true},
        })
      }}
    >
      <Icon type={icon} style={{color: '#d7d7d7'}} />{' '}
    </Button>
  )
}

export default Editor

import tinymce, { Editor } from "tinymce/tinymce"

const setup = (editor: Editor): void => {
    editor.ui.registry.addButton('demo', {
      text: 'demo button',
      onAction: () => {
        editor.setContent('<p>content added from demo</p>')
      }
    })
  }
  tinymce.PluginManager.add('demo', setup)
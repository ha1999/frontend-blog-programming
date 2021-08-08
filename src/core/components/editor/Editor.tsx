import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import {key_tiny} from '../../../config'
import { uploadImg } from './uploadImg'
type Props = {
    content: string,
    setContent: (content: string) => void
}
const  EditorBase = ({content, setContent}: Props) => {
  return (
    <>
      <Editor
        apiKey={key_tiny}
        initialValue=""
        value={content}
        init={{
          height: 500,
          width: '100%',
          menubar: 'file edit view insert format tools table tc help',
          plugins: ['print preview importcss tinydrive searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons demo'],
          toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl | showcomments addcomment demo',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif font-size:14px }',
          image_caption: true,
          image_title: true,
          images_upload_url: 'http://localhost:9000/api/file',
          images_upload_handler: uploadImg,
          setup: editor => {
              editor.ui.registry.addButton('demo', {
                text: 'demo button',
                onAction: () => {
                  editor.insertContent('<h1>Hello my name is Ha</h1>')
                }
              })
          }
        }}

        onEditorChange={(content, editor) => {
            setContent(content)
        }}
      />
    </>
  )
}

export default React.memo(EditorBase)

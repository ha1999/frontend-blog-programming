import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import httpApi from '../../api/http';
import ToastifyBase from '../../../utils/toastify';
import {key_tiny} from '../../../config'
type Props = {
    content: string,
    setContent: (content: string) => void
}

const  EditorBase = ({content, setContent}: Props) => {
  return (
    <>
      <Editor
        apiKey={key_tiny}
        initialValue="<p>This is the initial content of the editor.</p>"
        value={content}
        init={{
          height: 500,
          width: '100%',
          menubar: 'file edit view insert format tools table tc help',
          plugins: ['print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap mentions quickbars linkchecker emoticons advtable export'],
          toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          images_upload_url: 'http://localhost:9000/api/file',
          images_upload_handler: async (blodInfo, success, failure) => {
            const formData = new FormData()
            formData.append('file', blodInfo.blob())
            try {
                const {data} = await httpApi.post('file', formData)
                success(data)
            } catch (error) {
              ToastifyBase.error('123456765432')
                setTimeout(()=> {
                  failure(`Error upload file: ${error.message}`, {
                    remove: true
                  })
                }, 2000)
            }
          },
          setup: editor => {
              editor.on('click', e => {
                console.log(editor.selection.getNode().querySelector('img')?.getAttribute('src'))
              })

              editor.on('keydown', e => {

                if ((e.keyCode === 8 || e.keyCode === 46) && editor.selection) { // delete & backspace keys

                    const selectedNode = editor.selection.getNode()
                    console.log(selectedNode.getAttributeNode('src'), '------') // get the selected node (element) in the editor
                    if (selectedNode && selectedNode.nodeName === 'IMG') {
            
                        console.log('nodename select is', selectedNode, '------') // A callback that will let me invoke the deletion of the image on the server if appropriate for the image source.
                    }
                }
              })
          }
        }}

        onEditorChange={(content, editor) => {
            setContent(content)
        }}
      />
    </>
  );
}

export default React.memo(EditorBase)

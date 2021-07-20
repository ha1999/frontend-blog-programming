interface CustomStyles {
  overlay: React.CSSProperties,
  content: React.CSSProperties
}


export const customStyles: CustomStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(76, 79, 76, 0.91)',
    height: 'auto'
  },
  content: {
    position: 'absolute',
    top: '20%',
    left: '20%',
    right: '20%',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    height: 'auto'
  }
}


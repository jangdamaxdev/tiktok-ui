import Header from '~/layouts/CompLayouts/Header/Header'

function UploadLayout({ children }) {
  return (
    <div>
      <Header />
      <h2>UploadLayout</h2>
      {children}
    </div>
  )
}

export default UploadLayout

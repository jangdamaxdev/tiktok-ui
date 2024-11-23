import Header from "~/components/Layout/CompLayouts/Header"


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

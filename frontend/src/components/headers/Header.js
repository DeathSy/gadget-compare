import { Layout } from "antd"
const { Header } = Layout

function MainHeader() {
  return (
    <>
      <Header className='header2 home-page-wrapper header-editor'>
        <div className='home-page'>
          <div className='header2-logo'>
            <img
              width='100%'
              src='https://static1.squarespace.com/static/5cacbe2bfb22a51a099c0798/t/5cd26cc3a5c9a300019eddcd/1560790680347/'
              alt='img'
            />
          </div>
          <div className='header2-menu' data-edit='LinkMenu'>
            <div name='linkNav' className='menu-item' data-edit='LinkMenu'>
              {/* <span>Home</span> */}
            </div>
          </div>
        </div>
      </Header>
    </>
  )
}

export default MainHeader

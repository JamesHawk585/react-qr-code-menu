import Nav from './Nav'

const Header = ({menuSectionNamesArray}) => (
    <header id="top">
      <h1 id="qrCodeMenu">QR Code Menu</h1>
      <Nav menuSectionNamesArray={menuSectionNamesArray}/>
    </header>
  )

  export default Header
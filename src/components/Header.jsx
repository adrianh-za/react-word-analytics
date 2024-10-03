export const Header = () => {
  return (
    <header>
      <HeaderImage/>
      <HeaderText/>
    </header>
  )
}

export default Header;

//Header background image component
const HeaderImage = () => {
  return (
    <div className="bg"/>
  )
}

//Header text component
const HeaderText = () => {
  return (
    <h1 className="first-heading">Word<span className="first-heading--thin">Analytics</span></h1>
  )
}

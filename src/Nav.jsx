const Nav = () => (
    <nav>
      <ul>
        {menuSectionNamesArray.map(sectionName => (
          <li>
            <a href={`#${sectionName}`}>{sectionName}</a>
          </li>
        )
        )}
      </ul>
    </nav>
  )

  export default Nav
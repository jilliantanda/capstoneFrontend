
const DashNav = (props) => {  return (
    <div>
      <nav
        style={{backgroundColor:"grey", color:"white"}}>
          
         <div class="nav-wrapper">
        <a href="/" style={{display:"flex", marginLeft:"25px"}} class="brand-logo"> [ ]  </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="/features" style={{marginLeft:"25px", marginRight:"25px"}}>Features</a>
            </li>
            <li>|</li>
            <li>
              <a href="/about" style={{marginLeft:"25px", marginRight:"25px"}}>About</a>
            </li>
            <li>|</li>
            <li>
              <a href="/download" style={{marginLeft:"25px", marginRight:"25px"}}>Download</a>
            </li>
            <li>|</li>
            <li>
              <a href="/learnmore" style={{marginLeft:"25px", marginRight:"25px"}}>Learn More</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default DashNav;

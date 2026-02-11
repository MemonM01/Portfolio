export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerRow">
          <div>© {new Date().getFullYear()} Shafay Memon. All rights reserved.</div>
          <div className="footerLinks">
            <a href="https://github.com/MemonM01" target = "_blank">
            GitHub
            </a>
            <a href="https://www.linkedin.com/in/muhammad-shafay-memon-02919a265?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bi%2F4X4C%2B7TVyzljI6DCC4DQ%3D%3D" target = "_blank">
            LinkedIn
            </a>
            <a href="mailto:shafaymemon26@gmail.com">
              Email
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
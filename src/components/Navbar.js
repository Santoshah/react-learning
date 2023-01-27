const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    clolor: 'white',
                    backgroundColor : '#f1356d',
                    borderRadius : '8px',
                    color: '#fff'
                }}>New blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;
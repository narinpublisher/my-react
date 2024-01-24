const Layout = () => {
	return (
		<section>
			<nav>
				<ul id='menu'>
						<li><Link to='/'>홈화면</Link></li>
						<li><Link to='/branch'>가지에</Link></li>
						<li><Link to='/hope'>희망의 말</Link></li>
						<li><Link to='/eng'>새기어 놓고서</Link></li>
				</ul>
			</nav>			
		<Outlet />
		</section>
	);
}
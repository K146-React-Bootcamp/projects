import React from "react";
export default function Header() {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					React Bootcamp Restaurant Menu App
				</a>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link" href="/anket">
								Anket
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Sepetim
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

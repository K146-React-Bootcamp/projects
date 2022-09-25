const renderHeader = () => {
	const activePage = window.location.pathname;
	const template = `
  <nav class="navbar navbar-expand-lg bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="index.html">React Bootcamp</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link ${
								activePage.includes("index.html") ? "active" : ""
							}" href="index.html">Ana Sayfa</a>
						</li>
						<li class="nav-item">
							<a class="nav-link ${
								activePage.includes("about.html") ? "active" : ""
							}" href="about.html">Hakkımızda</a>
						</li>
						<li class="nav-item">
							<a class="nav-link ${
								activePage.includes("contact.html") ? "active" : ""
							}" href="contact.html">İletişim</a>
						</li>
						<li class="nav-item">
							<a class="nav-link ${
								activePage.includes("todos.html") ? "active" : ""
							}" href="todos.html">Yapılacaklar</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
  `;

	document.querySelector("#navbar").innerHTML = template;
};
const errorLogger = (error) => {
	console.log({ error });
};

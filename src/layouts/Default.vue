<template>
  <div class="__vueby">
    <nav class="navbar is-fixed-top header-top" role="navigation" aria-label="main navigation">
      <div class="header-bar"></div>
      <div class="navbar-brand">
        <g-link to="/" class="navbar-item"><g-image src="~/favicon.png" width="24"/></g-link>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <g-link class="navbar-item" to="/"><strong>House</strong></g-link>
          <g-link class="navbar-item" to="/">Home</g-link>
          <g-link class="navbar-item" to="/about/">About</g-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <button class="navbar-item dark-mode"><i class="ms-Icon dark-mode-icon ms-Icon--Sunny"></i></button>
      </div>
    </nav>
    <main>
      <slot/>
    </main>
    <footer class="footer">Sticky Footer</footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>

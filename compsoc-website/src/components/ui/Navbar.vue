<template>
  <div>
    <b-navbar type="inverse" variant="inverse" fixed="top" toggleable toggle-breakpoint="md">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-navbar-brand :to="{name: 'Home'}">CompSoc</b-navbar-brand>
      <b-nav is-nav-bar>
        <b-nav-item :to="{name: 'About'}">About</b-nav-item>
        <b-nav-item href="#">Socials</b-nav-item>
        <b-nav-item href="#">Career Opportunities</b-nav-item>
        <b-nav-item href="#">Girls Who Code</b-nav-item>
        <b-nav-item href="#">Charity</b-nav-item>
        <b-nav-item href="#">Volunteering</b-nav-item>
        <b-nav-item href="#">Workshops</b-nav-item>
        <b-nav-item href="#">Calendar</b-nav-item>
      </b-nav>
    </b-navbar>
  </div>
</template>

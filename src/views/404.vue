<template>
    <div class="h-screen flex flex-col items-center justify-center bg-white/10 p-6">
      <div class="text-center">
        <!-- SVG for 404 Error -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-40 h-40 mb-4 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11.93 2.3a9.18 9.18 0 0 0-9.19 9.2 9.2 9.2 0 0 0 18.39 0 9.18 9.18 0 0 0-9.2-9.2zm-.18 2a7.18 7.18 0 1 1-7.17 7.18 7.19 7.19 0 0 1 7.17-7.18zm0 13.22a5.5 5.5 0 0 0 0-11 5.5 5.5 0 0 0 0 11zm0-2a3.51 3.51 0 0 1 0-7 3.5 3.5 0 1 1 0 7zm-3.18-.63a.78.78 0 1 1-.78-1.35.78.78 0 0 1 .78 1.35zm6.36 0a.78.78 0 1 1-.78-1.35.78.78 0 0 1 .78 1.35zm-3.18 1.87a.5.5 0 0 1 .37.17c.08.09.2.15.32.15s.24-.06.32-.15a.5.5 0 0 1 .37-.17.5.5 0 0 1 .37.17c.08.09.2.15.32.15s.24-.06.32-.15a.5.5 0 0 1 .37-.17.5.5 0 0 1 .37.17c.08.09.2.15.32.15s.24-.06.32-.15a.5.5 0 0 1 .37-.17c.25 0 .5.17.5.5 0 .17-.07.33-.2.47a1.98 1.98 0 0 1-2.72 0 .5.5 0 0 1-.37-.17.5.5 0 0 1-.37-.17.5.5 0 0 1-.37-.17.5.5 0 0 1-.37-.17.5.5 0 0 1-.37-.17.5.5 0 0 1-.37-.17.5.5 0 0 1-.37-.17c-.14-.14-.2-.3-.2-.47 0-.33.25-.5.5-.5z" />
        </svg>
        <!-- 404 Message -->
        <h1 class="text-6xl font-bold text-[#ef6002] mb-4">404</h1>
        <p class="text-xl font-medium mb-6">Oops! Page not found.</p>
        <p class="mb-6">
          The page you’re looking for doesn’t exist. Maybe it was moved or deleted.
        </p>
        <!-- Button to go back to the homepage -->
        <router-link :to="{name: 'home'}" class="px-6 py-2 bg-[#ef6002] text-white rounded-lg hover:bg-[#ef6102d8] transition duration-300">
          Go Back
        </router-link>
      </div>
    </div>
  </template>
  
  <style scoped>
  h1 {
    font-size: 6rem;
  }
  </style>
  
<script setup>
import { BloggerIcon, GitHubIcon, GmailIcon, MastodonIcon, TelegramIcon, XIcon } from 'vue3-simple-icons'
</script>

<template>
  <section class="md:pt-6">
    <div class="container flex flex-col items-center py-8 mx-auto sm:flex-row">
      <a
        href="/"
        class="text-xl font-black leading-none text-gray-900 select-none dark:text-gray-100 logo"
        title="Subcode Links"
      >_subcode</a>
      <a
        class="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0"
        href="https://subcode.ventures"
        target="_blank"
        title="_subcode"
      >
        &copy; {{ new Date().getFullYear() }} Provided by _subcode
      </a>
    </div>
  </section>
</template>

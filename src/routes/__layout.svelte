<script>
  import Title from "$lib/title.svelte";
  import "../app.css";
</script>

<header class="bg-[#370665] h-[75px] flex items-center p-3">
  <Title />
</header>

<main class="max-w-5xl my-5 mx-auto">
  <slot />
</main>

<footer>
  <p class="text-center text-sm font-medium">
    Copyright 2022 Ninja Gaming Guides
  </p>
</footer>

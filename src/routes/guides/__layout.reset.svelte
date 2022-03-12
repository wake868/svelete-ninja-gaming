<script>
  import Title from "$lib/title.svelte";
  import "../../app.css";
</script>

<header class="flex justify-between items-center bg-[#370665] h-[75px] p-3">
  <Title title="Ninja Gaming Guides" />
  <div class="text-xl">
    <a class="ml-3 underline" href="/">Home</a>
    <a class="ml-3 underline" href="/about">About</a>
    <a class="ml-3 underline" href="/guides">Guides</a>
  </div>
</header>

<main class="max-w-5xl my-5 mx-auto">
  <slot />
</main>

<footer>
  <p class="text-center text-sm font-medium">
    Copyright 2022 Ninja Gaming Guides
  </p>
</footer>

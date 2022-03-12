<script context="module">
  export async function load({ fetch }) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const guides = await res.json();

    if (res.ok) {
      return {
        props: {
          guides
        }
      };
    }

    return {
      status: res.status,
      error: new Error("Could not fetch the guides")
    };
  }
</script>

<script>
  export let guides;
</script>

<div class="mt-5">
  <ul class="list-none p-0">
    {#each guides as guide}
      <li>
        <a
          sveltekit:prefetch
          class="inline-block mt-3 p-3 border-2 border-dotted border-slate-600"
          href={`/guides/${guide.id}`}
        >
          {guide.title}
        </a>
      </li>
    {/each}
  </ul>
</div>
